"use client";

import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";
import { Progress } from "@/components/ui/progress";

interface Props {
  children: React.ReactNode;
}

const totalSteps = 11;

function Layout({ children }: Props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    weight: "",
    desiredWeight: "",
    speed: "3",

    customizeMeals: "",
    mealTypes: { breakfast: true, lunch: true, dinner: true },
    maxCookingTime: "60",
    excludeIngredients: [""],
    calorieDistribution: { breakfast: "0", lunch: "0", dinner: "0" },

    customizeExercises: "",
    includeExercises: [""],
    exerciseDistribution: {
      monday: "60",
      tuesday: "60",
      wednesday: "60",
      thursday: "60",
      friday: "60",
      saturday: "0",
      sunday: "0",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const step = useStep();

  const handleSubmit = () => {
    "use server";
    console.log(formValues);
  };

  return (
    <WeightFormContext.Provider
      value={{
        formValues,
        setFormValues,
        totalSteps,
        formRef,
        errorMessage,
        setErrorMessage,
      }}
    >
      <div className="mx-auto max-w-md pt-8">
        <div>
          <Progress value={step * (100 / (totalSteps + 1))} className="mb-10" />
          <form onSubmit={handleSubmit} ref={formRef}>
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </form>
        </div>
      </div>
    </WeightFormContext.Provider>
  );
}
export default Layout;
