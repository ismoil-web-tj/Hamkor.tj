import { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/Hamkor.png'

const TAGS = ['Frontend', 'Backend', 'React', 'Python', 'DevOps', 'Mobile', 'UI/UX', 'Angular']

const CITIES = [
  { value: '',            label: 'Весь Таджикистан' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'remote',      label: 'Удалённо' },
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
]

const EMPLOYER_LINKS = [
  { icon: 'fa-solid fa-file-plus',  label: 'Разместить вакансию', href: '/post-job' },
  { icon: 'fa-solid fa-users',      label: 'База резюме',         href: '/resume' },
  { icon: 'fa-solid fa-chart-bar',  label: 'Аналитика рынка',     href: '/analytics' },
]

const SEEKER_LINKS = [
  { icon: 'fa-solid fa-magnifying-glass', label: 'Все вакансии',            href: '/jobs' },
  { icon: 'fa-solid fa-file-lines',       label: 'Создать резюме',          href: '/resume/new' },
  { icon: 'fa-solid fa-bell',             label: 'Уведомления о вакансиях', href: '/alerts' },
]

const TICKER_ITEMS = [
  { role: 'Senior React Developer',    company: 'Эсхата Банк', city: 'Душанбе', salary: '25 000 – 35 000 TJS', tag: 'Срочно', tagType: 'urgent' },
  { role: 'Python Backend Developer',  company: 'IT Service',  city: 'Худжанд', salary: '18 000 – 28 000 TJS', tag: 'Новая',  tagType: 'new' },
  { role: 'DevOps Engineer',           company: 'Payme',       city: 'Удалённо', salary: '30 000 – 45 000 TJS', tag: null },
  { role: 'UI/UX дизайнер',            company: 'Click',       city: 'Душанбе', salary: '15 000 – 22 000 TJS', tag: 'Новая',  tagType: 'new' },
  { role: 'Mobile Developer (Flutter)',company: 'DC',          city: 'Худжанд', salary: '20 000 – 30 000 TJS', tag: null },
  { role: 'QA Automation Engineer',    company: 'Эсхата Банк', city: 'Удалённо', salary: '16 000 – 24 000 TJS', tag: 'Срочно', tagType: 'urgent' },
]

function HeroSection({ onSearch }) {
  const [query,     setQuery]     = useState('')
  const [city,      setCity]      = useState('')
  const [activeTag, setActiveTag] = useState('Frontend')
  const navigate = useNavigate()

  const handleTagClick = useCallback((tag) => {
    setActiveTag(tag)
    setQuery(tag)
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    
    const trimmedQuery = query.trim()
    if (onSearch) {
      onSearch({ query: trimmedQuery, city })
    }

    const searchParams = new URLSearchParams()
    if (trimmedQuery) searchParams.append('query', trimmedQuery)
    if (city) searchParams.append('city', city)
    
    navigate(`/jobs?${searchParams.toString()}`)
  }, [query, city, onSearch, navigate])

  return (
    <section
      className="Hamkor-hero w-full border-b px-4 py-8 md:px-12 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: 'var(--hk-paper)', borderColor: 'var(--hk-line)' }}
      aria-label="Поиск IT-вакансий"
    >
      <style>{`
        .Hamkor-hero {
          --hk-ink: #0B1220;
          --hk-paper: #F7F8FA;
          --hk-panel: #FFFFFF;
          --hk-line: #E3E7EE;
          --hk-line-soft: #ECEFF4;
          --hk-accent: #2451D8;
          --hk-accent-soft: #EAF0FE;
          --hk-accent-border: #C7D6FB;
          --hk-signal: #F2650C;
          --hk-signal-hover: #D8570A;
          --hk-mute: #5B6472;
          --hk-mute-2: #8A93A3;
          --hk-positive: #147A4D;
          --hk-positive-soft: #E7F5EE;
          --hk-warning: #B5760B;
          --hk-warning-soft: #FBF1DE;
          --hk-danger: #C23A3A;
          --hk-danger-soft: #FBEAEA;
          --hk-shadow-xs: 0 1px 2px rgba(11,18,32,0.05);
          --hk-shadow-sm: 0 1px 2px rgba(11,18,32,0.04), 0 2px 6px -2px rgba(11,18,32,0.08);
          --hk-shadow-md: 0 1px 2px rgba(11,18,32,0.05), 0 10px 24px -10px rgba(11,18,32,0.16);
          --hk-shadow-lg: 0 4px 10px -2px rgba(11,18,32,0.08), 0 24px 48px -16px rgba(11,18,32,0.18);
        }

        .Hamkor-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(11,18,32,0.07) 1px, transparent 0);
          background-size: 28px 28px;
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent 75%);
          mask-image: radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent 75%);
          pointer-events: none;
        }

        .Hamkor-fade-in { animation: HamkorFadeIn 0.5s ease both; }
        @keyframes HamkorFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .Hamkor-live-dot { animation: HamkorPulse 2s ease-in-out infinite; }
        @keyframes HamkorPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(20,122,77,0.35); }
          50%      { opacity: 0.7; box-shadow: 0 0 0 4px rgba(20,122,77,0); }
        }

        .Hamkor-mono { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace; }

        .Hamkor-hero a:focus-visible,
        .Hamkor-hero button:focus-visible,
        .Hamkor-hero input:focus-visible,
        .Hamkor-hero select:focus-visible {
          outline: 2px solid var(--hk-accent);
          outline-offset: 2px;
          border-radius: 8px;
        }

        .Hamkor-search-form {
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: var(--hk-shadow-xs);
        }
        .Hamkor-search-form:focus-within {
          box-shadow: var(--hk-shadow-md);
          border-color: var(--hk-accent-border) !important;
        }

        .Hamkor-btn-primary {
          position: relative;
          box-shadow: var(--hk-shadow-sm);
          transition: box-shadow 0.2s ease, transform 0.15s ease, background-color 0.2s ease;
        }
        .Hamkor-btn-primary:hover { box-shadow: var(--hk-shadow-md); background: var(--hk-signal-hover) !important; }
        .Hamkor-btn-primary:active { transform: scale(0.97); box-shadow: var(--hk-shadow-xs); }

        .Hamkor-btn-secondary { transition: box-shadow 0.2s ease, transform 0.15s ease, background-color 0.2s ease; }
        .Hamkor-btn-secondary:hover { background: var(--hk-line-soft) !important; }
        .Hamkor-btn-secondary:active { transform: scale(0.97); }

        .Hamkor-link-accent { transition: color 0.15s ease; }
        .Hamkor-link-accent:hover { color: var(--hk-accent) !important; }

        .Hamkor-tag { transition: box-shadow 0.15s ease, transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease; }
        .Hamkor-tag:hover { box-shadow: var(--hk-shadow-xs); transform: translateY(-1px); }
        .Hamkor-tag:active { transform: translateY(0) scale(0.97); }

        .Hamkor-elevate-card {
          transition: transform 0.3s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s cubic-bezier(.2,.8,.2,1), border-color 0.3s ease;
          box-shadow: var(--hk-shadow-sm);
        }
        .Hamkor-elevate-card:hover { transform: translateY(-4px); box-shadow: var(--hk-shadow-md); }

        .Hamkor-ticker-card {
          box-shadow: var(--hk-shadow-lg);
          transition: box-shadow 0.3s ease;
        }
        .Hamkor-ticker-card:hover { box-shadow: 0 8px 18px -4px rgba(11,18,32,0.12), 0 32px 64px -16px rgba(11,18,32,0.22); }

        .Hamkor-ticker-viewport {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
        .Hamkor-ticker-track {
          animation: HamkorTickerScroll 22s linear infinite;
        }
        
        .Hamkor-ticker-card:hover .Hamkor-ticker-track,
        .Hamkor-ticker-card:focus-within .Hamkor-ticker-track { 
          animation-play-state: paused; 
        }

        @keyframes HamkorTickerScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }

        .Hamkor-ticker-row {
          border-bottom: 1px solid var(--hk-line-soft);
          transition: background-color 0.15s ease;
        }
        .Hamkor-ticker-row:hover { background: var(--hk-paper); }

        .Hamkor-ticker-tag--urgent { background: #FDECE1; color: var(--hk-signal-hover); border: 1px solid #F8CDA9; }
        .Hamkor-ticker-tag--new    { background: var(--hk-accent-soft); color: var(--hk-accent); border: 1px solid var(--hk-accent-border); }

        @media (prefers-reduced-motion: reduce) {
          .Hamkor-fade-in, .Hamkor-live-dot, .Hamkor-ticker-track { animation: none !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-6 items-start w-full">
          <div className="flex flex-col items-start w-full min-w-0">

            <div
              className="Hamkor-fade-in inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-6"
              style={{ background: 'var(--hk-accent-soft)', border: '1px solid var(--hk-accent-border)', color: 'var(--hk-accent)' }}
            >
              <i className="fa-solid fa-shield-halved text-[11px]" aria-hidden="true" />
              Проверенные IT-работодатели Таджикистана
            </div>

            <h1
              className="Hamkor-fade-in text-3xl md:text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] mb-4 max-w-xl"
              style={{ color: 'var(--hk-ink)', animationDelay: '80ms' }}
            >
              Рынок IT-вакансий{' '}
              <span className="block md:inline">
                Таджикистана — <span style={{ color: 'var(--hk-signal)' }}>в реальном времени</span>
              </span>
            </h1>

            <p
              className="Hamkor-fade-in text-[15px] leading-[1.65] max-w-xl mb-8"
              style={{ color: 'var(--hk-mute)', animationDelay: '160ms' }}
            >
              Вакансии от ведущих IT-компаний и банков Таджикистана.<br className="hidden md:inline" />
              Резюме, отклик, оффер — всё в одном месте.
            </p>

            <form
              onSubmit={handleSubmit}
              role="search"
              className="Hamkor-fade-in Hamkor-search-form flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-3xl rounded-2xl p-1.5 gap-2 mb-4 bg-white"
              style={{ border: '1.5px solid var(--hk-line)', animationDelay: '240ms' }}
            >
              <div className="flex items-center flex-1 min-w-0 pl-3 gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--hk-mute-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Должность, компания или навык..."
                  aria-label="Поиск вакансий"
                  autoComplete="off"
                  className="w-full py-3 text-[14px] bg-transparent outline-none"
                  style={{ color: 'var(--hk-ink)' }}
                />
              </div>

              <div className="hidden sm:block w-px h-5 shrink-0" style={{ background: 'var(--hk-line)' }} />

              <div className="flex items-center px-3 sm:px-0">
                <label htmlFor="city-select" className="sr-only">Город</label>
                <select
                  id="city-select"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="text-[13px] bg-transparent outline-none cursor-pointer py-3 pr-4 shrink-0 font-medium w-full sm:w-auto"
                  style={{ color: 'var(--hk-mute)' }}
                >
                  {CITIES.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <Link
                to="/Job"
                className="Hamkor-btn-primary flex items-center justify-center gap-2 text-white px-6 py-3 sm:py-2.5 rounded-xl text-[14px] font-bold shrink-0"
                style={{ background: 'var(--hk-signal)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                Найти вакансии
              </Link>
            </form>

            <div
              className="Hamkor-fade-in flex flex-wrap items-center gap-2 mb-8"
              role="group"
              aria-label="Популярные категории"
              style={{ animationDelay: '320ms' }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider mr-1" style={{ color: 'var(--hk-mute-2)' }}>Популярное:</span>
              {TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  aria-pressed={activeTag === tag}
                  className="Hamkor-tag text-[12px] font-medium px-3.5 py-1.5 rounded-lg"
                  style={activeTag === tag
                    ? { background: 'var(--hk-accent-soft)', border: '1px solid var(--hk-accent-border)', color: 'var(--hk-accent)' }
                    : { background: 'var(--hk-panel)', border: '1px solid var(--hk-line)', color: 'var(--hk-mute)' }
                  }
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col relative w-full lg:max-w-95 lg:justify-self-end">
            <div
              className="Hamkor-fade-in Hamkor-ticker-card flex flex-col rounded-2xl bg-white overflow-hidden"
              style={{ border: '1px solid var(--hk-line)', animationDelay: '200ms' }}
            >
              <div
                className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b shrink-0 gap-2"
                style={{ borderColor: 'var(--hk-line)' }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="Hamkor-live-dot w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--hk-positive)' }} aria-hidden="true" />
                  <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider truncate" style={{ color: 'var(--hk-ink)' }}>
                    Активный рынок труда
                  </span>
                </div>
                <span className="Hamkor-mono hidden sm:inline text-[10px] font-semibold uppercase tracking-wide shrink-0" style={{ color: 'var(--hk-mute-2)' }}>
                  Обновлено сейчас
                </span>
              </div>

              <div className="Hamkor-ticker-viewport" style={{ height: '312px' }}>
                <div className="Hamkor-ticker-track">
                  {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                    <div key={i} className="Hamkor-ticker-row flex items-center justify-between gap-3 px-4 sm:px-5 py-3">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[12.5px] sm:text-[13px] font-bold truncate" style={{ color: 'var(--hk-ink)' }}>{item.role}</span>
                        <span className="text-[11px] sm:text-[11.5px] font-medium truncate" style={{ color: 'var(--hk-mute)' }}>
                          {item.company} · {item.city}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="Hamkor-mono text-[11px] sm:text-[11.5px] font-bold" style={{ color: 'var(--hk-ink)' }}>{item.salary}</span>
                        {item.tag && (
                          <span className={`Hamkor-ticker-tag--${item.tagType} text-[9.5px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="Job"
                className="Hamkor-link-accent flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-t text-[12px] sm:text-[12.5px] font-bold shrink-0"
                style={{ borderColor: 'var(--hk-line)', color: 'var(--hk-ink)' }}
              >
                <span className="flex items-center gap-2">
                  <img src={logo} alt=""  className="w-4 h-4 object-contain rounded-full" />
                  Hamkor.tj
                </span>
                <span>Все вакансии <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" /></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя секция: работодатель / соискатель */}
        <div className="flex flex-col gap-6 pt-6 border-t" style={{ borderColor: 'var(--hk-line)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[.15em]" style={{ color: 'var(--hk-mute-2)' }}>Быстрые действия</p>
            <p className="text-[12px] font-medium" style={{ color: 'var(--hk-mute-2)' }}>
              Доверяют лучшие:{' '}
              <span style={{ color: 'var(--hk-mute)' }}>IT Service · Эсхата · DC · Payme · Click</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            <div
              className="Hamkor-elevate-card flex flex-col h-full rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ background: 'var(--hk-panel)', border: '1px solid var(--hk-line)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--hk-signal)' }} aria-hidden="true" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: '#FDECE1' }}>
                  <i className="fa-solid fa-building text-[22px]" style={{ color: 'var(--hk-signal)' }} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider" style={{ background: '#FDECE1', color: 'var(--hk-signal-hover)' }}>
                  Компании
                </span>
              </div>
              <h3 className="text-xl font-black mb-1.5" style={{ color: 'var(--hk-ink)' }}>Работодатель</h3>
              <p className="text-[13px] leading-[1.55] mb-5 font-medium max-w-sm" style={{ color: 'var(--hk-mute)' }}>
                Найдите готовых специалистов и разместите вакансию в кратчайшие сроки через личный кабинет.
              </p>
              <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl" style={{ background: 'var(--hk-paper)', border: '1px solid var(--hk-line)' }}>
                {EMPLOYER_LINKS.map(({ icon, label, href }) => (
                  <Link key={label} to={href}
                    className="Hamkor-link-accent flex items-center gap-2 text-[13px] font-bold"
                    style={{ color: 'var(--hk-ink)' }}
                  >
                    <i className={`${icon} text-[13px]`} style={{ color: 'var(--hk-signal)', opacity: 0.75 }} aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                to="/Job"
                className="Hamkor-btn-primary mt-auto inline-flex items-center justify-center gap-2 text-[13px] font-black px-6 py-3 rounded-xl text-white w-full"
                style={{ background: 'var(--hk-signal)' }}
              >
                Начать подбор кадров <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
              </Link>
            </div>

            <div
              className="Hamkor-elevate-card flex flex-col h-full rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ background: 'var(--hk-panel)', border: '1px solid var(--hk-line)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--hk-accent)' }} aria-hidden="true" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: 'var(--hk-accent-soft)' }}>
                  <i className="fa-solid fa-user text-[22px]" style={{ color: 'var(--hk-accent)' }} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider" style={{ background: 'var(--hk-accent-soft)', color: 'var(--hk-accent)' }}>
                  IT-Таланты
                </span>
              </div>
              <h3 className="text-xl font-black mb-1.5" style={{ color: 'var(--hk-ink)' }}>Соискатель</h3>
              <p className="text-[13px] leading-[1.55] mb-5 max-w-sm" style={{ color: 'var(--hk-mute)' }}>
                Создайте профессиональное резюме, отслеживайте просмотры и получайте прямые офферы.
              </p>
              <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl" style={{ background: 'var(--hk-paper)', border: '1px solid var(--hk-line)' }}>
                {SEEKER_LINKS.map(({ icon, label, href }) => (
                  <Link key={label} to={href}
                    className="Hamkor-link-accent flex items-center gap-2 text-[13px] font-bold"
                    style={{ color: 'var(--hk-ink)' }}
                  >
                    <i className={`${icon} text-[13px]`} style={{ color: 'var(--hk-accent)', opacity: 0.8 }} aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                to="/Imployer"
                className="Hamkor-btn-secondary mt-auto inline-flex items-center justify-center gap-2 text-[13px] font-black px-6 py-3 rounded-xl w-full"
                style={{ background: 'var(--hk-ink)', color: 'white' }}
              >
                Найти работу мечты <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection