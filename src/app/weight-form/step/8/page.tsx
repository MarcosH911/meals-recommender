"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSlider from "@/components/custom/weight-form/weight-inputs/WeightInputSlider";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function Page() {
  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const getCalorieDistributionOptions = () => {
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
  };

  const customHandleNextStep = () => {
    const sum =
      Number(formValues.calorieDistribution.breakfast) +
      Number(formValues.calorieDistribution.lunch) +
      Number(formValues.calorieDistribution.dinner);

    if (sum > 100) {
      setErrorMessage(`Values add up to ${sum}. Please, decrease some values.`);
      return;
    } else if (sum < 100) {
      setErrorMessage(`Values add up to ${sum}. Please, increase some values.`);
      return;
    }

    router.push(`/weight-form/step/${step + 1}`);
  };

  return (
    <WeightInputWrapper
      step={8}
      name="calorieDistribution"
      label="How much do you want to eat in each meal?"
      description="All values need to add up to 100."
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputSlider
        name="calorieDistribution"
        options={getCalorieDistributionOptions()}
      />
    </WeightInputWrapper>
  );
}

export default Page;
