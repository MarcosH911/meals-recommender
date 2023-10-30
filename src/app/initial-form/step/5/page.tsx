"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import useStep from "@/hooks/useStep";
import InitialFormContext from "@/contexts/InitialFormContext";
import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSwitch from "@/components/custom/initial-form/inputs/InitialFormInputSwitch";

function Page() {
  const { formValues, setErrorMessage } = useContext(InitialFormContext);

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

    router.push(`/initial-form/step/${step + 1}`);
  };

  return (
    <InitialFormInputWrapper
      step={5}
      name="mealTypes"
      label="Which meals would you rather have?"
      description="No shame in selecting all"
      customHandleNextStep={customHandleNextStep}
    >
      <InitialFormInputSwitch
        name="mealTypes"
        options={[
          { text: "Breakfast", key: "breakfast" },
          { text: "Lunch", key: "lunch" },
          { text: "Dinner", key: "dinner" },
        ]}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
