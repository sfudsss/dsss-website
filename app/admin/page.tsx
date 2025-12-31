import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, LogOut, Users } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.user_metadata?.is_admin !== true) {
    redirect("/admin/login")
  }

  // Fetch all participants
  const { data: participants, error } = await supabase
    .from("participants")
    .select("*")
    .order("created_at", { ascending: false })

  // Group participants by event
  const participantsByEvent = participants?.reduce(
    (acc, participant) => {
      const eventId = participant.event_id
      if (!acc[eventId]) {
        acc[eventId] = []
      }
      acc[eventId].push(participant)
      return acc
    },
    {} as Record<string, typeof participants>,
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-navy-dark">Admin Dashboard</h1>
          </div>
          <form
            action={async () => {
              "use server"
              const supabase = await createClient()
              await supabase.auth.signOut()
              redirect("/admin/login")
            }}
          >
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </form>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-navy-dark">Welcome, {user.email}</h2>
          <p className="text-muted-foreground">Manage event registrations and export participant data</p>
        </div>

        {error && (
          <Card className="mb-6 border-red-500/50">
            <CardContent className="pt-6">
              <p className="text-red-500">Error loading participants: {error.message}</p>
            </CardContent>
          </Card>
        )}

        {participantsByEvent &&
          Object.entries(participantsByEvent).map(([eventId, eventParticipants]) => (
            <Card key={eventId} className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-navy-dark">
                      {eventId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </CardTitle>
                    <CardDescription>{eventParticipants.length} registered participants</CardDescription>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/api/admin/export/${eventId}`} target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Export CSV
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Student ID</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Registered</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {eventParticipants.map((participant) => (
                        <TableRow key={participant.id}>
                          <TableCell className="font-medium">
                            {participant.first_name} {participant.last_name}
                          </TableCell>
                          <TableCell>{participant.email}</TableCell>
                          <TableCell>{participant.student_id}</TableCell>
                          <TableCell className="capitalize">{participant.program?.replace("-", " ")}</TableCell>
                          <TableCell>{participant.year_level}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {participant.registration_status}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(participant.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          ))}

        {!participants ||
          (participants.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold text-navy-dark">No Registrations Yet</h3>
                <p className="text-muted-foreground">Participant registrations will appear here once submitted</p>
              </CardContent>
            </Card>
          ))}
      </main>
    </div>
  )
}
