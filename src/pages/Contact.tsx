import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    description: "Best for detailed inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@developer",
    href: "https://github.com",
    description: "Check out my open source work",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/developer",
    href: "https://linkedin.com",
    description: "Let's connect professionally",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@developer",
    href: "https://t.me/username",
    description: "Quick messages and chats",
  },
];

const availability = [
  { icon: MapPin, label: "Location", value: "Europe (CET timezone)" },
  { icon: Clock, label: "Availability", value: "Open to opportunities" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="tech" className="mb-6">
              Contact
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Let's Work Together
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="h-full hover:border-primary/50 transition-all duration-200 group">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                              <method.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                {method.label}
                              </h3>
                              <p className="text-sm text-primary">{method.value}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Availability</h3>
                  <div className="space-y-3">
                    {availability.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {item.label}:
                        </span>
                        <span className="text-sm text-card-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-foreground mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project or opportunity..."
                          rows={5}
                          required
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
