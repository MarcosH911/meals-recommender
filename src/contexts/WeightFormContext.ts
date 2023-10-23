import { createContext } from "react";

interface WeightFormContextTypes {
  formValues: {
    weight: string;
    desiredWeight: string;
    speed: string;
    customizeMeals: string;
    [key: string]: string;
  };
  setFormValues: React.Dispatch<
    React.SetStateAction<{
      weight: string;
      desiredWeight: string;
      speed: string;
      customizeMeals: string;
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
