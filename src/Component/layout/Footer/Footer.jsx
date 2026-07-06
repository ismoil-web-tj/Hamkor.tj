// import { useState } from 'react'

// const SEEKER_LINKS = [
//   { icon: 'ti-briefcase',  label: 'Все вакансии',   href: '/Job' },
//   { icon: 'ti-file-cv',    label: 'Создать резюме', href: '/Resume' },
//   { icon: 'ti-bell',       label: 'Уведомления',    href: '/alerts' },
//   { icon: 'ti-chart-bar',  label: 'Зарплаты в IT',  href: '/salary' },
//   { icon: 'ti-building',   label: 'Компании',        href: '/companies' },
// ]

// const EMPLOYER_LINKS = [
//   { icon: 'ti-plus',        label: 'Разместить вакансию', href: '/Job' },
//   { icon: 'ti-users',       label: 'База резюме',          href: '/qwe' },
//   { icon: 'ti-trending-up', label: 'Аналитика рынка',      href: '/analytics' },
//   { icon: 'ti-tag',         label: 'Тарифы',               href: '/pricing' },
//   { icon: 'ti-handshake',   label: 'Партнёрство',           href: '/partners' },
// ]

// const SOCIALS = [
//   { icon: 'ti-brand-telegram',  label: 'Telegram' },
//   { icon: 'ti-brand-linkedin',  label: 'LinkedIn' },
//   { icon: 'ti-brand-instagram', label: 'Instagram' },
//   { icon: 'ti-brand-github',    label: 'GitHub' },
// ]

// const STATS = [
//   { num: '1 200+', label: 'Вакансий' },
//   { num: '340+',   label: 'Компаний' },
//   { num: '8 500+', label: 'Кандидатов' },
// ]

// const TRUST = ['IT Service', 'Эсхата', 'DC', 'Payme', 'Click', 'Alif', 'TBC', 'Humo']

// const css = `
//   .ft-root {
//     background: #0A1628;
//     color: #fff;
//     font-family: Inter, system-ui, sans-serif;
//     padding: 56px 40px 0;
//     border-top: 2px solid #F97316;
//   }

//   /* ── Alert bar ── */
//   .ft-alert {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     margin-bottom: 48px;
//     padding: 14px 20px;
//     border-radius: 14px;
//     background: linear-gradient(90deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.04) 100%);
//     border: 1px solid rgba(249,115,22,0.25);
//   }
//   .ft-alert-dot {
//     width: 8px; height: 8px;
//     border-radius: 50%;
//     background: #F97316;
//     box-shadow: 0 0 8px #F97316;
//     flex-shrink: 0;
//   }
//   .ft-alert-text {
//     font-size: 13px;
//     color: #F97316;
//     font-weight: 500;
//   }
//   .ft-alert-link {
//     margin-left: auto;
//     font-size: 12px;
//     font-weight: 600;
//     color: #F97316;
//     text-decoration: none;
//     border: 1px solid rgba(249,115,22,0.4);
//     border-radius: 8px;
//     padding: 5px 12px;
//     flex-shrink: 0;
//     transition: background 0.15s;
//     white-space: nowrap;
//   }
//   .ft-alert-link:hover { background: rgba(249,115,22,0.15); }

//   /* ── Main grid ── */
//   .ft-grid {
//     display: grid;
//     grid-template-columns: 1.8fr 1fr 1fr 1.1fr;
//     gap: 48px;
//     margin-bottom: 56px;
//   }

//   /* ── Logo ── */
//   .ft-logo {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     margin-bottom: 14px;
//   }
//   .ft-logo-icon {
//     width: 36px; height: 36px;
//     border-radius: 10px;
//     background: #F97316;
//     display: flex; align-items: center; justify-content: center;
//     flex-shrink: 0;
//   }
//   .ft-logo-text {
//     font-size: 20px;
//     font-weight: 600;
//     letter-spacing: -0.5px;
//     color: #fff;
//   }
//   .ft-logo-dot { color: #F97316; }

//   .ft-desc {
//     font-size: 13px;
//     color: #475569;
//     line-height: 1.7;
//     max-width: 230px;
//     margin-bottom: 24px;
//   }

