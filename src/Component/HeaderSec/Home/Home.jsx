import { useState, useCallback, useRef } from 'react'
import logo from '../../../assets/Recruit.png'

const CITIES = [
  { value: '',            label: 'Весь Таджикистан' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'remote',      label: 'Удалённо' },
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
]

// Работодатели, размещённые вокруг логотипа на матовом фоне — реальные клиенты продукта
const EMPLOYER_BADGES = [
  { label: 'IT Service-Frontend Developer', style: { top: '2%',   left: '6%' },   delay: '0.2s' },
  { label: 'Эсхата-Backend Developer',     style: { top: '8%',   right: '0%' },  delay: '0.7s' },
  { label: 'DC-Quality Assuarence',         style: { top: '42%',  left: '-8%' },  delay: '1.2s' },
  { label: 'Payme-Machine Learning',      style: { top: '42%',  right: '-8%' }, delay: '1.7s' },
  { label: 'Click-Full Stack',      style: { bottom: '6%', left: '10%' }, delay: '2.2s' },
  { label: 'Alif-Cyber Security',       style: { bottom: '0%', right: '6%' }, delay: '2.7s' },
]

function Main({ onSearch, onPostJob }) {
  const [query, setQuery] = useState('')
  const [city,  setCity]  = useState('')
  const [tilt,  setTilt]  = useState({ x: 0, y: 0 })
  const visualRef = useRef(null)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (onSearch) onSearch({ query: query.trim(), city })
  }, [query, city, onSearch])

  const handlePostJob = useCallback(() => {
    if (onPostJob) onPostJob()
  }, [onPostJob])

  // 3D-наклон композиции вслед за курсором: смещение от центра блока переводим в градусы поворота
  const handleMouseMove = useCallback((e) => {
    const el = visualRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width   // 0..1
    const py = (e.clientY - rect.top) / rect.height    // 0..1
    const rotateY = (px - 0.5) * 22   // влево/вправо
    const rotateX = (0.5 - py) * 18   // вверх/вниз
    setTilt({ x: rotateX, y: rotateY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
  }, [])

  return (
    <section
      id="home"
      className="w-full border-b px-4 py-14 md:px-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#FDF6EE', borderColor: '#EFE0D0' }}
      aria-label="Поиск IT-вакансий"
    >
      {/* Локальные keyframes для анимации логотипа */}
      <style>{`
        @keyframes HamkorFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes HamkorOrbit {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-6px) scale(1.03); }
        }
        @keyframes HamkorGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%      { opacity: 0.8; transform: scale(1.06); }
        }
        .Hamkor-visual {
          transition: transform 0.15s ease-out;
          transform-style: preserve-3d;
        }
        .Hamkor-tilt-content {
          transform-style: preserve-3d;
        }
        @media (prefers-reduced-motion: reduce) {
          .Hamkor-float, .Hamkor-orbit, .Hamkor-glow, .Hamkor-visual { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-6 items-center w-full">

        {/* Колонка: текст и форма */}
        <div className="flex flex-col items-start w-full min-w-0">

          {/* Бейдж */}
          <div
            className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-6"
            style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: '#F97316' }} />
            На шаг ближе к команде мечты
          </div>

          {/* Заголовок */}
          <h1 className="text-3xl md:text-[46px] font-extrabold leading-[1.1] tracking-[-1.5px] mb-4 max-w-2xl" style={{ color: '#0D1B2A' }}>
            Найдите работу{' '}
            <span style={{ color: '#f58a3e' }}>своей мечты</span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-[15px] leading-[1.65] max-w-xl mb-8" style={{ color: '#7A6B5D' }}>
            Вакансии от ведущих IT-компаний и банков Таджикистана и СНГ.<br className="hidden md:inline" />
            Резюме, отклик, оффер — всё в одном месте.
          </p>

          {/* Форма поиска */}
          <form
            onSubmit={handleSubmit}
            role="search"
            className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-3xl rounded-2xl p-1.5 gap-2 mb-6 bg-white"
            style={{ border: '1.5px solid #E8D5C4' }}
          >
            <div className="flex items-center flex-1 min-w-0 pl-3 gap-2">
              <svg className="w-4.25 h-4.25 shrink-0" style={{ color: '#C2A48A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                style={{ color: '#0D1B2A' }}
              />
            </div>

            <div className="hidden sm:block w-px h-5 shrink-0" style={{ background: '#E8D5C4' }} />

            <div className="flex items-center px-3 sm:px-0">
              <label htmlFor="city-select" className="sr-only">Город</label>
              <select
                id="city-select"
                value={city}
                onChange={e => setCity(e.target.value)}
                className="text-[13px] bg-transparent outline-none cursor-pointer py-3 pr-4 shrink-0 font-medium w-full sm:w-auto"
                style={{ color: '#7A6B5D' }}
              >
                {CITIES.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 text-white px-6 py-3 sm:py-2.5 rounded-xl text-[14px] font-bold shrink-0 transition-colors"
              style={{ background: '#F97316' }}
              onMouseOver={e => e.currentTarget.style.background = '#E06413'}
              onMouseOut={e => e.currentTarget.style.background = '#F97316'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              Найти работу
            </button>
          </form>

          {/* CTA: разместить вакансию */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="button"
              onClick={handlePostJob}
              className="inline-flex items-center justify-center gap-2 text-[14px] font-bold px-6 py-3 rounded-xl transition-colors"
              style={{ background: '#0D1B2A', color: '#fff' }}
              onMouseOver={e => e.currentTarget.style.background = '#1B2E42'}
              onMouseOut={e => e.currentTarget.style.background = '#0D1B2A'}
            >
              <i className="fa-solid fa-file-plus text-[13px]" aria-hidden="true" />
              Разместить вакансию
            </button>
            <span className="text-[13px] font-medium" style={{ color: '#B0A090' }}>
              Бесплатно для первой публикации
            </span>
          </div>
        </div>

        {/* Колонка: визуальная композиция — матовое стекло с работодателями, наклоняется к курсору */}
        <div
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:flex relative items-center justify-center h-110 select-none"
          style={{ perspective: '1000px' }}
          aria-hidden="true"
        >
          <div
            className="Hamkor-visual relative w-full h-full flex items-center justify-center"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="Hamkor-tilt-content relative w-full h-full flex items-center justify-center">

              {/* Мягкое фоновое свечение позади стекла */}
              <div
                className="Hamkor-glow absolute w-75 h-75 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, #FDCFA0 0%, transparent 70%)', animation: 'HamkorGlow 5s ease-in-out infinite' }}
              />

              {/* Матовая прозрачная панель — основа композиции */}
              <div
                className="absolute w-90 h-90 rounded-[40px]"
                style={{
                  background: 'rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 24px 64px -16px rgba(13,27,42,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                  transform: 'translateZ(0px)',
                }}
              />

              {/* Карточка с логотипом — приподнята над стеклом по Z, главный фокус */}
              <div
                className="Hamkor-float relative z-10 flex items-center justify-center w-37.5 h-35.5 rounded-[26px] bg-white overflow-hidden"
                style={{
                  boxShadow: '0 24px 48px -12px rgba(13,27,42,0.22), 0 0 0 1px #F3E2CE',
                  animation: 'HamkorFloat 6s ease-in-out infinite',
                  transform: 'translateZ(60px)',
                }}
              >
                <img src={logo} alt="Hamkor" className="w-37.5 h-152 object-contain" />
              </div>

              {/* Работодатели — текстовые карточки на матовом стекле, парят на разной высоте по Z */}
              {EMPLOYER_BADGES.map(({ label, style, delay }, i) => (
                <div
                  key={label}
                  className="Hamkor-orbit absolute z-20 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-[12px] font-bold whitespace-nowrap"
                  style={{
                    ...style,
                    color: '#0D1B2A',
                    boxShadow: '0 10px 24px -8px rgba(13,27,42,0.18), 0 0 0 1px #F3E2CE',
                    animation: 'HamkorOrbit 4s ease-in-out infinite',
                    animationDelay: delay,
                    transform: `translateZ(${30 + (i % 3) * 10}px)`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Main