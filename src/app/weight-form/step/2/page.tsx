import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputText from "@/components/custom/weight-form/weight-inputs/WeightInputText";
import WeightFormContext from "@/contexts/WeightFormContext";
import { useContext } from "react";

function Page() {
  const { formValues, setErrorMessage, setStep } =
    useContext(WeightFormContext);

  const customHandleNextStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (
      Number(formValues.desiredWeight) < 1 ||
      Number(formValues.desiredWeight) > 999
    ) {
      setErrorMessage("Desired weight must be between 1 and 999.");
      return;
    }

    e.preventDefault();
    setStep((step) => step + 1);
  };

  return (
    <WeightInputWrapper
      step={2}
      name="desiredWeight"
      label="What is your desired weight?"
      description="Push yourself to the limit!"
      customHandleNextStep={customHandleNextStep}
    >
      <WeightInputText
        name="desiredWeight"
        placeholder={{ kg: "75", lb: "170" }}
      />
    </WeightInputWrapper>
  );
}

export default Page;