//   /* ── Socials ── */
//   .ft-socials { display: flex; gap: 8px; margin-bottom: 32px; }
//   .ft-social {
//     width: 36px; height: 36px;
//     border-radius: 9px;
//     border: 1px solid #1E3A52;
//     background: #0D1F33;
//     display: flex; align-items: center; justify-content: center;
//     text-decoration: none;
//     transition: border-color 0.15s, background 0.15s;
//   }
//   .ft-social i { font-size: 16px; color: #475569; transition: color 0.15s; }
//   .ft-social:hover { border-color: #F97316; background: rgba(249,115,22,0.12); }
//   .ft-social:hover i { color: #F97316; }

//   /* ── Stats ── */
//   .ft-stats { display: flex; gap: 0; }
//   .ft-stat-wrap { display: flex; align-items: stretch; }
//   .ft-stat { display: flex; flex-direction: column; }
//   .ft-stat-num { font-size: 20px; font-weight: 600; color: #F97316; letter-spacing: -0.5px; }
//   .ft-stat-lbl { font-size: 11px; color: #334E68; margin-top: 2px; }
//   .ft-stat-sep { width: 1px; background: #1E3A52; margin: 2px 20px; align-self: stretch; }

//   /* ── Column heading ── */
//   .ft-col-label {
//     font-size: 11px;
//     font-weight: 600;
//     text-transform: uppercase;
//     letter-spacing: 0.1em;
//     color: #F97316;
//     margin-bottom: 20px;
//   }

//   /* ── Nav links ── */
//   .ft-links { list-style: none; display: flex; flex-direction: column; gap: 12px; padding: 0; margin: 0; }
//   .ft-links a {
//     font-size: 13px;
//     color: #64748B;
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     transition: color 0.15s;
//   }
//   .ft-links a i { font-size: 14px; color: #334E68; transition: color 0.15s; }
//   .ft-links a:hover { color: #fff; }
//   .ft-links a:hover i { color: #F97316; }

//   /* ── Newsletter ── */
//   .ft-nl-desc { font-size: 12px; color: #475569; line-height: 1.6; margin-bottom: 14px; }
//   .ft-nl-row { display: flex; gap: 8px; margin-bottom: 10px; }
//   .ft-nl-input {
//     flex: 1;
//     min-width: 0;
//     background: #0D1F33;
//     border: 1px solid #1E3A52;
//     border-radius: 9px;
//     padding: 9px 12px;
//     font-size: 13px;
//     color: #94a3b8;
//     outline: none;
//     font-family: inherit;
//     transition: border-color 0.15s;
//   }
//   .ft-nl-input:focus { border-color: #F97316; }
//   .ft-nl-btn {
//     background: #F97316;
//     border: none;
//     border-radius: 9px;
//     padding: 9px 14px;
//     font-size: 13px;
//     font-weight: 600;
//     color: #fff;
//     cursor: pointer;
//     transition: background 0.15s;
//     font-family: inherit;
//     flex-shrink: 0;
//   }
//   .ft-nl-btn:hover { background: #E06413; }
//   .ft-nl-hint { font-size: 11px; color: #334E68; margin-bottom: 28px; line-height: 1.5; }

//   /* ── App links ── */
//   .ft-apps { display: flex; flex-direction: column; gap: 8px; }
//   .ft-app-link {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     background: #0D1F33;
//     border: 1px solid #1E3A52;
//     border-radius: 9px;
//     padding: 8px 12px;
//     text-decoration: none;
//     transition: border-color 0.15s, background 0.15s;
//   }
//   .ft-app-link i { font-size: 18px; color: #F97316; }
//   .ft-app-link span { font-size: 12px; color: #64748B; }
//   .ft-app-link:hover { border-color: #F97316; background: rgba(249,115,22,0.08); }

//   /* ── Trust strip ── */
//   .ft-trust {
//     border-top: 1px solid #1E3A52;
//     border-bottom: 1px solid #1E3A52;
//     padding: 16px 0;
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     overflow: hidden;
//     flex-wrap: wrap;
//     row-gap: 8px;
//   }
//   .ft-trust-label {
//     font-size: 11px;
//     color: #334E68;
//     flex-shrink: 0;
//     font-weight: 600;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//   }
//   .ft-trust-item { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
//   .ft-trust-name { font-size: 13px; color: #475569; font-weight: 500; }
//   .ft-trust-dot {
//     width: 3px; height: 3px;
//     border-radius: 50%;
//     background: #F97316;
//     opacity: 0.6;
//   }

