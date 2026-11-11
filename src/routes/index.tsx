import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.png";
import faceFueling from "@/assets/pillar-nutrition.png";
import faceActivity from "@/assets/face-activity.png";
import faceCentering from "@/assets/pillar-stress.png";
import faceExposure from "@/assets/face-exposure-selection.png";
import faceSocial from "@/assets/pillar-social.png";
import faceSleep from "@/assets/face-sleep-conditioning.png";
import habitSneakers from "@/assets/habit-sneakers.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lifestyle Strategists — Lifestyle medicine, built into daily habits" },
      {
        name: "description",
        content:
          "Through behavioural science, applying the 6 FACE+S leads to healthier, happier patients, practitioners, and organizations.",
      },
      { property: "og:title", content: "Lifestyle Strategists" },
      {
        property: "og:description",
        content:
          "Meet the 6 FACE+S of Lifestyle Medicine: Fueling, Activity and Exercise, Centering, Exposure Selection, Positive Social Connection and Sleep Conditioning.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const faces = [
  {
    id: "fueling",
    letter: "F",
    name: "Fueling",
    colour: "bg-leaf/20",
    tag: "Nourishment, with room for real life.",
    image: faceFueling,
    alt: "Hand-drawn illustration of a bowl of vegetables and leafy greens",
    body: "Dietary patterns built around diverse, predominantly plant-based, minimally processed foods. Emphasise whole foods, plant proteins, fibre-rich foods and unsaturated fats, with attention to mineral balance, nutritional adequacy, preferences and context.",
    practice:
      "Build on a familiar meal: add a plant protein or another vegetable. Familiar can be a useful starting point.",
  },
  {
    id: "activity",
    letter: "A",
    name: "Activity and Exercise",
    colour: "bg-amber-200/65",
    tag: "Everyday movement counts, too.",
    image: faceActivity,
    alt: "Hand-drawn illustration of a person moving outdoors with a dog",
    body: "Movement patterns that combine frequent everyday activity, less sitting and structured exercise. Include aerobic, resistance and balance or neuromuscular training, adapted to health, function and ability. Everyday movement earns its place alongside the exercise plan.",
    practice:
      "Use a regular daily cue, such as finishing a phone call, for a brief movement break.",
  },
  {
    id: "centering",
    letter: "C",
    name: "Centering",
    colour: "bg-stone-200/80",
    tag: "Attention, meaning and room to respond.",
    image: faceCentering,
    alt: "Hand-drawn illustration of a person pausing in seated reflection",
    body: "Practices that regulate attention and awareness, support cognitive control and emotional regulation, and cultivate positive psychological functioning. Include perspective-taking, gratitude, meaning, purpose, personally relevant spirituality and awe, extending stress management toward wellbeing and flourishing.",
    practice:
      "Invite a brief breathing pause or reflection on what matters before choosing one next action.",
  },
  {
    id: "exposure-selection",
    letter: "E",
    name: "Exposure Selection",
    colour: "bg-orange-200/65",
    tag: "Choose what supports health.",
    image: faceExposure,
    alt: "Hand-drawn illustration of a person taking a break from their phone with a water bottle beside a leafy branch",
    body: "Consider physical exposures via inhalation, ingestion and dermal or percutaneous routes, alongside psychological exposures such as digital media. Support smoke-free air, lower-risk substance choices, intentional media use and healthier settings, recognising access, context and the role of clinical support.",
    practice:
      "Explore one feasible substitution: an alcohol-free drink, a smoke-free setting or a bounded media habit.",
  },
  {
    id: "positive-social-connection",
    letter: "+",
    name: "Positive Social Connection",
    colour: "bg-rose-200/65",
    tag: "Belonging is part of the work.",
    image: faceSocial,
    alt: "Hand-drawn illustration of people sharing a conversation",
    body: "Supportive, reciprocal relationships and a sense of belonging. Attend to social participation, access to support and relationship quality. Help people maintain regular contact, participate in a community, nurture respectful relationships and contribute to others in ways that fit their lives.",
    practice:
      "Choose one manageable act of connection: a check-in, shared activity or small act of kindness.",
  },
  {
    id: "sleep-conditioning",
    letter: "S",
    name: "Sleep Conditioning",
    colour: "bg-blue-200/70",
    tag: "A routine your clock can recognise.",
    image: faceSleep,
    alt: "Hand-drawn illustration of an awake person closing a book beside a bedside lamp as part of a wind-down routine",
    body: "Behaviours and environmental conditions that support restorative sleep: morning light, regular sleep and wake timing, daytime activity, attention to caffeine and alcohol, a wind-down routine and a cool, dark, quiet bedroom. Address stimulus control and access to cognitive behavioural therapy for insomnia (CBT-I) when clinically indicated.",
    practice:
      "Agree on one achievable cue for a regular wind-down; assess persistent insomnia for appropriate care.",
  },
];

