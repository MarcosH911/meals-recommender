"use server";

import type weightFormValues from "@/types/weightFormValues";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

async function handleSubmitWeightForm(formValues: weightFormValues) {
  let error = false;

  if (Number(formValues.weight) < 1 || Number(formValues.weight) > 999) {
    error = true;
  } else if (
    Number(formValues.desiredWeight) < 1 ||
    Number(formValues.desiredWeight) > 999 ||
    Number(formValues.desiredWeight) < Number(formValues.weight)
  ) {
    error = true;
  } else if (Number(formValues.speed) < 1 || Number(formValues.speed) > 5) {
    error = true;
  } else if (
    !formValues.mealTypes.breakfast &&
    !formValues.mealTypes.lunch &&
    !formValues.mealTypes.dinner
  ) {
    error = true;
  } else if (
    Number(formValues.calorieDistribution.breakfast) +
      Number(formValues.calorieDistribution.lunch) +
      Number(formValues.calorieDistribution.dinner) !==
    100
  ) {
    error = true;
  } else if (
    !formValues.customizeExercises &&
    formValues.includeExercises.length === 0
  ) {
    error = true;
  }

  if (error) {
    redirect("/weight-form/step/1?error=true");
  }

  redirect("/app");
}
export default handleSubmitWeightForm;
