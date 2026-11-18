import { createFileRoute } from "@tanstack/react-router";
import headshots from "@/assets/team-portraits.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Lifestyle Strategists" },
      {
        name: "description",
        content:
          "Meet the team behind Lifestyle Strategists: Dr. Michelle Prentice, a dual board-certified family and lifestyle medicine physician, and Dr. Elliott Lee, a behavioral scientist and positive psychologist.",
      },
      { property: "og:title", content: "About Us — Lifestyle Strategists" },
      {
        property: "og:description",
        content:
          "Meet the team behind Lifestyle Strategists: Dr. Michelle Prentice and Dr. Elliott Lee.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Hero />
      <Team />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24 md:pb-28">
        <div>
          <p className="tag-eyebrow">About us</p>
          <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.05] tracking-tight text-ink sm:text-[3.4rem] md:text-[3.9rem]">
            Two practitioners,{" "}
            <span className="italic text-clinical">one shared mission</span>:
            make lifestyle medicine practical.
          </h1>
          <p className="mt-7 max-w-xl text-[1.075rem] text-ink/80">
            We combine clinical expertise, behavioural science, and a deep
            belief that small, repeated habits are the most reliable path to
            lasting health.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-aqua/10"
            aria-hidden="true"
          />
          <img
            src={headshots}
            alt="Hand-drawn ink portraits of Dr. Michelle Prentice and Dr. Elliott Lee"
            width={1032}
            height={1024}
            className="ink-illustration mx-auto w-full max-w-[560px]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <span className="rule" />
      </div>
    </section>
  );
}

function Team() {
  const people = [
    {
      name: "Michelle Prentice, MD, MSc, CCFP, DipABLM",
      role: "Co-founder & Physician Lead",
      body:
        "Dr. Prentice is a dual board-certified family and lifestyle medicine physician with clinical experience across the United States and Canada. With a background in kinesiology, experience as a national physician advocate in the U.S., and training through the Harvard CHEF coaching program, she brings expertise in healthy movement, plant-based nutrition, and motivational interviewing to the practical application of lifestyle medicine.",
    },
    {
      name: "Elliott Lee, PhD, MSc",
      role: "Co-founder & Behavioural Science Lead",
      body:
        "Dr. Lee is a behavioral scientist and positive psychologist with expertise in group facilitation, systems thinking, and behavior change. His work focuses on increasing engagement and belonging within groups, and on how interactions can be intentionally designed to support healthier, more sustainable choices that improve both human and planetary health.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="tag-eyebrow">Our team</p>
        <h2 className="mt-4 font-serif text-4xl text-ink sm:text-[2.75rem]">
          Clinicians, scientists, and habit designers.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {people.map((person) => (
          <article
            key={person.name}
            className="rounded-xl border border-border/70 bg-[color-mix(in_oklab,var(--color-paper)_60%,white)] p-8 transition-colors hover:bg-card"
          >
            <div className="flex items-center gap-2 text-clinical">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                {person.role}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-[1.35rem] leading-snug text-ink">
              {person.name}
            </h3>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/80">
              {person.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-border/70 bg-[color-mix(in_oklab,var(--color-clinical)_5%,var(--color-paper))]"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="tag-eyebrow">Working together</p>
        <h2 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">
          Want to learn more about our work?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] text-ink/80">
          Whether you&rsquo;re exploring training for your organization or
          curious about how lifestyle medicine could fit your context,
          we&rsquo;d love to hear from you.
        </p>
        <a
          href="mailto:hello@lifestylestrategists.ca"
          className="mt-9 inline-flex items-center rounded-full bg-clinical px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-ink"
        >
          hello@lifestylestrategists.ca
        </a>
      </div>
    </section>
  );
}
