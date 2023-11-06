import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSelect from "@/components/custom/initial-form/inputs/InitialFormInputSelect";
import getIngredients from "@/lib/server-actions/getIngredients";

async function Page() {
  const options = await getIngredients();

  return (
    <InitialFormInputWrapper
      step={7}
      name="excludeIngredients"
      label="Select the ingredients you don't like"
    >
      <InitialFormInputSelect
        name="excludeIngredients"
        options={options || []}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
