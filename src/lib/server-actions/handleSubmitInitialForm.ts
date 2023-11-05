"use server";

import { redirect } from "next/navigation";

import { KG_TO_LB } from "@/constants/constants";

import type InitialFormValues from "@/types/InitialFormValues";

async function handleSubmitInitialForm(formValues: InitialFormValues) {
  try {
    let error = false;

    if (formValues.units !== "lb" && formValues.units !== "kg") {
      error = true;
    } else if (
      Number(formValues.weight) < 1 ||
      Number(formValues.weight) > 999
    ) {
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
      throw new Error("Something went wrong");
    }

    if (formValues.units === "kg") {
      formValues.weight = String(
        Math.round(Number(formValues.weight) * KG_TO_LB * 10) / 10,
      );
    }

    // TODO: Insert to database

    redirect("/app");
  } catch (error) {
    console.log(error);
  }
}
export default handleSubmitInitialForm;
