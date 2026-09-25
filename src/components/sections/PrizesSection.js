import Counter from '@/components/Counter';
import { EVENT, PRIZES, PRIZE_POOL, TEAM_RULE, inr } from '@/lib/config';
import { IconTrophy, IconMedal, IconUsers } from '@/components/Icons';

/* Four seats: three students and the one optional faculty seat. */
const SEATS = [
  { label: 'Student', faculty: false },
  { label: 'Student', faculty: false },
  { label: 'Student', faculty: false },
  { label: 'Faculty', faculty: true },
];

function Seat({ faculty }) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="13" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 34c0-6.6 5.4-11.5 12-11.5S32 27.4 32 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {faculty && (
        <path
          d="M11 9.5 20 5l9 4.5-9 4.5-9-4.5Zm4.5 2.5v3.2c0 1.2 2 2.3 4.5 2.3s4.5-1.1 4.5-2.3V12"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function PrizesSection() {
  const { podium, consolation } = PRIZES;

  return (
    <section className="band band--ink prizes" id="prizes">
      <div className="prizes__aura" aria-hidden="true" />

      <div className="shell">
        <div className="sec-head sec-head--center">
          <span className="kicker" data-reveal>Cash Prizes</span>
          <h2 className="sec-head__title prizes__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Win a share of{' '}
            <span className="prizes__pool">
              <Counter value={PRIZE_POOL} prefix="₹" grouped duration={1800} />
            </span>
          </h2>
          <p className="lede" data-reveal style={{ '--reveal-delay': '160ms' }}>
            Every prize is paid in cash, awarded by the expert jury on the final day
            of the sprint.
          </p>
        </div>

        {/* ---- podium ---- */}
        <ol className="podium">
          {podium.map((prize, i) => (
            <li
              key={prize.place}
              className={`prize prize--${prize.tier}`}
              data-reveal
              style={{ '--reveal-delay': `${[120, 0, 220][i]}ms` }}
            >
              <div className="prize__card">
                {i === 0 && <span className="prize__ribbon">Top Prize</span>}

                <span className="prize__medal" aria-hidden="true">
                  {i === 0 ? (
                    <IconTrophy width={30} height={30} />
                  ) : (
                    <IconMedal width={26} height={26} />
                  )}
                </span>

                <span className="prize__place">{prize.label}</span>
                <span className="prize__amount">{inr(prize.amount)}</span>
                <span className="prize__tag">Cash Prize</span>
              </div>
              <span className="prize__step" aria-hidden="true">
                {prize.place}
              </span>
            </li>
          ))}
        </ol>

        {/* ---- consolation ---- */}
        <div className="consol" data-reveal>
          <div className="consol__head">
            <span className="consol__count">×{consolation.count}</span>
            <div>
              <h3 className="consol__title">Consolation Prizes</h3>
              <p className="consol__sub">{inr(consolation.amount)} cash each</p>
            </div>
          </div>
          <ul className="consol__list">
            {Array.from({ length: consolation.count }, (_, i) => (
              <li className="consol__item" key={i}>
                <span className="consol__n">Consolation {i + 1}</span>
                <span className="consol__amount">{inr(consolation.amount)}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="prizes__foot" data-reveal>
          <strong>All prizes are cash prizes.</strong> Every participant also receives
          an official certificate from ASET and the IEEE Student Chapter.
        </p>

        {/* ---- team composition ---- */}
        <div className="teamrule" id="team" data-reveal>
          <div className="teamrule__text">
            <span className="teamrule__eyebrow">
              <IconUsers width={15} height={15} />
              Team composition
            </span>
            <h3 className="teamrule__title">{TEAM_RULE.headline}</h3>
            <p className="teamrule__body">
              {TEAM_RULE.body} Teams can have <strong>1 to {TEAM_RULE.max} members</strong>{' '}
              in total.
            </p>
          </div>

          <div className="teamrule__seats" role="img" aria-label="A full team: three students and one faculty member, four members in total">
            <ul className="seats">
              {SEATS.map((seat, i) => (
                <li className={`seat ${seat.faculty ? 'seat--faculty' : ''}`} key={i}>
                  <Seat faculty={seat.faculty} />
                  <span>{seat.label}</span>
                </li>
              ))}
            </ul>
            <p className="seats__sum">
              <span>3 students + 1 faculty</span>
              <strong>= 4 members max</strong>
            </p>
          </div>
        </div>

        <div className="prizes__cta" data-reveal>
          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg"
          >
            Register Your Team
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
