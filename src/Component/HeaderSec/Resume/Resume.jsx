// import { useState, useMemo, useCallback, useEffect } from 'react'

// const CITIES = [
//   { value: '',            label: 'Все города' },
//   { value: 'khujand',     label: 'Худжанд' },
//   { value: 'dushanbe',    label: 'Душанбе' },
//   { value: 'istaravshan', label: 'Истаравшан' },
//   { value: 'remote',      label: 'Готов(а) к удалёнке' },
// ]

// const PROFESSIONS = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

// // Демо-резюме — можно убрать и передавать свой список через проп `resumes`
// export const SAMPLE_RESUMES = [
//   {
//     id: 'r1',
//     photo: '',
//     name: 'Фарход Назаров',
//     profession: 'Frontend-разработчик',
//     city: 'khujand',
//     cityLabel: 'Худжанд',
//     skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
//     experienceYears: 3,
//     experience: [
//       { company: 'IT Service', role: 'Frontend-разработчик', period: '2023 — наст. время', description: 'Разработка клиентской части финтех-продуктов, поддержка дизайн-системы.' },
//       { company: 'Freelance', role: 'Веб-разработчик', period: '2021 — 2023', description: 'Вёрстка и разработка сайтов для локального бизнеса.' },
//     ],
//     education: [
//       { institution: 'ТГУПБП', degree: 'Бакалавр, Информационные технологии', period: '2018 — 2022' },
//     ],
//     about: 'Люблю чистый код и аккуратные интерфейсы. Постоянно слежу за новыми возможностями экосистемы React.',
//     salaryMin: 8000,
//     salaryMax: 14000,
//     currency: 'TJS',
//     phone: '+992 92 777 12 34',
//     email: 'farkhod.n@example.com',
//     updatedAt: '2 дня назад',
//   },
//   {
//     id: 'r2',
//     photo: '',
//     name: 'Шахноза Каримова',
//     profession: 'Backend-разработчик',
//     city: 'dushanbe',
//     cityLabel: 'Душанбе',
//     skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
//     experienceYears: 4,
//     experience: [
//       { company: 'Эсхата', role: 'Backend-разработчик', period: '2022 — наст. время', description: 'Развитие платформы мобильного банкинга, интеграции с платёжными системами.' },
//       { company: 'AlifTech', role: 'Junior-разработчик', period: '2020 — 2022', description: 'Поддержка внутренних сервисов компании.' },
//     ],
//     education: [
//       { institution: 'РТСУ', degree: 'Бакалавр, Прикладная математика', period: '2016 — 2020' },
//     ],
//     about: 'Специализируюсь на проектировании надёжных серверных систем и работе с базами данных.',
//     salaryMin: 10000,
//     salaryMax: 16000,
//     currency: 'TJS',
//     phone: '+992 92 555 88 90',
//     email: 'shahnoza.k@example.com',
//     updatedAt: '5 дней назад',
//   },
//   {
//     id: 'r3',
//     photo: '',
//     name: 'Алишер Расулов',
//     profession: 'QA-инженер',
//     city: 'remote',
//     cityLabel: 'Готов(а) к удалёнке',
//     skills: ['Manual QA', 'Postman', 'Test Design', 'Selenium'],
//     experienceYears: 2,
//     experience: [
//       { company: 'DC', role: 'QA-инженер', period: '2023 — наст. время', description: 'Тестирование веб- и мобильных продуктов, составление тест-кейсов.' },
//     ],
//     education: [
//       { institution: 'ТТУ им. Осими', degree: 'Бакалавр, Программная инженерия', period: '2019 — 2023' },
//     ],
//     about: 'Внимателен к деталям, умею находить нестандартные сценарии использования продукта.',
//     salaryMin: 6000,
//     salaryMax: 9000,
//     currency: 'TJS',
//     phone: '+992 93 444 21 09',
//     email: 'alisher.r@example.com',
//     updatedAt: 'Сегодня',
//   },
// ]

// function formatSalary(min, max, currency) {
//   const fmt = n => n.toLocaleString('ru-RU')
//   if (min && max) return `${fmt(min)} – ${fmt(max)} ${currency}`
//   if (min) return `от ${fmt(min)} ${currency}`
//   if (max) return `до ${fmt(max)} ${currency}`
//   return 'По договорённости'
// }

// function initials(name) {
//   return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase()
// }

// /* ───────────────────────── Карточка резюме ───────────────────────── */

// function ResumeCard({ resume, onOpen }) {
//   return (
//     <button
//       type="button"
//       onClick={() => onOpen(resume)}
//       className="text-left flex flex-col gap-3 rounded-2xl p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 w-full"
//       style={{ border: '1.5px solid #E8D5C4' }}
//     >
//       <div className="flex items-start gap-3">
//         {/* Фото / инициалы */}
//         <div
//           className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden text-[15px] font-extrabold"
//           style={{ background: '#FEE8D0', color: '#C2570A' }}
//         >
//           {resume.photo ? (
//             <img src={resume.photo} alt={resume.name} className="w-full h-full object-cover" />
//           ) : (
//             initials(resume.name)
//           )}
//         </div>

//         <div className="min-w-0 flex-1">
//           <h3 className="text-[16px] font-extrabold leading-snug truncate" style={{ color: '#0D1B2A' }}>
//             {resume.name}
//           </h3>
//           <p className="text-[13px] font-semibold mt-0.5 truncate" style={{ color: '#7A6B5D' }}>
//             {resume.profession}
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-1.5">
//         {resume.skills.slice(0, 4).map(skill => (
//           <span
//             key={skill}
//             className="text-[11px] font-medium px-2.5 py-1 rounded-md"
//             style={{ background: '#FFF8F2', border: '1px solid #F3E6D7', color: '#7A6B5D' }}
//           >
//             {skill}
//           </span>
//         ))}
//       </div>

