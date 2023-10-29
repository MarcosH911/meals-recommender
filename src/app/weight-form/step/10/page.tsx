"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";
import getExercises from "@/lib/server-actions/getExercises";

function Page() {
  const [options, setOptions] = useState<
    { key: string; text: string; imageUrl: string }[]
  >([]);

  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (formValues.includeExercises.length === 0) {
      setErrorMessage("Please, select at least one exercise");
      return;
    }

    router.push(`/weight-form/step/${step + 1}`);
  };

  useEffect(() => {
    const getOptions = async () => {
      const exercises = await getExercises();
      setOptions(exercises);
    };

    getOptions();
  }, []);

  return (
    <WeightInputWrapper
      step={10}
      name="includeExercises"
      label="Select the exercises you are willing to do"
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputSelect name="includeExercises" options={options || []} />
    </WeightInputWrapper>
  );
}

export default Page;
