import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";
import getIngredients from "@/lib/server-actions/getIngredients";

async function Page() {
  const options = await getIngredients();

  return (
    <WeightInputWrapper
      step={8}
      name="includeIngredients"
      label="Select the ingredients you really like"
    >
      <WeightInputSelect name="includeIngredients" options={options} />
    </WeightInputWrapper>
  );
}

export default Page;
