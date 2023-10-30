"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import useStep from "@/hooks/useStep";
import InitialFormContext from "@/contexts/InitialFormContext";
import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputText from "@/components/custom/initial-form/inputs/InitialFormInputText";

function Page() {
  const { formValues, setErrorMessage } = useContext(InitialFormContext);

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

    router.push(`/initial-form/step/${step + 1}`);
  };

  return (
    <InitialFormInputWrapper
      step={2}
      key={2}
      name="desiredWeight"
      label="What is your desired weight?"
      description="Push yourself to the limit!"
      customHandleNextStep={customHandleNextStep}
    >
      <InitialFormInputText
        name="desiredWeight"
        placeholder={{ kg: "75", lb: "170" }}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
