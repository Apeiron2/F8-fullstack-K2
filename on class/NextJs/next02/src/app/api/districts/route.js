import districts from "@/data/quan_huyen.json";

export function GET(request) {
  const provicesId = request.nextUrl.searchParams.get("province_id");
  if (!provicesId) {
    return Response.json(
      { status: "error", message: "Province ID is required" },
      {
        status: 400,
      }
    );
  }
  let data = Object.values(districts);
  data = data.filter((district) => district.parent_code == provicesId);

  data.sort((a, b) => a.code - b.code);
  return Response.json({ status: "okela", data: data });
}
