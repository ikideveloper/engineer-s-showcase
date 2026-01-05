import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  domain: string;
  featured?: boolean;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "High-Performance API Gateway",
    description: "Custom API gateway with intelligent rate limiting, OAuth2 authentication, request/response transformation, and real-time analytics. Handles 50K+ requests per second with sub-10ms latency.",
    role: "Lead Engineer",
    tech: ["Kotlin", "Spring Boot", "Redis", "Kubernetes"],
    domain: "Infrastructure",
    featured: true,
  },
  {
    id: "2",
    title: "Real-time Data Pipeline",
    description: "Event-driven data processing system with exactly-once semantics, processing millions of events daily. Includes dead letter queue handling and automatic retry mechanisms.",
    role: "Architect",
    tech: ["Python", "Kafka", "PostgreSQL", "Docker"],
    domain: "Data",
    featured: true,
  },
  {
    id: "3",
    title: "AI-Powered Search Service",
    description: "Semantic search engine using vector embeddings for intelligent document retrieval. Features auto-suggestions, relevance tuning, and multi-language support.",
    role: "Developer",
    tech: ["FastAPI", "OpenAI", "Elasticsearch", "AWS"],
    domain: "AI/ML",
    featured: true,
  },
  {
    id: "4",
    title: "Payment Processing Platform",
    description: "Secure payment gateway integration supporting multiple providers with automatic failover, transaction monitoring, and PCI-DSS compliance.",
    role: "Developer",
    tech: ["Java", "Spring", "MySQL", "RabbitMQ"],
    domain: "Fintech",
  },
  {
    id: "5",
    title: "Microservices Orchestration Layer",
    description: "Service mesh implementation with distributed tracing, circuit breakers, and intelligent load balancing across 50+ microservices.",
    role: "Lead Engineer",
    tech: ["Kotlin", "Istio", "Jaeger", "Kubernetes"],
    domain: "Infrastructure",
  },
  {
    id: "6",
    title: "Fraud Detection Engine",
    description: "Real-time fraud detection system using ML models with rule engine fallback. Reduced false positives by 40% while maintaining 99.9% detection rate.",
    role: "Developer",
    tech: ["Python", "scikit-learn", "Redis", "PostgreSQL"],
    domain: "AI/ML",
  },
  {
    id: "7",
    title: "Configuration Management Service",
    description: "Centralized configuration service with feature flags, A/B testing support, and real-time updates without service restarts.",
    role: "Architect",
    tech: ["Java", "Spring Cloud Config", "Consul", "Vault"],
    domain: "Infrastructure",
  },
  {
    id: "8",
    title: "Analytics Dashboard API",
    description: "High-performance analytics API with aggregated metrics, custom date ranges, and exportable reports. Handles complex queries across billions of rows.",
    role: "Developer",
    tech: ["Python", "FastAPI", "ClickHouse", "Redis"],
    domain: "Data",
  },
];

const domains = ["All", "Infrastructure", "Data", "AI/ML", "Fintech"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.domain === activeFilter
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="tech" className="mb-6">
              Projects
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Selected Work
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of projects showcasing my expertise in backend development, system design, and distributed architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {domains.map((domain) => (
              <Button
                key={domain}
                variant={activeFilter === domain ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(domain)}
                className={cn(
                  "transition-all duration-200",
                  activeFilter === domain && "shadow-lg shadow-primary/25"
                )}
              >
                {domain}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Featured</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {featuredProjects.length > 0 && otherProjects.length > 0 && (
            <h2 className="text-xl font-semibold text-foreground mb-6">
              More Projects
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <Card
      className={cn(
        "group h-full animate-slide-up",
        featured && "border-primary/30 bg-gradient-to-br from-card to-muted/30"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {project.domain}
          </Badge>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-3">
          <p className="text-xs text-primary font-medium">
            Role: {project.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="tech" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
