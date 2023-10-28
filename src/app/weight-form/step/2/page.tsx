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

  const customHandleNextStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (
      Number(formValues.desiredWeight) < 1 ||
      Number(formValues.desiredWeight) > 999
    ) {
      setErrorMessage("Desired weight must be between 1 and 999.");
      return;
    }

    e.preventDefault();
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
