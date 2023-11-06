"use client";

import { useContext } from "react";

import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSlider from "@/components/custom/initial-form/inputs/InitialFormInputSlider";
import { ScrollArea } from "@/components/ui/scroll-area";
import InitialFormContext from "@/contexts/InitialFormContext";
import handleSubmitInitialForm from "@/lib/server-actions/handleSubmitInitialForm";

function Page() {
  const { formValues } = useContext(InitialFormContext);

  const customHandleNextStep = () => {
    handleSubmitInitialForm(formValues);
  };

  return (
    <InitialFormInputWrapper
      step={11}
      name="exerciseDistribution"
      label="How much time do you want to exercise each day?"
      description="(minutes)"
      customHandleNextStep={customHandleNextStep}
    >
      <ScrollArea type="auto" className="h-[min(40rem,calc(100vh-18rem))]">
        <InitialFormInputSlider
          name="exerciseDistribution"
          options={[
            { key: "monday", label: "Monday", min: 0, max: 120, step: 10 },
            { key: "tuesday", label: "Tuesday", min: 0, max: 120, step: 10 },
            {
              key: "wednesday",
              label: "Wednesday",
              min: 0,
              max: 120,
              step: 10,
            },
            { key: "thursday", label: "Thursday", min: 0, max: 120, step: 10 },
            { key: "friday", label: "Friday", min: 0, max: 120, step: 10 },
            { key: "saturday", label: "Saturday", min: 0, max: 120, step: 10 },
            { key: "sunday", label: "Sunday", min: 0, max: 120, step: 10 },
          ]}
        />
      </ScrollArea>
    </InitialFormInputWrapper>
  );
}

export default Page;
