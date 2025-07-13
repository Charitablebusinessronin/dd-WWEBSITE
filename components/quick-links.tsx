import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Users, BookOpen, Dumbbell, Award } from "lucide-react"

const quickLinks = [
  {
    icon: <Calendar className="h-6 w-6 text-accent" />,
    title: "Program Schedule",
    description: "View our program schedule and register for activities",
    link: "/community/programs",
    color: "border-l-accent",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Hours & Schedules",
    description: "Check our facility hours and class schedules",
    link: "/hours",
    color: "border-l-primary",
  },
  {
    icon: <Users className="h-6 w-6 text-secondary" />,
    title: "Membership",
    description: "Learn about membership options and benefits",
    link: "/membership",
    color: "border-l-secondary",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    title: "Program Registration",
    description: "Register for programs and activities",
    link: "/registration",
    color: "border-l-accent",
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    title: "Summer Camp",
    description: "Explore our summer camp programs for youth",
    link: "/summer-camp",
    color: "border-l-primary",
  },
  {
    icon: <Award className="h-6 w-6 text-secondary" />,
    title: "Join Difference Driven",
    description: "Become a member of our community center",
    link: "/membership/join",
    color: "border-l-secondary",
  },
]

export default function QuickLinks() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-accent">QUICKLINKS</h2>
          <h3 className="text-3xl font-bold text-dark-gray mt-2 rebel-border inline-block pb-4">
            Find What You're Looking For
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link href={link.link} key={index}>
              <Card className={`quicklink-card h-full ${link.color} hover:border-l-accent`}>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 mt-1">{link.icon}</div>
                  <div>
                    <h3 className="font-bold text-dark-gray">{link.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
