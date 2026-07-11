import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { VideoOnView } from "@/components/VideoOnView";
const projects = [
  {
    title: "Team Search - Advanced Search Shopify App",
    description:
      "A custom Shopify Team Search application built for Golf Teams which let them easily discover and select products using smart filters like team color, size availability, and brand preferences.",
    video: "/projects/quick-order.mp4",
    tags: ["React","GraphQL","Alpine.JS","NodeJS","Liquid","CSS","Web Components API" ,"Shopify Storefront API", "Shopify Admin API"],
    link: "https://golfteamproducts.com/pages/quick-order",
  },
  {
    title: "One Click Customization - Shopify App",
    description:
      "A one-click customization solution that enables team coaches and players to quickly select logos from a design library, apply templates, and place orders seamlessly, and thus streamlining the order process.",
    video: "/projects/one-click-customization.mp4",
    tags: ["Javascript","Fabric.js","Liquid","CSS","Web Components API","Shopify Metaobjects", "Shopify Metafields"],
    link: "https://golfteamproducts.com/products/3-stripes-chest-polo",
  },
  {
    title: "Teamstores - Shopify App",
    description:
      "A personalized team store platform that lets users seamlessly navigate to their team’s dedicated storefront and order products featuring their team’s branding.",
    video: "/projects/teamstore-project.mp4",
    tags: ["Javascript","Fabric.js","Liquid", "CSS","Web Components API","Shopify Metaobjects", "Shopify Metafields"],
    link: "https://golfteamproducts.com",
  },
  {
    title: "Caliwear SD - Shopify Storefront",
    description:
      "Redesigned Caliwear's Shopify storefront and enhanced frontend experience, combining UI improvements with SEO and social marketing strategies to increase traffic and sales.",
    video: "/projects/caliwear-sd.mp4",
    tags: ["Google Analytics","Adobe Photoshop","Liquid", "Shopify Apps", "Capcut AI", "SEO", "Google Search Console", "Instagram Marketing", "TikTok Marketing"],
    link: "https://caliwearsd.com",
  },
  {
    title: "Go247men - Shopify Storefront",
    description:
      "An award winning Shopify storefront developed for GO247 Men, transforming design concepts into clean, modular, and reusable code to deliver a fast, efficient, and SEO-friendly shopping experience.",
    video: "/projects/go247men.mp4",
    tags: ["Liquid","Jquery","Flickity.js","SCSS","HTML","Shopify Tags", "Adobe Phtoshop", "Adobe XD", "Adobe illustrator", "SEO"],
    link: "https://www.go247men.com/",
  },
  {
    title: "Miresball - A Custom Wordpress Website",
    description:
      "Developed a custom content-rich WordPress website by converting modern designs into scalable, reusable components. Integrated Advanced Custom Fields (ACF) to empower the client with a user-friendly backend for seamless content management.",
    video: "/projects/miresball.mp4",
    tags: ["WordPress","PHP","JavaScript","SCSS","HTML","Advanced Custom Fields","Adobe Photoshop", "Adobe XD", "Adobe Illustrator", "SEO"],
    link: "https://www.miresball.com/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-4">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Work that
            <span className="font-serif italic font-normal text-white">
              {" "}deliver results.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of my projects built with a focus on performance, scalability, and solving real world challenges.
          </p>
        </div>

        {/* Projects Grid (Single Column + Centered) */}
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <VideoOnView src={project.video} />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="#projects" >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};