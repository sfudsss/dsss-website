import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, BookOpen, TrendingUp } from "lucide-react"
import { getUpcomingEvents } from "@/lib/events-data"

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents()
  const featuredEvent = upcomingEvents.find((event) => event.id === "hackml-2026") || upcomingEvents[0]

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-navy-dark md:text-5xl lg:text-6xl text-balance">
                SFU Data Science Student Society
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
                Empowering students through data science education, community building, and hands-on experience in
                machine learning and analytics.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/events">View Upcoming Events</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Join Our Community</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/logo.png"
                alt="SFU DSSS Logo"
                width={400}
                height={400}
                className="mx-auto h-auto w-full max-w-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-dark md:text-4xl">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              The SFU Data Science Student Society (DSSS) is a student-run organization dedicated to fostering a vibrant
              community of data enthusiasts at Simon Fraser University. We bring together students from all disciplines
              who share a passion for data science, machine learning, and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy-dark md:text-4xl">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <Calendar className="mb-2 h-10 w-10 text-primary" />
                <CardTitle className="text-navy-dark">Events & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Host hackathons, workshops, and seminars featuring industry professionals and cutting-edge data
                  science topics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <Users className="mb-2 h-10 w-10 text-primary" />
                <CardTitle className="text-navy-dark">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Connect students with peers, mentors, and industry professionals through networking events and our
                  active Discord community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <BookOpen className="mb-2 h-10 w-10 text-primary" />
                <CardTitle className="text-navy-dark">Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Provide course planning guides, sample schedules, past papers, and curated learning materials to
                  support your academic journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <TrendingUp className="mb-2 h-10 w-10 text-primary" />
                <CardTitle className="text-navy-dark">Career Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Bridge the gap between academia and industry with career talks, resume workshops, and connections to
                  data science opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-3xl font-bold text-navy-dark md:text-4xl">Upcoming Events</h2>
            <Button asChild variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvent && (
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {featuredEvent.date}
                    </div>
                  </div>
                  <CardTitle className="text-navy-dark">{featuredEvent.title}</CardTitle>
                  <CardDescription>{featuredEvent.tagline || featuredEvent.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{featuredEvent.description}</p>
                  <Button asChild className="w-full">
                    <Link href={`/events/${featuredEvent.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {upcomingEvents
              .filter((event) => event.id !== featuredEvent?.id)
              .slice(0, 2)
              .map((event) => (
                <Card key={event.id} className="border-primary/20 hover:shadow-lg transition-shadow opacity-60">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="rounded-md bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
                        {event.date}
                      </div>
                    </div>
                    <CardTitle className="text-navy-dark">{event.title}</CardTitle>
                    <CardDescription>{event.tagline || event.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    <Button asChild className="w-full bg-transparent" variant="outline">
                      <Link href={`/events/${event.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}

            {upcomingEvents.length < 3 && (
              <Card className="border-primary/20 hover:shadow-lg transition-shadow opacity-60">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded-md bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">TBA</div>
                  </div>
                  <CardTitle className="text-navy-dark">More Events Coming Soon</CardTitle>
                  <CardDescription>Stay tuned for announcements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    We're planning exciting workshops, panels, and networking events. Follow us on social media to stay
                    updated.
                  </p>
                  <Button asChild className="w-full bg-transparent" variant="outline">
                    <Link href="/contact">Stay Updated</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Involved?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 text-pretty leading-relaxed">
            Join our community of data science enthusiasts. Connect with us on Discord, follow us on Instagram, or reach
            out via email to learn more about upcoming events and opportunities.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
