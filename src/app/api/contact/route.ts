export async function GET() {
  return Response.json({
    message: "Contact API is ready.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return Response.json({
      success: true,
      message: "Message received.",
      data: body,
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "Invalid request body.",
      },
      { status: 400 },
    );
  }
}
