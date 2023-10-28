"use server";

import supabaseClient from "../supabaseClient";

async function getIngredients() {
  "use server";

  const { data, error } = await supabaseClient
    .from("ingredients")
    .select("name, image_path");

  if (error) {
    throw new Error(error.message);
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
