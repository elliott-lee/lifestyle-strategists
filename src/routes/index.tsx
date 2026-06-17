import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.png";
import pillarNutrition from "@/assets/pillar-nutrition.png";
import pillarActivity from "@/assets/pillar-activity.png";
import pillarStress from "@/assets/pillar-stress.png";
import pillarSubstances from "@/assets/pillar-substances.png";
import pillarSleep from "@/assets/pillar-sleep.png";
import pillarSocial from "@/assets/pillar-social.png";
import habitSneakers from "@/assets/habit-sneakers.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lifestyle Strategists — Lifestyle medicine, built into daily habits" },
      {
        name: "description",
        content:
          "We help people, practitioners, and organizations across Canada adopt lifestyle medicine through small, evidence-led habits across the six pillars of health.",
      },
      { property: "og:title", content: "Lifestyle Strategists" },
      {
        property: "og:description",
        content:
          "Lifestyle medicine, built into daily habits. The six pillars, backed by behavioural science.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const pillars = [
  {
    n: "01",
    name: "Nutrition",
    tag: "Mostly plants.",
    image: pillarNutrition,
    body:
      "A whole-food, predominantly plant-based pattern—nutrient dense, rich in fibre, full of minimally processed vegetables, fruit, whole grains, legumes, nuts, and seeds—is one of the most studied tools in preventing and treating chronic disease.",
  },
  {
    n: "02",
    name: "Movement",
    tag: "A body that gets used.",
    image: pillarActivity,
    body:
      "Regular, consistent physical activity counteracts the long, quiet harm of sitting. A weekly rhythm of general movement and purposeful exercise builds mental health, physical health, and resiliency you can feel.",
  },
  {
    n: "03",
    name: "Stress",
    tag: "Pressure, in the right dose.",
    image: pillarStress,
    body:
      "A little stress sharpens us; too much corrodes mood, weight, sleep, and immunity. Learning to notice your own stress signals—and the small techniques that take the edge off—is a skill, not a personality trait.",
  },
  {
    n: "04",
    name: "Substances",
    tag: "Less of what costs you.",
    image: pillarSubstances,
    body:
      "Tobacco, excess alcohol, opioids, and recreational drugs quietly raise the price of being alive. Cessation takes time, patience, and several attempts—support and the right approach matter more than willpower.",
  },
  {
    n: "05",
    name: "Restorative sleep",
    tag: "Seven to nine, most nights.",
    image: pillarSleep,
    body:
      "Short sleep dulls attention, mood, satiety, and insulin sensitivity. Seven to nine hours is associated with optimal health; consistently fewer than six (or more than nine) is associated with greater mortality.",
  },
  {
    n: "06",
    name: "Social connection",
    tag: "The people around the table.",
    image: pillarSocial,
    body:
      "Positive relationships shape physical, mental, and emotional health. Social networks are not a sentimental footnote—they are one of the strongest reinforcers of every other healthy behaviour on this list.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Nav />
      <Hero />
      <Levels />
      <Pillars />
      <Behavioural />
      <Closing />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b border-border/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-serif text-[1.05rem] tracking-tight text-ink">
            Lifestyle Strategists
          </span>
        </a>
        <nav className="hidden items-center gap-9 text-sm text-ink/70 md:flex">
          <a href="#pillars" className="hover:text-clinical transition-colors">The six pillars</a>
          <a href="#levels" className="hover:text-clinical transition-colors">Who we work with</a>
          <a href="#science" className="hover:text-clinical transition-colors">Our approach</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm font-semibold text-clinical hover:text-ink transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="12.5" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-clinical" />
      <path
        d="M8 16 Q11 9 14 14 T20 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-aqua"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24 md:pb-28">
        <div>
          <p className="tag-eyebrow">Lifestyle medicine · Canada</p>
          <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.05] tracking-tight text-ink sm:text-[3.4rem] md:text-[3.9rem]">
            Health is mostly{" "}
            <span className="italic text-clinical">small, repeated habits</span>—so
            that&rsquo;s where we work.
          </h1>
          <p className="mt-7 max-w-xl text-[1.075rem] text-ink/80">
            Lifestyle Strategists helps people, practitioners, and organizations across
            Canada adopt lifestyle medicine: the six evidence-based pillars of long-term
            health, built into daily life through behavioural science—not pep talks.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#pillars"
              className="inline-flex items-center rounded-full bg-clinical px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-ink"
            >
              Meet the six pillars
            </a>
            <a
              href="#levels"
              className="inline-flex items-center text-sm font-semibold text-ink/80 underline decoration-aqua decoration-2 underline-offset-[6px] hover:text-clinical"
            >
              How we work with organizations
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-aqua/10" aria-hidden="true" />
          <img
            src={hero}
            alt="Hand-drawn line illustration of a multigenerational family eating a meal of vegetables and fruit together"
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

function Levels() {
  const items = [
    {
      label: "Practitioners",
      body:
        "Training physicians and clinical teams to bring lifestyle medicine into the rooms where their patients already are.",
    },
    {
      label: "Organizations",
      body:
        "Workshops, curricula, and adoption strategies for organizations weaving lifestyle medicine into how they care for people.",
    },
    {
      label: "Research & advocacy",
      body:
        "Conducting and supporting research that asks honest questions about what lifestyle medicine can—and can&rsquo;t—do.",
    },
  ];
  return (
    <section id="levels" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="tag-eyebrow">Three levels</p>
          <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
            We work where habits actually form.
          </h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="bg-paper p-7">
              <div className="flex items-center gap-2 text-clinical">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  {it.label}
                </span>
              </div>
              <p
                className="mt-4 text-[0.97rem] leading-relaxed text-ink/80"
                dangerouslySetInnerHTML={{ __html: it.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="pillars" className="border-y border-border/70 bg-[color-mix(in_oklab,var(--color-paper)_60%,white)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="tag-eyebrow">The six pillars of lifestyle medicine</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-[2.75rem]">
            Six places where the evidence is unusually clear.
          </h2>
          <p className="mt-5 text-ink/75">
            Not a lifestyle. Not a vibe. Six clinical pillars with decades of research
            behind them—and a thousand small ways to fit them into a real week.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group flex flex-col gap-5 bg-paper p-7 transition-colors hover:bg-card"
            >
              <div className="flex h-40 items-end justify-center">
                <img
                  src={p.image}
                  alt={`Hand-drawn line illustration representing ${p.name}`}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="ink-illustration max-h-40 w-auto"
                />
              </div>
              <div className="flex items-baseline justify-between border-t border-border pt-4">
                <h3 className="font-serif text-[1.4rem] text-ink">{p.name}</h3>
                <span className="font-serif text-xs italic text-slate-muted">{p.n}</span>
              </div>
              <p className="font-serif text-[1.02rem] italic text-clinical">{p.tag}</p>
              <p className="text-[0.95rem] leading-relaxed text-ink/80">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Behavioural() {
  return (
    <section id="science" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-[1fr_1.05fr]">
        <div className="order-2 md:order-1">
          <img
            src={habitSneakers}
            alt="Hand-drawn line illustration of a person tying their sneakers on a front step while a curious cat watches"
            width={900}
            height={700}
            loading="lazy"
            className="ink-illustration mx-auto w-full max-w-[520px]"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="tag-eyebrow">Behavioural science · positive psychology</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-[2.6rem]">
            Knowing what&rsquo;s good for you is the easy part.
          </h2>
          <p className="mt-6 text-[1.05rem] text-ink/80">
            The hard part is making it stick. Behavioural science gives us tools that
            actually move the needle—working with motivation as it is, not as we wish it
            were; reducing friction; building cues; designing kinder rewards.
          </p>

          <figure className="mt-10 border-l-2 border-aqua pl-6">
            <blockquote className="font-serif text-[1.35rem] italic leading-snug text-ink">
              &ldquo;It&rsquo;s hard to go for a run when you&rsquo;ve spent the last
              decade identifying as a couch enthusiast. Science suggests we don&rsquo;t
              need a personality transplant; we just need a few gentle nudges. Start by
              putting on your sneakers to check the mail.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-muted">
              How we tend to think about change
            </figcaption>
          </figure>

          <p className="mt-10 text-ink/80">
            Habits and inclusion—not novelty, not willpower—are some of the most
            important drivers of behaviour change. We help people get healthier today,
            tomorrow, and the day after that.
          </p>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section
      id="contact"
      className="border-t border-border/70 bg-[color-mix(in_oklab,var(--color-clinical)_5%,var(--color-paper))]"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="tag-eyebrow">Working together</p>
        <h2 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">
          A healthier Canada, one small habit at a time.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] text-ink/80">
          If you&rsquo;re a practitioner curious about lifestyle medicine, an
          organization ready to make it part of how you care for people, or a researcher
          looking for collaborators—we&rsquo;d like to hear from you.
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

function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-ink/60 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <Mark />
          <span className="font-serif text-ink">Lifestyle Strategists</span>
        </div>
        <p>© {new Date().getFullYear()} Lifestyle Strategists. Made in Canada.</p>
      </div>
    </footer>
  );
}
