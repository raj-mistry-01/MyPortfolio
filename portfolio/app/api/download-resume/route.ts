import { NextResponse } from "next/server"
import path from "path";
import fs from 'fs';


export async function GET() {
  try {
    // In a real app, you would have a real PDF file
    // For this example, we'll just return a text response
    // return new NextResponse("Resume would be downloaded here", {
    //   headers: {
    //     "Content-Type": "text/plain",
    //     "Content-Disposition": "attachment; filename=resume.txt",
    //   },
    // })

    // Actual implementation would be:
    const filePath = path.join(process.cwd(), 'public', 'Resume_Raj_Makwana.pdf');
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=Resume_Raj_Makwana.pdf',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 })
  }
}