//   /* ── Bottom bar ── */
//   .ft-bottom {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     gap: 12px;
//     padding: 20px 0 24px;
//   }
//   .ft-copy { font-size: 12px; color: #334E68; }
//   .ft-copy span { color: #475569; }
//   .ft-badges { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
//   .ft-badge-hot {
//     font-size: 11px;
//     font-weight: 600;
//     background: rgba(249,115,22,0.15);
//     border: 1px solid rgba(249,115,22,0.35);
//     color: #F97316;
//     border-radius: 7px;
//     padding: 4px 10px;
//   }
//   .ft-badge-link {
//     font-size: 11px;
//     color: #334E68;
//     border: 1px solid #1E3A52;
//     border-radius: 7px;
//     padding: 4px 10px;
//     text-decoration: none;
//     transition: color 0.15s, border-color 0.15s;
//   }
//   .ft-badge-link:hover { color: #F97316; border-color: rgba(249,115,22,0.4); }

//   /* ── Accordion (mobile) ── */
//   .ft-acc-btn {
//     display: none;
//     width: 100%;
//     background: none;
//     border: none;
//     color: #F97316;
//     font-size: 11px;
//     font-weight: 600;
//     text-transform: uppercase;
//     letter-spacing: 0.1em;
//     font-family: inherit;
//     cursor: pointer;
//     padding: 0 0 16px;
//     text-align: left;
//     align-items: center;
//     justify-content: space-between;
//   }
//   .ft-acc-btn i { font-size: 16px; color: #475569; transition: transform 0.2s; }
//   .ft-acc-body { overflow: hidden; transition: max-height 0.25s ease; }

//   /* ── Responsive ── */
//   @media (max-width: 900px) {
//     .ft-grid {
//       grid-template-columns: 1fr 1fr;
//       gap: 36px;
//     }
//     .ft-brand-col { grid-column: 1 / -1; }
//     .ft-stats { flex-wrap: wrap; gap: 16px; }
//     .ft-stat-sep { display: none; }
//   }

//   @media (max-width: 600px) {
//     .ft-root { padding: 40px 20px 0; }

//     .ft-alert { flex-wrap: wrap; gap: 8px; }
//     .ft-alert-link { margin-left: 0; }

//     .ft-grid {
//       grid-template-columns: 1fr;
//       gap: 0;
//       margin-bottom: 32px;
//     }
//     .ft-brand-col { margin-bottom: 32px; }

//     /* Accordion columns on mobile */
//     .ft-acc-btn { display: flex; }
//     .ft-col-label { display: none; }

//     .ft-socials { flex-wrap: wrap; }

//     .ft-trust { gap: 8px; row-gap: 6px; }

//     .ft-bottom { flex-direction: column; align-items: flex-start; }

//     .ft-nl-row { flex-direction: column; }
//     .ft-nl-btn { width: 100%; }
//   }
// `

// function AccordionCol({ title, children }) {
//   const [open, setOpen] = useState(false)
//   return (
//     <div style={{ borderBottom: '1px solid #1E3A52', paddingBottom: open ? 20 : 0 }}>
//       {/* Desktop label */}
//       <p className="ft-col-label">{title}</p>
//       {/* Mobile accordion button */}
//       <button
//         type="button"
//         className="ft-acc-btn"
//         onClick={() => setOpen(o => !o)}
//         aria-expanded={open}
//       >
//         {title}
//         <i
//           className={open ? 'ti ti-chevron-up' : 'ti ti-chevron-down'}
//           style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
//           aria-hidden="true"
//         />
//       </button>
//       <div
//         className="ft-acc-body"
//         style={{ maxHeight: open ? 400 : 0 }}
//         aria-hidden={!open}
//       >
//         <div style={{ paddingBottom: 4 }}>{children}</div>
//       </div>
//       {/* Desktop: always visible */}
//       <style>{`.ft-acc-body { display: none; } @media (max-width: 600px) { .ft-acc-body { display: block; } } @media (min-width: 601px) { .ft-acc-body { display: block !important; max-height: none !important; } }`}</style>
//     </div>
//   )
// }

// export default function Footer() {
//   return (
//     <footer className="ft-root">
//       <style>{css}</style>

//       {/* ── Alert bar ── */}
//       <div className="ft-alert">
//         <span className="ft-alert-dot" />
//         <span className="ft-alert-text">
//           Прямо сейчас: <strong>1 200+ активных вакансий</strong> ждут тебя — не упусти оффер
//         </span>
//         <a href="/jobs" className="ft-alert-link">Смотреть →</a>
//       </div>

