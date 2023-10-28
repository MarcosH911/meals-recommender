import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSelect from "@/components/custom/weight-form/weight-inputs/WeightInputSelect";
import getIngredients from "@/lib/server-actions/getIngredients";

async function Page() {
  const options = await getIngredients();

  return (
    <WeightInputWrapper
      step={7}
      name="excludeIngredients"
      label="Select the ingredients you don't like"
    >
      <WeightInputSelect name="excludeIngredients" options={options} />
    </WeightInputWrapper>
  );
}

export default Page;
