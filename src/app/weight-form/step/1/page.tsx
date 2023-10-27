"use client";

import { useContext } from "react";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputText from "@/components/custom/weight-form/weight-inputs/WeightInputText";
import WeightFormContext from "@/contexts/WeightFormContext";

function Page() {
  const { formValues, setErrorMessage, setStep } =
    useContext(WeightFormContext);

  const customHandleNextStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (Number(formValues.weight) < 1 || Number(formValues.weight) > 999) {
      setErrorMessage("Weight must be between 1 and 999.");
      return;
    }

    e.preventDefault();
    setStep((step) => step + 1);
  };

  return (
    <WeightInputWrapper
      step={1}
      name="weight"
      label="What is your current weight?"
      description="We don't share this information, so be honest :)"
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputText name="weight" placeholder={{ kg: "120", lb: "270" }} />
    </WeightInputWrapper>
  );
}

export default Page;
