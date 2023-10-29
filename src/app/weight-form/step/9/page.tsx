"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputOptions from "@/components/custom/weight-form/weight-inputs/WeightInputOptions";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";
import handleSubmitWeightForm from "@/lib/server-actions/handleSubmitWeightForm";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function Page() {
  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (formValues.customizeExercises === "") {
      setErrorMessage("Please, choose an option");
      return;
    } else if (formValues.customizeExercises === "true") {
      router.push(`/weight-form/step/${step + 1}`);
      return;
    } else if (formValues.customizeExercises === "false") {
      handleSubmitWeightForm(formValues);
      return;
    }
  };

  return (
    <WeightInputWrapper
      step={9}
      name="customizeExercises"
      label="Do you want to customize your exercises?"
      description="You can always change them later."
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputOptions
        name="customizeExercises"
        options={[
          { text: "Of course!", value: "true" },
          { text: "Some other time", value: "false" },
        ]}
      />
    </WeightInputWrapper>
  );
}

export default Page;
