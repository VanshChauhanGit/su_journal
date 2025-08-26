import { NextResponse } from "next/server";
import Paper from "@/models/Paper";
import cloudinary from "@/lib/cloudinary";
import dbConnect from "@/lib/mongoose";

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const paperData = {
      paperTitle: formData.get("paperTitle"),
      category: formData.get("category"),
      authorName: formData.get("authorName"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      organization: formData.get("organization"),
      country: formData.get("country"),
      city: formData.get("city"),
      additionalAuthors: formData.get("additionalAuthors"),
      keywords: formData.get("keywords"),
      abstract: formData.get("abstract"),
    };

    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload directly to Cloudinary (no tmp file needed)
    const uploadRes = await cloudinary.uploader.upload(base64File, {
      resource_type: "auto",
      folder: "research-papers",
    });

    // Save to DB
    const newPaper = await Paper.create({
      ...paperData,
      fileUrl: uploadRes.secure_url,
    });

    return NextResponse.json({ success: true, paper: newPaper });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const papers = await Paper.find({ email }).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, papers });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