//       {/* ── Main grid ── */}
//       <div className="ft-grid">

//         {/* Brand */}
//         <div className="ft-brand-col">
//           <div className="ft-logo">
//             <div className="ft-logo-icon">
//               <i className="ti ti-code" style={{ fontSize: 18, color: '#fff' }} aria-hidden="true" />
//             </div>
//             <span className="ft-logo-text">Hamkor<span className="ft-logo-dot">.</span>tj</span>
//           </div>

//           <p className="ft-desc">
//             Лучшая площадка для IT-специалистов и компаний Таджикистана и СНГ.
//           </p>

//           <div className="ft-socials">
//             {SOCIALS.map(({ icon, label }) => (
//               <a key={label} href="#" aria-label={label} className="ft-social">
//                 <i className={`ti ${icon}`} aria-hidden="true" />
//               </a>
//             ))}
//           </div>

//           <div className="ft-stats">
//             {STATS.map((s, i) => (
//               <div key={s.label} className="ft-stat-wrap">
//                 <div className="ft-stat" style={{ paddingRight: i < STATS.length - 1 ? 20 : 0 }}>
//                   <span className="ft-stat-num">{s.num}</span>
//                   <span className="ft-stat-lbl">{s.label}</span>
//                 </div>
//                 {i < STATS.length - 1 && <div className="ft-stat-sep" />}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Seekers */}
//         <AccordionCol title="Соискателям">
//           <ul className="ft-links">
//             {SEEKER_LINKS.map(({ icon, label, href }) => (
//               <li key={label}>
//                 <a href={href}>
//                   <i className={`ti ${icon}`} aria-hidden="true" />
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </AccordionCol>

//         {/* Employers */}
//         <AccordionCol title="Работодателям">
//           <ul className="ft-links">
//             {EMPLOYER_LINKS.map(({ icon, label, href }) => (
//               <li key={label}>
//                 <a href={href}>
//                   <i className={`ti ${icon}`} aria-hidden="true" />
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </AccordionCol>

//         {/* Newsletter + Apps */}
//         <div>
//           <p className="ft-col-label">Рассылка</p>
//           <p className="ft-nl-desc">Свежие вакансии и обзоры рынка раз в неделю.</p>
//           <div className="ft-nl-row">
//             <input
//               type="email"
//               placeholder="Email"
//               aria-label="Email для подписки"
//               className="ft-nl-input"
//             />
//             <button type="button" className="ft-nl-btn">OK</button>
//           </div>
//           <p className="ft-nl-hint">Без спама. Отписка в один клик.</p>

//         </div>
//       </div>

//       {/* ── Trust strip ── */}
//       <div className="ft-trust">
//         <span className="ft-trust-label">Нам доверяют:</span>
//         {TRUST.map((name, i) => (
//           <span key={name} className="ft-trust-item">
//             <span className="ft-trust-name">{name}</span>
//             {i < TRUST.length - 1 && <span className="ft-trust-dot" />}
//           </span>
//         ))}
//       </div>

//       {/* ── Bottom bar ── */}
//       <div className="ft-bottom">
//         <p className="ft-copy">© 2026 Hamkor.tj — <span>Все права защищены</span></p>
//         <div className="ft-badges">
//           <span className="ft-badge-hot">Нанимаем в IT</span>
//           {['Конфиденциальность', 'Условия', 'Cookies'].map(item => (
//             <a key={item} href="#" className="ft-badge-link">{item}</a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   )
// }

import logo from '../../../assets/Hamkor.png'

import { useState } from 'react'

const SEEKER_LINKS = [
  { icon: 'ti-briefcase', label: 'Все вакансии', href: '/Job' },
  { icon: 'ti-file-cv', label: 'Создать резюме', href: '/Resume' },
  { icon: 'ti-bell', label: 'Уведомления', href: '/alerts' },
  { icon: 'ti-chart-bar', label: 'Зарплаты в IT', href: '/salary' },
  { icon: 'ti-building', label: 'Компании', href: '/companies' },
]

const EMPLOYER_LINKS = [
  { icon: 'ti-plus', label: 'Разместить вакансию', href: '/Job' },
  { icon: 'ti-users', label: 'База резюме', href: '/qwe' },
  { icon: 'ti-trending-up', label: 'Аналитика рынка', href: '/analytics' },
  { icon: 'ti-tag', label: 'Тарифы', href: '/pricing' },
  { icon: 'ti-handshake', label: 'Партнёрство', href: '/partners' },
]

