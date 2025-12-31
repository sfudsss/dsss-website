import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, BookOpen, Calendar } from "lucide-react"

export default function ResourcesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-navy-dark md:text-5xl text-balance">
              Academic Resources
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Access course planning tools, sample schedules, and past papers to help you succeed in your data science
              journey at SFU.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="schedules" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="schedules">Course Schedules</TabsTrigger>
              <TabsTrigger value="planning">Planning Tools</TabsTrigger>
              <TabsTrigger value="papers">Past Papers</TabsTrigger>
            </TabsList>

            {/* Course Schedules Tab */}
            <TabsContent value="schedules" className="space-y-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-navy-dark">Sample Course Schedules</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore recommended course sequences for different data science pathways. These schedules are
                    designed to help you plan your academic journey effectively.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-primary/20 hover:border-primary transition-colors">
                    <CardHeader>
                      <Calendar className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Data Science Major</CardTitle>
                      <CardDescription>4-Year Program Schedule</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Year 1</span>
                          <span className="text-muted-foreground">Foundation Courses</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 120 - Intro to Computing Science</li>
                          <li>• MATH 150/151 - Calculus I/II</li>
                          <li>• STAT 270 - Introduction to Probability</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Year 2</span>
                          <span className="text-muted-foreground">Core Foundations</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 225 - Data Structures & Programming</li>
                          <li>• STAT 350 - Linear Models in Statistics</li>
                          <li>• MACM 316 - Numerical Analysis</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Year 3</span>
                          <span className="text-muted-foreground">Advanced Topics</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 353 - Computational Data Science</li>
                          <li>• STAT 452 - Statistical Learning & Prediction</li>
                          <li>• CMPT 419 - Special Topics in AI</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary transition-colors">
                    <CardHeader>
                      <Calendar className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Machine Learning Focus</CardTitle>
                      <CardDescription>Specialized ML Track</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Prerequisites</span>
                          <span className="text-muted-foreground">Required Background</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• Linear Algebra (MATH 232/240)</li>
                          <li>• Probability & Statistics (STAT 270/285)</li>
                          <li>• Programming Experience (CMPT 225+)</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Core ML Courses</span>
                          <span className="text-muted-foreground">Essential Skills</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 726 - Machine Learning</li>
                          <li>• CMPT 419 - Special Topics in AI</li>
                          <li>• STAT 452 - Statistical Learning</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Electives</span>
                          <span className="text-muted-foreground">Specialization</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 762 - Deep Learning</li>
                          <li>• CMPT 733 - Programming for Big Data</li>
                          <li>• CMPT 459 - Database Systems</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary transition-colors">
                    <CardHeader>
                      <Calendar className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Statistics Path</CardTitle>
                      <CardDescription>Statistical Analysis Focus</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Core Statistics</span>
                          <span className="text-muted-foreground">Foundation</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• STAT 350 - Linear Models</li>
                          <li>• STAT 410 - Statistical Analysis</li>
                          <li>• STAT 450 - Statistical Theory</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Applied Methods</span>
                          <span className="text-muted-foreground">Practical Skills</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• STAT 452 - Statistical Learning</li>
                          <li>• STAT 460 - Bayesian Statistics</li>
                          <li>• STAT 475 - Applied Discrete Data Analysis</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Programming</span>
                          <span className="text-muted-foreground">Technical Skills</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 353 - Computational Data Science</li>
                          <li>• STAT 341 - Introduction to Data Sci (R)</li>
                          <li>• Choose additional programming electives</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:border-primary transition-colors">
                    <CardHeader>
                      <Calendar className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Minor in Data Science</CardTitle>
                      <CardDescription>Complementary Studies</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Required Courses</span>
                          <span className="text-muted-foreground">12 Credits</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• CMPT 120 - Intro to Computing</li>
                          <li>• STAT 270 - Intro to Probability</li>
                          <li>• CMPT 353 - Computational Data Science</li>
                        </ul>

                        <div className="flex justify-between border-b pb-2 pt-3">
                          <span className="font-medium">Elective Options</span>
                          <span className="text-muted-foreground">9 Credits</span>
                        </div>
                        <ul className="ml-4 space-y-1 text-muted-foreground">
                          <li>• STAT 350 - Linear Models</li>
                          <li>• CMPT 459 - Database Systems</li>
                          <li>• STAT 452 - Statistical Learning</li>
                          <li>• CMPT 419 - Special Topics in AI</li>
                        </ul>

                        <div className="rounded-md bg-primary/10 p-3 text-sm text-primary mt-4">
                          Perfect for students in business, biology, economics, or other fields looking to add data
                          science skills.
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Planning Tools Tab */}
            <TabsContent value="planning" className="space-y-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-navy-dark">Course Planning Tools</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Download our course planning spreadsheet to map out your degree requirements and track your progress
                    throughout your program.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <Download className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">4-Year Planning Spreadsheet</CardTitle>
                      <CardDescription>Excel Template for Data Science Major</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Comprehensive Excel spreadsheet with pre-filled course sequences, credit tracking, and
                        prerequisite chains. Customize it to fit your academic goals.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Tracks all degree requirements</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Built-in GPA calculator</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Prerequisite validation</span>
                        </div>
                      </div>
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download XLSX (Coming Soon)
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <Download className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Course Prerequisite Map</CardTitle>
                      <CardDescription>Visual Course Dependency Chart</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Flowchart showing all course prerequisites and recommended sequences. Helps you visualize your
                        academic pathway and avoid scheduling conflicts.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Interactive PDF format</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Color-coded by difficulty</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Updated for 2025-26</span>
                        </div>
                      </div>
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF (Coming Soon)
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <FileText className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Degree Requirement Checklist</CardTitle>
                      <CardDescription>Track Your Progress</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Printable checklist of all major requirements including breadth courses, upper division credits,
                        and elective categories.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Print-friendly format</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Multiple program options</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Quick reference guide</span>
                        </div>
                      </div>
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF (Coming Soon)
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <BookOpen className="mb-2 h-8 w-8 text-primary" />
                      <CardTitle className="text-navy-dark">Co-op & Internship Guide</CardTitle>
                      <CardDescription>Career Planning Resource</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Guide to integrating work experience into your degree, including co-op application tips,
                        timeline planning, and course sequencing adjustments.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Co-op vs. internship comparison</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Application timeline</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Resume & cover letter tips</span>
                        </div>
                      </div>
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF (Coming Soon)
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 rounded-lg bg-secondary/50 p-6">
                  <h3 className="mb-2 font-semibold text-navy-dark">Need Help Planning Your Courses?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Join our Discord community to get advice from upper-year students and alumni. We host regular course
                    planning sessions at the beginning of each semester.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Past Papers Tab */}
            <TabsContent value="papers" className="space-y-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-navy-dark">Past Papers & Study Materials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Access past exams and study materials contributed by fellow students. Always check with your
                    instructors regarding their exam policies.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-navy-dark">Computing Science (CMPT)</CardTitle>
                      <CardDescription>Past exams and midterms for CMPT courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">CMPT 120</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Introduction to Computing Science</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">CMPT 225</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Data Structures & Programming</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">CMPT 353</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Computational Data Science</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">CMPT 419/726</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Machine Learning</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-navy-dark">Statistics (STAT)</CardTitle>
                      <CardDescription>Past exams for statistics courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">STAT 270</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Introduction to Probability</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">STAT 350</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Linear Models in Statistics</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">STAT 452</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Statistical Learning & Prediction</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">STAT 460</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Bayesian Statistics</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-navy-dark">Mathematics (MATH/MACM)</CardTitle>
                      <CardDescription>Past exams for math and applied math courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">MATH 232</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Linear Algebra</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>

                        <div className="rounded-lg border border-border p-4 hover:border-primary transition-colors">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-sm text-navy-dark">MACM 316</span>
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">Numerical Analysis</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                            View Materials (Coming Soon)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-navy-dark">
                    <FileText className="h-5 w-5 text-primary" />
                    Contribute Your Materials
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Help your fellow students by sharing your study materials, notes, or practice problems. Contact us
                    via email or Discord to contribute to our resource library.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Note: All materials are student-contributed and should be used as supplementary study aids. Always
                    refer to your course syllabus and instructor for official materials.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
