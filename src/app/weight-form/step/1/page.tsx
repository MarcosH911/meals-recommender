"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputText from "@/components/custom/weight-form/weight-inputs/WeightInputText";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";

function Page() {
  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (Number(formValues.weight) < 1 || Number(formValues.weight) > 999) {
      setErrorMessage("Please, enter a valid weight");
      return;
    }

    router.push(`/weight-form/step/${step + 1}`);
  };

  return (
    <WeightInputWrapper
      step={1}
      key={1}
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
