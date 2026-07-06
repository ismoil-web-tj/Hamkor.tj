// import { useState, useMemo, useCallback, useEffect } from 'react'

// const CATEGORIES = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

// const CITIES = [
//   { value: '',            label: 'Все города' },
//   { value: 'khujand',     label: 'Худжанд' },
//   { value: 'dushanbe',    label: 'Душанбе' },
//   { value: 'istaravshan', label: 'Истаравшан' },
//   { value: 'remote',      label: 'Удалённо' },
// ]

// const EMPLOYMENT_TYPES = [
//   { value: '',           label: 'Любой' },
//   { value: 'full-time',  label: 'Полная занятость' },
//   { value: 'part-time',  label: 'Частичная занятость' },
//   { value: 'remote',     label: 'Удалённая работа' },
//   { value: 'internship', label: 'Стажировка' },
// ]

// const SALARY_MIN = 0
// const SALARY_MAX = 25000

// // Демо-вакансии — можно убрать и передавать свой список через проп `jobs`
// export const SAMPLE_JOBS = [
//   {
//     id: 'j1',
//     title: 'Frontend-разработчик (React)',
//     company: 'IT Service',
//     city: 'khujand',
//     cityLabel: 'Худжанд',
//     category: 'Frontend',
//     employmentType: 'full-time',
//     salaryMin: 8000,
//     salaryMax: 14000,
//     currency: 'TJS',
//     postedAt: '2 дня назад',
//     description: 'Команда IT Service разрабатывает внутренние финтех-продукты для банков-партнёров. Ищем разработчика, который возьмёт на себя клиентскую часть личного кабинета и будет работать в связке с дизайнером и бэкенд-командой.',
//     requirements: [
//       'Опыт работы с React от 2 лет',
//       'Уверенное знание JavaScript (ES6+) и TypeScript',
//       'Опыт работы с REST API',
//       'Знание Git и опыт командной разработки',
//     ],
//     responsibilities: [
//       'Разработка и поддержка пользовательских интерфейсов',
//       'Вёрстка по дизайн-макетам в Figma',
//       'Оптимизация производительности приложений',
//       'Код-ревью и участие в технических обсуждениях',
//     ],
//     contactName: 'Фарход Назаров',
//     contactEmail: 'hr@itservice.tj',
//     contactPhone: '+992 92 777 12 34',
//   },
//   {
//     id: 'j2',
//     title: 'Backend-разработчик (Python)',
//     company: 'Эсхата',
//     city: 'khujand',
//     cityLabel: 'Худжанд',
//     category: 'Backend',
//     employmentType: 'full-time',
//     salaryMin: 10000,
//     salaryMax: 16000,
//     currency: 'TJS',
//     postedAt: '5 дней назад',
//     description: 'Банк Эсхата расширяет команду цифровых продуктов. Нужен бэкенд-разработчик для развития платформы мобильного банкинга и интеграций с платёжными системами.',
//     requirements: [
//       'Python от 3 лет, опыт с Django или FastAPI',
//       'Понимание принципов проектирования баз данных',
//       'Опыт работы с PostgreSQL',
//       'Базовые знания Docker',
//     ],
//     responsibilities: [
//       'Проектирование и разработка серверной логики',
//       'Интеграция с внешними платёжными API',
//       'Обеспечение безопасности и производительности сервисов',
//       'Написание автотестов',
//     ],
//     contactName: 'Шахноза Каримова',
//     contactEmail: 'career@eskhata.tj',
//     contactPhone: '+992 92 555 88 90',
//   },
//   {
//     id: 'j3',
//     title: 'QA-инженер',
//     company: 'DC',
//     city: 'remote',
//     cityLabel: 'Удалённо',
//     category: 'QA',
//     employmentType: 'remote',
//     salaryMin: 6000,
//     salaryMax: 9000,
//     currency: 'TJS',
//     postedAt: 'Сегодня',
//     description: 'DC ищет внимательного QA-инженера для тестирования веб- и мобильных продуктов команды. Полностью удалённый формат работы, гибкий график.',
//     requirements: [
//       'Опыт ручного тестирования от 1 года',
//       'Знание основ тест-дизайна',
//       'Опыт работы с Postman и DevTools',
//       'Будет плюсом: опыт автотестов на Selenium',
//     ],
//     responsibilities: [
//       'Тестирование новых функций перед релизом',
//       'Составление тест-кейсов и баг-репортов',
//       'Регрессионное тестирование',
//       'Взаимодействие с разработчиками по найденным дефектам',
//     ],
//     contactName: 'Алишер Расулов',
//     contactEmail: 'jobs@dc.tj',
//     contactPhone: '+992 93 444 21 09',
//   },
//   {
//     id: 'j4',
//     title: 'Mobile-разработчик (Flutter)',
//     company: 'Payme',
//     city: 'dushanbe',
//     cityLabel: 'Душанбе',
//     category: 'Mobile',
//     employmentType: 'full-time',
//     salaryMin: 12000,
//     salaryMax: 18000,
//     currency: 'TJS',
//     postedAt: '1 неделю назад',
//     description: 'Payme развивает приложение для миллионов пользователей. Ищем мобильного разработчика для команды, отвечающей за основное приложение на Flutter.',
//     requirements: [
//       'Опыт разработки на Flutter от 2 лет',
//       'Понимание архитектурных паттернов (BLoC, Provider)',
//       'Опыт публикации приложений в App Store / Google Play',
//       'Умение работать с push-уведомлениями и аналитикой',
//     ],
//     responsibilities: [
//       'Разработка новых экранов и функций приложения',
//       'Поддержка стабильности и производительности',
//       'Совместная работа с дизайнерами и продуктовой командой',
//       'Участие в планировании релизов',
//     ],
//     contactName: 'Мадина Юсупова',
//     contactEmail: 'hr@payme.tj',
//     contactPhone: '+992 93 222 67 45',
//   },
//   {
//     id: 'j5',
//     title: 'DevOps-инженер',
//     company: 'Click',
//     city: 'remote',
//     cityLabel: 'Удалённо',
//     category: 'DevOps',
//     employmentType: 'remote',
//     salaryMin: 14000,
//     salaryMax: 20000,
//     currency: 'TJS',
//     postedAt: '3 дня назад',
//     description: 'Click ищет DevOps-инженера для автоматизации инфраструктуры и поддержки CI/CD-процессов растущей команды разработки.',
//     requirements: [
//       'Опыт работы с Docker и Kubernetes',
//       'Знание CI/CD (GitLab CI, GitHub Actions)',
//       'Опыт администрирования Linux-серверов',
//       'Понимание основ сетевой безопасности',
//     ],
//     responsibilities: [
//       'Настройка и поддержка CI/CD-пайплайнов',
//       'Мониторинг и обеспечение отказоустойчивости систем',
//       'Автоматизация деплоя и инфраструктуры (IaC)',
//       'Участие в инцидент-менеджменте',
//     ],
//     contactName: 'Бахтиёр Олимов',
//     contactEmail: 'team@click.tj',
//     contactPhone: '+992 90 111 33 22',
//   },
//   {
//     id: 'j6',
//     title: 'UI/UX-дизайнер',
//     company: 'Alif',
//     city: 'dushanbe',
//     cityLabel: 'Душанбе',
//     category: 'UI/UX',
//     employmentType: 'part-time',
//     salaryMin: 5000,
//     salaryMax: 8000,
//     currency: 'TJS',
//     postedAt: '4 дня назад',
//     description: 'Alif ищет дизайнера для проработки интерфейсов финансовых продуктов — от исследования пользователей до готовых макетов в Figma.',
//     requirements: [
//       'Портфолио с реализованными проектами',
//       'Уверенное владение Figma',
//       'Понимание принципов UX-исследований',
//       'Опыт создания дизайн-систем приветствуется',
//     ],
//     responsibilities: [
//       'Проектирование пользовательских интерфейсов',
//       'Создание и поддержка дизайн-системы',
//       'Проведение юзабилити-тестирований',
//       'Подготовка макетов для разработки',
//     ],
//     contactName: 'Зарина Холова',
//     contactEmail: 'design@alif.tj',
//     contactPhone: '+992 98 666 09 78',
//   },
// ]

