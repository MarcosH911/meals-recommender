import React, { createContext } from "react";

interface WeightFormContextTypes {
  formValues: {
    units: string;
    weight: string;
    desiredWeight: string;
    speed: string;

    customizeMeals: string;
    mealTypes: { breakfast: boolean; lunch: boolean; dinner: boolean };
    maxCookingTime: string;
    excludeIngredients: string[];
    calorieDistribution: { breakfast: string; lunch: string; dinner: string };

    customizeExercises: string;
    includeExercises: string[];
    exerciseDistribution: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };

    [key: string]: any;
  };

  setFormValues: React.Dispatch<
    React.SetStateAction<{
      units: string;
      weight: string;
      desiredWeight: string;
      speed: string;

      customizeMeals: string;
      mealTypes: { breakfast: boolean; lunch: boolean; dinner: boolean };
      maxCookingTime: string;
      excludeIngredients: string[];
      calorieDistribution: { breakfast: string; lunch: string; dinner: string };

      customizeExercises: string;
      includeExercises: string[];
      exerciseDistribution: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
      };

      [key: string]: any;
    }>
  >;

  totalSteps: number;
  formRef: React.RefObject<HTMLFormElement>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const WeightFormContext = createContext<WeightFormContextTypes>(
  {} as WeightFormContextTypes,
);

export default WeightFormContext;
