"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import WeightFormContext from "@/contexts/WeightFormContext";
import WeightInputText from "./weight-inputs/WeightInputText";
import WeightInputSlider from "./weight-inputs/WeightInputSlider";
import WeightInputOptions from "./weight-inputs/WeightInputOptions";
import WeightInputSwitch from "./weight-inputs/WeightInputSwitch";
import Description from "@/components/ui/description";
import WeightInputSelect from "./weight-inputs/WeightInputSelect";

interface Props {
  name: string;
  label: string;
  placeholder?: { kg: string; lb: string };
  description?: string;
  step: number;
}

const speedDescriptions = [
  {
    strong: "Slow but steady:",
    text: " Choose this option for a gradual and sustainable weight loss journey.",
  },
  {
    strong: "Steady progress:",
    text: " Opt for this level to maintain a balanced pace towards your weight loss goals.",
  },
  {
    strong: "Moderate pace:",
    text: " This option strikes a balance between speed and sustainability.",
  },
  {
    strong: "Accelerated results:",
    text: " Select this for faster weight loss with commitment and discipline.",
  },
  {
    strong: "Rapid transformation:",
    text: " For those ready to embrace an intense weight loss journey, choose this level.",
  },
];

function WeightInput({ name, label, placeholder, description, step }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const { formValues, setFormValues, totalSteps, setStep, formRef } =
    useContext(WeightFormContext);

  const handleNextStep = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (e) e.preventDefault();
      setErrorMessage("");

      if (step === totalSteps) {
        formRef.current?.submit();
      }

      if (
        name === "weight" &&
        (Number(formValues.weight) < 1 || Number(formValues.weight) > 999)
      ) {
        setErrorMessage("Weight must be between 1 and 999.");
        return;
      }

      if (
        name === "desiredWeight" &&
        (Number(formValues.desiredWeight) < 1 ||
          Number(formValues.desiredWeight) > 999)
      ) {
        setErrorMessage("Desired weight must be between 0 and 999.");
        return;
      }

      if (
        name === "desiredWeight" &&
        Number(formValues.desiredWeight) > Number(formValues.weight)
      ) {
        setErrorMessage("Desired weight must be lower than current weight.");
        return;
      }

      if (
        name === "mealTypes" &&
        !formValues.mealTypes.breakfast &&
        !formValues.mealTypes.lunch &&
        !formValues.mealTypes.dinner
      ) {
        setErrorMessage("You must select at least one.");
        return;
      }

      setStep((step) => step + 1);
    },
    [formRef, formValues, name, setStep, step, totalSteps]
  );

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleNextStep();
      }
    };

    window.addEventListener("keydown", handleEnter);

    return () => window.removeEventListener("keydown", handleEnter);
  }, [handleNextStep]);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Label className="text-3xl font-medium">{label}</Label>

      {(name === "weight" || name === "desiredWeight") && (
        <WeightInputText
          name={name}
          placeholder={placeholder!}
          description={description!}
        />
      )}
      {name === "speed" && (
        <WeightInputSlider name="speed" min={1} max={5} step={1} />
      )}
      {name === "customizeMeals" && (
        <WeightInputOptions
          name="customizeMeals"
          options={[
            { text: "Of course!", value: "true" },
            { text: "Some other time", value: "false" },
          ]}
          description={description!}
        />
      )}
      {name === "mealTypes" && (
        <WeightInputSwitch
          name="mealTypes"
          options={[
            { text: "Breakfast", key: "breakfast" },
            { text: "Lunch", key: "lunch" },
            { text: "Dinner", key: "dinner" },
          ]}
        />
      )}
      {name === "maxCookingTime" && (
        <WeightInputSlider name="maxCookingTime" min={10} max={120} step={10} />
      )}
      {name === "excludeIngredients" && (
        <WeightInputSelect
          name="excludeIngredients"
          apiPath="api/get-ingredients"
        />
      )}

      {name === "speed" ? (
        <Description>
          <span>
            <strong>
              {speedDescriptions[Number(formValues.speed) - 1].strong}
            </strong>
            {speedDescriptions[Number(formValues.speed) - 1].text}
          </span>
        </Description>
      ) : (
        <Description>{description}</Description>
      )}

      {errorMessage && (
        <div className="text-sm mt-2 text-red-500 font-medium">
          {errorMessage}
        </div>
      )}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStep((step) => step - 1);
          }}
          className={twMerge("space-x-1 group", step === 1 && "invisible")}
        >
          <ArrowLeft className="h-5 group-hover:-translate-x-1 transition" />
          <span>Previous</span>
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={formValues[name] === ""}
          className={twMerge("space-x-1 group")}
        >
          <span>{step === totalSteps ? "Submit" : "Next"}</span>
          {step !== totalSteps && (
            <ArrowRight className="h-5 group-hover:translate-x-1 transition" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
export default WeightInput;
