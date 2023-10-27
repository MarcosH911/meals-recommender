"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSlider from "@/components/custom/weight-form/weight-inputs/WeightInputSlider";
import WeightFormContext from "@/contexts/WeightFormContext";
import { useCallback, useContext } from "react";

function Page() {
  const { formValues } = useContext(WeightFormContext);

  const getCalorieDistributionOptions = useCallback(() => {
    const options = [];
    if (formValues.mealTypes.breakfast) {
      options.push({
        key: "breakfast",
        label: "Breakfast",
        min: 0,
        max: 100,
        step: 10,
      });
    }
    if (formValues.mealTypes.lunch) {
      options.push({
        key: "lunch",
        label: "Lunch",
        min: 0,
        max: 100,
        step: 10,
      });
    }
    if (formValues.mealTypes.dinner) {
      options.push({
        key: "dinner",
        label: "Dinner",
        min: 0,
        max: 100,
        step: 10,
      });
    }
    return options;
  }, [formValues.mealTypes]);

  return (
    <WeightInputWrapper
      step={9}
      name="calorieDistribution"
      label="How many calories do you want to consume per in each meal?"
    >
      <WeightInputSlider
        name="calorieDistribution"
        options={getCalorieDistributionOptions()}
      />
    </WeightInputWrapper>
  );
}

export default Page;
