import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Global",
    role: "Senior Software Engineer",
    period: "2021 – Present",
    location: "Remote",
    description: "Leading backend development for core platform services handling millions of daily transactions.",
    highlights: [
      "Architected and implemented a new API gateway reducing latency by 40%",
      "Led migration from monolith to microservices, improving deployment frequency by 10x",
      "Mentored team of 4 junior developers, establishing code review best practices",
      "Designed event-driven architecture handling 50M+ daily events",
    ],
    tech: ["Kotlin", "Spring Boot", "Kafka", "PostgreSQL", "Kubernetes", "AWS"],
  },
  {
    company: "DataFlow Systems",
    role: "Software Engineer",
    period: "2018 – 2021",
    location: "Berlin, Germany",
    description: "Built data processing pipelines and APIs for real-time analytics platform.",
    highlights: [
      "Developed real-time data pipeline processing 1TB+ daily with 99.9% uptime",
      "Implemented custom caching layer reducing database load by 60%",
      "Created comprehensive API documentation and SDK for external developers",
      "Introduced automated testing increasing code coverage from 40% to 85%",
    ],
    tech: ["Python", "FastAPI", "Apache Spark", "Redis", "Docker", "GCP"],
  },
  {
    company: "FinTech Innovations",
    role: "Junior Software Engineer",
    period: "2016 – 2018",
    location: "London, UK",
    description: "Contributed to payment processing systems and fraud detection services.",
    highlights: [
      "Built RESTful APIs for payment processing serving 100K+ daily transactions",
      "Implemented fraud detection algorithms reducing false positives by 25%",
      "Optimized critical database queries improving response times by 3x",
      "Participated in 24/7 on-call rotation maintaining 99.95% SLA",
    ],
    tech: ["Java", "Spring", "MySQL", "RabbitMQ", "Jenkins"],
  },
];

const caseStudy = {
  title: "API Gateway Modernization",
  problem: "Legacy API gateway couldn't handle increasing traffic and lacked modern security features.",
  solution: "Designed and implemented a new gateway using Kotlin and Spring Cloud Gateway with OAuth2, rate limiting, and intelligent routing.",
  results: [
    "40% reduction in average latency",
    "99.99% uptime over 12 months",
    "50K+ requests/second capacity",
    "Zero security incidents post-launch",
  ],
};

export default function Experience() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="tech" className="mb-6">
              Experience
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Professional Background
            </h1>
            <p className="text-lg text-muted-foreground">
              A track record of delivering impactful solutions across fintech, data processing, and enterprise platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="relative animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/50" />
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-card-foreground">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Case Study
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A detailed look at one of my most impactful projects.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                {caseStudy.title}
                <ExternalLink className="h-5 w-5 text-primary" />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Problem
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Solution
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
