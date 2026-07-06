// import { useState, useCallback, useRef } from 'react'
// import { Link } from 'react-router-dom'   // ← добавь
// // import logo from '../../../assets/Recruit.png'
// import logo from '../../../assets/Hamkor.png'
// // import Job from "./Component/HeaderSec/Imployer/Imployer"

// const TAGS = ['Frontend', 'Backend', 'React', 'Python', 'DevOps', 'Mobile', 'UI/UX', 'Angular']

// const CITIES = [
//   { value: '',            label: 'Весь Таджикистан' },
//   { value: 'khujand',     label: 'Худжанд' },
//   { value: 'remote',      label: 'Удалённо' },
//   { value: 'dushanbe',    label: 'Душанбе' },
//   { value: 'istaravshan', label: 'Истаравшан' },
// ]

// const STATS = [
//   { num: '1 200+', label: 'Активных вакансий' },
//   { num: '340+',   label: 'IT-компаний' },
//   { num: '8 500+', label: 'Кандидатов' },
// ]

// const EMPLOYER_LINKS = [
//   { icon: 'fa-solid fa-file-plus',  label: 'Разместить вакансию', href: '/post-job' },
//   { icon: 'fa-solid fa-users',      label: 'База резюме',         href: '/resume' },
//   { icon: 'fa-solid fa-chart-bar',  label: 'Аналитика рынка',     href: '/analytics' },
// ]

// const SEEKER_LINKS = [
//   { icon: 'fa-solid fa-magnifying-glass', label: 'Все вакансии',            href: '/Job' },
//   { icon: 'fa-solid fa-file-lines',       label: 'Создать резюме',          href: '/resume/new' },
//   { icon: 'fa-solid fa-bell',             label: 'Уведомления о вакансиях', href: '/alerts' },
// ]

// const EMPLOYER_BADGES = [
//   { label: 'IT Service-Frontend Developer', style: { top: '2%',   left: '6%' },   delay: '0.2s' },
//   { label: 'Эсхата-Backend Developer',      style: { top: '8%',   right: '0%' },  delay: '0.7s' },
//   { label: 'DC-Quality Assuarence',         style: { top: '42%',  left: '-8%' },  delay: '1.2s' },
//   { label: 'Payme-Machine Learning',        style: { top: '42%',  right: '-8%' }, delay: '1.7s' },
//   { label: 'Click-Full Stack',              style: { bottom: '6%', left: '10%' }, delay: '2.2s' },
//   { label: 'Alif-Cyber Security',           style: { bottom: '0%', right: '6%' }, delay: '2.7s' },
// ]

// function HeroSection({ onSearch }) {
//   const [query,     setQuery]     = useState('')
//   const [city,      setCity]      = useState('')
//   const [activeTag, setActiveTag] = useState('Frontend')
//   const [tilt,      setTilt]      = useState({ x: 0, y: 0 })
//   const visualRef = useRef(null)

//   const handleTagClick = useCallback((tag) => {
//     setActiveTag(tag)
//     setQuery(tag)
//   }, [])

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault()
//     if (query.trim() && onSearch) onSearch({ query: query.trim(), city })
//   }, [query, city, onSearch])

//   const handleMouseMove = useCallback((e) => {
//     const el = visualRef.current
//     if (!el) return
//     const rect = el.getBoundingClientRect()
//     const px = (e.clientX - rect.left) / rect.width
//     const py = (e.clientY - rect.top) / rect.height
//     const rotateY = (px - 0.5) * 22
//     const rotateX = (0.5 - py) * 18
//     setTilt({ x: rotateX, y: rotateY })
//   }, [])

//   const handleMouseLeave = useCallback(() => {
//     setTilt({ x: 0, y: 0 })
//   }, [])

//   return (
//     <section
//       className="w-full border-b px-4 py-8 md:px-12 md:py-16 overflow-hidden"
//       style={{ backgroundColor: '#FDF6EE', borderColor: '#EFE0D0' }}
//       aria-label="Поиск IT-вакансий"
//     >
//       <style>{`
//         @keyframes HamkorFloat {
//           0%, 100% { transform: translateY(0px); }
//           50%      { transform: translateY(-10px); }
//         }
//         @keyframes HamkorOrbit {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50%      { transform: translateY(-6px) scale(1.03); }
//         }
//         @keyframes HamkorGlow {
//           0%, 100% { opacity: 0.5; transform: scale(1); }
//           50%      { opacity: 0.8; transform: scale(1.06); }
//         }
//         .Hamkor-visual {
//           transition: transform 0.15s ease-out;
//           transform-style: preserve-3d;
//         }
//         .Hamkor-tilt-content {
//           transform-style: preserve-3d;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .Hamkor-float, .Hamkor-orbit, .Hamkor-glow, .Hamkor-visual { animation: none !important; transition: none !important; }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-6 items-center w-full">
//           <div className="flex flex-col items-start w-full min-w-0">

