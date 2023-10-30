"use client";

import toast from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";

import InitialFormContext from "@/contexts/InitialFormContext";

import useStep from "@/hooks/useStep";
import { Progress } from "@/components/ui/progress";

interface Props {
  children: React.ReactNode;
}

const totalSteps = 11;

function Layout({ children }: Props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    units: "lb",
    weight: "",
    desiredWeight: "",
    speed: "3",

    customizeMeals: "",
    mealTypes: { breakfast: true, lunch: true, dinner: true },
    maxCookingTime: "60",
    excludeIngredients: [] as string[],
    calorieDistribution: { breakfast: "20", lunch: "50", dinner: "30" },

    customizeExercises: "",
    includeExercises: [] as string[],
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
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error") === "true") {
      toast.error("Something went wrong");
      redirect("/initial-form/step/1");
    }
  }, [searchParams]);

  return (
    <InitialFormContext.Provider
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
          <div className="relative">
            <Progress
              value={step * (100 / (totalSteps + 1))}
              className="mb-10"
            />
            <div className="absolute left-[calc(100%/12*4)] top-1/2 h-[0.575rem] w-[0.575rem] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] skew-x-[10deg] skew-y-[10deg] bg-slate-500"></div>
            <div className="absolute left-[calc(100%/12*9)] top-1/2 h-[0.575rem] w-[0.575rem] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] skew-x-[10deg] skew-y-[10deg] bg-slate-500"></div>
          </div>

          <form ref={formRef}>
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </form>
        </div>
      </div>
    </InitialFormContext.Provider>
  );
}
export default Layout;
