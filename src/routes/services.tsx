import { createFileRoute } from "@tanstack/react-router";
import servicesHero from "@/assets/services-hero.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lifestyle Strategists" },
      {
        name: "description",
        content:
          "Bespoke lifestyle medicine training for healthcare organizations and wellness programs for companies. Better health, less burnout, lower churn.",
      },
      { property: "og:title", content: "Services — Lifestyle Strategists" },
      {
        property: "og:description",
        content:
          "Bespoke lifestyle medicine training for healthcare organizations and wellness programs for companies. Better health, less burnout, lower churn.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <ServicesHero />
      <Benefits />
      <Offerings />
      <CTA />
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24 md:pb-28">
        <div>
          <p className="tag-eyebrow">What we offer</p>
          <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.05] tracking-tight text-ink sm:text-[3.4rem] md:text-[3.9rem]">
            Lifestyle medicine,{" "}
            <span className="italic text-clinical">delivered</span> where people
            already gather.
          </h1>
          <p className="mt-7 max-w-xl text-[1.075rem] text-ink/80">
            We train healthcare teams and run wellness programs for organizations
            that want the benefits of lifestyle medicine to reach patients,
            clients, and employees.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-aqua/10"
            aria-hidden="true"
          />
          <img
            src={servicesHero}
            alt="Hand-drawn line illustration of a facilitator leading a small group workshop around a table"
            width={1280}
            height={960}
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

function Benefits() {
  const benefits = [
    {
      audience: "For patients",
      headline: "Greater health, longevity, and happiness.",
      body:
        "Lifestyle medicine targets the behaviours that drive most chronic disease. When people eat better, move more, sleep deeper, and feel connected, outcomes improve—and they tend to stay improved.",
    },
    {
      audience: "For practitioners",
      headline: "Less burnout, more meaning.",
      body:
        "Clinicians trained in lifestyle medicine report renewed satisfaction in their work. They gain practical tools to help patients actually get better, instead of managing symptoms indefinitely.",
      highlight: true,
    },
    {
      audience: "For medical facilities",
      headline: "Less overhead of churn.",
      body:
        "Happier patients and better-adjusted practitioners reduce turnover, no-shows, and recruitment costs. A culture of health becomes a measurable operational advantage.",
    },
  ];

  return (
    <section id="benefits" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="tag-eyebrow">Why it matters</p>
        <h2 className="mt-4 font-serif text-4xl text-ink sm:text-[2.75rem]">
          The benefits of lifestyle medicine.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {benefits.map((b) => (
          <article
            key={b.audience}
            className={`rounded-xl border p-7 transition-colors ${
              b.highlight
                ? "border-clinical/20 bg-[color-mix(in_oklab,var(--color-clinical)_5%,var(--color-paper))]"
                : "border-border/70 bg-paper hover:bg-card"
            }`}
          >
            <div className="flex items-center gap-2 text-clinical">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                {b.audience}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-[1.35rem] leading-snug text-ink">
              {b.headline}
            </h3>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/80">
              {b.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Offerings() {
  const offerings = [
    {
      label: "Bespoke training",
      for: "Healthcare organizations & clinics",
      body:
        "We design and deliver training that shows clinical teams how to offer lifestyle medicine inside their existing workflows. From the six pillars to behaviour-change conversations, we tailor content to your setting, your caseload, and your capacity.",
      features: [
        "Clinical team workshops",
        "Lifestyle medicine curriculum design",
        "Implementation coaching",
        "Ongoing mentorship options",
      ],
    },
    {
      label: "Programs & workshops",
      for: "Companies & employers",
      body:
        "We run employee wellness and client wellness programs that translate lifestyle medicine into practical, engaging experiences. Whether your people sit at desks or serve customers, we help them build habits that stick.",
      features: [
        "Employee wellness workshops",
        "Client wellness programming",
        "Leadership briefings on lifestyle medicine",
        "Habit-design sprints",
      ],
    },
  ];

  return (
    <section
      id="offerings"
      className="border-y border-border/70 bg-[color-mix(in_oklab,var(--color-paper)_60%,white)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="tag-eyebrow">Our services</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-[2.75rem]">
            Two ways we can help.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offerings.map((o) => (
            <article
              key={o.label}
              className="rounded-xl border border-border/70 bg-paper p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-center gap-2 text-clinical">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  {o.label}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-ink/60">{o.for}</p>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/80">
                {o.body}
              </p>
              <ul className="mt-6 space-y-2">
                {o.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-ink/80"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-aqua" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
          Let&rsquo;s bring lifestyle medicine to your organization.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] text-ink/80">
          Tell us about your team, your patients, or your workforce. We&rsquo;ll
          recommend a training or program shape that fits.
        </p>
        <a
          href="mailto:elliott.stuart.lee@gmail.com"
          className="mt-9 inline-flex items-center rounded-full bg-clinical px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-ink"
        >
          elliott.stuart.lee@gmail.com
        </a>
      </div>
    </section>
  );
}
