import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputOptions from "@/components/custom/weight-form/weight-inputs/WeightInputOptions";

function Page() {
  return (
    <WeightInputWrapper
      step={9}
      name="customizeWorkouts"
      label="Do you want to customize your workouts?"
      description="You can always change them later."
    >
      <WeightInputOptions
        name="customizeWorkouts"
        options={[
          { text: "Of course!", value: "true" },
          { text: "Some other time", value: "false" },
        ]}
      />
    </WeightInputWrapper>
  );
}

export default Page;
