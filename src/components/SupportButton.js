import { EVENT } from '@/lib/config';

const SUBJECT = encodeURIComponent(`${EVENT.name} ${EVENT.year} — Query`);

/** Floating "email support" button, pinned bottom-right on every screen. */
export default function SupportButton() {
  return (
    <a
      href={`mailto:${EVENT.email}?subject=${SUBJECT}`}
      className="support"
      aria-label={`Email support: ${EVENT.email}`}
    >
      <span className="support__label" aria-hidden="true">
        <span className="support__label-title">Need help? Mail us</span>
        <span className="support__label-mail">{EVENT.email}</span>
      </span>

      <span className="support__orb" aria-hidden="true">
        <span className="support__ring" />
        <span className="support__ring support__ring--late" />

        {/* headset, swaps to an envelope on hover */}
        <svg className="support__icon support__icon--headset" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="3" y="13" width="4" height="6" rx="1.6" />
          <rect x="17" y="13" width="4" height="6" rx="1.6" />
          <path d="M19 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
          <circle cx="12" cy="22" r="0.6" fill="currentColor" />
        </svg>
        <svg className="support__icon support__icon--mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>

        <span className="support__dot" />
      </span>
    </a>
  );
}
