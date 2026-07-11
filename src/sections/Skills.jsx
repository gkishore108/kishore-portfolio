const skills = [
    "React",
    "Python",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Wordpress",
    "Fly.io",
    "Docker",
    "AWS",
    "Shopify",
    "Tailwind CSS",
    "Prisma",
    "PHP",
    "Liquid",
    "Figma",
    "Git",
    "GitHub Copilot",
    "ChatGPT",
    "Codex"
];

{/* Skills Section */}
export const Skills = () => {
    return (
    <section id="skills" className="py-20 bg-background">
        <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
            </p>
            <div className="relative overflow-hidden">
            <div
                className="absolute left-0 top-0 bottom-0 w-32
                bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-32
                bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                    </span>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>
    );
}