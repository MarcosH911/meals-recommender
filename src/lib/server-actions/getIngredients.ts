"use server";

import supabaseClient from "../supabaseClient";

async function getIngredients() {
  const { data, error } = await supabaseClient
    .from("ingredients")
    .select("name, image_path")
    .order("name");

  if (error) {
    // TODO: Toast
    return;
  }

  const formattedData = data.map((item) => ({
    text: item.name,
    key: item.name.toLowerCase(),
    imageUrl: supabaseClient.storage
      .from("ingredients")
      .getPublicUrl(item.image_path).data.publicUrl,
  }));

  return formattedData;
}

export default getIngredients;
