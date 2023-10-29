"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputOptions from "@/components/custom/weight-form/weight-inputs/WeightInputOptions";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function Page() {
  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (formValues.customizeMeals === "") {
      setErrorMessage("Please, choose an option");
    } else if (formValues.customizeMeals === "true") {
      router.push(`/weight-form/step/${step + 1}`);
    } else if (formValues.customizeMeals === "false") {
      router.push(`/weight-form/step/${step + 5}`);
    }
  };

  return (
    <WeightInputWrapper
      step={4}
      name="customizeMeals"
      label="Do you want to customize your meals?"
      description="You can always change them later."
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputOptions
        name="customizeMeals"
        options={[
          { text: "Of course!", value: "true" },
          { text: "Some other time", value: "false" },
        ]}
      />
    </WeightInputWrapper>
  );
}

export default Page;