//             <div
//               className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-6"
//               style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
//             >
//               <span className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: '#F97316' }} />
//               На шаг ближе к команде мечты
//             </div>

//             <h1 className="text-3xl md:text-[46px] font-extrabold leading-[1.1] tracking-[-1.5px] mb-4 max-w-2xl" style={{ color: '#0D1B2A' }}>
//               Найди работу в IT,{' '}
//               <span className="block md:inline">
//                 которая{' '}
//                 <span className="relative" style={{ color: '#f58a3e' }}>
//                   подходит тебе
//                   <span className="absolute left-0 -bottom-1 w-full h-0.75 rounded-full" style={{ background: '#f9741600' }} aria-hidden="true" />
//                 </span>
//               </span>
//             </h1>

//             <p className="text-[15px] leading-[1.65] max-w-xl mb-8" style={{ color: '#7A6B5D' }}>
//               Вакансии от ведущих IT-компаний и банков Таджикистана и СНГ.<br className="hidden md:inline" />
//               Резюме, отклик, оффер — всё в одном месте.
//             </p>

//             {/* Форма поиска — кнопка стала Link */}
//             <form
//               onSubmit={handleSubmit}
//               role="search"
//               className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-3xl rounded-2xl p-1.5 gap-2 mb-4 bg-white"
//               style={{ border: '1.5px solid #E8D5C4' }}
//             >
//               <div className="flex items-center flex-1 min-w-0 pl-3 gap-2">
//                 <svg className="w-4.25 h-4.25 shrink-0" style={{ color: '#C2A48A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//                 </svg>
//                 <input
//                   type="search"
//                   value={query}
//                   onChange={e => setQuery(e.target.value)}
//                   placeholder="Должность, компания или навык..."
//                   aria-label="Поиск вакансий"
//                   autoComplete="off"
//                   className="w-full py-3 text-[14px] bg-transparent outline-none"
//                   style={{ color: '#0D1B2A' }}
//                 />
//               </div>

//               <div className="hidden sm:block w-px h-5 shrink-0" style={{ background: '#E8D5C4' }} />

//               <div className="flex items-center px-3 sm:px-0">
//                 <label htmlFor="city-select" className="sr-only">Город</label>
//                 <select
//                   id="city-select"
//                   value={city}
//                   onChange={e => setCity(e.target.value)}
//                   className="text-[13px] bg-transparent outline-none cursor-pointer py-3 pr-4 shrink-0 font-medium w-full sm:w-auto"
//                   style={{ color: '#7A6B5D' }}
//                 >
//                   {CITIES.map(({ value, label }) => (
//                     <option key={value} value={value}>{label}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* ✅ Кнопка поиска → Link */}
//               <Link
//                 to="/Job"
//                 className="flex items-center justify-center gap-2 text-white px-6 py-3 sm:py-2.5 rounded-xl text-[14px] font-bold shrink-0 transition-colors"
//                 style={{ background: '#F97316' }}
//                 onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//                 onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//                 </svg>
//                 Найти вакансии
//               </Link>
//             </form>

//             {/* Популярные теги — без изменений */}
//             <div className="flex flex-wrap items-center gap-2 mb-8" role="group" aria-label="Популярные категории">
//               <span className="text-[11px] font-bold uppercase tracking-wider mr-1" style={{ color: '#B0A090' }}>Популярное:</span>
//               {TAGS.map(tag => (
//                 <button
//                   key={tag}
//                   type="button"
//                   onClick={() => handleTagClick(tag)}
//                   aria-pressed={activeTag === tag}
//                   className="text-[12px] font-medium px-3.5 py-1.5 rounded-lg transition-all"
//                   style={activeTag === tag
//                     ? { background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }
//                     : { background: '#FFF8F2', border: '1px solid #E8D5C4', color: '#7A6B5D' }
//                   }
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>