// function formatSalary(min, max, currency) {
//   const fmt = n => n.toLocaleString('ru-RU')
//   if (min && max) return `${fmt(min)} – ${fmt(max)} ${currency}`
//   if (min) return `от ${fmt(min)} ${currency}`
//   if (max) return `до ${fmt(max)} ${currency}`
//   return 'По договорённости'
// }

// function FilterSidebar({ filters, onChange, onReset, resultCount }) {
//   return (
//     <aside
//       className="w-full lg:w-70 shrink-0 rounded-2xl p-6 h-fit lg:sticky lg:top-6"
//       style={{ background: '#FFF8F2', border: '1.5px solid #E8D5C4' }}
//     >
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-[15px] font-extrabold uppercase tracking-wider" style={{ color: '#0D1B2A' }}>
//           Фильтры
//         </h2>
//         <button
//           type="button"
//           onClick={onReset}
//           className="text-[12px] font-bold transition-colors"
//           style={{ color: '#C2570A' }}
//         >
//           Сбросить
//         </button>
//       </div>

//       {/* Поиск */}
//       <div className="mb-6">
//         <label htmlFor="filter-search" className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//           Поиск
//         </label>
//         <div className="flex items-center gap-2 rounded-xl px-3 bg-white" style={{ border: '1.5px solid #E8D5C4' }}>
//           <svg className="w-4 h-4 shrink-0" style={{ color: '#C2A48A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//           </svg>
//           <input
//             id="filter-search"
//             type="search"
//             value={filters.search}
//             onChange={e => onChange({ ...filters, search: e.target.value })}
//             placeholder="Должность или компания"
//             autoComplete="off"
//             className="w-full py-2.5 text-[13px] bg-transparent outline-none"
//             style={{ color: '#0D1B2A' }}
//           />
//         </div>
//       </div>

