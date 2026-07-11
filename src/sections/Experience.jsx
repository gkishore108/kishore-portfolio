const experiences = [
  {
    period: "2023 — Present",
    role: "Full-Stack Developer",
    company: " Golfteamproducts, Inc.",
    description:
      "Owned end-to-end development of Shopify Plus storefront features, building scalable, headless solutions with React and Remix. Delivered enhanced UX through dynamic filtering, custom cart functionality, and seamless integrations across the Shopify ecosystem.",
    technologies: ["React", "Liquid", "Docker","Prisma DB","Remix.js", "GraphQL", "ChatGPT", "Github Copilot", "Codex", "Gemini"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Shopify Developer",
    company: " Caliwear, Inc.",
    description:
      "Owned frontend development of a Shopify storefront, leading a full homepage redesign to improve usability and conversions. Integrated design, SEO, and social marketing efforts using tools like Photoshop and CapCut AI to enhance brand presence and drive sales growth.",
    technologies: ["Liquid", "Javascript", "Shopify Apps", "Adobe Photoshop", "Capcut AI", "Gemini", "SEO", "Google Analytics", "Google Search Console"],
    current: true,
  },
  {
    period: "2019 — 2023",
    role: "Web Developer",
    company: "Threeomens, Inc.",
    description:
      "Led development of custom Shopify and WordPress themes, translating design requirements into high-quality, responsive web experiences. Extended platform capabilities with API integrations and performance optimizations, ensuring fast, scalable, and reliable sites.",
    technologies: ["Liquid", "PHP", "jQuery", "SCSS", "MySQL","ChatGPT", "Wordpress", "Advanced Custom fields", "Adobe Photoshop", "Adobe XD"],
    current: false,
  },
  {
    period: "2016 — 2019",
    role: "Data Analyst",
    company: "Rock My World Media, Inc.",
    description:
      "Built data pipelines and REST APIs using Python, PHP, and MySQL to power dashboards and improve data accessibility. Automated reporting workflows and optimized storefront performance, enabling faster insights and improved user experience.",
    technologies: ["Python", "PHP", "MySQL", "AWS", "MySQL", "SQL Server", "PostGresSQL"],
    current: false,
  },
  {
    period: "2012 — 2014",
    role: "Product Analyst",
    company: "Cognizant Technology Solutions",
    description:
      "Supported OpenText TeamSite/LiveSite solutions and enhancement of CMS for a large-scale banking platform, troubleshooting server failures and workflow disruptions. Delivered robust templates and workflows using J2EE technologies, ensuring stable and efficient content operations.",
    technologies: ["Teamsite","Livesite","MySQL","J2EE", "MVC Architecture", "Servlets", "JSP", "JDBC"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms`, gap: "1rem" }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};