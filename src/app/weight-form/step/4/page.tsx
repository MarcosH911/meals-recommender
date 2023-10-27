import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputOptions from "@/components/custom/weight-form/weight-inputs/WeightInputOptions";

function Page() {
  return (
    <WeightInputWrapper
      step={4}
      name="customizeMeals"
      label="Do you want to customize your meals?"
      description="You can always change them later."
    >
      <WeightInputOptions
        name="customizeMeals"
        options={[
          { text: "Of course!", value: "true" },
          { text: "Some other time", value: "false" },
        ]}
      />
    </WeightInputWrapper>
  );
}

export default Page;
