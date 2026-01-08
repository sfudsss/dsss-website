import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import { getUpcomingEvents, getPastEvents } from "@/lib/events-data"

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-navy-dark md:text-5xl text-balance">
              Events & Workshops
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Join us for hackathons, workshops, panels, and networking events. Connect with the data science community
              and gain hands-on experience.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-2 text-3xl font-bold text-navy-dark">Upcoming Events</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mark your calendars and register for our upcoming events
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="group flex flex-col border-primary/20 transition-all hover:border-primary hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{event.category}</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Upcoming
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-navy-dark group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    {event.capacity && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    )}
                  </div>
                  <Button asChild className="mt-auto w-full group-hover:bg-primary/90">
                    <Link href={`/events/${event.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-2 text-3xl font-bold text-navy-dark">Past Events</h2>
            <p className="text-muted-foreground leading-relaxed">Check out our previous events and their highlights</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.id} className="flex flex-col border-primary/20 opacity-90">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary">{event.category}</Badge>
                    <Badge variant="outline" className="bg-muted">
                      Past Event
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-navy-dark">{event.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button asChild className="mt-auto w-full bg-transparent" variant="outline">
                    <Link href={`/events/${event.id}`}>
                      View Recap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-navy-dark md:text-3xl">Stay Updated</h2>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground leading-relaxed">
                Don't miss out on upcoming events! Join our Discord community or follow us on Instagram to get notified
                about new events, workshops, and opportunities.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Join Discord</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Follow on Instagram</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