//       <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1 pt-3" style={{ borderTop: '1px solid #F3E6D7' }}>
//         <span className="flex items-center gap-1.5 text-[12px] font-bold" style={{ color: '#0D1B2A' }}>
//           <i className="fa-solid fa-briefcase text-[11px]" style={{ color: '#F97316' }} aria-hidden="true" />
//           {resume.experienceYears} {resume.experienceYears === 1 ? 'год' : 'года'} опыта
//         </span>
//         <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#B0A090' }}>
//           <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
//           {resume.cityLabel}
//         </span>
//       </div>

//       <div className="flex items-center justify-between">
//         <span className="text-[13px] font-extrabold" style={{ color: '#C2570A' }}>
//           {formatSalary(resume.salaryMin, resume.salaryMax, resume.currency)}
//         </span>
//         <span className="text-[11px] font-medium" style={{ color: '#C2A48A' }}>
//           {resume.updatedAt}
//         </span>
//       </div>
//     </button>
//   )
// }

// /* ───────────────────────── Модалка резюме ───────────────────────── */

// function ResumeModal({ resume, onClose, onContact }) {
//   useEffect(() => {
//     const onKey = e => { if (e.key === 'Escape') onClose() }
//     document.addEventListener('keydown', onKey)
//     return () => document.removeEventListener('keydown', onKey)
//   }, [onClose])

//   if (!resume) return null

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
//       style={{ background: 'rgba(13,27,42,0.45)' }}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="resume-modal-title"
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

//           <div className="flex items-center gap-4 mb-6">
//             <div
//               className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden text-[18px] font-extrabold"
//               style={{ background: '#FEE8D0', color: '#C2570A' }}
//             >
//               {resume.photo ? (
//                 <img src={resume.photo} alt={resume.name} className="w-full h-full object-cover" />
//               ) : (
//                 initials(resume.name)
//               )}
//             </div>
//             <div className="min-w-0">
//               <h2 id="resume-modal-title" className="text-xl font-extrabold leading-tight truncate" style={{ color: '#0D1B2A' }}>
//                 {resume.name}
//               </h2>
//               <p className="text-[14px] font-semibold mt-0.5" style={{ color: '#7A6B5D' }}>
//                 {resume.profession}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl" style={{ background: '#FFF8F2', border: '1px solid #F3E6D7' }}>
//             <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0D1B2A' }}>
//               <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
//               {formatSalary(resume.salaryMin, resume.salaryMax, resume.currency)}
//             </div>
//             <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#7A6B5D' }}>
//               <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
//               {resume.cityLabel}
//             </div>
//             <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#7A6B5D' }}>
//               <i className="fa-solid fa-briefcase text-[12px]" aria-hidden="true" />
//               {resume.experienceYears} {resume.experienceYears === 1 ? 'год' : 'года'} опыта
//             </div>
//           </div>

