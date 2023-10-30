"use client";

import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputOptions from "@/components/custom/initial-form/inputs/InitialFormInputOptions";
import InitialFormContext from "@/contexts/InitialFormContext";
import useStep from "@/hooks/useStep";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function Page() {
  const { formValues, setErrorMessage } = useContext(InitialFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (formValues.customizeMeals === "") {
      setErrorMessage("Please, choose an option");
    } else if (formValues.customizeMeals === "true") {
      router.push(`/initial-form/step/${step + 1}`);
    } else if (formValues.customizeMeals === "false") {
      router.push(`/initial-form/step/${step + 5}`);
    }
  };

  return (
    <InitialFormInputWrapper
      step={4}
      name="customizeMeals"
      label="Do you want to customize your meals?"
      description="You can always change them later."
      customHandleNextStep={customHandleNextStep}
    >
      <InitialFormInputOptions
        name="customizeMeals"
        options={[
          { text: "Of course!", value: "true" },
          { text: "Some other time", value: "false" },
        ]}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
