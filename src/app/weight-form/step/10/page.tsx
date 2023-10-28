"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";

function Page() {
  return (
    <WeightInputWrapper
      step={10}
      name="includeExercises"
      label="Select the exercises you are willing to do"
    >
      <WeightInputSelect name="includeExercises" options={[]} />
    </WeightInputWrapper>
  );
}

export default Page;
