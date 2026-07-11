import { Code2, Lightbulb, MessageSquare, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modular Code",
    description:
      "Building reusable, maintainable components that improve scalability, readability, and SEO.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with cross-functional teams to turn ideas into impactful solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking down complex problems into simple, actionable solutions.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description:
      "Clearly communicating progress and ideas to deliver projects on time.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ gap: "2rem" }}>
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              From Ideas to Execution,
              <span className="font-serif italic font-normal text-white">
                {" "}
                Step by Step.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a full stack developer who enjoys turning complex ideas into simple, actionable solutions. 
                I follow a structured, step-by-step approach to development—breaking down large problems into manageable tasks and delivering projects on time.
              </p>
              <p>
                I’ve collaborated closely with teams, managers, and business leaders to understand requirements and deliver solutions using agile methodologies and weekly sprints.
                I prioritize clear communication, and a collaborative approach to every project and deliver results within deadlines.
              </p>
              <p>
                I specialize in Shopify app and theme development, with strong expertise across both frontend and backend technologies including React, Liquid, Python, and PHP. 
                I focus on building user-friendly, performant, and maintainable web applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground px-4 py-6">
                "My mission is to craft digital applications that users enjoy and that make a measurable impact on business success."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 animate-fade-in animation-delay-400" style={{ gap: "1rem" }}> 
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms`, padding: "1rem" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};