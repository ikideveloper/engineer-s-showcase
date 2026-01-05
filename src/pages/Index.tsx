import { Link } from "react-router-dom";
import { ArrowRight, Code, Server, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";

const highlights = [
  {
    icon: Server,
    title: "8+ Years Experience",
    description: "Building production-grade systems at scale",
  },
  {
    icon: Code,
    title: "Backend & APIs",
    description: "Java, Kotlin, Spring, Python, FastAPI",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Microservices, distributed systems, cloud",
  },
  {
    icon: Globe,
    title: "Remote Worldwide",
    description: "Available for remote opportunities globally",
  },
];

const featuredProjects = [
  {
    title: "High-Performance API Gateway",
    description: "Designed and implemented a custom API gateway handling 50K+ requests/second with intelligent rate limiting and caching.",
    tech: ["Kotlin", "Spring Boot", "Redis", "Kubernetes"],
    link: "/projects",
  },
  {
    title: "Real-time Data Pipeline",
    description: "Built an event-driven data pipeline processing millions of events daily with exactly-once semantics.",
    tech: ["Python", "Kafka", "PostgreSQL", "Docker"],
    link: "/projects",
  },
  {
    title: "AI-Powered Search Service",
    description: "Developed a semantic search service using embeddings for intelligent document retrieval.",
    tech: ["FastAPI", "OpenAI", "Elasticsearch", "AWS"],
    link: "/projects",
  },
];

const techStack = [
  { category: "Languages", items: ["Java", "Kotlin", "Python", "TypeScript"] },
  { category: "Frameworks", items: ["Spring Boot", "FastAPI", "Django"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"] },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge variant="tech" className="mb-6">
              Open to opportunities
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Senior Software
              <span className="text-primary"> Engineer</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I build robust backend systems, APIs, and scalable architectures. 
              Passionate about clean code, performance optimization, and solving complex engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in backend development and system design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tech Snapshot
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My primary technology stack for building reliable, scalable systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group, index) => (
              <Card
                key={group.category}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-card to-muted/50 border-primary/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Interested in working together?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>
              <Button asChild variant="accent" size="lg">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
