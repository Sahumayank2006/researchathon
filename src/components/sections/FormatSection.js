import { EVENT, PHASES, STANDARDS, PAPER_STRUCTURE } from '@/lib/config';
import { IconCheck, IconDownload, IconEye } from '@/components/Icons';

const TEMPLATE_SPECS = [
  'IEEE two-column conference layout',
  'US Letter page, 10 pt Times New Roman',
  'Title, authors & affiliations block',
  'Abstract, keywords & numbered sections',
  'Figure, table & IEEE reference styles',
];

export default function FormatSection() {
  return (
    <section className="band format" id="format">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">04 — Phases &amp; Standards</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              Two phases. Two defences. <span className="serif-em">One paper.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            The sprint is broken into two evaluated phases so no team drifts. You
            defend the idea before you build on it, and defend the manuscript before
            the jury scores it.
          </p>
        </div>

        {/* ---- phases ---- */}
        <div className="phases">
          {PHASES.map((phase, i) => (
            <article
              className="phase"
              key={phase.tag}
              data-reveal
              style={{ '--reveal-delay': `${i * 140}ms` }}
            >
              <header className="phase__head">
                <span className="phase__tag">{phase.tag}</span>
                <span className="phase__window">{phase.window}</span>
              </header>

              <h3 className="phase__title">{phase.title}</h3>
              <p className="phase__objective">{phase.objective}</p>

              <div className="phase__deliverables">
                <span className="phase__deliverables-label">Deliverables</span>
                <ul>
                  {phase.deliverables.map((d) => (
                    <li key={d}>
                      <IconCheck width={15} height={15} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="phase__index" aria-hidden="true">{`0${i + 1}`}</span>
            </article>
          ))}
        </div>

        {/* ---- manuscript standards ---- */}
        <div className="standards">
          <div className="standards__intro" data-reveal>
            <span className="kicker">Manuscript &amp; IEEE Standards</span>
            <h3 className="standards__title">
              What counts as a submission
            </h3>
            <p className="standards__note">
              These are hard requirements, not guidelines. A paper that misses them is
              not scored on merit.
            </p>
          </div>

          <div className="standards__grid">
            {STANDARDS.map((standard, i) => (
              <article
                className="standard"
                key={standard.title}
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                <h4 className="standard__title">{standard.title}</h4>
                <p className="standard__body">{standard.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- required structure ---- */}
        <div className="spine" data-reveal>
          <div className="spine__label">
            <span className="kicker">Required Structure</span>
            <p>
              Every submitted manuscript must carry these sections, in this order, in
              the IEEE two-column template.
            </p>
          </div>
          <ol className="spine__list">
            {PAPER_STRUCTURE.map((part, i) => (
              <li className="spine__item" key={part}>
                <span className="spine__n">{String(i + 1).padStart(2, '0')}</span>
                {part}
              </li>
            ))}
          </ol>
        </div>

        {/* ---- official paper template ---- */}
        <div className="tpl" id="template" data-reveal>
          <div className="tpl__preview">
            <iframe
              className="tpl__frame"
              src={`${EVENT.templateUrl}#toolbar=0&navpanes=0&view=FitH`}
              title="IEEE paper template preview"
              loading="lazy"
            />

            {/* phones rarely render PDFs inline, so they get a drawn page instead */}
            <a
              className="tpl__sheet"
              href={EVENT.templateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the IEEE paper template (PDF)"
            >
              <span className="tpl__sheet-title" />
              <span className="tpl__sheet-sub" />
              <span className="tpl__sheet-authors">
                <span />
                <span />
              </span>
              <span className="tpl__sheet-cols">
                <span className="tpl__sheet-col">
                  <i /><i /><i /><i /><i /><b /><i /><i /><i />
                </span>
                <span className="tpl__sheet-col">
                  <i /><i /><em /><i /><i /><i /><b /><i /><i />
                </span>
              </span>
              <span className="tpl__sheet-tag">IEEE · PDF · 4 pages</span>
            </a>
          </div>

          <div className="tpl__body">
            <span className="kicker">Official Paper Template</span>
            <h3 className="tpl__title">
              Write in this format, <span className="serif-em">from the first line.</span>
            </h3>
            <p className="tpl__note">
              Every manuscript must follow this IEEE template. Open it before the
              sprint, keep it beside you while you draft, and you will never lose
              marks on formatting.
            </p>

            <ul className="tpl__specs">
              {TEMPLATE_SPECS.map((spec) => (
                <li key={spec}>
                  <IconCheck width={16} height={16} />
                  {spec}
                </li>
              ))}
            </ul>

            <div className="tpl__actions">
              <a
                href={EVENT.templateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <IconEye width={17} height={17} />
                View Template
              </a>
              <a
                href={EVENT.templateUrl}
                download="Research-O-Thon-2026-IEEE-Template.pdf"
                className="btn btn--ghost"
              >
                <IconDownload width={17} height={17} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
