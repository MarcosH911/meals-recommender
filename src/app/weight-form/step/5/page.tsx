"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSwitch from "@/components/custom/weight-form/weight-inputs/WeightInputSwitch";

function Page() {
  return (
    <WeightInputWrapper
      step={5}
      name="mealTypes"
      label="Which meals would you rather have?"
      description="No shame in selecting all"
    >
      <WeightInputSwitch
        name="mealTypes"
        options={[
          { text: "Breakfast", key: "breakfast" },
          { text: "Lunch", key: "lunch" },
          { text: "Dinner", key: "dinner" },
        ]}
      />
    </WeightInputWrapper>
  );
}

export default Page;
