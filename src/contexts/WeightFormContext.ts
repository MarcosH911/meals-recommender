import { createContext } from "react";

interface WeightFormContextTypes {
  formValues: {
    weight: string;
    desiredWeight: string;
    speed: string;
    customizeMeals: string;
    mealTypes: { breakfast: boolean; lunch: boolean; dinner: boolean };
    maxCookingTime: string;
    excludeIngredients: string[];
    includeIngredients: string[];
    calorieDistribution: {};
    [key: string]: any;
  };

  setFormValues: React.Dispatch<
    React.SetStateAction<{
      weight: string;
      desiredWeight: string;
      speed: string;
      customizeMeals: string;
      mealTypes: { breakfast: boolean; lunch: boolean; dinner: boolean };
      maxCookingTime: string;
      excludeIngredients: string[];
      includeIngredients: string[];
      calorieDistribution: {};
    }>
  >;

  totalSteps: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formRef: React.RefObject<HTMLFormElement>;
}

const WeightFormContext = createContext<WeightFormContextTypes>(
  {} as WeightFormContextTypes
);

export default WeightFormContext;
