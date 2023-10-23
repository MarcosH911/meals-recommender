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

interface Props {
  name: string;
  label: string;
  placeholder?: { kg: string; lb: string };
  description?: string;
  step: number;
}

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

      setStep((step) => step + 1);
    },
    [
      formRef,
      formValues.desiredWeight,
      formValues.weight,
      name,
      setStep,
      step,
      totalSteps,
    ]
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

      {name === "speed" && <WeightInputSlider />}
      {(name === "weight" || name === "desiredWeight") && (
        <WeightInputText
          name={name}
          placeholder={placeholder!}
          description={description!}
        />
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
