import Image from 'next/image';

export default function ChiefGuestSection() {
  return (
    <section className="band band--ink chief-guest" id="chief-guest">
      <div className="shell">
        <div className="cg__head" data-reveal>
          <span className="cg__eyebrow">
            <span className="cg__eyebrow-line" aria-hidden="true" />
            Honored Dignitary
            <span className="cg__eyebrow-line" aria-hidden="true" />
          </span>
          <h2 className="cg__section-title">
            Chief <span className="serif-em">Guest</span>
          </h2>
          <p className="cg__head-sub">Presiding over Research-O-Thon 2026</p>
        </div>

        <article className="cg" data-reveal>
          {/* ---- Photo ---- */}
          <div className="cg__photo-col">
            <div className="cg__photo-frame">
              <Image
                src="/gstomar.png"
                alt="Prof. G.S. Tomar"
                width={360}
                height={450}
                sizes="(max-width: 760px) 200px, 280px"
                className="cg__photo"
              />
            </div>
            <span className="cg__badge">MIR Labs Founder &amp; Chair</span>
          </div>

          {/* ---- Content ---- */}
          <div className="cg__content">
            <h3 className="cg__name">Prof. G.S. Tomar</h3>
            <p className="cg__title">
              Distinguished Principal Mentor &amp; Global Research Director
            </p>
            <span className="cg__rule" aria-hidden="true" />

            <p className="cg__bio">
              A world-renowned research scientist and visionary academic executive
              driving technological evolution in computational intelligence and
              wireless architectures. With nearly four decades of exemplary
              leadership fostering international research consortia, Dr. Tomar
              spearheads MIR Labs&rsquo; scientific initiatives, translating
              theoretical computing breakthroughs into high-impact societal
              solutions worldwide.
            </p>

            <a
              href="https://mirlabs.in/team.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cg__link"
            >
              Explore the MIR Labs executive network
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
