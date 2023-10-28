"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const dynamic = "force-dynamic";

async function getIngredients() {
  "use server";
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("ingredients")
    .select("name, image_url");

  if (error) {
    throw new Error(error.message);
  }

  const formattedData = data.map((item) => ({
    text: item.name,
    key: item.name.toLowerCase(),
    imageUrl: supabase.storage.from("ingredients").getPublicUrl(item.image_url)
      .data.publicUrl,
  }));

  return formattedData;
}

export default getIngredients;