//       {/* Город */}
//       <div className="mb-6">
//         <label htmlFor="filter-city" className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//           Город
//         </label>
//         <select
//           id="filter-city"
//           value={filters.city}
//           onChange={e => onChange({ ...filters, city: e.target.value })}
//           className="w-full rounded-xl px-3 py-2.5 text-[13px] bg-white outline-none cursor-pointer font-medium"
//           style={{ border: '1.5px solid #E8D5C4', color: '#0D1B2A' }}
//         >
//           {CITIES.map(({ value, label }) => (
//             <option key={value} value={value}>{label}</option>
//           ))}
//         </select>
//       </div>

//       {/* Категория */}
//       <div className="mb-6">
//         <span className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//           Категория
//         </span>
//         <div className="flex flex-wrap gap-2">
//           {CATEGORIES.map(cat => {
//             const active = filters.category === cat
//             return (
//               <button
//                 key={cat}
//                 type="button"
//                 onClick={() => onChange({ ...filters, category: active ? '' : cat })}
//                 aria-pressed={active}
//                 className="text-[12px] font-medium px-3 py-1.5 rounded-lg transition-all"
//                 style={active
//                   ? { background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }
//                   : { background: '#FFFFFF', border: '1px solid #E8D5C4', color: '#7A6B5D' }
//                 }
//               >
//                 {cat}
//               </button>
//             )
//           })}
//         </div>
//       </div>

//       {/* Зарплата */}
//       <div className="mb-6">
//         <span className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//           Зарплата от
//           <span style={{ color: '#C2570A' }}>{filters.minSalary.toLocaleString('ru-RU')} TJS</span>
//         </span>
//         <input
//           type="range"
//           min={SALARY_MIN}
//           max={SALARY_MAX}
//           step={500}
//           value={filters.minSalary}
//           onChange={e => onChange({ ...filters, minSalary: Number(e.target.value) })}
//           className="w-full accent-orange-500"
//           style={{ accentColor: '#F97316' }}
//         />
//       </div>

//       {/* Тип занятости */}
//       <div className="mb-2">
//         <span className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//           Тип занятости
//         </span>
//         <div className="flex flex-col gap-2">
//           {EMPLOYMENT_TYPES.map(({ value, label }) => (
//             <label key={value || 'any'} className="flex items-center gap-2.5 text-[13px] font-medium cursor-pointer" style={{ color: '#0D1B2A' }}>
//               <input
//                 type="radio"
//                 name="employmentType"
//                 checked={filters.employmentType === value}
//                 onChange={() => onChange({ ...filters, employmentType: value })}
//                 className="w-4 h-4"
//                 style={{ accentColor: '#F97316' }}
//               />
//               {label}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6 pt-5 text-[12px] font-bold" style={{ borderTop: '1px solid #EFE0D0', color: '#B0A090' }}>
//         Найдено: <span style={{ color: '#0D1B2A' }}>{resultCount}</span>
//       </div>
//     </aside>
//   )
// }

// function JobCard({ job, onOpen }) {
//   return (
//     <button
//       type="button"
//       onClick={() => onOpen(job)}
//       className="text-left flex flex-col gap-3 rounded-2xl p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 w-full"
//       style={{ border: '1.5px solid #E8D5C4' }}
//     >
//       <div className="flex items-start justify-between gap-3">
//         <div className="min-w-0">
//           <h3 className="text-[16px] font-extrabold leading-snug truncate" style={{ color: '#0D1B2A' }}>
//             {job.title}
//           </h3>
//           <p className="text-[13px] font-semibold mt-0.5" style={{ color: '#7A6B5D' }}>
//             {job.company}
//           </p>
//         </div>
//         <span
//           className="shrink-0 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider"
//           style={{ background: '#FEE8D0', color: '#C2570A' }}
//         >
//           {job.category}
//         </span>
//       </div>

//       <p className="text-[13px] leading-[1.55] line-clamp-2" style={{ color: '#7A6B5D' }}>
//         {job.description}
//       </p>

//       <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1 pt-3" style={{ borderTop: '1px solid #F3E6D7' }}>
//         <span className="flex items-center gap-1.5 text-[12px] font-bold" style={{ color: '#0D1B2A' }}>
//           <i className="fa-solid fa-sack-dollar text-[11px]" style={{ color: '#F97316' }} aria-hidden="true" />
//           {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
//         </span>
//         <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#B0A090' }}>
//           <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
//           {job.cityLabel}
//         </span>
//         <span className="text-[11px] font-medium ml-auto" style={{ color: '#C2A48A' }}>
//           {job.postedAt}
//         </span>
//       </div>
//     </button>
//   )
// }

