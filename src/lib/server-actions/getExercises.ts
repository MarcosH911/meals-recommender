"use server";

import supabaseClient from "../supabaseClient";

async function getExercises() {
  const { data, error } = await supabaseClient
    .from("exercises")
    .select("name, image_path")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const formattedData = data.map((item) => ({
    text: item.name,
    key: item.name.toLowerCase(),
    imageUrl: supabaseClient.storage
      .from("exercises")
      .getPublicUrl(item.image_path).data.publicUrl,
  }));

  return formattedData;
}

export default getExercises;