//             {/* Статистика — без изменений */}
//             <div className="flex flex-wrap items-center gap-y-4 gap-x-8 md:gap-x-12 pt-6 w-full border-t" style={{ borderColor: '#EFE0D0' }}>
//               {STATS.map((stat, i) => (
//                 <div key={stat.label} className="flex flex-col items-start sm:pr-12 relative">
//                   <div className="text-2xl md:text-[28px] font-extrabold tracking-[-1px] leading-none" style={{ color: '#0D1B2A' }}>{stat.num}</div>
//                   <div className="text-[11px] font-bold mt-1.5 uppercase tracking-wider" style={{ color: '#B0A090' }}>{stat.label}</div>
//                   {i < STATS.length - 1 && (
//                     <div className="hidden sm:block absolute right-0 top-1/4 w-px h-1/2" style={{ background: '#EFE0D0' }} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Визуальная композиция — без изменений */}
//           <div
//             ref={visualRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className="hidden lg:flex relative items-center justify-center h-110 select-none"
//             style={{ perspective: '1000px' }}
//             aria-hidden="true"
//           >
//             <div
//               className="Hamkor-visual relative w-full h-full flex items-center justify-center"
//               style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
//             >
//               <div className="Hamkor-tilt-content relative w-full h-full flex items-center justify-center">
//                 <div
//                   className="Hamkor-glow absolute w-75 h-75 rounded-full blur-3xl"
//                   style={{ background: 'radial-gradient(circle, #FDCFA0 0%, transparent 70%)', animation: 'HamkorGlow 5s ease-in-out infinite' }}
//                 />
//                 <div
//                   className="absolute w-90 h-90 rounded-[40px]"
//                   style={{
//                     background: 'rgba(255,255,255,0.35)',
//                     backdropFilter: 'blur(18px)',
//                     WebkitBackdropFilter: 'blur(18px)',
//                     border: '1px solid rgba(255,255,255,0.6)',
//                     boxShadow: '0 24px 64px -16px rgba(13,27,42,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
//                     transform: 'translateZ(0px)',
//                   }}
//                 />
//                 <div
//                   className="Hamkor-float relative z-10 flex items-center justify-center w-37.5 h-35.5 rounded-[26px] bg-white overflow-hidden"
//                   style={{
//                     boxShadow: '0 24px 48px -12px rgba(13,27,42,0.22), 0 0 0 1px #F3E2CE',
//                     animation: 'HamkorFloat 6s ease-in-out infinite',
//                     transform: 'translateZ(60px)',
//                   }}
//                 >
//                   <img src={logo} alt="Hamkor" className="w-37.5 h-38 object-contain" />
//                 </div>
//                 {EMPLOYER_BADGES.map(({ label, style, delay }, i) => (
//                   <div
//                     key={label}
//                     className="Hamkor-orbit absolute z-20 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-[12px] font-bold whitespace-nowrap"
//                     style={{
//                       ...style,
//                       color: '#0D1B2A',
//                       boxShadow: '0 10px 24px -8px rgba(13,27,42,0.18), 0 0 0 1px #F3E2CE',
//                       animation: 'HamkorOrbit 4s ease-in-out infinite',
//                       animationDelay: delay,
//                       transform: `translateZ(${30 + (i % 3) * 10}px)`,
//                     }}
//                   >
//                     <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
//                     {label}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Нижняя секция карточки */}
//         <div className="flex flex-col gap-6 pt-6 border-t" style={{ borderColor: '#EFE0D0' }}>
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//             <p className="text-[11px] font-bold uppercase tracking-[.15em]" style={{ color: '#C2A48A' }}>Быстрые действия</p>
//             <p className="text-[12px] font-medium" style={{ color: '#B0A090' }}>
//               Доверяют лучшие:{' '}
//               <span style={{ color: '#A48E7A' }}>IT Service · Эсхата · DC · Payme · Click</span>
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

//             {/* Карточка: Работодатель */}
//             <div
//               className="flex flex-col h-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
//               style={{ background: '#FFF3E5', border: '2px solid #FFC894' }}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-white">
//                   <i className="fa-solid fa-building text-[22px]" style={{ color: '#F97316' }} aria-hidden="true" />
//                 </div>
//                 <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white tracking-wider" style={{ background: '#F97316' }}>
//                   Компании
//                 </span>
//               </div>
//               <h3 className="text-xl font-black mb-1.5" style={{ color: '#4A1D00' }}>Работодатель</h3>
//               <p className="text-[13px] leading-[1.55] mb-5 font-medium max-w-sm" style={{ color: '#7C4217' }}>
//                 Найдите готовых специалистов и разместите вакансию в кратчайшие сроки через личный кабинет.
//               </p>
//               <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid #FCD4AD' }}>
//                 {EMPLOYER_LINKS.map(({ icon, label, href }) => (
//                   <Link key={label} to={href}
//                     className="flex items-center gap-2.5 text-[13px] font-bold transition-colors"
//                     style={{ color: '#5C3415' }}
//                     onMouseOver={e => e.currentTarget.style.color = '#F97316'}
//                     onMouseOut={e => e.currentTarget.style.color = '#5C3415'}
//                   >
//                     <i className={`${icon} text-[13px]`} style={{ color: '#F97316', opacity: 0.7 }} aria-hidden="true" />
//                     {label}
//                   </Link>
//                 ))}
//               </div>
//               {/* ✅ Кнопка работодателя → Link */}
//               <Link
//                 to="/Job"
//                 className="mt-auto inline-flex items-center justify-center gap-2 text-[13px] font-black px-6 py-3 rounded-xl text-white transition-colors w-full"
//                 style={{ background: '#F97316' }}
//                 onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//                 onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//               >
//                 Начать подбор кадров <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//               </Link>
//             </div>

