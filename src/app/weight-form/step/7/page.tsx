import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";

function Page() {
  return (
    <WeightInputWrapper
      step={7}
      name="excludeIngredients"
      label="Select the ingredients you don't like"
    >
      <WeightInputSelect
        name="excludeIngredients"
        apiPath="/api/get-ingredients"
      />
    </WeightInputWrapper>
  );
}

export default Page;
