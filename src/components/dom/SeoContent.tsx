import { getContent, type Locale } from "@/lib/i18n";

/**
 * A complete, semantic, text-only rendering of the portfolio.
 *
 * The visible experience is a WebGL/canvas journey — most of its content
 * (projects, bio, skill detail) never reaches the DOM, so it's invisible to
 * screen readers and to the many AI/search crawlers that don't execute
 * JavaScript. This component mirrors that same content as clean, structured
 * HTML that is always server-rendered into the page.
 *
 * It's visually hidden with `sr-only` (not `display:none`), so assistive tech
 * and crawlers read it while sighted users get the 3D scene. This is a
 * legitimate text alternative to canvas content, not hidden keyword stuffing —
 * it's the exact same information the animated sections present on scroll.
 */
export default function SeoContent({ locale = "en" }: { locale?: Locale }) {
  const { profile, experience, skills, projects, ui } = getContent(locale);
  const t = ui.seo;
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <section
      className="sr-only"
      lang={locale}
      dir={dir}
      aria-label={`${t.aboutTitle} — ${profile.name}`}
    >
      <header>
        <h2>
          {profile.name} — {profile.role}
        </h2>
        <p>{profile.status}</p>
        <p>{profile.bio}</p>
      </header>

      <section aria-label={t.aboutTitle}>
        <h2>{t.aboutTitle}</h2>
        <p>{profile.about.lead}</p>
        <p>{profile.about.p2}</p>
        <p>{profile.about.p3}</p>
        <p>
          {t.basedIn} {profile.location}.
        </p>
      </section>

      <section aria-label={t.experienceTitle}>
        <h2>{t.experienceTitle}</h2>
        {experience.map((job) => (
          <article key={job.company}>
            <h3>
              {job.title} — {job.company}
            </h3>
            <p>
              {job.range} · {job.location}
            </p>
            <p>{job.blurb}</p>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section aria-label={t.projectsTitle}>
        <h2>{t.projectsTitle}</h2>
        {projects.map((project) => (
          <article key={project.id}>
            <h3>
              {project.link ? (
                <a href={project.link} rel="noopener">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p>
              {project.meta} — {project.tagline}
            </p>
            <p>{project.description}</p>
            <p>
              {t.builtWith} {project.tags.join(", ")}.
            </p>
          </article>
        ))}
      </section>

      <section aria-label={t.skillsTitle}>
        <h2>{t.skillsTitle}</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.num}>
              <strong>{skill.name}:</strong> {skill.items}
            </li>
          ))}
        </ul>
      </section>

      <section aria-label={t.educationTitle}>
        <h2>{t.educationTitle}</h2>
        <ul>
          {profile.about.credentials.map((credential, i) => (
            <li key={i}>{credential}</li>
          ))}
        </ul>
      </section>

      <section aria-label={t.contactTitle}>
        <h2>{t.contactTitle}</h2>
        <p>
          {t.email} <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          {t.location} {profile.location}
        </p>
        <ul>
          <li>
            <a href={profile.socials.github} rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.socials.linkedin} rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.resume}>{t.resumePdf}</a>
          </li>
        </ul>
      </section>
    </section>
  );
}
