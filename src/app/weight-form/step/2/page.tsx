"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputText from "@/components/custom/weight-form/weight-inputs/WeightInputText";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";

function Page() {
  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (
      Number(formValues.desiredWeight) < 1 ||
      Number(formValues.desiredWeight) > 999
    ) {
      setErrorMessage("Please, enter a valid weight");
      return;
    }

    if (Number(formValues.desiredWeight) > Number(formValues.weight)) {
      setErrorMessage(
        "Sorry, we can only help you with weight loss. Your desired weight must be lower than your current weight.",
      );
      return;
    }

    router.push(`/weight-form/step/${step + 1}`);
  };

  return (
    <WeightInputWrapper
      step={2}
      key={2}
      name="desiredWeight"
      label="What is your desired weight?"
      description="Push yourself to the limit!"
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputText
        name="desiredWeight"
        placeholder={{ kg: "75", lb: "170" }}
      />
    </WeightInputWrapper>
  );
}

export default Page;
