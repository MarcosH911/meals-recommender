import { useCallback, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import WeightFormContext from "@/contexts/WeightFormContext";

interface Props {
  name: "weight" | "desiredWeight" | "speed";
  label: string;
  placeholder?: { kg: string; lb: string };
  description?: string;
}

function WeightInput({ name, label, placeholder, description }: Props) {
  const [units, setUnits] = useState<"lb" | "kg">("lb");
  const [errorMessage, setErrorMessage] = useState("");

  const { formValues, setFormValues, totalSteps, step, setStep, formRef } =
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
      {name === "speed" ? (
        <>
          <Slider
            autoFocus
            defaultValue={[1]}
            min={1}
            max={5}
            step={1}
            className="cursor-pointer mt-6"
            value={[Number(formValues.speed)]}
            onValueChange={([value]) =>
              setFormValues((values) => ({
                ...values,
                speed: value.toString(),
              }))
            }
          />
          <div className="pb-2 pt-3 flex justify-between px-1.5">
            {Array(5)
              .fill(true)
              .map((_, i) => (
                <p key={i}>{i + 1}</p>
              ))}
          </div>
          <div className="text-sm pt-2 text-slate-500">
            {formValues.speed === "1" && (
              <span>
                <strong>Slow but steady:</strong> Choose this option for a
                gradual and sustainable weight loss journey.
              </span>
            )}
            {formValues.speed === "2" && (
              <span>
                <strong>Steady progress:</strong> Opt for this level to maintain
                a balanced pace towards your weight loss goals.
              </span>
            )}
            {formValues.speed === "3" && (
              <span>
                <strong>Moderate pace:</strong> This option strikes a balance
                between speed and sustainability.
              </span>
            )}
            {formValues.speed === "4" && (
              <span>
                <strong>Accelerated results:</strong> Select this for faster
                weight loss with commitment and discipline.
              </span>
            )}
            {formValues.speed === "5" && (
              <span>
                <strong>Rapid transformation:</strong> For those ready to
                embrace an intense weight loss journey, choose this level.
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="py-4 flex gap-2">
            <Button
              variant={units === "lb" ? "secondary" : "ghost"}
              onClick={(e) => {
                e.preventDefault();
                setUnits("lb");
              }}
            >
              lb
            </Button>
            <Button
              variant={units === "kg" ? "secondary" : "ghost"}
              onClick={(e) => {
                e.preventDefault();
                setUnits("kg");
              }}
            >
              kg
            </Button>
          </div>
          <Input
            autoFocus
            type="number"
            min={1}
            max={999}
            value={formValues[name]}
            onChange={(e) =>
              setFormValues((values) => ({ ...values, [name]: e.target.value }))
            }
            placeholder={
              units === "lb"
                ? placeholder && placeholder.lb
                : placeholder && placeholder.kg
            }
          />
          <div className="text-sm pt-2 text-slate-500">{description}</div>
        </>
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
          className={twMerge(
            "space-x-1 group"
            // TODO
            // step === totalSteps && "bg-orange-600"
          )}
        >
          <span>{step === totalSteps ? "Submit" : "Next"}</span>
          {name !== "speed" && (
            <ArrowRight className="h-5 group-hover:translate-x-1 transition" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
export default WeightInput;
