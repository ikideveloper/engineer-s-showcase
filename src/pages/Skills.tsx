import { CheckCircle, Circle, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: "expert" | "proficient" | "familiar";
}

interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Core Skills",
    description: "Technologies I use daily with deep expertise",
    skills: [
      { name: "Java", level: "expert" },
      { name: "Kotlin", level: "expert" },
      { name: "Spring Boot", level: "expert" },
      { name: "Python", level: "expert" },
      { name: "FastAPI", level: "proficient" },
      { name: "PostgreSQL", level: "expert" },
      { name: "Redis", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "Microservices", level: "expert" },
      { name: "System Design", level: "expert" },
    ],
  },
  {
    title: "Working Knowledge",
    description: "Technologies I use regularly and can be productive with",
    skills: [
      { name: "Django", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "Node.js", level: "proficient" },
      { name: "GraphQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Elasticsearch", level: "proficient" },
      { name: "Apache Kafka", level: "proficient" },
      { name: "RabbitMQ", level: "proficient" },
      { name: "gRPC", level: "proficient" },
      { name: "React", level: "familiar" },
    ],
  },
  {
    title: "Tools & Practices",
    description: "Infrastructure, DevOps, and engineering practices",
    skills: [
      { name: "Docker", level: "expert" },
      { name: "Kubernetes", level: "proficient" },
      { name: "AWS", level: "proficient" },
      { name: "GCP", level: "familiar" },
      { name: "Terraform", level: "proficient" },
      { name: "CI/CD", level: "expert" },
      { name: "Git", level: "expert" },
      { name: "Linux", level: "expert" },
      { name: "Monitoring", level: "proficient" },
      { name: "Testing", level: "expert" },
    ],
  },
];

const levelConfig = {
  expert: {
    label: "Expert",
    icon: CheckCircle,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  proficient: {
    label: "Proficient",
    icon: Circle,
    color: "text-card-foreground",
    bg: "bg-muted",
  },
  familiar: {
    label: "Familiar",
    icon: Minus,
    color: "text-muted-foreground",
    bg: "bg-muted/50",
  },
};

export default function Skills() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="tech" className="mb-6">
              Skills
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Technical Expertise
            </h1>
            <p className="text-lg text-muted-foreground">
              A structured overview of my technical skills, organized by proficiency level and domain.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            {Object.entries(levelConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <config.icon className={cn("h-4 w-4", config.color)} />
                <span className="text-sm text-muted-foreground">{config.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <Card
                key={group.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {group.skills.map((skill) => {
                      const config = levelConfig[skill.level];
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                        >
                          <span className="text-sm text-card-foreground">{skill.name}</span>
                          <config.icon className={cn("h-4 w-4", config.color)} />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Additional Competencies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soft skills and domain knowledge that complement my technical abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CompetencyCard
              title="Architecture"
              items={["Domain-Driven Design", "Event Sourcing", "CQRS", "Clean Architecture"]}
            />
            <CompetencyCard
              title="Methodologies"
              items={["Agile/Scrum", "Code Reviews", "TDD/BDD", "Pair Programming"]}
            />
            <CompetencyCard
              title="Observability"
              items={["Prometheus", "Grafana", "Jaeger", "ELK Stack"]}
            />
            <CompetencyCard
              title="Security"
              items={["OAuth2/OIDC", "JWT", "API Security", "Secrets Management"]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function CompetencyCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-foreground mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Badge key={item} variant="secondary" className="text-xs">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
