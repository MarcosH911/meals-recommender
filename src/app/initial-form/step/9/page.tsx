"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import useStep from "@/hooks/useStep";
import InitialFormContext from "@/contexts/InitialFormContext";
import handleSubmitInitialForm from "@/lib/server-actions/handleSubmitInitialForm";
import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputOptions from "@/components/custom/initial-form/inputs/InitialFormInputOptions";

function Page() {
  const { formValues, setErrorMessage } = useContext(InitialFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (formValues.customizeExercises === "") {
      setErrorMessage("Please, choose an option");
      return;
    } else if (formValues.customizeExercises === "true") {
      router.push(`/initial-form/step/${step + 1}`);
      return;
    } else if (formValues.customizeExercises === "false") {
      handleSubmitInitialForm(formValues);
      return;
    }
  };

  const customHandlePreviousStep = () => {
    if (formValues.customizeMeals === "false") {
      router.push(`/initial-form/step/${step - 5}`);
      return;
    }

    router.push(`/initial-form/step/${step - 1}`);
  };

  return (
    <InitialFormInputWrapper
      step={9}
      name="customizeExercises"
      label="Do you want to customize your exercises?"
      description="You can always change them later."
      customHandleNextStep={customHandleNextStep}
      customHandlePreviousStep={customHandlePreviousStep}
    >
      <InitialFormInputOptions
        name="customizeExercises"
        options={[
          { text: "Of course!", value: "true" },
          { text: "Some other time", value: "false" },
        ]}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
