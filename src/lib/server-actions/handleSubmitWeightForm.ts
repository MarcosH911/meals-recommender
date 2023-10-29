"use server";

import type weightFormValues from "@/types/weightFormValues";

async function handleSubmitWeightForm(formValues: weightFormValues) {
  console.log(formValues);
}
export default handleSubmitWeightForm;
