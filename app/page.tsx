"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  purpose: string;
  audience: string;
  role: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: "slow-tide",
    number: "01",
    title: "Slow Tide",
    category: "Brand experience · Retail",
    year: "2026",
    image: "/slow-tide/page-19.png",
    alt: "Slow Tide brand poster featuring a surfing sea turtle",
    purpose:
      "Create an immersive, sea turtle-inspired surf lifestyle shop for AniMall that feels like a calm coastal escape while supporting real retail potential.",
    audience:
      "Orlando tourists, families, couples, young adults, beach enthusiasts, and shoppers drawn to useful, sustainable lifestyle goods.",
    role: "Brand strategy, identity, environmental concept, touchpoints",
    accent: "#f2d530",
  },
  {
    id: "guac-it-up",
    number: "02",
    title: "Guac It Up!",
    category: "Integrated campaign · Event",
    year: "2026",
    image: "/work/guac-campaign.jpg",
    alt: "Guac It Up campaign shown across poster, social media, and food truck",
    purpose:
      "Build a lively visual campaign for a National Guacamole Day event that stays recognizable from street-level advertising to social media and an environmental application.",
    audience:
      "Food lovers, festival visitors, social audiences, and people looking for a playful, shareable local event.",
    role: "Campaign concept, art direction, environmental and social design",
    accent: "#edbd00",
  },
  {
    id: "nike-flux",
    number: "03",
    title: "Nike Flux",
    category: "Product concept · Packaging",
    year: "2025",
    image: "/work/nike-box.jpg",
    alt: "Black and electric yellow Nike Flux shoe box concept",
    purpose:
      "Position a futuristic performance shoe for synthetic athletes through a high-contrast identity, retail poster, and dimensional packaging system.",
    audience:
      "Performance-driven athletes and tech-forward consumers interested in speed, innovation, and future-facing sportswear.",
    role: "Concept development, identity, poster and package design",
    accent: "#e8f22d",
  },
  {
    id: "championship",
    number: "04",
    title: "Full Sail Championship",
    category: "Poster design · Sports",
    year: "2025",
    image: "/work/championship.jpg",
    alt: "Full Sail Championship promotional fight poster",
    purpose:
      "Promote a fictional championship matchup with the visual urgency, hierarchy, and atmosphere of a live combat-sports event.",
    audience:
      "Students, sports fans, and event-goers who respond to bold personalities, clear event details, and high-energy promotion.",
    role: "Compositing, typography, visual hierarchy",
    accent: "#f16b22",
  },
  {
    id: "automotive",
    number: "05",
    title: "Autumn Drive",
    category: "Photography · Retouching",
    year: "2026",
    image: "/work/automotive.png",
    alt: "Black pickup truck photographed in an autumn forest",
    purpose:
      "Create a cinematic automotive portrait that uses seasonal color, framing, and selective contrast to turn a vehicle into the focus of an atmospheric landscape.",
    audience:
      "Automotive enthusiasts, editorial audiences, and lifestyle brands seeking rugged, cinematic imagery.",
    role: "Photography, composition, color grading",
    accent: "#c94f20",
  },
];

