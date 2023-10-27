import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";

function Page() {
  return (
    <WeightInputWrapper
      step={8}
      name="includeIngredients"
      label="Select the ingredients you really like"
    >
      <WeightInputSelect
        name="includeIngredients"
        apiPath="/api/get-ingredients"
      />
    </WeightInputWrapper>
  );
}

export default Page;