//             {/* Карточка: Соискатель */}
//             <div
//               className="flex flex-col h-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
//               style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '2px solid #334155' }}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
//                   <i className="fa-solid fa-user text-[22px] text-white" aria-hidden="true" />
//                 </div>
//                 <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white tracking-wider" style={{ background: 'rgba(255,255,255,0.2)' }}>
//                   IT-Таланты
//                 </span>
//               </div>
//               <h3 className="text-xl font-black mb-1.5 text-white">Соискатель</h3>
//               <p className="text-[13px] leading-[1.55] mb-5 max-w-sm" style={{ color: '#94a3b8' }}>
//                 Создайте профессиональное резюме, отслеживайте просмотры и получайте прямые офферы.
//               </p>
//               <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
//                 {SEEKER_LINKS.map(({ icon, label, href }) => (
//                   <Link key={label} to={href}
//                     className="flex items-center gap-2.5 text-[13px] font-bold transition-colors"
//                     style={{ color: '#e2e8f0' }}
//                     onMouseOver={e => e.currentTarget.style.color = '#F97316'}
//                     onMouseOut={e => e.currentTarget.style.color = '#e2e8f0'}
//                   >
//                     <i className={`${icon} text-[13px]`} style={{ color: '#475569' }} aria-hidden="true" />
//                     {label}
//                   </Link>
//                 ))}
//               </div>
//               {/* ✅ Кнопка соискателя → Link */}
//               <Link
//                 to="/Job"
//                 className="mt-auto inline-flex items-center justify-center gap-2 text-[13px] font-black px-6 py-3 rounded-xl transition-colors w-full"
//                 style={{ background: 'white', color: '#0F172A' }}
//                 onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'}
//                 onMouseOut={e => e.currentTarget.style.background = 'white'}
//               >
//                 Найти работу мечты <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection










import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../../assets/Recruit.png'
import logo from '../../../assets/Hamkor.png'

const TAGS = ['Frontend', 'Backend', 'React', 'Python', 'DevOps', 'Mobile', 'UI/UX', 'Angular']

const CITIES = [
  { value: '',            label: 'Весь Таджикистан' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'remote',      label: 'Удалённо' },
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
]

const STATS = [
  { num: '1 200+', label: 'Активных вакансий' },
  { num: '340+',   label: 'IT-компаний' },
  { num: '8 500+', label: 'Кандидатов' },
]

const EMPLOYER_LINKS = [
  { icon: 'fa-solid fa-file-plus',  label: 'Разместить вакансию', href: '/post-job' },
  { icon: 'fa-solid fa-users',      label: 'База резюме',         href: '/resume' },
  { icon: 'fa-solid fa-chart-bar',  label: 'Аналитика рынка',     href: '/analytics' },
]

const SEEKER_LINKS = [
  { icon: 'fa-solid fa-magnifying-glass', label: 'Все вакансии',            href: '/Job' },
  { icon: 'fa-solid fa-file-lines',       label: 'Создать резюме',          href: '/resume/new' },
  { icon: 'fa-solid fa-bell',             label: 'Уведомления о вакансиях', href: '/alerts' },
]

// Внешнее орбитальное кольцо — крупные, насыщенные значки
const ORBIT_OUTER = [
  { icon: 'fa-solid fa-code',       bg: 'var(--hk-blue)' },
  { icon: 'fa-solid fa-briefcase',  bg: 'var(--hk-navy)' },
  { icon: 'fa-solid fa-chart-line', bg: 'var(--hk-orange)' },
]

// Внутреннее орбитальное кольцо — стеклянные значки, вращаются в обратную сторону
const ORBIT_INNER = [
  { icon: 'fa-solid fa-cloud' },
  { icon: 'fa-solid fa-shield-halved' },
]

