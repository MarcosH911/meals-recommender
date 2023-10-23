"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Progress } from "@/components/ui/progress";
import WeightInput from "@/components/custom/WeightInput";

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
    <div>
      <Progress value={step * 25} className="mb-10" />
      <form onSubmit={handleSubmit} ref={formRef}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <WeightInput
              formValues={formValues}
              setFormValues={setFormValues}
              name="weight"
              label="What is your current weight?"
              placeholder={{ kg: "120", lb: "270" }}
              description="We don't share this information, so be honest :)"
              setStep={setStep}
              key={step}
              formRef={formRef}
            />
          )}
          {step === 2 && (
            <WeightInput
              formValues={formValues}
              setFormValues={setFormValues}
              name="desiredWeight"
              label="What is your desired weight?"
              placeholder={{ kg: "75", lb: "170" }}
              description="Push yourself to the limit!"
              setStep={setStep}
              key={step}
              formRef={formRef}
            />
          )}
          {step === 3 && (
            <WeightInput
              formValues={formValues}
              setFormValues={setFormValues}
              name="speed"
              label="How fast do you want to achieve your goal?"
              setStep={setStep}
              formRef={formRef}
            />
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default WeightForm;