function Index() {
  return (
    <div className="bg-paper text-ink font-sans">
      <Hero />
      <Levels />
      <Faces />
      <Behavioural />
      <Closing />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24 md:pb-28">
        <div>
          <p className="tag-eyebrow">Lifestyle medicine · Canada</p>
          <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.05] tracking-tight text-ink sm:text-[3.4rem] md:text-[3.9rem]">
            Health is mostly <span className="italic text-clinical">small, repeated habits</span>—so
            that&rsquo;s where we work.
          </h1>
          <p className="mt-7 max-w-xl text-[1.075rem] text-ink/80">
            At Lifestyle Strategists, we help people, practitioners, and organizations put lifestyle
            medicine into practice. Through behavioural science, applying the 6 FACE+S leads to
            healthier, happier patients, practitioners, and organizations.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#faces"
              className="inline-flex items-center rounded-full bg-clinical px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-ink"
            >
              Meet the 6 FACE+S
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

function Faces() {
  return (
    <section
      id="pillars"
      aria-labelledby="faces-heading"
      className="border-y border-border/70 bg-[color-mix(in_oklab,var(--color-paper)_60%,white)]"
    >
      <div id="faces" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="max-w-3xl">
          <h2
            id="faces-heading"
            className="font-serif text-4xl leading-tight text-ink sm:text-[2.75rem]"
          >
            The 6 <span className="text-clinical">FACE+S</span> of Lifestyle Medicine
          </h2>
        </div>

        <nav aria-label="Explore the six FACE+S" className="mt-10">
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {faces.map((face) => (
              <li key={face.id}>
                <a
                  href={`#face-${face.id}`}
                  className="flex h-full flex-col items-center gap-3 rounded-lg px-3 py-4 text-center transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinical"
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-14 w-14 items-center justify-center rounded-md font-serif text-3xl text-ink ${face.colour}`}
                  >
                    {face.letter}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-ink">
                    {face.letter === "+" && <span className="sr-only">Plus: </span>}
                    {face.name}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {faces.map((face) => (
            <article
              key={face.id}
              id={`face-${face.id}`}
              aria-labelledby={`face-${face.id}-heading`}
              className="flex scroll-mt-24 flex-col bg-paper p-7"
            >
              <div className="flex h-40 items-end justify-center">
                <img
                  src={face.image}
                  alt={face.alt}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="ink-illustration max-h-40 max-w-full w-auto object-contain mix-blend-multiply"
                />
              </div>
              <div className="mt-6 flex min-h-20 items-start gap-3 border-t border-border pt-5">
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded font-serif text-xl text-ink ${face.colour}`}
                >
                  {face.letter}
                </span>
                <h3
                  id={`face-${face.id}-heading`}
                  className="font-serif text-[1.4rem] leading-tight text-ink"
                >
                  {face.name}
                </h3>
              </div>
              <p className="mt-3 font-serif text-[1.02rem] italic text-clinical">{face.tag}</p>
              <p className="mt-4 mb-6 text-[0.95rem] leading-relaxed text-ink/80">{face.body}</p>
              <div className="mt-auto border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clinical">
                  A small nudge in practice
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{face.practice}</p>
              </div>
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
