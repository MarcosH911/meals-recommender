import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { data, error } = await supabase
      .from("ingredients")
      .select("name, image_url");

    if (error) {
      throw new Error(error.message);
    }

    const formattedData = data.map((item) => ({
      imageUrl: supabase.storage
        .from("ingredients")
        .getPublicUrl(item.image_url).data.publicUrl,
      text: item.name,
      key: item.name.toLowerCase(),
    }));

    return NextResponse.json({ data: formattedData }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
