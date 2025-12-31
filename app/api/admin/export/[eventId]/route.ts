import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest, { params }: { params: { eventId: string } }) {
  const supabase = await createClient()

  // Check if user is authenticated and is admin
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.user_metadata?.is_admin !== true) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Fetch participants for the event
  const { data: participants, error } = await supabase
    .from("participants")
    .select("*")
    .eq("event_id", params.eventId)
    .order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Generate CSV
  const headers = [
    "First Name",
    "Last Name",
    "Email",
    "Student ID",
    "Discord Username",
    "Program",
    "Year",
    "How Heard",
    "Kaggle Username",
    "Dietary Restrictions",
    "Shirt Size",
    "Status",
    "Registered At",
  ]

  const csvRows = [
    headers.join(","),
    ...participants.map((p) =>
      [
        p.first_name,
        p.last_name,
        p.email,
        p.student_id,
        p.discord_username,
        p.program,
        p.year_level,
        `"${p.how_heard_about?.replace(/"/g, '""') || ""}"`,
        p.kaggle_username,
        `"${p.dietary_restrictions?.replace(/"/g, '""') || ""}"`,
        p.shirt_size,
        p.registration_status,
        p.created_at,
      ].join(","),
    ),
  ]

  const csv = csvRows.join("\n")

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${params.eventId}-registrations.csv"`,
    },
  })
}
