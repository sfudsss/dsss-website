import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-navy-dark md:text-5xl text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Have questions? Want to get involved? Reach out to us through any of the channels below. We're here to
              help and always excited to connect with new members!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold text-navy-dark">Connect With Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Choose your preferred way to reach out to the DSSS team
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Email */}
              <Card className="flex flex-col border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-navy-dark">Email</CardTitle>
                  <CardDescription>Send us an email anytime</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col items-center gap-4">
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    For general inquiries, event questions, or partnership opportunities
                  </p>
                  <Button asChild className="mt-auto w-full">
                    <a href="mailto:dsss.sfu@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      dsss.sfu@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Discord */}
              <Card className="flex flex-col border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-navy-dark">Discord</CardTitle>
                  <CardDescription>Join our community server</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col items-center gap-4">
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    Chat with members, get help with courses, and stay updated on events
                  </p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://discord.gg/X7nu2Tmh6M" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Join Discord
                      </a>
                    </Button>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="flex flex-col border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-8 w-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <CardTitle className="text-navy-dark">Instagram</CardTitle>
                  <CardDescription>Follow us for updates</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col items-center gap-4">
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    Event photos, announcements, and behind-the-scenes content
                  </p>
                  <div className="mt-auto flex w-full flex-col items-center gap-4">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://www.instagram.com/sfudsss" target="_blank" rel="noopener noreferrer">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        Follow on Instagram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours / Meeting Info */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-navy-dark">Office Hours & Meetings</CardTitle>
                <CardDescription>Drop by to say hi or attend our events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-navy-dark">Executive Team Office Hours</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Meet with our executive team for questions about the club, events, or getting involved. Times and
                      locations will be announced at the start of each semester.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-navy-dark">General Meetings</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We host regular general meetings where we discuss upcoming events, share opportunities, and build
                      community. Follow our Instagram or Discord for meeting schedules.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    All meeting times and locations are posted on our Discord server and Instagram. Join our community
                    to stay updated!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold text-navy-dark">Common Questions</h2>
              <p className="text-muted-foreground leading-relaxed">Quick answers to frequently asked questions</p>
            </div>

            <div className="space-y-4">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-navy-dark">How do I become a member?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Simply join our Discord server or follow us on Instagram! There are no formal membership
                    requirements or fees. We welcome all SFU students interested in data science.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-navy-dark">Do I need to be a data science major?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Not at all! We welcome students from all majors and backgrounds. Whether you're in computing
                    science, statistics, business, or any other field, you're welcome to join our community and events.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-navy-dark">How can I get involved?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Attend our events, join our Discord community, volunteer at hackathons, or reach out about joining
                    our executive team! We're always looking for motivated students to help organize events and grow our
                    community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-navy-dark">Are events free to attend?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! All of our events, including hackathons, workshops, and panels, are completely free for
                    students. We provide food, resources, and prizes at our major events like HackML.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Join Our Community?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 text-pretty leading-relaxed">
            Whether you're just starting your data science journey or you're an experienced practitioner, there's a
            place for you in the DSSS community. Connect with us today!
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href="mailto:sfu.dsss@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" />
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
