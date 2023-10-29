import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";
import getExercises from "@/lib/server-actions/getExercises";

async function Page() {
  const options = await getExercises();

  return (
    <WeightInputWrapper
      step={10}
      name="includeExercises"
      label="Select the exercises you are willing to do"
    >
      <WeightInputSelect name="includeExercises" options={options} />
    </WeightInputWrapper>
  );
}

export default Page;
