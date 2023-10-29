"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSwitch from "@/components/custom/weight-form/weight-inputs/WeightInputSwitch";
import WeightFormContext from "@/contexts/WeightFormContext";
import useStep from "@/hooks/useStep";

function Page() {
  const { formValues, setErrorMessage } = useContext(WeightFormContext);

  const router = useRouter();
  const step = useStep();

  const customHandleNextStep = () => {
    if (
      !formValues.mealTypes.breakfast &&
      !formValues.mealTypes.lunch &&
      !formValues.mealTypes.dinner
    ) {
      setErrorMessage("Please, select at least one meal type");
      return;
    }

    router.push(`/weight-form/step/${step + 1}`);
  };

  return (
    <WeightInputWrapper
      step={5}
      name="mealTypes"
      label="Which meals would you rather have?"
      description="No shame in selecting all"
      customHandleNextStep={customHandleNextStep}
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