const SOCIALS = [
  { icon: 'ti-brand-telegram', label: 'Telegram' },
  { icon: 'ti-brand-linkedin', label: 'LinkedIn' },
  { icon: 'ti-brand-instagram', label: 'Instagram' },
  { icon: 'ti-brand-github', label: 'GitHub' },
]

const STATS = [
  { num: '1 200+', label: 'Вакансий' },
  { num: '340+', label: 'Компаний' },
  { num: '8 500+', label: 'Кандидатов' },
]

const TRUST = ['IT Service', 'Эсхата', 'DC', 'Payme', 'Click', 'Alif', 'TBC', 'Humo']

const css = `
  .ft-root {
    background: #0B1F3A;
    color: #fff;
    font-family: Inter, system-ui, sans-serif;
    padding: 56px 40px 0;
    border-top: 2px solid #F97316;
  }

  .Hamkor-tabular {
    font-variant-numeric: tabular-nums;
    font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  }

  /* ── Alert bar ── */
  .ft-alert {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 48px;
    padding: 14px 20px;
    border-radius: 14px;
    background: linear-gradient(90deg, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.03) 100%);
    border: 1px solid rgba(59,130,246,0.28);
  }
  .ft-alert-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #3B82F6;
    box-shadow: 0 0 8px #3B82F6;
    flex-shrink: 0;
  }
  .ft-alert-text {
    font-size: 13px;
    color: #93C5FD;
    font-weight: 500;
  }
  .ft-alert-link {
    margin-left: auto;
    font-size: 12px;
    font-weight: 600;
    color: #F97316;
    text-decoration: none;
    border: 1px solid rgba(249,115,22,0.4);
    border-radius: 8px;
    padding: 5px 12px;
    flex-shrink: 0;
    transition: background 0.15s;
    white-space: nowrap;
  }
  .ft-alert-link:hover { background: rgba(249,115,22,0.15); }

  /* ── Main grid ── */
  .ft-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1.1fr;
    gap: 48px;
    margin-bottom: 56px;
  }

  /* ── Logo ── */
  .ft-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
  }
  .ft-logo-icon {
    width: 36px; height: 36px;
    border-radius: 10px;
    background: #F97316;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .ft-logo-text {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #fff;
  }
  .ft-logo-dot { color: #F97316; }

  .ft-desc {
    font-size: 13px;
    color: #64748B;
    line-height: 1.7;
    max-width: 230px;
    margin-bottom: 24px;
  }

  /* ── Socials ── */
  .ft-socials { display: flex; gap: 8px; margin-bottom: 32px; }
  .ft-social {
    width: 36px; height: 36px;
    border-radius: 9px;
    border: 1px solid rgba(148,163,184,0.2);
    background: #14304F;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none;
    transition: border-color 0.15s, background 0.15s;
  }
  .ft-social i { font-size: 16px; color: #64748B; transition: color 0.15s; }
  .ft-social:hover { border-color: #3B82F6; background: rgba(59,130,246,0.12); }
  .ft-social:hover i { color: #93C5FD; }

  /* ── Stats ── */
  .ft-stats { display: flex; gap: 0; }
  .ft-stat-wrap { display: flex; align-items: stretch; }
  .ft-stat { display: flex; flex-direction: column; }
  .ft-stat-num { font-size: 20px; font-weight: 600; color: #F97316; letter-spacing: -0.5px; }
  .ft-stat-lbl { font-size: 11px; color: #475569; margin-top: 2px; }
  .ft-stat-sep { width: 1px; background: rgba(148,163,184,0.2); margin: 2px 20px; align-self: stretch; }

  /* ── Column heading ── */
  .ft-col-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #3B82F6;
    margin-bottom: 20px;
  }

  /* ── Nav links ── */
  .ft-links { list-style: none; display: flex; flex-direction: column; gap: 12px; padding: 0; margin: 0; }
  .ft-links a {
    font-size: 13px;
    color: #64748B;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.15s;
  }
  .ft-links a i { font-size: 14px; color: #475569; transition: color 0.15s; }
  .ft-links a:hover { color: #fff; }
  .ft-links a:hover i { color: #F97316; }

  /* ── Newsletter ── */
  .ft-nl-desc { font-size: 12px; color: #64748B; line-height: 1.6; margin-bottom: 14px; }
  .ft-nl-row { display: flex; gap: 8px; margin-bottom: 10px; }
  .ft-nl-input {
    flex: 1;
    min-width: 0;
    background: #14304F;
    border: 1px solid rgba(148,163,184,0.2);
    border-radius: 9px;
    padding: 9px 12px;
    font-size: 13px;
    color: #94a3b8;
    outline: none;
    font-family: inherit;
    transition: border-color 0.15s;
  }
  .ft-nl-input:focus { border-color: #3B82F6; }
  .ft-nl-btn {
    background: #F97316;
    border: none;
    border-radius: 9px;
    padding: 9px 14px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: background 0.15s;
    font-family: inherit;
    flex-shrink: 0;
  }
  .ft-nl-btn:hover { background: #E0670B; }
  .ft-nl-hint { font-size: 11px; color: #475569; margin-bottom: 28px; line-height: 1.5; }

  /* ── App links ── */
  .ft-apps { display: flex; flex-direction: column; gap: 8px; }
  .ft-app-link {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #14304F;
    border: 1px solid rgba(148,163,184,0.2);
    border-radius: 9px;
    padding: 8px 12px;
    text-decoration: none;
    transition: border-color 0.15s, background 0.15s;
  }
  .ft-app-link i { font-size: 18px; color: #F97316; }
  .ft-app-link span { font-size: 12px; color: #64748B; }
  .ft-app-link:hover { border-color: #F97316; background: rgba(249,115,22,0.08); }

  /* ── Trust strip ── */
  .ft-trust {
    border-top: 1px solid rgba(148,163,184,0.15);
    border-bottom: 1px solid rgba(148,163,184,0.15);
    padding: 16px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    overflow: hidden;
    flex-wrap: wrap;
    row-gap: 8px;
  }
  .ft-trust-label {
    font-size: 11px;
    color: #475569;
    flex-shrink: 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .ft-trust-item { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
  .ft-trust-name { font-size: 13px; color: #64748B; font-weight: 500; }
  .ft-trust-dot {
    width: 3px; height: 3px;
    border-radius: 50%;
    background: #3B82F6;
    opacity: 0.7;
  }

  /* ── Bottom bar ── */
  .ft-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 20px 0 24px;
  }
  .ft-copy { font-size: 12px; color: #475569; }
  .ft-copy span { color: #64748B; }
  .ft-badges { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
  .ft-badge-hot {
    font-size: 11px;
    font-weight: 600;
    background: rgba(249,115,22,0.15);
    border: 1px solid rgba(249,115,22,0.35);
    color: #F97316;
    border-radius: 7px;
    padding: 4px 10px;
  }
  .ft-badge-link {
    font-size: 11px;
    color: #475569;
    border: 1px solid rgba(148,163,184,0.2);
    border-radius: 7px;
    padding: 4px 10px;
    text-decoration: none;
    transition: color 0.15s, border-color 0.15s;
  }
  .ft-badge-link:hover { color: #F97316; border-color: rgba(249,115,22,0.4); }

  /* ── Accordion (mobile) ── */
  .ft-acc-btn {
    display: none;
    width: 100%;
    background: none;
    border: none;
    color: #3B82F6;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: inherit;
    cursor: pointer;
    padding: 0 0 16px;
    text-align: left;
    align-items: center;
    justify-content: space-between;
  }
  .ft-acc-btn i { font-size: 16px; color: #64748B; transition: transform 0.2s; }
  .ft-acc-body { overflow: hidden; transition: max-height 0.25s ease; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .ft-grid {
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }
    .ft-brand-col { grid-column: 1 / -1; }
    .ft-stats { flex-wrap: wrap; gap: 16px; }
    .ft-stat-sep { display: none; }
  }

  @media (max-width: 600px) {
    .ft-root { padding: 40px 20px 0; }

    .ft-alert { flex-wrap: wrap; gap: 8px; }
    .ft-alert-link { margin-left: 0; }

    .ft-grid {
      grid-template-columns: 1fr;
      gap: 0;
      margin-bottom: 32px;
    }
    .ft-brand-col { margin-bottom: 32px; }

    /* Accordion columns on mobile */
    .ft-acc-btn { display: flex; }
    .ft-col-label { display: none; }

    .ft-socials { flex-wrap: wrap; }

    .ft-trust { gap: 8px; row-gap: 6px; }

    .ft-bottom { flex-direction: column; align-items: flex-start; }

    .ft-nl-row { flex-direction: column; }
    .ft-nl-btn { width: 100%; }
  }
`

