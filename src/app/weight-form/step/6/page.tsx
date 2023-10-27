"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSlider from "@/components/custom/weight-form/weight-inputs/WeightInputSlider";

function Page() {
  return (
    <WeightInputWrapper
      step={6}
      name="maxCookingTime"
      label="How much time you are willing to spend cooking?"
      description="(minutes per meal)"
    >
      <WeightInputSlider
        name="maxCookingTime"
        options={[{ min: 10, max: 120, step: 10 }]}
      />
    </WeightInputWrapper>
  );
}

export default Page;
