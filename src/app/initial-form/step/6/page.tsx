import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSlider from "@/components/custom/initial-form/inputs/InitialFormInputSlider";

function Page() {
  return (
    <InitialFormInputWrapper
      step={6}
      name="maxCookingTime"
      label="How much time you are willing to spend cooking?"
      description="(minutes per meal)"
    >
      <InitialFormInputSlider
        name="maxCookingTime"
        options={[{ min: 10, max: 120, step: 10 }]}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