// function JobModal({ job, onClose, onApply }) {
//   useEffect(() => {
//     const onKey = e => { if (e.key === 'Escape') onClose() }
//     document.addEventListener('keydown', onKey)
//     return () => document.removeEventListener('keydown', onKey)
//   }, [onClose])

//   if (!job) return null

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
//       style={{ background: 'rgba(13,27,42,0.45)' }}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="job-modal-title"
//       onClick={e => { if (e.target === e.currentTarget) onClose() }}
//     >
//       <div
//         className="relative w-full sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl my-0 sm:my-auto"
//         style={{ border: '1.5px solid #E8D5C4' }}
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Закрыть"
//           className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
//           style={{ background: '#FFF8F2', color: '#7A6B5D' }}
//         >
//           <i className="fa-solid fa-xmark text-[15px]" aria-hidden="true" />
//         </button>

//         <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
//           <span
//             className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider mb-4"
//             style={{ background: '#FEE8D0', color: '#C2570A' }}
//           >
//             {job.category}
//           </span>

//           <h2 id="job-modal-title" className="text-2xl font-extrabold leading-tight mb-1.5" style={{ color: '#0D1B2A' }}>
//             {job.title}
//           </h2>
//           <p className="text-[14px] font-semibold mb-5" style={{ color: '#7A6B5D' }}>
//             {job.company}
//           </p>

//           <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl" style={{ background: '#FFF8F2', border: '1px solid #F3E6D7' }}>
//             <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0D1B2A' }}>
//               <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
//               {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
//             </div>
//             <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#7A6B5D' }}>
//               <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
//               {job.cityLabel}
//             </div>
//             <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#7A6B5D' }}>
//               <i className="fa-solid fa-clock text-[12px]" aria-hidden="true" />
//               {(EMPLOYMENT_TYPES.find(t => t.value === job.employmentType) || {}).label || 'Не указано'}
//             </div>
//           </div>

//           <section className="mb-6">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Описание
//             </h3>
//             <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
//               {job.description}
//             </p>
//           </section>

//           <section className="mb-6">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Требования
//             </h3>
//             <ul className="flex flex-col gap-2">
//               {job.requirements.map((req, i) => (
//                 <li key={i} className="flex items-start gap-2.5 text-[14px] leading-normal" style={{ color: '#3D352B' }}>
//                   <i className="fa-solid fa-check text-[11px] mt-1.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
//                   {req}
//                 </li>
//               ))}
//             </ul>
//           </section>

//           <section className="mb-6">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Обязанности
//             </h3>
//             <ul className="flex flex-col gap-2">
//               {job.responsibilities.map((res, i) => (
//                 <li key={i} className="flex items-start gap-2.5 text-[14px] leading-normal" style={{ color: '#3D352B' }}>
//                   <i className="fa-solid fa-arrow-right text-[11px] mt-1.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
//                   {res}
//                 </li>
//               ))}
//             </ul>
//           </section>

//           <section className="mb-7">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Контакты
//             </h3>
//             <div className="flex flex-col gap-1.5 text-[14px]" style={{ color: '#3D352B' }}>
//               {job.contactName && <span className="font-semibold">{job.contactName}</span>}
//               {job.contactEmail && (
//                 <a href={`mailto:${job.contactEmail}`} className="flex items-center gap-2 hover:underline" style={{ color: '#7A6B5D' }}>
//                   <i className="fa-solid fa-envelope text-[12px]" aria-hidden="true" />
//                   {job.contactEmail}
//                 </a>
//               )}
//               {job.contactPhone && (
//                 <a href={`tel:${job.contactPhone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline" style={{ color: '#7A6B5D' }}>
//                   <i className="fa-solid fa-phone text-[12px]" aria-hidden="true" />
//                   {job.contactPhone}
//                 </a>
//               )}
//             </div>
//           </section>

//           <button
//             type="button"
//             onClick={() => onApply && onApply(job)}
//             className="w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
//             style={{ background: '#F97316' }}
//             onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//             onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//           >
//             Откликнуться <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// const DEFAULT_FILTERS = {
//   search: '',
//   city: '',
//   category: '',
//   minSalary: SALARY_MIN,
//   employmentType: '',
// }

// function 
// JobsSection({ jobs = SAMPLE_JOBS, onApply }) {
//   const [filters, setFilters] = useState(DEFAULT_FILTERS)
//   const [selectedJob, setSelectedJob] = useState(null)

