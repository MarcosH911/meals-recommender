"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import useStep from "@/hooks/useStep";
import InitialFormContext from "@/contexts/InitialFormContext";
import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputText from "@/components/custom/initial-form/inputs/InitialFormInputText";

function Page() {
  const { formValues, setErrorMessage } = useContext(InitialFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (Number(formValues.weight) < 1 || Number(formValues.weight) > 999) {
      setErrorMessage("Please, enter a valid weight");
      return;
    }

    router.push(`/initial-form/step/${step + 1}`);
  };

  return (
    <InitialFormInputWrapper
      step={1}
      key={1}
      name="weight"
      label="What is your current weight?"
      description="We don't share this information, so be honest :)"
      customHandleNextStep={customHandleNextStep}
    >
      <InitialFormInputText
        name="weight"
        placeholder={{ kg: "120", lb: "270" }}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
