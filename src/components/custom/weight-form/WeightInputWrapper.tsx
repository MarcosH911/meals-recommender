"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import WeightFormContext from "@/contexts/WeightFormContext";
import Description from "@/components/ui/description";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  children: React.ReactNode;
  step: number;
  name: string;
  label: string;
  description?: string | JSX.Element;
  customHandleNextStep?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  customHandlePreviousStep?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

function WeightInputWrapper({
  children,
  step,
  name,
  label,
  description,
  customHandleNextStep,
  customHandlePreviousStep,
}: Props) {
  const { formValues, totalSteps, errorMessage } =
    useContext(WeightFormContext);

  const router = useRouter();

  const handleNextStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (customHandleNextStep) return customHandleNextStep(e);

    if (step !== totalSteps) e.preventDefault();
    router.push(`/weight-form/step/${step + 1}`);
  };

  const handlePreviousStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (customHandlePreviousStep) return customHandlePreviousStep(e);

    e.preventDefault();
    router.push(`/weight-form/step/${step - 1}`);
  };

  useEffect(() => {
    router.prefetch(`/weight-form/step/${step + 1}`);
    router.prefetch(`/weight-form/step/${step - 1}`);
  }, [router, step]);

  return (
    <div>
      <Label className="text-3xl font-medium">{label}</Label>

      <div className="pt-6">{children}</div>

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
    </div>
  );
}

export default WeightInputWrapper;
