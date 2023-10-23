"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Progress } from "@/components/ui/progress";
import WeightInput from "@/components/custom/weight-form/WeightInput";
import WeightFormContext from "@/contexts/WeightFormContext";

const totalSteps = 3;

function WeightForm() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    weight: "",
    desiredWeight: "",
    speed: "3",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {};

  return (
    <WeightFormContext.Provider
      value={{ formValues, setFormValues, totalSteps, setStep, formRef }}
    >
      <div>
        <Progress value={step * (100 / (totalSteps + 1))} className="mb-10" />
        <form onSubmit={handleSubmit} ref={formRef}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WeightInput
                step={1}
                name="weight"
                label="What is your current weight?"
                placeholder={{ kg: "120", lb: "270" }}
                description="We don't share this information, so be honest :)"
                key={step}
              />
            )}
            {step === 2 && (
              <WeightInput
                step={2}
                name="desiredWeight"
                label="What is your desired weight?"
                placeholder={{ kg: "75", lb: "170" }}
                description="Push yourself to the limit!"
                key={step}
              />
            )}
            {step === 3 && (
              <WeightInput
                step={3}
                name="speed"
                label="How fast do you want to achieve your goal?"
              />
            )}
          </AnimatePresence>
        </form>
      </div>
    </WeightFormContext.Provider>
  );
}

export default WeightForm;
