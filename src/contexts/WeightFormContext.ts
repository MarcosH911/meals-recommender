import { createContext } from "react";

interface WeightFormContextTypes {
  formValues: { weight: string; desiredWeight: string; speed: string };
  setFormValues: React.Dispatch<
    React.SetStateAction<{
      weight: string;
      desiredWeight: string;
      speed: string;
    }>
  >;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formRef: React.RefObject<HTMLFormElement>;
}

const WeightFormContext = createContext<WeightFormContextTypes>(
  {} as WeightFormContextTypes
);

export default WeightFormContext;
