"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Progress } from "@/components/ui/progress";
import WeightInput from "@/components/custom/weight-form/WeightInput";
import WeightFormContext from "@/contexts/WeightFormContext";

const totalSteps = 9;

function WeightForm() {
  const [step, setStep] = useState(6);
  const [formValues, setFormValues] = useState({
    weight: "",
    desiredWeight: "",
    speed: "3",
    customizeMeals: "",
    mealTypes: { breakfast: true, lunch: true, dinner: true },
    maxCookingTime: "60",
    includeIngredients: [""],
    excludeIngredients: [""],
    calorieDistribution: {},
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
                key={step}
                name="weight"
                label="What is your current weight?"
                placeholder={{ kg: "120", lb: "270" }}
                description="We don't share this information, so be honest :)"
              />
            )}
            {step === 2 && (
              <WeightInput
                step={2}
                key={step}
                name="desiredWeight"
                label="What is your desired weight?"
                placeholder={{ kg: "75", lb: "170" }}
                description="Push yourself to the limit!"
              />
            )}
            {step === 3 && (
              <WeightInput
                step={3}
                key={step}
                name="speed"
                label="How fast do you want to achieve your goal?"
              />
            )}
            {step === 4 && (
              <WeightInput
                step={4}
                key={step}
                name="customizeMeals"
                label="Do you want to customize your meals?"
                description="You can always change them later."
              />
            )}
            {step === 5 && (
              <WeightInput
                step={5}
                key={step}
                name="mealTypes"
                label="Which meals would you rather have?"
                description="You can select as many as you want!"
              />
            )}
            {step === 6 && (
              <WeightInput
                step={6}
                key={step}
                name="maxCookingTime"
                label="What is the maximum amount of time you are willing to spend cooking?"
                description="(minutes per meal)"
              />
            )}
            {step === 7 && (
              <WeightInput
                step={7}
                key={step}
                name="excludeIngredients"
                label="Select the ingredients you don't like"
              />
            )}
            {step === 8 && (
              <WeightInput
                step={8}
                key={step}
                name="includeIngredients"
                label="Select the ingredients you really like"
              />
            )}
            {step === 9 && (
              <WeightInput
                step={9}
                key={step}
                name="calorieDistribution"
                label="How many calories do you want to consume per in each meal?"
              />
            )}
          </AnimatePresence>
        </form>
      </div>
    </WeightFormContext.Provider>
  );
}

export default WeightForm;