function AccordionCol({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(148,163,184,0.15)', paddingBottom: open ? 20 : 0 }}>
      {/* Desktop label */}
      <p className="ft-col-label">{title}</p>
      {/* Mobile accordion button */}
      <button
        type="button"
        className="ft-acc-btn"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {title}
        <i
          className={open ? 'ti ti-chevron-up' : 'ti ti-chevron-down'}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
          aria-hidden="true"
        />
      </button>
      <div
        className="ft-acc-body"
        style={{ maxHeight: open ? 400 : 0 }}
        aria-hidden={!open}
      >
        <div style={{ paddingBottom: 4 }}>{children}</div>
      </div>
      {/* Desktop: always visible */}
      <style>{`.ft-acc-body { display: none; } @media (max-width: 600px) { .ft-acc-body { display: block; } } @media (min-width: 601px) { .ft-acc-body { display: block !important; max-height: none !important; } }`}</style>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="ft-root">
      <style>{css}</style>

      {/* ── Alert bar ── */}
      <div className="ft-alert">
        <span className="ft-alert-dot" />
        <span className="ft-alert-text">
          Прямо сейчас: <strong>1 200+ активных вакансий</strong> ждут тебя — не упусти оффер
        </span>
        <a href="/Job" className="ft-alert-link">Смотреть →</a>
      </div>

      {/* ── Main grid ── */}
      <div className="ft-grid">

        {/* Brand */}
        <div className="ft-brand-col">
          <div className="ft-logo">
            <div className="ft-logo-icon">
              <div className="card">
                <img
                  src={logo}
                  alt="Hamkor"
                  className="w-20 h-9 lg:w-12 lg:h-12 object-contain rounded-full"
                />
              </div>            </div>
            <span className="ft-logo-text">Hamkor<span className="ft-logo-dot">.</span>tj</span>
          </div>

          <p className="ft-desc">
            Лучшая площадка для IT-специалистов и компаний Таджикистана и СНГ.
          </p>

          <div className="ft-socials">
            {SOCIALS.map(({ icon, label }) => (
              <a key={label} href="#" aria-label={label} className="ft-social">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="ft-stats">
            {STATS.map((s, i) => (
              <div key={s.label} className="ft-stat-wrap">
                <div className="ft-stat" style={{ paddingRight: i < STATS.length - 1 ? 20 : 0 }}>
                  <span className="Hamkor-tabular ft-stat-num">{s.num}</span>
                  <span className="ft-stat-lbl">{s.label}</span>
                </div>
                {i < STATS.length - 1 && <div className="ft-stat-sep" />}
              </div>
            ))}
          </div>
        </div>

        {/* Seekers */}
        <AccordionCol title="Соискателям">
          <ul className="ft-links">
            {SEEKER_LINKS.map(({ icon, label, href }) => (
              <li key={label}>
                <a href={href}>
                  <i className={`ti ${icon}`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </AccordionCol>

        {/* Employers */}
        <AccordionCol title="Работодателям">
          <ul className="ft-links">
            {EMPLOYER_LINKS.map(({ icon, label, href }) => (
              <li key={label}>
                <a href={href}>
                  <i className={`ti ${icon}`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </AccordionCol>

        {/* Newsletter + Apps */}
        <div>
          <p className="ft-col-label">Рассылка</p>
          <p className="ft-nl-desc">Свежие вакансии и обзоры рынка раз в неделю.</p>
          <div className="ft-nl-row">
            {/* <input
              type="email"
              placeholder="Email"
              aria-label="Email для подписки"
              className="ft-nl-input"
            />
            <button type="button" className="ft-nl-btn">OK</button> */}
          </div>
          <p className="ft-nl-hint">Без спама. Отписка в один клик.</p>

        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="ft-trust">
        <span className="ft-trust-label">Нам доверяют:</span>
        {TRUST.map((name, i) => (
          <span key={name} className="ft-trust-item">
            <span className="ft-trust-name">{name}</span>
            {i < TRUST.length - 1 && <span className="ft-trust-dot" />}
          </span>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">© 2026 Hamkor.tj — <span>Все права защищены</span></p>
        <div className="ft-badges">
          <span className="ft-badge-hot">Нанимаем в IT</span>
          {['Конфиденциальность', 'Условия', 'Cookies'].map(item => (
            <a key={item} href="#" className="ft-badge-link">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}