const slowTideSections = [
  {
    title: "The brief",
    body: "AniMall Theme Mall, Inc. aims to transform a typical mall trip into an interactive, animal-inspired adventure. With nearly 70% of visitors expected to be tourists, each environment needed to feel playful, immersive, memorable, and worth photographing.",
  },
  {
    title: "The idea",
    body: "What if AniMall had a surf lifestyle shop designed by sea turtles? Slow Tide translates their graceful, ocean-connected world into a tropical retail escape through shell shapes, wave forms, driftwood textures, soft ocean-toned lighting, and a calm, open layout.",
  },
  {
    title: "The promise",
    body: "A relaxed, sea turtle-inspired surf experience with helpful staff, sustainable surfboards and apparel, and local events that connect people to the ocean, island lifestyle, and surrounding community.",
  },
  {
    title: "The identity",
    body: "The name connects the peaceful stability of sea turtles with the rhythm of the ocean. The final mark combines a turtle, wave, and surfboard. A chunky retro wordmark, ocean blue, sandy beige, and bright coastal accents make the brand playful, bold, and memorable.",
  },
  {
    title: "The experience",
    body: "Palm trees, surfboards, tropical greenery, wave-like displays, and an easy-to-navigate floor plan establish the escape before guests enter. Apparel made from recovered ocean waste, recycled-material flip-flops, and functional boards made from processed beach wood turn sustainability into useful touchpoints.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [active, setActive] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openProject = (project: Project) => {
    setActive(project);
    window.history.replaceState(null, "", `#${project.id}`);
  };

  const closeProject = () => {
    setActive(null);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Jonathan Alexander home">
          JA<span>®</span>
        </a>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-links">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="mailto:jonathanalexander.design@gmail.com">Contact <ArrowIcon /></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-meta reveal">
          <span>Designer & visual storyteller</span>
          <span>Orlando, FL · 2026</span>
        </div>
        <div className="hero-portrait reveal" aria-hidden="true">
          <img src="/work/profile-cutout.png" alt="" />
        </div>
        <h1 className="display reveal">
          Designing <em>bold</em>
          <br />ideas into <span>real</span>
          <br />experiences.
        </h1>
        <div className="hero-bottom reveal">
          <p>
            I’m Jonathan Alexander, a multidisciplinary designer creating brand
            systems, campaigns, packaging, and image-led experiences.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">↓</a>
        </div>
      </header>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p>Selected work</p>
          <p>Five projects · 2025—26</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              className={`project-card card-${index + 1}`}
              key={project.id}
              onClick={() => openProject(project)}
              aria-label={`Open ${project.title} case study`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <span className="view-pill">View case study <ArrowIcon /></span>
              </div>
              <div className="project-info">
                <span>{project.number}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.category}</p>
                </div>
                <span>{project.year}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-label">About / 06</div>
        <div className="about-copy">
          <p className="eyebrow">Curious by nature. Intentional by design.</p>
          <h2>I turn strategy into visual work people can feel.</h2>
          <p className="bio">
            My practice moves between brand identity, advertising, environmental
            concepts, packaging, and photography. I’m drawn to projects with a
            strong point of view—where every detail can help make the story more
            useful, memorable, and human.
          </p>
          <div className="capabilities">
            <span>Brand identity</span><span>Art direction</span>
            <span>Campaign design</span><span>Packaging</span>
            <span>Photography</span><span>Environmental</span>
          </div>
        </div>
        <div className="portrait-wrap">
          <img src="/work/about-pair-cutout.png" alt="Jonathan Alexander and a companion posing together" />
        </div>
      </section>

      <footer>
        <p>Have a project in mind?</p>
        <a href="mailto:jonathanalexander.design@gmail.com">
          Let’s make<br />something <em>good.</em> <ArrowIcon />
        </a>
        <div className="footer-meta">
          <span>Jonathan Alexander © 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {active && (
        <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="case-title">
          <button className="modal-backdrop" onClick={closeProject} aria-label="Close case study" />
          <article className="case-study">
            <div className="case-topbar">
              <span>{active.number} / 05</span>
              <button onClick={closeProject}>Close ×</button>
            </div>
            <div className="case-hero" style={{ "--case-accent": active.accent } as React.CSSProperties}>
              <div>
                <p>{active.category}</p>
                <h2 id="case-title">{active.title}</h2>
              </div>
              <span>{active.year}</span>
            </div>
            <img
              className={`case-cover ${active.id === "slow-tide" ? "slow-tide-slide" : ""}`}
              src={active.image}
              alt={active.alt}
            />
            <div className="case-facts">
              <div><span>Purpose</span><p>{active.purpose}</p></div>
              <div><span>Audience</span><p>{active.audience}</p></div>
              <div><span>My role</span><p>{active.role}</p></div>
            </div>

            {active.id === "slow-tide" ? (
              <>
                <div className="case-narrative">
                  {slowTideSections.map((section) => (
                    <section key={section.title}>
                      <h3>{section.title}</h3><p>{section.body}</p>
                    </section>
                  ))}
                </div>
                <div className="personas">
                  <p className="eyebrow">Audience snapshots</p>
                  <div>
                    <article><span>01</span><h3>Amber Harris, 24</h3><p>Social media manager drawn to island aesthetics, useful products, and calm, memorable shopping spaces.</p></article>
                    <article><span>02</span><h3>Jake Nakamura, 27</h3><p>Software developer and surfer who values authentic brands, outdoor living, and well-designed coastal products.</p></article>
                    <article><span>03</span><h3>Chase Walker, 34</h3><p>Marketing executive looking for polished products that connect his city routine to a relaxed island mindset.</p></article>
                  </div>
                </div>
                <div className="case-gallery">
                  {[
                    ["page-10.png", "Slow Tide final logo"],
                    ["page-12.png", "Slow Tide storefront concept"],
                    ["page-13.png", "Slow Tide interior concept"],
                    ["page-15.png", "Slow Tide sustainable uniform"],
                    ["page-16.png", "Slow Tide surfboard touchpoint"],
                    ["page-17.png", "Slow Tide recycled flip-flops"],
                    ["page-18.png", "Slow Tide brand identity package"],
                    ["page-20.png", "Slow Tide case study conclusion"],
                  ].map(([src, alt]) => <img key={src} src={`/slow-tide/${src}`} alt={alt} />)}
                </div>
                <a className="deck-link" href="/slow-tide/pitch-deck.pdf" target="_blank">
                  View the complete 20-page pitch deck <ArrowIcon />
                </a>
              </>
            ) : (
              <div className="secondary-gallery">
                {active.id === "guac-it-up" && <>
                  <img src="/work/guac-truck.jpg" alt="Guac It Up food truck design" />
                </>}
                {active.id === "nike-flux" && <>
                  <img src="/work/poster-base.jpg" alt="Nike Flux synthetic athlete key art" />
                  <img src="/work/nike-poster.jpg" alt="Nike Flux retail poster mockup" />
                  <img src="/work/nike-flux-instagram.png" alt="Nike Flux Instagram campaign mockup" />
                </>}
              </div>
            )}
            <button className="next-project" onClick={() => {
              const next = projects[(projects.findIndex((p) => p.id === active.id) + 1) % projects.length];
              openProject(next);
            }}>
              <span>Next project</span><strong>{projects[(projects.findIndex((p) => p.id === active.id) + 1) % projects.length].title}</strong><ArrowIcon />
            </button>
          </article>
        </div>
      )}
    </main>
  );
}
