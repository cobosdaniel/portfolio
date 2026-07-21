import Image from "next/image";
import Link from "next/link";

const skills = {
  Languages: ["C/C++", "Java", "Python", "JavaScript", "TypeScript", "Shell Script", "HTML/CSS"],
  Frameworks: ["React", "React Native", "Next.js", "Flask", "FastAPI"],
  "Cloud & Tools": ["AWS", "MySQL", "Git", "Agile/Scrum", "SDLC"],
};

const projects = [
  {
    title: "Streamer-Social",
    period: "Personal Project",
    description:
      "A Twitch channel-points tracker and analytics dashboard. Streams live redemptions via EventSub WebSocket, ranks viewers on leaderboards, and tracks watch streaks against a configurable stream schedule.",
    tags: ["React", "TypeScript", "FastAPI", "Python", "MySQL", "WebSocket", "Twitch OAuth"],
    code: "https://github.com/cobosdaniel/Streamer-Social",
    live: "https://streamer-social.vercel.app",
  },
  {
    title: "Big John's Books",
    period: "Capstone · Sep 2024 – May 2025",
    description:
      "Scrum Master for a 6-person team building a digital inventory management website for a local bookstore. Enabled real-time inventory tracking via RESTful APIs, improving stock visibility and accuracy.",
    tags: ["Python", "Flask", "MySQL", "REST APIs", "Digital Ocean"],
  },
  {
    title: "Mobile Rating App",
    period: "SER 424 · Jan 2025 – May 2025",
    description:
      "A React Native mobile app with secure user authentication and an optimized architecture, built with software configuration management for version control and team collaboration.",
    tags: ["React Native", "Mobile", "Authentication"],
  },
];

const experience = [
  {
    role: "Software Engineering Intern",
    org: "Kutta Technologies",
    period: "Apr 2024 – Aug 2024",
    points: [
      "Designed and implemented real-time communication modules in C++ and Shell Script, compliant with NATO software standards for autonomous vehicle systems; the codebase was selected as the enterprise benchmark to replace legacy systems.",
      "Applied SDLC practices — requirements analysis, debugging, testing, and Linux deployment — to help project managers ensure reliable, high-quality outcomes.",
    ],
  },
  {
    role: "Food Safety & Quality Director",
    org: "Chick-fil-A",
    period: "Aug 2020 – Present",
    points: [
      "Direct a team of 10 kitchen staff, enforcing standardized operating procedures and county health regulations.",
      "Implemented agile/scrum methods to streamline operations and foster a proactive safety culture.",
    ],
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex w-full max-w-5xl mx-auto flex-col gap-20">
        {/* Hero */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src="/avatar.jpg"
            alt="Daniel Cobos"
            width={180}
            height={180}
            className="rounded-full ring-1 ring-black/10 dark:ring-white/10 object-cover"
            priority
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Daniel Cobos
            </h1>
            <p className="text-sm sm:text-base text-black/70 dark:text-white/70 mt-1">
              Software Engineer — Full-Stack, Mobile, and Cloud.
            </p>
            <p className="text-sm sm:text-base text-black/60 dark:text-white/60 mt-3 max-w-2xl">
              ASU Software Engineering grad building full-stack web and mobile apps.
              I&apos;m into anime, gaming, and streaming/content creation — and I like
              folding those passions into my personal projects.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:cobos.r.daniel@gmail.com"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Contact
              </Link>
              <Link
                href="https://github.com/cobosdaniel"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10 transition"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href="/Daniel Cobos Resume.pdf"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10 transition"
                target="_blank"
              >
                Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniel-cobos-7164a9286/"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10 transition"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-2xl border p-4">
                <h3 className="font-medium text-sm text-black/60 dark:text-white/60 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-black/5 dark:bg-white/10 px-2.5 py-1 text-xs sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border p-4 hover:bg-black/5 dark:hover:bg-white/5 transition flex flex-col"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <span className="text-xs text-black/50 dark:text-white/50 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-black/5 dark:bg-white/10 px-2 py-0.5 text-xs text-black/60 dark:text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.code || project.live) && (
                  <div className="mt-3 flex gap-4 text-sm">
                    {project.code && (
                      <Link href={project.code} target="_blank" className="underline underline-offset-2">
                        Code
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" className="underline underline-offset-2">
                        Live Demo
                      </Link>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="flex flex-col gap-4">
            {experience.map((job) => (
              <div key={job.role} className="rounded-2xl border p-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-medium">
                    {job.role} <span className="text-black/50 dark:text-white/50">· {job.org}</span>
                  </h3>
                  <span className="text-xs text-black/50 dark:text-white/50 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm text-black/70 dark:text-white/70 space-y-1">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-medium">
              B.S. in Software Engineering{" "}
              <span className="text-black/50 dark:text-white/50">· Arizona State University</span>
            </h3>
            <span className="text-xs text-black/50 dark:text-white/50 whitespace-nowrap">
              May 2025
            </span>
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-4 text-sm text-black/60 dark:text-white/60 mt-20">
        <Link href="https://github.com/cobosdaniel/portfolio" target="_blank" className="hover:underline">
          View this site&apos;s source
        </Link>
        <span>·</span>
        <span>© {new Date().getFullYear()} Daniel Cobos</span>
      </footer>
    </div>
  );
}
