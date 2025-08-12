import { NextRequest, NextResponse } from "next/server";
import generateImage from "../ImageController";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const imageBase64 = await generateImage(prompt);

    if (!imageBase64) {
      return NextResponse.json({ error: "Image generation failed" }, { status: 500 });
    }

    return NextResponse.json({ image: imageBase64 }, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/ai-assistant/image:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