function HeroSection({ onSearch }) {
  const [query,     setQuery]     = useState('')
  const [city,      setCity]      = useState('')
  const [activeTag, setActiveTag] = useState('Frontend')
  const [tilt,      setTilt]      = useState({ rx: 0, ry: 0, mx: 50, my: 50 })
  const cardRef = useRef(null)

  const handleCardMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({
      rx: (0.5 - py) * 8,
      ry: (px - 0.5) * 8,
      mx: px * 100,
      my: py * 100,
    })
  }, [])

  const handleCardMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 })
  }, [])

  const handleTagClick = useCallback((tag) => {
    setActiveTag(tag)
    setQuery(tag)
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (query.trim() && onSearch) onSearch({ query: query.trim(), city })
  }, [query, city, onSearch])

  return (
    <section
      className="Hamkor-hero w-full border-b px-4 py-8 md:px-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: 'var(--hk-bg)', borderColor: 'var(--hk-border-soft)' }}
      aria-label="Поиск IT-вакансий"
    >
      <style>{`
        .Hamkor-hero {
          --hk-bg: #F5F7FA;
          --hk-surface: #FFFFFF;
          --hk-border: #E1E7EF;
          --hk-border-soft: #DCE3EC;
          --hk-navy: #0B1F3A;
          --hk-navy-soft: #14304F;
          --hk-blue: #1D4ED8;
          --hk-blue-soft: #EFF6FF;
          --hk-blue-border: #BFDBFE;
          --hk-orange: #F97316;
          --hk-orange-hover: #E0670B;
          --hk-muted: #64748B;
          --hk-muted-soft: #94A3B8;
          --hk-green: #16A34A;
          --hk-shadow-xs: 0 1px 2px rgba(11,31,58,0.05);
          --hk-shadow-sm: 0 1px 2px rgba(11,31,58,0.04), 0 2px 6px -2px rgba(11,31,58,0.08);
          --hk-shadow-md: 0 1px 2px rgba(11,31,58,0.05), 0 10px 24px -10px rgba(11,31,58,0.16);
          --hk-shadow-lg: 0 4px 10px -2px rgba(11,31,58,0.08), 0 24px 48px -16px rgba(11,31,58,0.18);
          --hk-shadow-lg-hover: 0 8px 18px -4px rgba(11,31,58,0.12), 0 32px 64px -16px rgba(11,31,58,0.24);
        }

        .Hamkor-fade-in { animation: HamkorFadeIn 0.6s ease both; }
        @keyframes HamkorFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .Hamkor-tile-in {
          opacity: 0;
          animation: HamkorTileIn 0.4s ease forwards;
        }
        @keyframes HamkorTileIn {
          from { opacity: 0; transform: translateY(6px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .Hamkor-live-dot { animation: HamkorPulse 2s ease-in-out infinite; }
        @keyframes HamkorPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(22,163,74,0.35); }
          50%      { opacity: 0.7; box-shadow: 0 0 0 4px rgba(22,163,74,0); }
        }
        .Hamkor-tabular { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace; }

        /* Фокус-состояния для клавиатурной навигации */
        .Hamkor-hero a:focus-visible,
        .Hamkor-hero button:focus-visible,
        .Hamkor-hero input:focus-visible,
        .Hamkor-hero select:focus-visible {
          outline: 2px solid var(--hk-blue);
          outline-offset: 2px;
          border-radius: 8px;
        }

        /* Поисковая форма — приподнимается при фокусе */
        .Hamkor-search-form {
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: var(--hk-shadow-xs);
        }
        .Hamkor-search-form:focus-within {
          box-shadow: var(--hk-shadow-md);
          border-color: var(--hk-blue-border) !important;
        }

        /* Первичная CTA-кнопка: внутренний блик + нажатие */
        .Hamkor-btn-primary {
          position: relative;
          box-shadow: var(--hk-shadow-sm);
          transition: box-shadow 0.2s ease, transform 0.15s ease, background-color 0.2s ease;
        }
        .Hamkor-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0) 55%);
          pointer-events: none;
        }
        .Hamkor-btn-primary:hover { box-shadow: var(--hk-shadow-md); background: var(--hk-orange-hover) !important; }
        .Hamkor-btn-primary:active { transform: scale(0.97); box-shadow: var(--hk-shadow-xs); }

        .Hamkor-btn-secondary {
          transition: box-shadow 0.2s ease, transform 0.15s ease, background-color 0.2s ease;
        }
        .Hamkor-btn-secondary:hover { background: #F1F5F9 !important; }
        .Hamkor-btn-secondary:active { transform: scale(0.97); }

        /* Ссылки быстрых действий внутри карточек — переход в акцентный цвет */
        .Hamkor-link-accent { transition: color 0.15s ease; }
        .Hamkor-link-accent:hover { color: var(--hk-orange) !important; }

        /* Теги популярных категорий */
        .Hamkor-tag { transition: box-shadow 0.15s ease, transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease; }
        .Hamkor-tag:hover { box-shadow: var(--hk-shadow-xs); transform: translateY(-1px); }
        .Hamkor-tag:active { transform: translateY(0) scale(0.97); }

        /* Нижние карточки — синхронный подъём и усиление тени */
        .Hamkor-elevate-card {
          transition: transform 0.3s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s cubic-bezier(.2,.8,.2,1);
          box-shadow: var(--hk-shadow-sm);
        }
        .Hamkor-elevate-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--hk-shadow-lg-hover);
        }

        /* Правая карточка с орбитой */
        .Hamkor-orbit-card {
          box-shadow: var(--hk-shadow-lg);
          transition: box-shadow 0.3s ease;
          will-change: transform;
        }
        .Hamkor-orbit-card:hover { box-shadow: var(--hk-shadow-lg-hover); }

        /* Мягкое свечение позади карточки — связывает её с фоном секции */
        .Hamkor-orbit-glow {
          position: absolute;
          inset: -10%;
          background: radial-gradient(60% 60% at 50% 45%, rgba(29,78,216,0.10), transparent 70%);
          filter: blur(20px);
          pointer-events: none;
          z-index: 0;
        }

        .Hamkor-orbit-track { position: absolute; inset: 0; pointer-events: none; }
        .Hamkor-orbit-track--outer { animation: HamkorOrbitSpin 22s linear infinite; }
        .Hamkor-orbit-track--inner { animation: HamkorOrbitSpin 14s linear infinite reverse; }
        @keyframes HamkorOrbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .Hamkor-orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--size, 40px);
          height: var(--size, 40px);
          margin-top: calc(var(--size, 40px) / -2);
          margin-left: calc(var(--size, 40px) / -2);
          transform: rotate(var(--angle, 0deg)) translateX(var(--radius, 100px));
        }
        .Hamkor-orbit-item-inner {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .Hamkor-orbit-item-inner--outer {
          animation: HamkorOrbitSpinReverse 22s linear infinite, HamkorOrbitDepth 5s ease-in-out infinite;
          box-shadow: var(--hk-shadow-md);
        }
        .Hamkor-orbit-item-inner--inner {
          animation: HamkorOrbitSpin 14s linear infinite, HamkorOrbitDepth 5s ease-in-out infinite;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(29,78,216,0.22);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        @keyframes HamkorOrbitSpinReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        /* Лёгкая пульсация прозрачности — псевдо-глубина, значки будто проходят "дальний" и "ближний" план */
        @keyframes HamkorOrbitDepth {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.6; }
        }

        .Hamkor-orbit-halo {
          position: absolute;
          inset: 8%;
          border-radius: 9999px;
          border: 1px dashed rgba(11,31,58,0.08);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .Hamkor-fade-in, .Hamkor-tile-in, .Hamkor-live-dot,
          .Hamkor-orbit-track--outer, .Hamkor-orbit-track--inner,
          .Hamkor-orbit-item-inner--outer, .Hamkor-orbit-item-inner--inner {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-8 items-center w-full">
          <div className="flex flex-col items-start w-full min-w-0">

            <div
              className="Hamkor-fade-in inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-6"
              style={{ background: 'var(--hk-blue-soft)', border: '1px solid var(--hk-blue-border)', color: 'var(--hk-blue)', boxShadow: 'var(--hk-shadow-xs)' }}
            >
              <i className="fa-solid fa-shield-halved text-[11px]" aria-hidden="true" />
              Проверенные IT-работодатели Таджикистана
            </div>

            <h1
              className="Hamkor-fade-in text-3xl md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-4 max-w-xl"
              style={{ color: 'var(--hk-navy)', animationDelay: '80ms' }}
            >
              Найди работу в IT,{' '}
              <span className="block md:inline">
                которая{' '}
                <span style={{ color: 'var(--hk-orange)' }}>подходит тебе</span>
              </span>
            </h1>

            <p
              className="Hamkor-fade-in text-[15px] leading-[1.65] max-w-xl mb-8"
              style={{ color: 'var(--hk-muted)', animationDelay: '160ms' }}
            >
              Вакансии от ведущих IT-компаний и банков Таджикистана и СНГ.<br className="hidden md:inline" />
              Резюме, отклик, оффер — всё в одном месте.
            </p>

            {/* Форма поиска */}
            <form
              onSubmit={handleSubmit}
              role="search"
              className="Hamkor-fade-in Hamkor-search-form flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-3xl rounded-2xl p-1.5 gap-2 mb-4 bg-white"
              style={{ border: '1.5px solid var(--hk-border-soft)', animationDelay: '240ms' }}
            >
              <div className="flex items-center flex-1 min-w-0 pl-3 gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--hk-muted-soft)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  style={{ color: 'var(--hk-navy)' }}
                />
              </div>

              <div className="hidden sm:block w-px h-5 shrink-0" style={{ background: 'var(--hk-border-soft)' }} />

              <div className="flex items-center px-3 sm:px-0">
                <label htmlFor="city-select" className="sr-only">Город</label>
                <select
                  id="city-select"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="text-[13px] bg-transparent outline-none cursor-pointer py-3 pr-4 shrink-0 font-medium w-full sm:w-auto"
                  style={{ color: 'var(--hk-muted)' }}
                >
                  {CITIES.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <Link
                to="/Job"
                className="Hamkor-btn-primary flex items-center justify-center gap-2 text-white px-6 py-3 sm:py-2.5 rounded-xl text-[14px] font-bold shrink-0"
                style={{ background: 'var(--hk-orange)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                Найти вакансии
              </Link>
            </form>

            {/* Популярные теги */}
            <div
              className="Hamkor-fade-in flex flex-wrap items-center gap-2 mb-8"
              role="group"
              aria-label="Популярные категории"
              style={{ animationDelay: '320ms' }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider mr-1" style={{ color: 'var(--hk-muted-soft)' }}>Популярное:</span>
              {TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  aria-pressed={activeTag === tag}
                  className="Hamkor-tag text-[12px] font-medium px-3.5 py-1.5 rounded-lg"
                  style={activeTag === tag
                    ? { background: 'var(--hk-blue-soft)', border: '1px solid var(--hk-blue-border)', color: 'var(--hk-blue)' }
                    : { background: 'var(--hk-surface)', border: '1px solid var(--hk-border-soft)', color: 'var(--hk-muted)' }
                  }
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Статистика — моноширинные цифры, финтех-тикер */}
            <div
              className="Hamkor-fade-in flex flex-wrap items-center gap-y-4 gap-x-8 md:gap-x-12 pt-6 w-full border-t"
              style={{ borderColor: 'var(--hk-border)', animationDelay: '400ms' }}
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-start sm:pr-12 relative">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--hk-green)' }} />
                    <div className="Hamkor-tabular text-2xl md:text-[26px] font-bold tracking-tight leading-none" style={{ color: 'var(--hk-navy)' }}>
                      {stat.num}
                    </div>
                  </div>
                  <div className="text-[11px] font-bold mt-1.5 uppercase tracking-wider" style={{ color: 'var(--hk-muted-soft)' }}>{stat.label}</div>
                  {i < STATS.length - 1 && (
                    <div className="hidden sm:block absolute right-0 top-1/4 w-px h-1/2" style={{ background: 'var(--hk-border)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка: логотип по центру, орбита, реакция на курсор */}
          <div className="flex relative items-center justify-center h-72 md:h-96 lg:h-110 select-none" aria-hidden="true">
            <div className="Hamkor-orbit-glow" />
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="Hamkor-fade-in Hamkor-orbit-card relative z-10 w-full max-w-95 h-full rounded-3xl bg-white flex flex-col items-center justify-center overflow-hidden"
              style={{
                border: '1px solid var(--hk-border)',
                transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: 'transform 0.2s ease-out',
                animationDelay: '480ms',
              }}
            >
              {/* Свечение, следующее за курсором */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(360px circle at ${tilt.mx}% ${tilt.my}%, rgba(29,78,216,0.14), transparent 70%)`,
                  transition: 'background 0.15s ease-out',
                }}
              />

              {/* Тонкое направляющее кольцо орбиты */}
              <div className="Hamkor-orbit-halo" />

              {/* Внешнее орбитальное кольцо */}
              <div className="Hamkor-orbit-track Hamkor-orbit-track--outer">
                {ORBIT_OUTER.map((item, i) => (
                  <div
                    key={item.icon}
                    className="Hamkor-orbit-item"
                    style={{
                      '--angle': `${(360 / ORBIT_OUTER.length) * i}deg`,
                      '--radius': 'clamp(76px, 24vw, 138px)',
                      '--size': '40px',
                    }}
                  >
                    <div
                      className="Hamkor-orbit-item-inner Hamkor-orbit-item-inner--outer"
                      style={{ background: item.bg, animationDelay: `0s, ${i * 0.7}s` }}
                    >
                      <i className={`${item.icon} text-white text-[13px]`} aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Внутреннее орбитальное кольцо — стеклянные значки, встречное вращение */}
              <div className="Hamkor-orbit-track Hamkor-orbit-track--inner">
                {ORBIT_INNER.map((item, i) => (
                  <div
                    key={item.icon}
                    className="Hamkor-orbit-item"
                    style={{
                      '--angle': `${(360 / ORBIT_INNER.length) * i + 45}deg`,
                      '--radius': 'clamp(46px, 14vw, 78px)',
                      '--size': '30px',
                    }}
                  >
                    <div
                      className="Hamkor-orbit-item-inner Hamkor-orbit-item-inner--inner"
                      style={{ animationDelay: `0s, ${i * 0.9 + 1.2}s` }}
                    >
                      <i className={`${item.icon} text-[11px]`} style={{ color: 'var(--hk-blue)' }} aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center bg-white"
                style={{
                  border: '1px solid var(--hk-border)',
                  boxShadow: 'var(--hk-shadow-md)',
                  transform: `translateZ(30px) translate(${tilt.ry * 1.2}px, ${-tilt.rx * 1.2}px)`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <img src={logo} alt="Hamkor" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
              </div>

              <p className="relative z-10 mt-6 text-[16px] font-bold tracking-tight" style={{ color: 'var(--hk-navy)' }}>
                Hamkor.tj
              </p>
              <p className="relative z-10 mt-1 text-[12px] font-medium flex items-center gap-1.5" style={{ color: 'var(--hk-muted)' }}>
                <span className="Hamkor-live-dot w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--hk-green)' }} aria-hidden="true" />
                Верифицированная платформа
              </p>
            </div>
          </div>
        </div>

        {/* Нижняя секция карточки */}
        <div className="flex flex-col gap-6 pt-6 border-t" style={{ borderColor: 'var(--hk-border)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[.15em]" style={{ color: 'var(--hk-muted-soft)' }}>Быстрые действия</p>
            <p className="text-[12px] font-medium" style={{ color: 'var(--hk-muted-soft)' }}>
              Доверяют лучшие:{' '}
              <span style={{ color: 'var(--hk-muted)' }}>IT Service · Эсхата · DC · Payme · Click</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            {/* Карточка: Работодатель */}
            <div
              className="Hamkor-elevate-card flex flex-col h-full rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--hk-surface)', border: '1px solid var(--hk-border)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: 'var(--hk-bg)' }}>
                  <i className="fa-solid fa-building text-[22px]" style={{ color: 'var(--hk-orange)' }} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider" style={{ background: 'var(--hk-orange)', color: '#fff' }}>
                  Компании
                </span>
              </div>
              <h3 className="text-xl font-black mb-1.5" style={{ color: 'var(--hk-navy)' }}>Работодатель</h3>
              <p className="text-[13px] leading-[1.55] mb-5 font-medium max-w-sm" style={{ color: 'var(--hk-muted)' }}>
                Найдите готовых специалистов и разместите вакансию в кратчайшие сроки через личный кабинет.
              </p>
              <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl" style={{ background: 'var(--hk-bg)', border: '1px solid var(--hk-border)' }}>
                {EMPLOYER_LINKS.map(({ icon, label, href }) => (
                  <Link key={label} to={href}
                    className="Hamkor-link-accent flex items-center gap-2 text-[13px] font-bold"
                    style={{ color: 'var(--hk-navy)' }}
                  >
                    <i className={`${icon} text-[13px]`} style={{ color: 'var(--hk-orange)', opacity: 0.7 }} aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                to="/Job"
                className="Hamkor-btn-primary mt-auto inline-flex items-center justify-center gap-2 text-[13px] font-black px-6 py-3 rounded-xl text-white w-full"
                style={{ background: 'var(--hk-orange)' }}
              >
                Начать подбор кадров <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
              </Link>
            </div>

            {/* Карточка: Соискатель */}
            <div
              className="Hamkor-elevate-card flex flex-col h-full rounded-2xl p-6 md:p-8"
              style={{ background: 'linear-gradient(135deg, var(--hk-navy-soft) 0%, var(--hk-navy) 100%)', border: '1px solid #1E3A5F' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <i className="fa-solid fa-user text-[22px] text-white" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white tracking-wider" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  IT-Таланты
                </span>
              </div>
              <h3 className="text-xl font-black mb-1.5 text-white">Соискатель</h3>
              <p className="text-[13px] leading-[1.55] mb-5 max-w-sm" style={{ color: 'var(--hk-muted-soft)' }}>
                Создайте профессиональное резюме, отслеживайте просмотры и получайте прямые офферы.
              </p>
              <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {SEEKER_LINKS.map(({ icon, label, href }) => (
                  <Link key={label} to={href}
                    className="Hamkor-link-accent flex items-center gap-2 text-[13px] font-bold"
                    style={{ color: '#E2E8F0' }}
                  >
                    <i className={`${icon} text-[13px]`} style={{ color: 'var(--hk-muted)' }} aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                to="/Job"
                className="Hamkor-btn-secondary mt-auto inline-flex items-center justify-center gap-2 text-[13px] font-black px-6 py-3 rounded-xl w-full"
                style={{ background: 'white', color: 'var(--hk-navy)' }}
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