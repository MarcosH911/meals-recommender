"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";

function Page() {
  return (
    <WeightInputWrapper
      step={9}
      name="calorieDistribution"
      label="How many calories do you want to consume per in each meal?"
    ></WeightInputWrapper>
  );
}

export default Page;
