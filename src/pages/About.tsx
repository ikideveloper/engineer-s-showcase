import { Code2, Lightbulb, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";

const workApproach = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "I prioritize maintainable, testable code with clear separation of concerns. Every system I build is designed for long-term scalability.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "I profile, measure, and optimize. From database queries to API response times, I ensure systems run efficiently at scale.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "I enjoy tackling complex technical challenges. Breaking down ambiguous requirements into actionable engineering solutions is my strength.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Technology evolves rapidly. I dedicate time to learning new tools, patterns, and approaches to stay at the forefront of software engineering.",
  },
];

const focusAreas = [
  "Backend Development",
  "API Design",
  "System Architecture",
  "Distributed Systems",
  "Database Optimization",
  "Cloud Infrastructure",
  "AI/ML Integration",
  "DevOps Practices",
];

const values = [
  "Clean Code",
  "Test-Driven Development",
  "Code Reviews",
  "Documentation",
  "Reliability",
  "Observability",
  "Automation",
  "Mentorship",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="tech" className="mb-6">
              About Me
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Building reliable software for over 8 years
            </h1>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-card-foreground leading-relaxed">
                I'm a Senior Software Engineer with a passion for building robust backend systems and APIs. 
                Over the past 8+ years, I've worked across various domains—from fintech to e-commerce to AI—always 
                focusing on delivering high-quality, maintainable solutions.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                My journey in software engineering started with a curiosity about how systems work at scale. 
                Today, I specialize in designing and implementing distributed architectures that handle millions 
                of requests while maintaining reliability and performance.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                I thrive in environments where I can solve complex technical problems, mentor team members, 
                and contribute to architectural decisions. Whether it's optimizing a critical database query 
                or designing a new microservice from scratch, I bring the same level of dedication and attention to detail.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Based in Europe, working remotely with global teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Contributed to systems processing billions of transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Active open-source contributor and tech blogger</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Speaker at local tech meetups and conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Mentor for junior developers and code review enthusiast</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My approach to software engineering combines technical excellence with practical problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workApproach.map((item, index) => (
              <Card
                key={item.title}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Focus Areas
              </h2>
              <p className="text-muted-foreground mb-8">
                These are the domains where I have deep expertise and continue to invest my learning efforts.
              </p>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="tech" className="text-sm py-1.5 px-4">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Values & Practices
              </h2>
              <p className="text-muted-foreground mb-8">
                Principles that guide my work and help me deliver quality software consistently.
              </p>
              <div className="flex flex-wrap gap-3">
                {values.map((value) => (
                  <Badge key={value} variant="secondary" className="text-sm py-1.5 px-4">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