//   const filteredJobs = useMemo(() => {
//     const q = filters.search.trim().toLowerCase()
//     return jobs.filter(job => {
//       if (q && !job.title.toLowerCase().includes(q) && !job.company.toLowerCase().includes(q)) return false
//       if (filters.city && job.city !== filters.city) return false
//       if (filters.category && job.category !== filters.category) return false
//       if (filters.employmentType && job.employmentType !== filters.employmentType) return false
//       if (filters.minSalary && (job.salaryMax || job.salaryMin || 0) < filters.minSalary) return false
//       return true
//     })
//   }, [jobs, filters])

//   const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

//   return (
//     <section
//       id="jobs"
//       className="w-full px-4 py-14 md:px-12 md:py-20"
//       style={{ backgroundColor: '#FFFFFF' }}
//       aria-label="Вакансии"
//     >
//       <div className="max-w-7xl mx-auto">

//         <div className="mb-10">
//           <span
//             className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
//             style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
//             Открытые позиции
//           </span>
//           <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0D1B2A' }}>
//             Вакансии
//           </h2>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           <FilterSidebar
//             filters={filters}
//             onChange={setFilters}
//             onReset={handleReset}
//             resultCount={filteredJobs.length}
//           />

//           <div className="flex-1 min-w-0 w-full">
//             {filteredJobs.length === 0 ? (
//               <div
//                 className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-6"
//                 style={{ background: '#FFF8F2', border: '1.5px dashed #E8D5C4' }}
//               >
//                 <i className="fa-solid fa-folder-open text-[28px] mb-3" style={{ color: '#C2A48A' }} aria-hidden="true" />
//                 <p className="text-[15px] font-bold mb-1" style={{ color: '#0D1B2A' }}>
//                   Подходящих вакансий не найдено
//                 </p>
//                 <p className="text-[13px] mb-5" style={{ color: '#7A6B5D' }}>
//                   Попробуйте изменить фильтры или сбросить их
//                 </p>
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="text-[13px] font-bold px-5 py-2.5 rounded-xl text-white"
//                   style={{ background: '#F97316' }}
//                 >
//                   Сбросить фильтры
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredJobs.map(job => (
//                   <JobCard key={job.id} job={job} onOpen={setSelectedJob} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <JobModal
//         job={selectedJob}
//         onClose={() => setSelectedJob(null)}
//         onApply={onApply}
//       />
//     </section>
//   )
// }

// export default JobsSection





import { useState, useMemo, useCallback, useEffect } from 'react'

const CATEGORIES = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

const CITIES = [
  { value: '',            label: 'Все города' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
  { value: 'remote',      label: 'Удалённо' },
]

const EMPLOYMENT_TYPES = [
  { value: '',           label: 'Любой' },
  { value: 'full-time',  label: 'Полная занятость' },
  { value: 'part-time',  label: 'Частичная занятость' },
  { value: 'remote',     label: 'Удалённая работа' },
  { value: 'internship', label: 'Стажировка' },
]

const SALARY_MIN = 0
const SALARY_MAX = 25000

// Демо-вакансии — можно убрать и передавать свой список через проп `jobs`
export const SAMPLE_JOBS = [
  {
    id: 'j1',
    title: 'Frontend-разработчик (React)',
    company: 'IT Service',
    city: 'khujand',
    cityLabel: 'Худжанд',
    category: 'Frontend',
    employmentType: 'full-time',
    salaryMin: 8000,
    salaryMax: 14000,
    currency: 'TJS',
    postedAt: '2 дня назад',
    description: 'Команда IT Service разрабатывает внутренние финтех-продукты для банков-партнёров. Ищем разработчика, который возьмёт на себя клиентскую часть личного кабинета и будет работать в связке с дизайнером и бэкенд-командой.',
    requirements: [
      'Опыт работы с React от 2 лет',
      'Уверенное знание JavaScript (ES6+) и TypeScript',
      'Опыт работы с REST API',
      'Знание Git и опыт командной разработки',
    ],
    responsibilities: [
      'Разработка и поддержка пользовательских интерфейсов',
      'Вёрстка по дизайн-макетам в Figma',
      'Оптимизация производительности приложений',
      'Код-ревью и участие в технических обсуждениях',
    ],
    contactName: 'Фарход Назаров',
    contactEmail: 'hr@itservice.tj',
    contactPhone: '+992 92 777 12 34',
  },
  {
    id: 'j2',
    title: 'Backend-разработчик (Python)',
    company: 'Эсхата',
    city: 'khujand',
    cityLabel: 'Худжанд',
    category: 'Backend',
    employmentType: 'full-time',
    salaryMin: 10000,
    salaryMax: 16000,
    currency: 'TJS',
    postedAt: '5 дней назад',
    description: 'Банк Эсхата расширяет команду цифровых продуктов. Нужен бэкенд-разработчик для развития платформы мобильного банкинга и интеграций с платёжными системами.',
    requirements: [
      'Python от 3 лет, опыт с Django или FastAPI',
      'Понимание принципов проектирования баз данных',
      'Опыт работы с PostgreSQL',
      'Базовые знания Docker',
    ],
    responsibilities: [
      'Проектирование и разработка серверной логики',
      'Интеграция с внешними платёжными API',
      'Обеспечение безопасности и производительности сервисов',
      'Написание автотестов',
    ],
    contactName: 'Шахноза Каримова',
    contactEmail: 'career@eskhata.tj',
    contactPhone: '+992 92 555 88 90',
  },
  {
    id: 'j3',
    title: 'QA-инженер',
    company: 'DC',
    city: 'remote',
    cityLabel: 'Удалённо',
    category: 'QA',
    employmentType: 'remote',
    salaryMin: 6000,
    salaryMax: 9000,
    currency: 'TJS',
    postedAt: 'Сегодня',
    description: 'DC ищет внимательного QA-инженера для тестирования веб- и мобильных продуктов команды. Полностью удалённый формат работы, гибкий график.',
    requirements: [
      'Опыт ручного тестирования от 1 года',
      'Знание основ тест-дизайна',
      'Опыт работы с Postman и DevTools',
      'Будет плюсом: опыт автотестов на Selenium',
    ],
    responsibilities: [
      'Тестирование новых функций перед релизом',
      'Составление тест-кейсов и баг-репортов',
      'Регрессионное тестирование',
      'Взаимодействие с разработчиками по найденным дефектам',
    ],
    contactName: 'Алишер Расулов',
    contactEmail: 'jobs@dc.tj',
    contactPhone: '+992 93 444 21 09',
  },
  {
    id: 'j4',
    title: 'Mobile-разработчик (Flutter)',
    company: 'Payme',
    city: 'dushanbe',
    cityLabel: 'Душанбе',
    category: 'Mobile',
    employmentType: 'full-time',
    salaryMin: 12000,
    salaryMax: 18000,
    currency: 'TJS',
    postedAt: '1 неделю назад',
    description: 'Payme развивает приложение для миллионов пользователей. Ищем мобильного разработчика для команды, отвечающей за основное приложение на Flutter.',
    requirements: [
      'Опыт разработки на Flutter от 2 лет',
      'Понимание архитектурных паттернов (BLoC, Provider)',
      'Опыт публикации приложений в App Store / Google Play',
      'Умение работать с push-уведомлениями и аналитикой',
    ],
    responsibilities: [
      'Разработка новых экранов и функций приложения',
      'Поддержка стабильности и производительности',
      'Совместная работа с дизайнерами и продуктовой командой',
      'Участие в планировании релизов',
    ],
    contactName: 'Мадина Юсупова',
    contactEmail: 'hr@payme.tj',
    contactPhone: '+992 93 222 67 45',
  },
  {
    id: 'j5',
    title: 'DevOps-инженер',
    company: 'Click',
    city: 'remote',
    cityLabel: 'Удалённо',
    category: 'DevOps',
    employmentType: 'remote',
    salaryMin: 14000,
    salaryMax: 20000,
    currency: 'TJS',
    postedAt: '3 дня назад',
    description: 'Click ищет DevOps-инженера для автоматизации инфраструктуры и поддержки CI/CD-процессов растущей команды разработки.',
    requirements: [
      'Опыт работы с Docker и Kubernetes',
      'Знание CI/CD (GitLab CI, GitHub Actions)',
      'Опыт администрирования Linux-серверов',
      'Понимание основ сетевой безопасности',
    ],
    responsibilities: [
      'Настройка и поддержка CI/CD-пайплайнов',
      'Мониторинг и обеспечение отказоустойчивости систем',
      'Автоматизация деплоя и инфраструктуры (IaC)',
      'Участие в инцидент-менеджменте',
    ],
    contactName: 'Бахтиёр Олимов',
    contactEmail: 'team@click.tj',
    contactPhone: '+992 90 111 33 22',
  },
  {
    id: 'j6',
    title: 'UI/UX-дизайнер',
    company: 'Alif',
    city: 'dushanbe',
    cityLabel: 'Душанбе',
    category: 'UI/UX',
    employmentType: 'part-time',
    salaryMin: 5000,
    salaryMax: 8000,
    currency: 'TJS',
    postedAt: '4 дня назад',
    description: 'Alif ищет дизайнера для проработки интерфейсов финансовых продуктов — от исследования пользователей до готовых макетов в Figma.',
    requirements: [
      'Портфолио с реализованными проектами',
      'Уверенное владение Figma',
      'Понимание принципов UX-исследований',
      'Опыт создания дизайн-систем приветствуется',
    ],
    responsibilities: [
      'Проектирование пользовательских интерфейсов',
      'Создание и поддержка дизайн-системы',
      'Проведение юзабилити-тестирований',
      'Подготовка макетов для разработки',
    ],
    contactName: 'Зарина Холова',
    contactEmail: 'design@alif.tj',
    contactPhone: '+992 98 666 09 78',
  },
]

function formatSalary(min, max, currency) {
  const fmt = n => n.toLocaleString('ru-RU')
  if (min && max) return `${fmt(min)} – ${fmt(max)} ${currency}`
  if (min) return `от ${fmt(min)} ${currency}`
  if (max) return `до ${fmt(max)} ${currency}`
  return 'По договорённости'
}

function FilterSidebar({ filters, onChange, onReset, resultCount }) {
  return (
    <aside
      className="w-full lg:w-70 shrink-0 rounded-2xl p-6 h-fit lg:sticky lg:top-6"
      style={{ background: '#F5F7FA', border: '1.5px solid #DCE3EC' }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-extrabold uppercase tracking-wider" style={{ color: '#0B1F3A' }}>
          Фильтры
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="text-[12px] font-bold transition-colors"
          style={{ color: '#1D4ED8' }}
        >
          Сбросить
        </button>
      </div>

      <div className="mb-6">
        <label htmlFor="filter-search" className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Поиск
        </label>
        <div className="flex items-center gap-2 rounded-xl px-3 bg-white" style={{ border: '1.5px solid #DCE3EC' }}>
          <svg className="w-4 h-4 shrink-0" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            id="filter-search"
            type="search"
            value={filters.search}
            onChange={e => onChange({ ...filters, search: e.target.value })}
            placeholder="Должность или компания"
            autoComplete="off"
            className="w-full py-2.5 text-[13px] bg-transparent outline-none"
            style={{ color: '#0B1F3A' }}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="filter-city" className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Город
        </label>
        <select
          id="filter-city"
          value={filters.city}
          onChange={e => onChange({ ...filters, city: e.target.value })}
          className="w-full rounded-xl px-3 py-2.5 text-[13px] bg-white outline-none cursor-pointer font-medium"
          style={{ border: '1.5px solid #DCE3EC', color: '#0B1F3A' }}
        >
          {CITIES.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Категория
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => {
            const active = filters.category === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange({ ...filters, category: active ? '' : cat })}
                aria-pressed={active}
                className="text-[12px] font-medium px-3 py-1.5 rounded-lg transition-all"
                style={active
                  ? { background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }
                  : { background: '#FFFFFF', border: '1px solid #DCE3EC', color: '#64748B' }
                }
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mb-6">
        <span className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Зарплата от
          <span style={{ color: '#1D4ED8' }}>{filters.minSalary.toLocaleString('ru-RU')} TJS</span>
        </span>
        <input
          type="range"
          min={SALARY_MIN}
          max={SALARY_MAX}
          step={500}
          value={filters.minSalary}
          onChange={e => onChange({ ...filters, minSalary: Number(e.target.value) })}
          className="w-full accent-orange-500"
          style={{ accentColor: '#F97316' }}
        />
      </div>

      <div className="mb-2">
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Тип занятости
        </span>
        <div className="flex flex-col gap-2">
          {EMPLOYMENT_TYPES.map(({ value, label }) => (
            <label key={value || 'any'} className="flex items-center gap-2.5 text-[13px] font-medium cursor-pointer" style={{ color: '#0B1F3A' }}>
              <input
                type="radio"
                name="employmentType"
                checked={filters.employmentType === value}
                onChange={() => onChange({ ...filters, employmentType: value })}
                className="w-4 h-4"
                style={{ accentColor: '#F97316' }}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-5 text-[12px] font-bold" style={{ borderTop: '1px solid #E1E7EF', color: '#94A3B8' }}>
        Найдено: <span style={{ color: '#0B1F3A' }}>{resultCount}</span>
      </div>
    </aside>
  )
}

function JobCard({ job, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(job)}
      className="text-left flex flex-col gap-3 rounded-2xl p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 w-full"
      style={{ border: '1.5px solid #DCE3EC' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-[16px] font-extrabold leading-snug truncate" style={{ color: '#0B1F3A' }}>
            {job.title}
          </h3>
          <p className="text-[13px] font-semibold mt-0.5" style={{ color: '#64748B' }}>
            {job.company}
          </p>
        </div>
        <span
          className="shrink-0 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider"
          style={{ background: '#EFF6FF', color: '#1D4ED8' }}
        >
          {job.category}
        </span>
      </div>

      <p className="text-[13px] leading-[1.55] line-clamp-2" style={{ color: '#64748B' }}>
        {job.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1 pt-3" style={{ borderTop: '1px solid #E1E7EF' }}>
        <span className="flex items-center gap-1.5 text-[12px] font-bold" style={{ color: '#0B1F3A' }}>
          <i className="fa-solid fa-sack-dollar text-[11px]" style={{ color: '#F97316' }} aria-hidden="true" />
          {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
        </span>
        <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#94A3B8' }}>
          <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
          {job.cityLabel}
        </span>
        <span className="text-[11px] font-medium ml-auto" style={{ color: '#94A3B8' }}>
          {job.postedAt}
        </span>
      </div>
    </button>
  )
}

function JobModal({ job, onClose, onApply }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!job) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      style={{ background: 'rgba(11,31,58,0.45)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-modal-title"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl my-0 sm:my-auto"
        style={{ border: '1.5px solid #DCE3EC' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
          style={{ background: '#F5F7FA', color: '#64748B' }}
        >
          <i className="fa-solid fa-xmark text-[15px]" aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          <span
            className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider mb-4"
            style={{ background: '#EFF6FF', color: '#1D4ED8' }}
          >
            {job.category}
          </span>

          <h2 id="job-modal-title" className="text-2xl font-extrabold leading-tight mb-1.5" style={{ color: '#0B1F3A' }}>
            {job.title}
          </h2>
          <p className="text-[14px] font-semibold mb-5" style={{ color: '#64748B' }}>
            {job.company}
          </p>

          <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl" style={{ background: '#F5F7FA', border: '1px solid #E1E7EF' }}>
            <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0B1F3A' }}>
              <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
              {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
              {job.cityLabel}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-clock text-[12px]" aria-hidden="true" />
              {(EMPLOYMENT_TYPES.find(t => t.value === job.employmentType) || {}).label || 'Не указано'}
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Описание
            </h3>
            <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
              {job.description}
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Требования
            </h3>
            <ul className="flex flex-col gap-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] leading-normal" style={{ color: '#3D352B' }}>
                  <i className="fa-solid fa-check text-[11px] mt-1.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Обязанности
            </h3>
            <ul className="flex flex-col gap-2">
              {job.responsibilities.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] leading-normal" style={{ color: '#3D352B' }}>
                  <i className="fa-solid fa-arrow-right text-[11px] mt-1.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
                  {res}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-7">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Контакты
            </h3>
            <div className="flex flex-col gap-1.5 text-[14px]" style={{ color: '#3D352B' }}>
              {job.contactName && <span className="font-semibold">{job.contactName}</span>}
              {job.contactEmail && (
                <a href={`mailto:${job.contactEmail}`} className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-solid fa-envelope text-[12px]" aria-hidden="true" />
                  {job.contactEmail}
                </a>
              )}
              {job.contactPhone && (
                <a href={`tel:${job.contactPhone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-solid fa-phone text-[12px]" aria-hidden="true" />
                  {job.contactPhone}
                </a>
              )}
            </div>
          </section>

          <button
            type="button"
            onClick={() => onApply && onApply(job)}
            className="w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
            style={{ background: '#F97316' }}
            onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
            onMouseOut={e => e.currentTarget.style.background = '#F97316'}
          >
            Откликнуться <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

const DEFAULT_FILTERS = {
  search: '',
  city: '',
  category: '',
  minSalary: SALARY_MIN,
  employmentType: '',
}

function 
JobsSection({ jobs = SAMPLE_JOBS, onApply }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [selectedJob, setSelectedJob] = useState(null)

  const filteredJobs = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    return jobs.filter(job => {
      if (q && !job.title.toLowerCase().includes(q) && !job.company.toLowerCase().includes(q)) return false
      if (filters.city && job.city !== filters.city) return false
      if (filters.category && job.category !== filters.category) return false
      if (filters.employmentType && job.employmentType !== filters.employmentType) return false
      if (filters.minSalary && (job.salaryMax || job.salaryMin || 0) < filters.minSalary) return false
      return true
    })
  }, [jobs, filters])

  const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

  return (
    <section
      id="jobs"
      className="w-full px-4 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: '#F5F7FA' }}
      aria-label="Вакансии"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <span
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
            style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
            Открытые позиции
          </span>
          <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0B1F3A' }}>
            Вакансии
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onReset={handleReset}
            resultCount={filteredJobs.length}
          />

          <div className="flex-1 min-w-0 w-full">
            {filteredJobs.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-6"
                style={{ background: '#F5F7FA', border: '1.5px dashed #DCE3EC' }}
              >
                <i className="fa-solid fa-folder-open text-[28px] mb-3" style={{ color: '#94A3B8' }} aria-hidden="true" />
                <p className="text-[15px] font-bold mb-1" style={{ color: '#0B1F3A' }}>
                  Подходящих вакансий не найдено
                </p>
                <p className="text-[13px] mb-5" style={{ color: '#64748B' }}>
                  Попробуйте изменить фильтры или сбросить их
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[13px] font-bold px-5 py-2.5 rounded-xl text-white"
                  style={{ background: '#F97316' }}
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} onOpen={setSelectedJob} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={onApply}
      />
    </section>
  )
}

export default JobsSection