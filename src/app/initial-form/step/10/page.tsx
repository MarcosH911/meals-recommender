import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSelect from "@/components/custom/initial-form/inputs/InitialFormInputSelect";
import getExercises from "@/lib/server-actions/getExercises";

async function Page() {
  const options = await getExercises();

  return (
    <InitialFormInputWrapper
      step={10}
      name="includeExercises"
      label="Select the exercises you are willing to do"
    >
      <InitialFormInputSelect name="includeExercises" options={options} />
    </InitialFormInputWrapper>
  );
}

export default Page;
