"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import useStep from "@/hooks/useStep";
import InitialFormContext from "@/contexts/InitialFormContext";
import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSlider from "@/components/custom/initial-form/inputs/InitialFormInputSlider";

function Page() {
  const { formValues, setErrorMessage } = useContext(InitialFormContext);

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

    router.push(`/initial-form/step/${step + 1}`);
  };

  return (
    <InitialFormInputWrapper
      step={8}
      name="calorieDistribution"
      label="How much do you want to eat in each meal?"
      description="Values need to add up to 100."
      customHandleNextStep={customHandleNextStep}
    >
      <InitialFormInputSlider
        name="calorieDistribution"
        options={getCalorieDistributionOptions()}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
