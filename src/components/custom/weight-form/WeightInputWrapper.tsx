"use client";

import { Button } from "@/components/ui/button";
import Description from "@/components/ui/description";
import { Label } from "@/components/ui/label";
import WeightFormContext from "@/contexts/WeightFormContext";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  step: number;
  name: string;
  label: string;
  description?: string;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

function WeightInputWrapper({
  step,
  name,
  label,
  description,
  handleNextStep,
  handlePreviousStep,
}: Props) {
  const { formValues, totalSteps, setStep, errorMessage } =
    useContext(WeightFormContext);

  const defaultHandleNextStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (handleNextStep) return handleNextStep();

    e.preventDefault();
    setStep((step) => step + 1);
  };

  const defaultHandlePreviousStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (handlePreviousStep) return handlePreviousStep();

    e.preventDefault();
    setStep((step) => step - 1);
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Label className="text-3xl font-medium">{label}</Label>

      <Description>{description}</Description>

      {errorMessage && (
        <div className="mt-2 text-sm font-medium text-red-500">
          {errorMessage}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <Button
          onClick={handlePreviousStep}
          className={twMerge("group space-x-1", step === 1 && "invisible")}
        >
          <ArrowLeft className="h-5 transition group-hover:-translate-x-1" />
          <span>Previous</span>
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={formValues[name] === ""}
          className={twMerge("group space-x-1")}
        >
          <span>{step === totalSteps ? "Submit" : "Next"}</span>
          {step !== totalSteps && (
            <ArrowRight className="h-5 transition group-hover:translate-x-1" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}

export default WeightInputWrapper;