//           <section className="mb-6">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Навыки
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {resume.skills.map(skill => (
//                 <span
//                   key={skill}
//                   className="text-[12px] font-medium px-3 py-1.5 rounded-md"
//                   style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </section>

//           {resume.about && (
//             <section className="mb-6">
//               <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//                 О себе
//               </h3>
//               <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
//                 {resume.about}
//               </p>
//             </section>
//           )}

//           {resume.experience?.length > 0 && (
//             <section className="mb-6">
//               <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#B0A090' }}>
//                 Опыт работы
//               </h3>
//               <div className="flex flex-col gap-4">
//                 {resume.experience.map((exp, i) => (
//                   <div key={i} className="pl-4" style={{ borderLeft: '2px solid #FDCFA0' }}>
//                     <div className="flex flex-wrap items-baseline justify-between gap-x-3">
//                       <span className="text-[14px] font-bold" style={{ color: '#0D1B2A' }}>{exp.role}</span>
//                       <span className="text-[12px] font-medium" style={{ color: '#C2A48A' }}>{exp.period}</span>
//                     </div>
//                     <p className="text-[13px] font-semibold mt-0.5" style={{ color: '#7A6B5D' }}>{exp.company}</p>
//                     {exp.description && (
//                       <p className="text-[13px] leading-[1.55] mt-1.5" style={{ color: '#3D352B' }}>{exp.description}</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {resume.education?.length > 0 && (
//             <section className="mb-7">
//               <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#B0A090' }}>
//                 Образование
//               </h3>
//               <div className="flex flex-col gap-3">
//                 {resume.education.map((edu, i) => (
//                   <div key={i} className="pl-4" style={{ borderLeft: '2px solid #E8D5C4' }}>
//                     <div className="flex flex-wrap items-baseline justify-between gap-x-3">
//                       <span className="text-[14px] font-bold" style={{ color: '#0D1B2A' }}>{edu.institution}</span>
//                       <span className="text-[12px] font-medium" style={{ color: '#C2A48A' }}>{edu.period}</span>
//                     </div>
//                     <p className="text-[13px] mt-0.5" style={{ color: '#7A6B5D' }}>{edu.degree}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           <section className="mb-7">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Контакты
//             </h3>
//             <div className="flex flex-col gap-1.5 text-[14px]" style={{ color: '#3D352B' }}>
//               {resume.email && (
//                 <a href={`mailto:${resume.email}`} className="flex items-center gap-2 hover:underline" style={{ color: '#7A6B5D' }}>
//                   <i className="fa-solid fa-envelope text-[12px]" aria-hidden="true" />
//                   {resume.email}
//                 </a>
//               )}
//               {resume.phone && (
//                 <a href={`tel:${resume.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline" style={{ color: '#7A6B5D' }}>
//                   <i className="fa-solid fa-phone text-[12px]" aria-hidden="true" />
//                   {resume.phone}
//                 </a>
//               )}
//             </div>
//           </section>

//           <button
//             type="button"
//             onClick={() => onContact && onContact(resume)}
//             className="w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
//             style={{ background: '#F97316' }}
//             onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//             onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//           >
//             Связаться с кандидатом <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ───────────────────────── Список резюме ───────────────────────── */

// const DEFAULT_FILTERS = { search: '', city: '', profession: '' }

// function ResumeList({ resumes, onCreateClick }) {
//   const [filters, setFilters] = useState(DEFAULT_FILTERS)
//   const [selected, setSelected] = useState(null)

//   const filtered = useMemo(() => {
//     const q = filters.search.trim().toLowerCase()
//     return resumes.filter(r => {
//       if (q && !r.name.toLowerCase().includes(q) && !r.profession.toLowerCase().includes(q)) return false
//       if (filters.city && r.city !== filters.city) return false
//       if (filters.profession && r.profession !== filters.profession) return false
//       return true
//     })
//   }, [resumes, filters])

//   const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

//   return (
//     <>
//       {/* Панель фильтров */}
//       <div
//         className="flex flex-col lg:flex-row lg:items-center gap-3 rounded-2xl p-4 mb-8"
//         style={{ background: '#FFF8F2', border: '1.5px solid #E8D5C4' }}
//       >
//         <div className="flex items-center flex-1 min-w-0 gap-2 rounded-xl px-3 bg-white" style={{ border: '1.5px solid #E8D5C4' }}>
//           <svg className="w-4 h-4 shrink-0" style={{ color: '#C2A48A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//           </svg>
//           <input
//             type="search"
//             value={filters.search}
//             onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
//             placeholder="Имя или профессия"
//             autoComplete="off"
//             className="w-full py-2.5 text-[13px] bg-transparent outline-none"
//             style={{ color: '#0D1B2A' }}
//           />
//         </div>

//         <select
//           value={filters.city}
//           onChange={e => setFilters(f => ({ ...f, city: e.target.value }))}
//           className="rounded-xl px-3 py-2.5 text-[13px] bg-white outline-none cursor-pointer font-medium"
//           style={{ border: '1.5px solid #E8D5C4', color: '#0D1B2A' }}
//         >
//           {CITIES.map(({ value, label }) => (
//             <option key={value} value={value}>{label}</option>
//           ))}
//         </select>

//         <select
//           value={filters.profession}
//           onChange={e => setFilters(f => ({ ...f, profession: e.target.value }))}
//           className="rounded-xl px-3 py-2.5 text-[13px] bg-white outline-none cursor-pointer font-medium"
//           style={{ border: '1.5px solid #E8D5C4', color: '#0D1B2A' }}
//         >
//           <option value="">Любая профессия</option>
//           {PROFESSIONS.map(p => (
//             <option key={p} value={p}>{p}</option>
//           ))}
//         </select>

//         {(filters.search || filters.city || filters.profession) && (
//           <button
//             type="button"
//             onClick={handleReset}
//             className="text-[12px] font-bold px-3 py-2 shrink-0"
//             style={{ color: '#C2570A' }}
//           >
//             Сбросить
//           </button>
//         )}

//         <button
//           type="button"
//           onClick={onCreateClick}
//           className="shrink-0 inline-flex items-center justify-center gap-2 text-[13px] font-bold px-5 py-2.5 rounded-xl text-white transition-colors"
//           style={{ background: '#F97316' }}
//           onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//           onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//         >
//           <i className="fa-solid fa-plus text-[11px]" aria-hidden="true" />
//           Создать резюме
//         </button>
//       </div>

//       {filtered.length === 0 ? (
//         <div
//           className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-6"
//           style={{ background: '#FFF8F2', border: '1.5px dashed #E8D5C4' }}
//         >
//           <i className="fa-solid fa-folder-open text-[28px] mb-3" style={{ color: '#C2A48A' }} aria-hidden="true" />
//           <p className="text-[15px] font-bold mb-1" style={{ color: '#0D1B2A' }}>
//             Подходящих резюме не найдено
//           </p>
//           <p className="text-[13px] mb-5" style={{ color: '#7A6B5D' }}>
//             Попробуйте изменить фильтры или сбросить их
//           </p>
//           <button
//             type="button"
//             onClick={handleReset}
//             className="text-[13px] font-bold px-5 py-2.5 rounded-xl text-white"
//             style={{ background: '#F97316' }}
//           >
//             Сбросить фильтры
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filtered.map(resume => (
//             <ResumeCard key={resume.id} resume={resume} onOpen={setSelected} />
//           ))}
//         </div>
//       )}

//       <ResumeModal resume={selected} onClose={() => setSelected(null)} />
//     </>
//   )
// }

// /* ───────────────────────── Форма создания резюме ───────────────────────── */

// const EMPTY_FORM = {
//   name: '', phone: '', email: '', city: '',
//   skills: '', experience: '', education: '', about: '',
// }

// function FormField({ label, children, required }) {
//   return (
//     <div className="mb-5">
//       <label className="block text-[12px] font-bold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//         {label}{required && <span style={{ color: '#F97316' }}> *</span>}
//       </label>
//       {children}
//     </div>
//   )
// }

// const inputStyle = { border: '1.5px solid #E8D5C4', color: '#0D1B2A' }
// const inputClass = 'w-full rounded-xl px-4 py-3 text-[14px] bg-white outline-none'

// function CreateResumeForm({ onSubmit, onCancel }) {
//   const [form, setForm] = useState(EMPTY_FORM)
//   const [submitted, setSubmitted] = useState(false)

//   const update = useCallback((field, value) => {
//     setForm(f => ({ ...f, [field]: value }))
//   }, [])

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return
//     onSubmit && onSubmit(form)
//   }, [form, onSubmit])

//   const showError = (field) => submitted && !form[field].trim()

//   return (
//     <form onSubmit={handleSubmit} className="max-w-2xl">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
//         <FormField label="Имя" required>
//           <input
//             type="text"
//             value={form.name}
//             onChange={e => update('name', e.target.value)}
//             placeholder="Иван Иванов"
//             className={inputClass}
//             style={{ ...inputStyle, ...(showError('name') ? { border: '1.5px solid #E0664A' } : {}) }}
//           />
//         </FormField>

//         <FormField label="Телефон" required>
//           <input
//             type="tel"
//             value={form.phone}
//             onChange={e => update('phone', e.target.value)}
//             placeholder="+992 ___ __ __ __"
//             className={inputClass}
//             style={{ ...inputStyle, ...(showError('phone') ? { border: '1.5px solid #E0664A' } : {}) }}
//           />
//         </FormField>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
//         <FormField label="Email" required>
//           <input
//             type="email"
//             value={form.email}
//             onChange={e => update('email', e.target.value)}
//             placeholder="example@mail.com"
//             className={inputClass}
//             style={{ ...inputStyle, ...(showError('email') ? { border: '1.5px solid #E0664A' } : {}) }}
//           />
//         </FormField>

//         <FormField label="Город">
//           <select
//             value={form.city}
//             onChange={e => update('city', e.target.value)}
//             className={`${inputClass} cursor-pointer`}
//             style={inputStyle}
//           >
//             {CITIES.map(({ value, label }) => (
//               <option key={value} value={value}>{label}</option>
//             ))}
//           </select>
//         </FormField>
//       </div>

//       <FormField label="Навыки">
//         <input
//           type="text"
//           value={form.skills}
//           onChange={e => update('skills', e.target.value)}
//           placeholder="React, TypeScript, Tailwind CSS"
//           className={inputClass}
//           style={inputStyle}
//         />
//         <p className="text-[11px] mt-1.5" style={{ color: '#B0A090' }}>Перечислите через запятую</p>
//       </FormField>

//       <FormField label="Опыт работы">
//         <textarea
//           value={form.experience}
//           onChange={e => update('experience', e.target.value)}
//           placeholder="Где и кем работали, основные обязанности и достижения"
//           rows={4}
//           className={`${inputClass} resize-none`}
//           style={inputStyle}
//         />
//       </FormField>

//       <FormField label="Образование">
//         <textarea
//           value={form.education}
//           onChange={e => update('education', e.target.value)}
//           placeholder="Учебное заведение, специальность, годы обучения"
//           rows={3}
//           className={`${inputClass} resize-none`}
//           style={inputStyle}
//         />
//       </FormField>

//       <FormField label="О себе">
//         <textarea
//           value={form.about}
//           onChange={e => update('about', e.target.value)}
//           placeholder="Коротко расскажите о себе, своих сильных сторонах и целях"
//           rows={3}
//           className={`${inputClass} resize-none`}
//           style={inputStyle}
//         />
//       </FormField>

//       {submitted && (!form.name.trim() || !form.phone.trim() || !form.email.trim()) && (
//         <p className="text-[13px] font-medium mb-4" style={{ color: '#E0664A' }}>
//           Заполните обязательные поля: имя, телефон и email
//         </p>
//       )}

//       <div className="flex flex-col sm:flex-row gap-3 mt-2">
//         <button
//           type="submit"
//           className="flex-1 inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
//           style={{ background: '#F97316' }}
//           onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//           onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//         >
//           Опубликовать резюме <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//         </button>
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-6 py-3.5 rounded-xl text-[14px] font-bold transition-colors"
//           style={{ background: '#FFF8F2', border: '1.5px solid #E8D5C4', color: '#7A6B5D' }}
//         >
//           Отмена
//         </button>
//       </div>
//     </form>
//   )
// }

// /* ───────────────────────── Корневой компонент ───────────────────────── */

// function ResumeSection({ resumes = SAMPLE_RESUMES, onCreate }) {
//   const [mode, setMode] = useState('list') // 'list' | 'create'

//   const handleCreateSubmit = useCallback((formData) => {
//     onCreate && onCreate(formData)
//     setMode('list')
//   }, [onCreate])

//   return (
//     <section
//       id="resume"
//       className="w-full px-4 py-14 md:px-12 md:py-20"
//       style={{ backgroundColor: '#FFFFFF' }}
//       aria-label="Резюме"
//     >
//       <div className="max-w-7xl mx-auto">

//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//           <div>
//             <span
//               className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
//               style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
//               {mode === 'list' ? 'База кандидатов' : 'Новое резюме'}
//             </span>
//             <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0D1B2A' }}>
//               {mode === 'list' ? 'Резюме' : 'Создать резюме'}
//             </h2>
//           </div>

//           {mode === 'create' && (
//             <button
//               type="button"
//               onClick={() => setMode('list')}
//               className="inline-flex items-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-colors w-fit"
//               style={{ background: '#FFF8F2', border: '1.5px solid #E8D5C4', color: '#7A6B5D' }}
//             >
//               <i className="fa-solid fa-arrow-left text-[11px]" aria-hidden="true" />
//               К списку резюме
//             </button>
//           )}
//         </div>

//         {mode === 'list' ? (
//           <ResumeList resumes={resumes} onCreateClick={() => setMode('create')} />
//         ) : (
//           <CreateResumeForm onSubmit={handleCreateSubmit} onCancel={() => setMode('list')} />
//         )}
//       </div>
//     </section>
//   )
// }

// export default ResumeSection





import { useState, useMemo, useCallback, useEffect } from 'react'

const CITIES = [
  { value: '',            label: 'Все города' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
  { value: 'remote',      label: 'Готов(а) к удалёнке' },
]

const PROFESSIONS = [
  'Frontend', 
  'Backend', 
  'Full Stack', 
  'Mobile', 
  'DevOps', 
  'QA', 
  'UI/UX', 
  'Data/ML', 
  'Technical Support'
]

const METRICS = [
  { num: '840', label: 'Просмотры',       hint: 'Конверсия в отклик: 14.2%',        tone: 'ink' },
  { num: '120', label: 'Всего откликов',  hint: '94 из Telegram-бота',              tone: 'accent' },
  { num: '32',  label: 'Прошли скрининг', hint: 'Зелёная зона (100% мэтч)',         tone: 'positive' },
  { num: '18',  label: 'Нужен разбор',    hint: 'Жёлтая зона (50-97% мэтч)',        tone: 'warning' },
]

const GREEN_ZONE = [
  { id: 1, name: 'Алишер Рахимов', exp: '2 года', city: 'Худжанд', match: 100, source: 'TG Бот', time: 'Вчера, 14:20' },
  { id: 2, name: 'Мадина Тохирова', exp: '1.5 года', city: 'Душанбе (готова к переезду)', match: 100, source: 'Сайт', time: 'Сегодня, 09:15' },
]

const YELLOW_ZONE = [
  {
    id: 3, name: 'Ситора Каримова', exp: 'Без опыта', city: 'Худжанд', match: 66,
    source: 'TG Бот', time: 'Вчера, 18:02',
    flags: [
      { label: 'Нет опыта работы', tone: 'danger' },
      { label: 'Языки: Тадж/Рус', tone: 'positive' },
    ],
  },
]

const RED_ZONE_COUNT = 70

export const SAMPLE_RESUMES = [
  {
    id: 'r1',
    photo: '',
    name: 'Фарход Назаров',
    profession: 'Frontend-разработчик',
    city: 'khujand',
    cityLabel: 'Худжанд',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    experienceYears: 3,
    experience: [
      { company: 'IT Service', role: 'Frontend-разработчик', period: '2023 — наст. время', description: 'Разработка клиентской части финтех-продуктов, поддержка дизайн-системы.' },
      { company: 'Freelance', role: 'Веб-разработчик', period: '2021 — 2023', description: 'Вёрстка и разработка сайтов для локального бизнеса.' },
    ],
    education: [
      { institution: 'ТГУПБП', degree: 'Бакалавр, Информационные технологии', period: '2018 — 2022' },
    ],
    about: 'Люблю чистый код и аккуратные интерфейсы. Постоянно слежу за новыми возможностями экосистемы React.',
    salaryMin: 8000,
    salaryMax: 14000,
    currency: 'TJS',
    phone: '+992 92 777 12 34',
    email: 'farkhod.n@example.com',
    github: 'https://github.com/farkhod-n',
    linkedin: 'https://linkedin.com/in/farkhod-n',
    updatedAt: '2 дня назад',
  },
  {
    id: 'r2',
    photo: '',
    name: 'Шахноза Каримова',
    profession: 'Backend-разработчик',
    city: 'dushanbe',
    cityLabel: 'Душанбе',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    experienceYears: 4,
    experience: [
      { company: 'Эсхата', role: 'Backend-разработчик', period: '2022 — наст. время', description: 'Развитие платформы мобильного банкинга, интеграции с платёжными системами.' },
      { company: 'AlifTech', role: 'Junior-разработчик', period: '2020 — 2022', description: 'Поддержка внутренних сервисов компании.' },
    ],
    education: [
      { institution: 'РТСУ', degree: 'Бакалавр, Прикладная математика', period: '2016 — 2020' },
    ],
    about: 'Специализируюсь на проектировании надёжных серверных систем и работе с базами данных.',
    salaryMin: 10000,
    salaryMax: 16000,
    currency: 'TJS',
    phone: '+992 92 555 88 90',
    email: 'shahnoza.k@example.com',
    github: 'https://github.com/shahnoza-k',
    linkedin: 'https://linkedin.com/in/shahnoza-k',
    updatedAt: '5 дней назад',
  },
  {
    id: 'r3',
    photo: '',
    name: 'Алишер Расулов',
    profession: 'QA-инженер',
    city: 'remote',
    cityLabel: 'Готов(а) к удалёнке',
    skills: ['Manual QA', 'Postman', 'Test Design', 'Selenium'],
    experienceYears: 2,
    experience: [
      { company: 'DC', role: 'QA-инженер', period: '2023 — наст. время', description: 'Тестирование веб- и мобильных продуктов, составление тест-кейсов.' },
    ],
    education: [
      { institution: 'ТТУ им. Осими', degree: 'Бакалавр, Программная инженерия', period: '2019 — 2023' },
    ],
    about: 'Внимателен к деталям, умею находить нестандартные сценарии использования продукта.',
    salaryMin: 6000,
    salaryMax: 9000,
    currency: 'TJS',
    phone: '+992 93 444 21 09',
    email: 'alisher.r@example.com',
    github: 'https://github.com/alisher-r',
    linkedin: 'https://linkedin.com/in/alisher-r',
    updatedAt: 'Сегодня',
  },
]

function formatSalary(min, max, currency) {
  const fmt = n => n.toLocaleString('ru-RU')
  if (min && max) return `${fmt(min)} – ${fmt(max)} ${currency}`
  if (min) return `от ${fmt(min)} ${currency}`
  if (max) return `до ${fmt(max)} ${currency}`
  return 'По договорённости'
}

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase()
}

function ResumeCard({ resume, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(resume)}
      className="text-left flex flex-col gap-3 rounded-2xl p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 w-full"
      style={{ border: '1.5px solid #DCE3EC' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden text-[15px] font-extrabold"
          style={{ background: '#EFF6FF', color: '#1D4ED8' }}
        >
          {resume.photo ? (
            <img src={resume.photo} alt={resume.name} className="w-full h-full object-cover" />
          ) : (
            initials(resume.name)
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-extrabold leading-snug truncate" style={{ color: '#0B1F3A' }}>
            {resume.name}
          </h3>
          <p className="text-[13px] font-semibold mt-0.5 truncate" style={{ color: '#64748B' }}>
            {resume.profession}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {resume.skills.slice(0, 4).map(skill => (
          <span
            key={skill}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md"
            style={{ background: '#F5F7FA', border: '1px solid #E1E7EF', color: '#64748B' }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1 pt-3" style={{ borderTop: '1px solid #E1E7EF' }}>
        <span className="flex items-center gap-1.5 text-[12px] font-bold" style={{ color: '#0B1F3A' }}>
          <i className="fa-solid fa-briefcase text-[11px]" style={{ color: '#F97316' }} aria-hidden="true" />
          {resume.experienceYears} {resume.experienceYears === 1 ? 'год' : 'года'} опыта
        </span>
        <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#94A3B8' }}>
          <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
          {resume.cityLabel}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[13px] font-extrabold" style={{ color: '#1D4ED8' }}>
          {formatSalary(resume.salaryMin, resume.salaryMax, resume.currency)}
        </span>
        <span className="text-[11px] font-medium" style={{ color: '#94A3B8' }}>
          {resume.updatedAt}
        </span>
      </div>
    </button>
  )
}

function ResumeModal({ resume, onClose, onContact }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!resume) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      style={{ background: 'rgba(11,31,58,0.45)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
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

          <div className="flex items-center gap-4 mb-6">
            <div
              className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden text-[18px] font-extrabold"
              style={{ background: '#EFF6FF', color: '#1D4ED8' }}
            >
              {resume.photo ? (
                <img src={resume.photo} alt={resume.name} className="w-full h-full object-cover" />
              ) : (
                initials(resume.name)
              )}
            </div>
            <div className="min-w-0">
              <h2 id="resume-modal-title" className="text-xl font-extrabold leading-tight truncate" style={{ color: '#0B1F3A' }}>
                {resume.name}
              </h2>
              <p className="text-[14px] font-semibold mt-0.5" style={{ color: '#64748B' }}>
                {resume.profession}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl" style={{ background: '#F5F7FA', border: '1px solid #E1E7EF' }}>
            <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0B1F3A' }}>
              <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
              {formatSalary(resume.salaryMin, resume.salaryMax, resume.currency)}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
              {resume.cityLabel}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-briefcase text-[12px]" aria-hidden="true" />
              {resume.experienceYears} {resume.experienceYears === 1 ? 'год' : 'года'} опыта
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Навыки
            </h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map(skill => (
                <span
                  key={skill}
                  className="text-[12px] font-medium px-3 py-1.5 rounded-md"
                  style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {resume.about && (
            <section className="mb-6">
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
                О себе
              </h3>
              <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
                {resume.about}
              </p>
            </section>
          )}

          {resume.experience?.length > 0 && (
            <section className="mb-6">
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#94A3B8' }}>
                Опыт работы
              </h3>
              <div className="flex flex-col gap-4">
                {resume.experience.map((exp, i) => (
                  <div key={i} className="pl-4" style={{ borderLeft: '2px solid #BFDBFE' }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="text-[14px] font-bold" style={{ color: '#0B1F3A' }}>{exp.role}</span>
                      <span className="text-[12px] font-medium" style={{ color: '#94A3B8' }}>{exp.period}</span>
                    </div>
                    <p className="text-[13px] font-semibold mt-0.5" style={{ color: '#64748B' }}>{exp.company}</p>
                    {exp.description && (
                      <p className="text-[13px] leading-[1.55] mt-1.5" style={{ color: '#3D352B' }}>{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.education?.length > 0 && (
            <section className="mb-7">
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#94A3B8' }}>
                Образование
              </h3>
              <div className="flex flex-col gap-3">
                {resume.education.map((edu, i) => (
                  <div key={i} className="pl-4" style={{ borderLeft: '2px solid #DCE3EC' }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="text-[14px] font-bold" style={{ color: '#0B1F3A' }}>{edu.institution}</span>
                      <span className="text-[12px] font-medium" style={{ color: '#94A3B8' }}>{edu.period}</span>
                    </div>
                    <p className="text-[13px] mt-0.5" style={{ color: '#64748B' }}>{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mb-7">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Контакты
            </h3>
            <div className="flex flex-col gap-1.5 text-[14px]" style={{ color: '#3D352B' }}>
              {resume.email && (
                <a href={`mailto:${resume.email}`} className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-solid fa-envelope text-[12px]" aria-hidden="true" />
                  {resume.email}
                </a>
              )}
              {resume.phone && (
                <a href={`tel:${resume.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-solid fa-phone text-[12px]" aria-hidden="true" />
                  {resume.phone}
                </a>
              )}
              {resume.github && (
                <a href={resume.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-brands fa-github text-[12px]" aria-hidden="true" />
                  GitHub: {resume.github.replace(/^https?:\/\/(www\.)?github\.com\//, '')}
                </a>
              )}
              {resume.linkedin && (
                <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-brands fa-linkedin text-[12px]" aria-hidden="true" />
                  LinkedIn: {resume.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/(in\/)?/, '')}
                </a>
              )}
            </div>
          </section>

          <button
            type="button"
            onClick={() => onContact && onContact(resume)}
            className="w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
            style={{ background: '#F97316' }}
            onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
            onMouseOut={e => e.currentTarget.style.background = '#F97316'}
          >
            Связаться с кандидатом <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

const DEFAULT_FILTERS = { search: '', city: '', profession: '' }

function ResumeList({ resumes, onCreateClick }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    return resumes.filter(r => {
      if (q && !r.name.toLowerCase().includes(q) && !r.profession.toLowerCase().includes(q)) return false
      if (filters.city && r.city !== filters.city) return false
      if (filters.profession && r.profession !== filters.profession) return false
      return true
    })
  }, [resumes, filters])

  const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

  return (
    <>
      <div
        className="flex flex-col lg:flex-row lg:items-center gap-3 rounded-2xl p-4 mb-8"
        style={{ background: '#F5F7FA', border: '1.5px solid #DCE3EC' }}
      >
        <div className="flex items-center flex-1 min-w-0 gap-2 rounded-xl px-3 bg-white" style={{ border: '1.5px solid #DCE3EC' }}>
          <svg className="w-4 h-4 shrink-0" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="search"
            value={filters.search}
            onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
            placeholder="Имя или профессия"
            autoComplete="off"
            className="w-full py-2.5 text-[13px] bg-transparent outline-none"
            style={{ color: '#0B1F3A' }}
          />
        </div>

        <select
          value={filters.city}
          onChange={e => setFilters(f => ({ ...f, city: e.target.value }))}
          className="rounded-xl px-3 py-2.5 text-[13px] bg-white outline-none cursor-pointer font-medium"
          style={{ border: '1.5px solid #DCE3EC', color: '#0B1F3A' }}
        >
          {CITIES.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <select
          value={filters.profession}
          onChange={e => setFilters(f => ({ ...f, profession: e.target.value }))}
          className="rounded-xl px-3 py-2.5 text-[13px] bg-white outline-none cursor-pointer font-medium"
          style={{ border: '1.5px solid #DCE3EC', color: '#0B1F3A' }}
        >
          <option value="">Любая профессия</option>
          {PROFESSIONS.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        {(filters.search || filters.city || filters.profession) && (
          <button
            type="button"
            onClick={handleReset}
            className="text-[12px] font-bold px-3 py-2 shrink-0"
            style={{ color: '#1D4ED8' }}
          >
            Сбросить
          </button>
        )}

        <button
          type="button"
          onClick={onCreateClick}
          className="shrink-0 inline-flex items-center justify-center gap-2 text-[13px] font-bold px-5 py-2.5 rounded-xl text-white transition-colors"
          style={{ background: '#F97316' }}
          onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
          onMouseOut={e => e.currentTarget.style.background = '#F97316'}
        >
          <i className="fa-solid fa-plus text-[11px]" aria-hidden="true" />
          Создать резюме
        </button>
      </div>

      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-6"
          style={{ background: '#F5F7FA', border: '1.5px dashed #DCE3EC' }}
        >
          <i className="fa-solid fa-folder-open text-[28px] mb-3" style={{ color: '#94A3B8' }} aria-hidden="true" />
          <p className="text-[15px] font-bold mb-1" style={{ color: '#0B1F3A' }}>
            Подходящих резюме не найдено
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(resume => (
            <ResumeCard key={resume.id} resume={resume} onOpen={setSelected} />
          ))}
        </div>
      )}

      <ResumeModal resume={selected} onClose={() => setSelected(null)} />
    </>
  )
}

const EMPTY_FORM = {
  name: '', phone: '', email: '', city: '',
  skills: '', experience: '', education: '', about: '',
  github: '', linkedin: '',
}

function FormField({ label, children, required }) {
  return (
    <div className="mb-5">
      <label className="block text-[12px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
        {label}{required && <span style={{ color: '#F97316' }}> *</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle = { border: '1.5px solid #DCE3EC', color: '#0B1F3A' }
const inputClass = 'w-full rounded-xl px-4 py-3 text-[14px] bg-white outline-none'

function CreateResumeForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)

  const update = useCallback((field, value) => {
    setForm(f => ({ ...f, [field]: value }))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setSubmitted(true)
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return
    onSubmit && onSubmit(form)
  }, [form, onSubmit])

  const showError = (field) => submitted && !form[field].trim()

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        <FormField label="Имя" required>
          <input
            type="text"
            value={form.name}
            onChange={e => update('name', e.target.value)}
            placeholder="Иван Иванов"
            className={inputClass}
            style={{ ...inputStyle, ...(showError('name') ? { border: '1.5px solid #E0664A' } : {}) }}
          />
        </FormField>

        <FormField label="Телефон" required>
          <input
            type="tel"
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
            placeholder="+992 ___ __ __ __"
            className={inputClass}
            style={{ ...inputStyle, ...(showError('phone') ? { border: '1.5px solid #E0664A' } : {}) }}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        <FormField label="Email" required>
          <input
            type="email"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="example@mail.com"
            className={inputClass}
            style={{ ...inputStyle, ...(showError('email') ? { border: '1.5px solid #E0664A' } : {}) }}
          />
        </FormField>

        <FormField label="Город">
          <select
            value={form.city}
            onChange={e => update('city', e.target.value)}
            className={`${inputClass} cursor-pointer`}
            style={inputStyle}
          >
            {CITIES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Навыки">
        <input
          type="text"
          value={form.skills}
          onChange={e => update('skills', e.target.value)}
          placeholder="React, TypeScript, Tailwind CSS"
          className={inputClass}
          style={inputStyle}
        />
        <p className="text-[11px] mt-1.5" style={{ color: '#94A3B8' }}>Перечислите через запятую</p>
      </FormField>

      <FormField label="Опыт работы">
        <textarea
          value={form.experience}
          onChange={e => update('experience', e.target.value)}
          placeholder={"Место: \nПозиция: \nПериод: \nПричина ухода: \nРекомендации (ФИО, контакт): "}
          rows={6}
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </FormField>

      <FormField label="Образование">
        <textarea
          value={form.education}
          onChange={e => update('education', e.target.value)}
          placeholder="Учебное заведение, специальность, годы обучения"
          rows={3}
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </FormField>

      <FormField label="О себе">
        <textarea
          value={form.about}
          onChange={e => update('about', e.target.value)}
          placeholder="Коротко расскажите о себе, своих сильных сторонах и целях"
          rows={3}
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        <FormField label="GitHub">
          <input
            type="url"
            value={form.github}
            onChange={e => update('github', e.target.value)}
            placeholder="https://github.com/username"
            className={inputClass}
            style={inputStyle}
          />
        </FormField>

        <FormField label="LinkedIn">
          <input
            type="url"
            value={form.linkedin}
            onChange={e => update('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className={inputClass}
            style={inputStyle}
          />
        </FormField>
      </div>

      {submitted && (!form.name.trim() || !form.phone.trim() || !form.email.trim()) && (
        <p className="text-[13px] font-medium mb-4" style={{ color: '#E0664A' }}>
          Заполните обязательные поля: имя, телефон и email
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
          style={{ background: '#F97316' }}
          onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
          onMouseOut={e => e.currentTarget.style.background = '#F97316'}
        >
          Опубликовать резюме <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3.5 rounded-xl text-[14px] font-bold transition-colors"
          style={{ background: '#F5F7FA', border: '1.5px solid #DCE3EC', color: '#64748B' }}
        >
          Отмена
        </button>
      </div>
    </form>
  )
}

function ResumeSection({ resumes = SAMPLE_RESUMES, onCreate }) {
  const [mode, setMode] = useState('list')

  const handleCreateSubmit = useCallback((formData) => {
    onCreate && onCreate(formData)
    setMode('list')
  }, [onCreate])

  return (
    <section
      id="resume"
      className="w-full px-4 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: '#F5F7FA' }}
      aria-label="Резюме"
    >
      <style>{`
        .hr-dashboard {
          --hk-ink: #0B1220;
          --hk-paper: #F7F8FA;
          --hk-panel: #FFFFFF;
          --hk-line: #E3E7EE;
          --hk-line-soft: #ECEFF4;
          --hk-accent: #2451D8;
          --hk-accent-soft: #EAF0FE;
          --hk-accent-border: #C7D6FB;
          --hk-signal: #F97316;
          --hk-signal-hover: #E0670B;
          --hk-mute: #5B6472;
          --hk-mute-2: #8A93A3;
          --hk-positive: #147A4D;
          --hk-positive-soft: #E7F5EE;
          --hk-warning: #B5760B;
          --hk-warning-soft: #FBF1DE;
          --hk-danger: #C23A3A;
          --hk-danger-soft: #FBEAEA;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
              {mode === 'list' ? 'База кандидатов' : 'Новое резюме'}
            </span>
            <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0B1F3A' }}>
              {mode === 'list' ? 'Резюме' : 'Создать резюме'}
            </h2>
          </div>

          {mode === 'create' && (
            <button
              type="button"
              onClick={() => setMode('list')}
              className="inline-flex items-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-colors w-fit"
              style={{ background: '#F5F7FA', border: '1.5px solid #DCE3EC', color: '#64748B' }}
            >
              <i className="fa-solid fa-arrow-left text-[11px]" aria-hidden="true" />
              К списку резюме
            </button>
          )}
        </div>

        {mode === 'list' ? (
          <>
            {/* Блок кабинета HR: Специалист технической поддержки */}
            <div className="hr-dashboard flex flex-col gap-6 mb-12 p-6 rounded-2xl bg-white" style={{ border: '1.5px solid #DCE3EC' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[.15em]" style={{ color: 'var(--hk-mute-2)' }}>
                    Управление откликами
                  </span>
                  <h2 className="text-xl font-black mt-1 text-slate-900" style={{ color: 'var(--hk-ink)' }}>
                    Специалист технической поддержки
                  </h2>
                  <p className="text-[13px] font-medium mt-1" style={{ color: 'var(--hk-mute)' }}>
                    Худжанд · Полная занятость · Опубликовано 3 дня назад
                  </p>
                </div>
                <div className="flex gap-3">
                  
                  {/* <button
                    type="button"
                    onClick={() => setMode('create')}
                    className="px-4 py-2 rounded-xl text-[13px] font-bold text-white transition-all hover:opacity-90"
                    style={{ background: 'var(--hk-signal)' }}
                  >
                    + Создать вакансию
                  </button> */}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {METRICS.map(m => {
                  const numColor = {
                    ink: 'var(--hk-ink)',
                    accent: 'var(--hk-accent)',
                    positive: 'var(--hk-positive)',
                    warning: 'var(--hk-warning)',
                  }[m.tone]
                  const hintColor = m.tone === 'accent' ? 'var(--hk-accent)' : 'var(--hk-mute-2)'

                  return (
                    <div
                      key={m.label}
                      className="rounded-xl p-3.5 transition-transform duration-200 hover:-translate-y-0.5 bg-white shadow-xs"
                      style={{ border: '1px solid var(--hk-line)' }}
                    >
                      <div className="text-[10.5px] font-bold uppercase tracking-wide" style={{ color: 'var(--hk-mute-2)' }}>{m.label}</div>
                      <div className="text-xl font-black mt-1" style={{ color: numColor }}>{m.num}</div>
                      <div className="text-[10.5px] font-medium mt-1" style={{ color: hintColor }}>{m.hint}</div>
                    </div>
                  )
                })}
                <div className="rounded-xl p-3.5" style={{ background: 'var(--hk-ink)' }}>
                  <div className="text-[10.5px] font-bold uppercase tracking-wide text-white opacity-70">Сэкономлено</div>
                  <div className="text-xl font-black mt-1 text-white">+11.6 ч</div>
                  <div className="text-[10.5px] font-medium mt-1 text-white opacity-70">Авто-отсев 70 кандидатов</div>
                </div>
              </div>

            
            </div>

            <ResumeList resumes={resumes} onCreateClick={() => setMode('create')} />
          </>
        ) : (
          <CreateResumeForm onSubmit={handleCreateSubmit} onCancel={() => setMode('list')} />
        )}
      </div>
    </section>
  )
}

export default ResumeSection