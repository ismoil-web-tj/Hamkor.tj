// import { useState, useMemo, useCallback, useEffect } from 'react'

// const CITIES = [
//   { value: '',            label: 'Весь Таджикистан' },
//   { value: 'khujand',     label: 'Худжанд' },
//   { value: 'dushanbe',    label: 'Душанбе' },
//   { value: 'istaravshan', label: 'Истаравшан' },
//   { value: 'remote',      label: 'Удалённо' },
// ]

// const PROFESSIONS = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

// // Демо-кандидаты для «Поиска кандидатов» — можно убрать и передавать через проп `candidates`
// export const SAMPLE_CANDIDATES = [
//   {
//     id: 'c1',
//     photo: '',
//     name: 'Фарход Назаров',
//     profession: 'Frontend-разработчик',
//     city: 'khujand',
//     cityLabel: 'Худжанд',
//     skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
//     experienceYears: 3,
//     experience: [
//       { company: 'IT Service', role: 'Frontend-разработчик', period: '2023 — наст. время', description: 'Разработка клиентской части финтех-продуктов, поддержка дизайн-системы.' },
//     ],
//     education: [
//       { institution: 'ТГУПБП', degree: 'Бакалавр, Информационные технологии', period: '2018 — 2022' },
//     ],
//     about: 'Люблю чистый код и аккуратные интерфейсы.',
//     salaryMin: 8000,
//     salaryMax: 14000,
//     currency: 'TJS',
//     phone: '+992 92 777 12 34',
//     email: 'farkhod.n@example.com',
//     updatedAt: '2 дня назад',
//   },
//   {
//     id: 'c2',
//     photo: '',
//     name: 'Шахноза Каримова',
//     profession: 'Backend-разработчик',
//     city: 'dushanbe',
//     cityLabel: 'Душанбе',
//     skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
//     experienceYears: 4,
//     experience: [
//       { company: 'Эсхата', role: 'Backend-разработчик', period: '2022 — наст. время', description: 'Развитие платформы мобильного банкинга, интеграции с платёжными системами.' },
//     ],
//     education: [
//       { institution: 'РТСУ', degree: 'Бакалавр, Прикладная математика', period: '2016 — 2020' },
//     ],
//     about: 'Специализируюсь на проектировании надёжных серверных систем.',
//     salaryMin: 10000,
//     salaryMax: 16000,
//     currency: 'TJS',
//     phone: '+992 92 555 88 90',
//     email: 'shahnoza.k@example.com',
//     updatedAt: '5 дней назад',
//   },
//   {
//     id: 'c3',
//     photo: '',
//     name: 'Алишер Расулов',
//     profession: 'QA-инженер',
//     city: 'remote',
//     cityLabel: 'Удалённо',
//     skills: ['Manual QA', 'Postman', 'Test Design', 'Selenium'],
//     experienceYears: 2,
//     experience: [
//       { company: 'DC', role: 'QA-инженер', period: '2023 — наст. время', description: 'Тестирование веб- и мобильных продуктов.' },
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

// /* ───────────────────────── Первый экран ───────────────────────── */

// function EmployerHero({ onPostJob, onFindCandidates }) {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//       {/* Разместите вакансию */}
//       <div
//         className="flex flex-col h-full rounded-2xl p-6 md:p-8"
//         style={{ background: '#FFF3E5', border: '2px solid #FFC894' }}
//       >
//         <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-white mb-4">
//           <i className="fa-solid fa-file-plus text-[22px]" style={{ color: '#F97316' }} aria-hidden="true" />
//         </div>
//         <h3 className="text-xl font-black mb-1.5" style={{ color: '#4A1D00' }}>
//           Разместите вакансию
//         </h3>
//         <p className="text-[13.5px] leading-[1.6] font-medium mb-6 max-w-sm" style={{ color: '#7C4217' }}>
//           Опубликуйте позицию за пару минут и начните получать отклики от IT-специалистов уже сегодня.
//         </p>
//         <button
//           type="button"
//           onClick={onPostJob}
//           className="mt-auto inline-flex items-center justify-center gap-2 text-[14px] font-black px-6 py-3.5 rounded-xl text-white transition-colors w-full"
//           style={{ background: '#F97316' }}
//           onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//           onMouseOut={e => e.currentTarget.style.background = '#F97316'}
//         >
//           Создать вакансию <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//         </button>
//       </div>

//       {/* Найдите сотрудника */}
//       <div
//         className="flex flex-col h-full rounded-2xl p-6 md:p-8"
//         style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '2px solid #334155' }}
//       >
//         <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.1)' }}>
//           <i className="fa-solid fa-magnifying-glass text-[22px] text-white" aria-hidden="true" />
//         </div>
//         <h3 className="text-xl font-black mb-1.5 text-white">
//           Найдите сотрудника
//         </h3>
//         <p className="text-[13.5px] leading-[1.6] mb-6 max-w-sm" style={{ color: '#94a3b8' }}>
//           Просматривайте базу резюме IT-специалистов и связывайтесь напрямую с подходящими кандидатами.
//         </p>
//         <button
//           type="button"
//           onClick={onFindCandidates}
//           className="mt-auto inline-flex items-center justify-center gap-2 text-[14px] font-black px-6 py-3.5 rounded-xl transition-colors w-full"
//           style={{ background: 'white', color: '#0F172A' }}
//           onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'}
//           onMouseOut={e => e.currentTarget.style.background = 'white'}
//         >
//           Искать кандидатов <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//         </button>
//       </div>

//     </div>
//   )
// }

// /* ───────────────────────── Создание вакансии ───────────────────────── */

// const EMPTY_JOB_FORM = {
//   title: '', company: '', salaryMin: '', salaryMax: '', city: '',
//   requirements: '', responsibilities: '', contactName: '', contactEmail: '', contactPhone: '',
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

// function CreateJobForm({ onSubmit, onCancel }) {
//   const [form, setForm] = useState(EMPTY_JOB_FORM)
//   const [submitted, setSubmitted] = useState(false)

//   const update = useCallback((field, value) => {
//     setForm(f => ({ ...f, [field]: value }))
//   }, [])

//   const requiredFields = ['title', 'company', 'city', 'contactEmail']

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     if (requiredFields.some(f => !form[f].trim())) return
//     onSubmit && onSubmit(form)
//   }, [form, onSubmit])

//   const showError = (field) => submitted && requiredFields.includes(field) && !form[field].trim()
//   const errStyle = (field) => showError(field) ? { border: '1.5px solid #E0664A' } : {}

//   return (
//     <form onSubmit={handleSubmit} className="max-w-2xl">

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
//         <FormField label="Название вакансии" required>
//           <input
//             type="text"
//             value={form.title}
//             onChange={e => update('title', e.target.value)}
//             placeholder="Frontend-разработчик"
//             className={inputClass}
//             style={{ ...inputStyle, ...errStyle('title') }}
//           />
//         </FormField>

//         <FormField label="Компания" required>
//           <input
//             type="text"
//             value={form.company}
//             onChange={e => update('company', e.target.value)}
//             placeholder="Название компании"
//             className={inputClass}
//             style={{ ...inputStyle, ...errStyle('company') }}
//           />
//         </FormField>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
//         <FormField label="Зарплата">
//           <div className="flex items-center gap-2">
//             <input
//               type="number"
//               min="0"
//               value={form.salaryMin}
//               onChange={e => update('salaryMin', e.target.value)}
//               placeholder="от"
//               className={inputClass}
//               style={inputStyle}
//             />
//             <span className="text-[13px] shrink-0" style={{ color: '#B0A090' }}>—</span>
//             <input
//               type="number"
//               min="0"
//               value={form.salaryMax}
//               onChange={e => update('salaryMax', e.target.value)}
//               placeholder="до"
//               className={inputClass}
//               style={inputStyle}
//             />
//           </div>
//         </FormField>

//         <FormField label="Город" required>
//           <select
//             value={form.city}
//             onChange={e => update('city', e.target.value)}
//             className={`${inputClass} cursor-pointer`}
//             style={{ ...inputStyle, ...errStyle('city') }}
//           >
//             <option value="" disabled>Выберите город</option>
//             {CITIES.filter(c => c.value).map(({ value, label }) => (
//               <option key={value} value={value}>{label}</option>
//             ))}
//           </select>
//         </FormField>
//       </div>

//       <FormField label="Требования">
//         <textarea
//           value={form.requirements}
//           onChange={e => update('requirements', e.target.value)}
//           placeholder="Опыт работы, знание технологий, навыки — каждый пункт с новой строки"
//           rows={4}
//           className={`${inputClass} resize-none`}
//           style={inputStyle}
//         />
//       </FormField>

//       <FormField label="Обязанности">
//         <textarea
//           value={form.responsibilities}
//           onChange={e => update('responsibilities', e.target.value)}
//           placeholder="Что предстоит делать на этой позиции — каждый пункт с новой строки"
//           rows={4}
//           className={`${inputClass} resize-none`}
//           style={inputStyle}
//         />
//       </FormField>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5">
//         <FormField label="Контактное лицо">
//           <input
//             type="text"
//             value={form.contactName}
//             onChange={e => update('contactName', e.target.value)}
//             placeholder="Имя HR-менеджера"
//             className={inputClass}
//             style={inputStyle}
//           />
//         </FormField>

//         <FormField label="Email" required>
//           <input
//             type="email"
//             value={form.contactEmail}
//             onChange={e => update('contactEmail', e.target.value)}
//             placeholder="hr@company.tj"
//             className={inputClass}
//             style={{ ...inputStyle, ...errStyle('contactEmail') }}
//           />
//         </FormField>

//         <FormField label="Телефон">
//           <input
//             type="tel"
//             value={form.contactPhone}
//             onChange={e => update('contactPhone', e.target.value)}
//             placeholder="+992 ___ __ __ __"
//             className={inputClass}
//             style={inputStyle}
//           />
//         </FormField>
//       </div>

//       {submitted && requiredFields.some(f => !form[f].trim()) && (
//         <p className="text-[13px] font-medium mb-4" style={{ color: '#E0664A' }}>
//           Заполните обязательные поля: название вакансии, компанию, город и email
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
//           Опубликовать вакансию <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
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

// /* ───────────────────────── Карточка кандидата ───────────────────────── */

// function CandidateCard({ candidate, onOpen }) {
//   return (
//     <button
//       type="button"
//       onClick={() => onOpen(candidate)}
//       className="text-left flex flex-col gap-3 rounded-2xl p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 w-full"
//       style={{ border: '1.5px solid #E8D5C4' }}
//     >
//       <div className="flex items-start gap-3">
//         <div
//           className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden text-[15px] font-extrabold"
//           style={{ background: '#FEE8D0', color: '#C2570A' }}
//         >
//           {candidate.photo ? (
//             <img src={candidate.photo} alt={candidate.name} className="w-full h-full object-cover" />
//           ) : (
//             initials(candidate.name)
//           )}
//         </div>
//         <div className="min-w-0 flex-1">
//           <h3 className="text-[16px] font-extrabold leading-snug truncate" style={{ color: '#0D1B2A' }}>
//             {candidate.name}
//           </h3>
//           <p className="text-[13px] font-semibold mt-0.5 truncate" style={{ color: '#7A6B5D' }}>
//             {candidate.profession}
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-1.5">
//         {candidate.skills.slice(0, 4).map(skill => (
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
//           {candidate.experienceYears} {candidate.experienceYears === 1 ? 'год' : 'года'} опыта
//         </span>
//         <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#B0A090' }}>
//           <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
//           {candidate.cityLabel}
//         </span>
//       </div>

//       <div className="flex items-center justify-between">
//         <span className="text-[13px] font-extrabold" style={{ color: '#C2570A' }}>
//           {formatSalary(candidate.salaryMin, candidate.salaryMax, candidate.currency)}
//         </span>
//         <span className="text-[11px] font-medium" style={{ color: '#C2A48A' }}>
//           {candidate.updatedAt}
//         </span>
//       </div>
//     </button>
//   )
// }

// /* ───────────────────────── Модалка кандидата ───────────────────────── */

// function CandidateModal({ candidate, onClose }) {
//   useEffect(() => {
//     const onKey = e => { if (e.key === 'Escape') onClose() }
//     document.addEventListener('keydown', onKey)
//     return () => document.removeEventListener('keydown', onKey)
//   }, [onClose])

//   if (!candidate) return null

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
//       style={{ background: 'rgba(13,27,42,0.45)' }}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="candidate-modal-title"
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
//               {candidate.photo ? (
//                 <img src={candidate.photo} alt={candidate.name} className="w-full h-full object-cover" />
//               ) : (
//                 initials(candidate.name)
//               )}
//             </div>
//             <div className="min-w-0">
//               <h2 id="candidate-modal-title" className="text-xl font-extrabold leading-tight truncate" style={{ color: '#0D1B2A' }}>
//                 {candidate.name}
//               </h2>
//               <p className="text-[14px] font-semibold mt-0.5" style={{ color: '#7A6B5D' }}>
//                 {candidate.profession}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl" style={{ background: '#FFF8F2', border: '1px solid #F3E6D7' }}>
//             <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0D1B2A' }}>
//               <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
//               {formatSalary(candidate.salaryMin, candidate.salaryMax, candidate.currency)}
//             </div>
//             <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#7A6B5D' }}>
//               <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
//               {candidate.cityLabel}
//             </div>
//             <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#7A6B5D' }}>
//               <i className="fa-solid fa-briefcase text-[12px]" aria-hidden="true" />
//               {candidate.experienceYears} {candidate.experienceYears === 1 ? 'год' : 'года'} опыта
//             </div>
//           </div>

//           <section className="mb-6">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Навыки
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {candidate.skills.map(skill => (
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

//           {candidate.about && (
//             <section className="mb-6">
//               <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//                 О себе
//               </h3>
//               <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
//                 {candidate.about}
//               </p>
//             </section>
//           )}

//           {candidate.experience && candidate.experience.length > 0 && (
//             <section className="mb-6">
//               <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#B0A090' }}>
//                 Опыт работы
//               </h3>
//               <div className="flex flex-col gap-4">
//                 {candidate.experience.map((exp, i) => (
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

//           {candidate.education && candidate.education.length > 0 && (
//             <section className="mb-7">
//               <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#B0A090' }}>
//                 Образование
//               </h3>
//               <div className="flex flex-col gap-3">
//                 {candidate.education.map((edu, i) => (
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

//           {/* Контакты кандидата */}
//           <section className="mb-2">
//             <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#B0A090' }}>
//               Контакты кандидата
//             </h3>
//             <div className="flex flex-col gap-1.5 text-[14px] p-4 rounded-xl" style={{ background: '#FFF8F2', border: '1px solid #F3E6D7' }}>
//               {candidate.email && (
//                 <a href={`mailto:${candidate.email}`} className="flex items-center gap-2 hover:underline" style={{ color: '#3D352B' }}>
//                   <i className="fa-solid fa-envelope text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
//                   {candidate.email}
//                 </a>
//               )}
//               {candidate.phone && (
//                 <a href={`tel:${candidate.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline" style={{ color: '#3D352B' }}>
//                   <i className="fa-solid fa-phone text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
//                   {candidate.phone}
//                 </a>
//               )}
//             </div>
//           </section>

//         </div>
//       </div>
//     </div>
//   )
// }

// /* ───────────────────────── Поиск кандидатов ───────────────────────── */

// const DEFAULT_FILTERS = { search: '', city: '', profession: '' }

// function FindCandidates({ candidates }) {
//   const [filters, setFilters] = useState(DEFAULT_FILTERS)
//   const [selected, setSelected] = useState(null)

//   const filtered = useMemo(() => {
//     const q = filters.search.trim().toLowerCase()
//     return candidates.filter(c => {
//       if (q && !c.name.toLowerCase().includes(q) && !c.profession.toLowerCase().includes(q) &&
//           !c.skills.some(s => s.toLowerCase().includes(q))) return false
//       if (filters.city && c.city !== filters.city) return false
//       if (filters.profession && c.profession !== filters.profession) return false
//       return true
//     })
//   }, [candidates, filters])

//   const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

//   return (
//     <>
//       {/* Поиск по резюме + фильтры */}
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
//             placeholder="Поиск по резюме: имя, профессия, навык"
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
//       </div>

//       <p className="text-[12px] font-bold mb-5" style={{ color: '#B0A090' }}>
//         Найдено: <span style={{ color: '#0D1B2A' }}>{filtered.length}</span>
//       </p>

//       {filtered.length === 0 ? (
//         <div
//           className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-6"
//           style={{ background: '#FFF8F2', border: '1.5px dashed #E8D5C4' }}
//         >
//           <i className="fa-solid fa-folder-open text-[28px] mb-3" style={{ color: '#C2A48A' }} aria-hidden="true" />
//           <p className="text-[15px] font-bold mb-1" style={{ color: '#0D1B2A' }}>
//             Подходящих кандидатов не найдено
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
//           {filtered.map(candidate => (
//             <CandidateCard key={candidate.id} candidate={candidate} onOpen={setSelected} />
//           ))}
//         </div>
//       )}

//       <CandidateModal candidate={selected} onClose={() => setSelected(null)} />
//     </>
//   )
// }

// /* ───────────────────────── Корневой компонент ───────────────────────── */

// const MODE_META = {
//   hero:      { badge: 'Для работодателей', title: 'Работодателям' },
//   createJob: { badge: 'Новая вакансия',    title: 'Создание вакансии' },
//   find:      { badge: 'База кандидатов',   title: 'Поиск кандидатов' },
// }

// function EmployerSection({ candidates = SAMPLE_CANDIDATES, onCreateJob }) {
//   const [mode, setMode] = useState('hero') // 'hero' | 'createJob' | 'find'

//   const handleJobSubmit = useCallback((formData) => {
//     onCreateJob && onCreateJob(formData)
//     setMode('hero')
//   }, [onCreateJob])

//   const meta = MODE_META[mode]

//   return (
//     <section
//       id="employers"
//       className="w-full px-4 py-14 md:px-12 md:py-20"
//       style={{ backgroundColor: mode === 'hero' ? '#FDF6EE' : '#FFFFFF' }}
//       aria-label="Работодателям"
//     >
//       <div className="max-w-7xl mx-auto">

//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//           <div>
//             <span
//               className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
//               style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
//               {meta.badge}
//             </span>
//             <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0D1B2A' }}>
//               {meta.title}
//             </h2>
//           </div>

//           {mode !== 'hero' && (
//             <button
//               type="button"
//               onClick={() => setMode('hero')}
//               className="inline-flex items-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-colors w-fit"
//               style={{ background: '#FFF8F2', border: '1.5px solid #E8D5C4', color: '#7A6B5D' }}
//             >
//               <i className="fa-solid fa-arrow-left text-[11px]" aria-hidden="true" />
//               Назад
//             </button>
//           )}
//         </div>

//         {mode === 'hero' && (
//           <EmployerHero
//             onPostJob={() => setMode('createJob')}
//             onFindCandidates={() => setMode('find')}
//           />
//         )}

//         {mode === 'createJob' && (
//           <CreateJobForm onSubmit={handleJobSubmit} onCancel={() => setMode('hero')} />
//         )}

//         {mode === 'find' && (
//           <FindCandidates candidates={candidates} />
//         )}

//       </div>
//     </section>
//   )
// }

// export default EmployerSection



import { Link } from 'react-router-dom'
import { useState, useMemo, useCallback, useEffect } from 'react'

const CITIES = [
  { value: '', label: 'Весь Таджикистан' },
  { value: 'khujand', label: 'Худжанд' },
  { value: 'dushanbe', label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
  { value: 'remote', label: 'Удалённо' },
]

const PROFESSIONS = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

export const SAMPLE_CANDIDATES = [
  {
    id: 'c1',
    photo: '',
    name: 'Фарход Назаров',
    profession: 'Frontend-разработчик',
    city: 'khujand',
    cityLabel: 'Худжанд',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    experienceYears: 3,
    experience: [
      { company: 'IT Service', role: 'Frontend-разработчик', period: '2023 — наст. время', description: 'Разработка клиентской части финтех-продуктов, поддержка дизайн-системы.' },
    ],
    education: [
      { institution: 'ТГУПБП', degree: 'Бакалавр, Информационные технологии', period: '2018 — 2022' },
    ],
    about: 'Люблю чистый код и аккуратные интерфейсы.',
    salaryMin: 8000,
    salaryMax: 14000,
    currency: 'TJS',
    phone: '+992 92 777 12 34',
    email: 'farkhod.n@example.com',
    updatedAt: '2 дня назад',
  },
  {
    id: 'c2',
    photo: '',
    name: 'Шахноза Каримова',
    profession: 'Backend-разработчик',
    city: 'dushanbe',
    cityLabel: 'Душанбе',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    experienceYears: 4,
    experience: [
      { company: 'Эсхата', role: 'Backend-разработчик', period: '2022 — наст. время', description: 'Развитие платформы мобильного банкинга, интеграции с платёжными системами.' },
    ],
    education: [
      { institution: 'РТСУ', degree: 'Бакалавр, Прикладная математика', period: '2016 — 2020' },
    ],
    about: 'Специализируюсь на проектировании надёжных серверных систем.',
    salaryMin: 10000,
    salaryMax: 16000,
    currency: 'TJS',
    phone: '+992 92 555 88 90',
    email: 'shahnoza.k@example.com',
    updatedAt: '5 дней назад',
  },
  {
    id: 'c3',
    photo: '',
    name: 'Алишер Расулов',
    profession: 'QA-инженер',
    city: 'remote',
    cityLabel: 'Удалённо',
    skills: ['Manual QA', 'Postman', 'Test Design', 'Selenium'],
    experienceYears: 2,
    experience: [
      { company: 'DC', role: 'QA-инженер', period: '2023 — наст. время', description: 'Тестирование веб- и мобильных продуктов.' },
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

function getExperienceText(years) {
  if (!years) return 'без опыта'
  const lastDigit = years % 10
  const lastTwoDigits = years % 100
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${years} лет опыта`
  }
  if (lastDigit === 1) {
    return `${years} год опыта`
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${years} года опыта`
  }
  return `${years} лет опыта`
}

function EmployerHero({ onPostJob, onFindCandidates }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

      <div
        className="flex flex-col h-full rounded-2xl p-5 md:p-8 bg-white"
        style={{ border: '2px solid #E1E7EF' }}
      >
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-[#F5F7FA] mb-4">
          <i className="fa-solid fa-file-plus text-[22px]" style={{ color: '#F97316' }} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-black mb-1.5" style={{ color: '#0B1F3A' }}>
          Разместите вакансию
        </h3>
        <p className="text-[13.5px] leading-[1.6] font-medium mb-6 max-w-sm" style={{ color: '#64748B' }}>
          Опубликуйте позицию за пару минут и начните получать отклики от IT-специалистов уже сегодня.
        </p>
        <button
          type="button"
          onClick={onPostJob}
          className="mt-auto inline-flex items-center justify-center gap-2 text-[14px] font-black px-6 py-3.5 rounded-xl text-white transition-colors w-full"
          style={{ background: '#F97316' }}
          onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
          onMouseOut={e => e.currentTarget.style.background = '#F97316'}
        >
          Создать вакансию <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
        </button>
      </div>

      <div
        className="flex flex-col h-full rounded-2xl p-5 md:p-8"
        style={{ background: 'linear-gradient(135deg, #14304F 0%, #0B1F3A 100%)', border: '2px solid #1E3A5F' }}
      >
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <i className="fa-solid fa-magnifying-glass text-[22px] text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-black mb-1.5 text-white">
          Найдите сотрудника
        </h3>
        <p className="text-[13.5px] leading-[1.6] mb-6 max-w-sm" style={{ color: '#94A3B8' }}>
          Просматривайте базу резюме IT-специалистов и связывайтесь напрямую с подходящими кандидатами.
        </p>
        <button
          type="button"
          onClick={onFindCandidates}
          className="mt-auto inline-flex items-center justify-center gap-2 text-[14px] font-black px-6 py-3.5 rounded-xl transition-colors w-full"
          style={{ background: 'white', color: '#0B1F3A' }}
          onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'}
          onMouseOut={e => e.currentTarget.style.background = 'white'}
        >
          Искать кандидатов <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
        </button>
      </div>

    </div>
  )
}

const EMPTY_JOB_FORM = {
  title: '', company: '', salaryMin: '', salaryMax: '', city: '',
  requirements: '', responsibilities: '', contactName: '', contactEmail: '', contactPhone: '',
}

function FormField({ label, children, required }) {
  return (
    <div className="mb-4 md:mb-5">
      <label className="block text-[11px] md:text-[12px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
        {label}{required && <span style={{ color: '#F97316' }}> *</span>}
      </label>
      {children}
    </div>
  )
}

// Поля ввода с размером 16px на мобильных устройствах предотвращают нежелательное автоприближение (zoom) в Safari
const inputClass = 'w-full rounded-xl px-4 py-3 text-[16px] md:text-[14px] bg-white outline-none border transition-colors duration-150 focus:border-[#F97316]'

function CreateJobForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(EMPTY_JOB_FORM)
  const [submitted, setSubmitted] = useState(false)

  const update = useCallback((field, value) => {
    setForm(f => ({ ...f, [field]: value }))
  }, [])

  const requiredFields = ['title', 'company', 'city', 'contactEmail']

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setSubmitted(true)
    if (requiredFields.some(f => !form[f].trim())) return
    onSubmit && onSubmit(form)
  }, [form, onSubmit])

  const showError = (field) => submitted && requiredFields.includes(field) && !form[field].trim()
  const errClass = (field) => showError(field) ? 'border-[#E0664A]' : 'border-[#DCE3EC]'

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-5 md:p-8 rounded-2xl border border-[#E1E7EF]">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        <FormField label="Название вакансии" required>
          <input
            type="text"
            value={form.title}
            onChange={e => update('title', e.target.value)}
            placeholder="Frontend-разработчик"
            className={`${inputClass} ${errClass('title')}`}
            style={{ color: '#0B1F3A' }}
          />
        </FormField>

        <FormField label="Компания" required>
          <input
            type="text"
            value={form.company}
            onChange={e => update('company', e.target.value)}
            placeholder="Название компании"
            className={`${inputClass} ${errClass('company')}`}
            style={{ color: '#0B1F3A' }}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        <FormField label="Зарплата (TJS)">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              value={form.salaryMin}
              onChange={e => update('salaryMin', e.target.value)}
              placeholder="от"
              className={`${inputClass} border-[#DCE3EC]`}
              style={{ color: '#0B1F3A' }}
            />
            <span className="text-[13px] shrink-0" style={{ color: '#94A3B8' }}>—</span>
            <input
              type="number"
              min="0"
              value={form.salaryMax}
              onChange={e => update('salaryMax', e.target.value)}
              placeholder="до"
              className={`${inputClass} border-[#DCE3EC]`}
              style={{ color: '#0B1F3A' }}
            />
          </div>
        </FormField>

        <FormField label="Город" required>
          <div className="relative">
            <select
              value={form.city}
              onChange={e => update('city', e.target.value)}
              className={`${inputClass} ${errClass('city')} appearance-none cursor-pointer pr-10`}
              style={{ color: '#0B1F3A' }}
            >
              <option value="" disabled>Выберите город</option>
              {CITIES.filter(c => c.value).map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#64748B]">
              <i className="fa-solid fa-chevron-down text-[12px]" aria-hidden="true" />
            </div>
          </div>
        </FormField>
      </div>

      <FormField label="Требования">
        <textarea
          value={form.requirements}
          onChange={e => update('requirements', e.target.value)}
          placeholder="Опыт работы, знание технологий, навыки — каждый пункт с новой строки"
          rows={4}
          className={`${inputClass} border-[#DCE3EC] resize-none`}
          style={{ color: '#0B1F3A' }}
        />
      </FormField>

      <FormField label="Обязанности">
        <textarea
          value={form.responsibilities}
          onChange={e => update('responsibilities', e.target.value)}
          placeholder="Что предстоит делать на этой позиции — каждый пункт с новой строки"
          rows={4}
          className={`${inputClass} border-[#DCE3EC] resize-none`}
          style={{ color: '#0B1F3A' }}
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5">
        <FormField label="Контактное лицо">
          <input
            type="text"
            value={form.contactName}
            onChange={e => update('contactName', e.target.value)}
            placeholder="Имя HR-менеджера"
            className={`${inputClass} border-[#DCE3EC]`}
            style={{ color: '#0B1F3A' }}
          />
        </FormField>

        <FormField label="Email" required>
          <input
            type="email"
            value={form.contactEmail}
            onChange={e => update('contactEmail', e.target.value)}
            placeholder="hr@company.tj"
            className={`${inputClass} ${errClass('contactEmail')}`}
            style={{ color: '#0B1F3A' }}
          />
        </FormField>

        <FormField label="Телефон">
          <input
            type="tel"
            value={form.contactPhone}
            onChange={e => update('contactPhone', e.target.value)}
            placeholder="+992 ___ __ __ __"
            className={`${inputClass} border-[#DCE3EC]`}
            style={{ color: '#0B1F3A' }}
          />
        </FormField>
      </div>

      {submitted && requiredFields.some(f => !form[f].trim()) && (
        <p className="text-[13px] font-medium mb-4" style={{ color: '#E0664A' }}>
          Заполните обязательные поля: название вакансии, компанию, город и email
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          type="submit"
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
          style={{ background: '#F97316' }}
          onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
          onMouseOut={e => e.currentTarget.style.background = '#F97316'}
        >
          Опубликовать вакансию <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-[14px] font-bold transition-colors"
          style={{ background: '#F5F7FA', border: '1.5px solid #DCE3EC', color: '#64748B' }}
        >
          Отмена
        </button>
      </div>
    </form>
  )
}

function CandidateCard({ candidate, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(candidate)}
      className="text-left flex flex-col gap-3 rounded-2xl p-4 md:p-5 bg-white transition-all duration-200 hover:-translate-y-0.5 w-full active:scale-[0.99] sm:active:scale-100"
      style={{ border: '1.5px solid #DCE3EC' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center overflow-hidden text-[14px] md:text-[15px] font-extrabold"
          style={{ background: '#EFF6FF', color: '#1D4ED8' }}
        >
          {candidate.photo ? (
            <img src={candidate.photo} alt={candidate.name} className="w-full h-full object-cover" />
          ) : (
            initials(candidate.name)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] md:text-[16px] font-extrabold leading-snug truncate" style={{ color: '#0B1F3A' }}>
            {candidate.name}
          </h3>
          <p className="text-[12px] md:text-[13px] font-semibold mt-0.5 truncate" style={{ color: '#64748B' }}>
            {candidate.profession}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {candidate.skills.slice(0, 4).map(skill => (
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
          {getExperienceText(candidate.experienceYears)}
        </span>
        <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#94A3B8' }}>
          <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
          {candidate.cityLabel}
        </span>
      </div>

      <div className="flex items-center justify-between mt-1">
        <span className="text-[13px] font-extrabold" style={{ color: '#1D4ED8' }}>
          {formatSalary(candidate.salaryMin, candidate.salaryMax, candidate.currency)}
        </span>
        <span className="text-[11px] font-medium" style={{ color: '#94A3B8' }}>
          {candidate.updatedAt}
        </span>
      </div>
    </button>
  )
}

function CandidateModal({ candidate, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    // Отключение прокрутки заднего фона при открытом модальном окне
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!candidate) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
      style={{ background: 'rgba(11,31,58,0.5)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="candidate-modal-title"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full h-[92vh] sm:h-auto sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col"
        style={{ border: '1.5px solid #DCE3EC' }}
      >
        {/* Кнопка закрытия */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
          style={{ background: '#F5F7FA', color: '#64748B' }}
        >
          <i className="fa-solid fa-xmark text-[15px]" aria-hidden="true" />
        </button>

        {/* Скроллируемая область контента */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 max-h-full">

          <div className="flex items-center gap-4 mb-6 pr-8">
            <div
              className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center overflow-hidden text-[16px] sm:text-[18px] font-extrabold"
              style={{ background: '#EFF6FF', color: '#1D4ED8' }}
            >
              {candidate.photo ? (
                <img src={candidate.photo} alt={candidate.name} className="w-full h-full object-cover" />
              ) : (
                initials(candidate.name)
              )}
            </div>
            <div className="min-w-0">
              <h2 id="candidate-modal-title" className="text-lg sm:text-xl font-extrabold leading-tight truncate" style={{ color: '#0B1F3A' }}>
                {candidate.name}
              </h2>
              <p className="text-[13px] sm:text-[14px] font-semibold mt-0.5" style={{ color: '#64748B' }}>
                {candidate.profession}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 p-4 rounded-xl" style={{ background: '#F5F7FA', border: '1px solid #E1E7EF' }}>
            <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0B1F3A' }}>
              <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
              {formatSalary(candidate.salaryMin, candidate.salaryMax, candidate.currency)}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
              {candidate.cityLabel}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-briefcase text-[12px]" aria-hidden="true" />
              {getExperienceText(candidate.experienceYears)}
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-2.5" style={{ color: '#94A3B8' }}>
              Навыки
            </h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map(skill => (
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

          {candidate.about && (
            <section className="mb-6">
              <h3 className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
                О себе
              </h3>
              <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
                {candidate.about}
              </p>
            </section>
          )}

          {candidate.experience && candidate.experience.length > 0 && (
            <section className="mb-6">
              <h3 className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#94A3B8' }}>
                Опыт работы
              </h3>
              <div className="flex flex-col gap-4">
                {candidate.experience.map((exp, i) => (
                  <div key={i} className="pl-4 border-l-2 border-[#BFDBFE]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span className="text-[14px] font-bold" style={{ color: '#0B1F3A' }}>{exp.role}</span>
                      <span className="text-[11px] sm:text-[12px] font-medium text-[#94A3B8]">{exp.period}</span>
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

          {candidate.education && candidate.education.length > 0 && (
            <section className="mb-6">
              <h3 className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-3" style={{ color: '#94A3B8' }}>
                Образование
              </h3>
              <div className="flex flex-col gap-3">
                {candidate.education.map((edu, i) => (
                  <div key={i} className="pl-4 border-l-2 border-[#DCE3EC]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span className="text-[14px] font-bold" style={{ color: '#0B1F3A' }}>{edu.institution}</span>
                      <span className="text-[11px] sm:text-[12px] font-medium text-[#94A3B8]">{edu.period}</span>
                    </div>
                    <p className="text-[13px] mt-0.5" style={{ color: '#64748B' }}>{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mb-2">
            <h3 className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Контакты кандидата
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 rounded-xl text-[14px]" style={{ background: '#F5F7FA', border: '1px solid #E1E7EF' }}>
              {candidate.email && (
                <a href={`mailto:${candidate.email}`} className="flex items-center gap-2 hover:underline text-[#3D352B]">
                  <i className="fa-solid fa-envelope text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
                  {candidate.email}
                </a>
              )}
              {candidate.phone && (
                <a href={`tel:${candidate.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline text-[#3D352B]">
                  <i className="fa-solid fa-phone text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
                  {candidate.phone}
                </a>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

const DEFAULT_FILTERS = { search: '', city: '', profession: '' }

function FindCandidates({ candidates }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    return candidates.filter(c => {
      if (q && !c.name.toLowerCase().includes(q) && !c.profession.toLowerCase().includes(q) &&
        !c.skills.some(s => s.toLowerCase().includes(q))) return false
      if (filters.city && c.city !== filters.city) return false
      if (filters.profession && c.profession !== filters.profession) return false
      return true
    })
  }, [candidates, filters])

  const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

  return (
    <>
      <div
        className="flex flex-col gap-3 rounded-2xl p-3 md:p-4 mb-6 bg-[#F5F7FA]"
        style={{ border: '1.5px solid #DCE3EC' }}
      >
        <div className="flex items-center w-full gap-2 rounded-xl px-3 bg-white border border-[#DCE3EC]">
          <svg className="w-4 h-4 shrink-0 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="search"
            value={filters.search}
            onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
            placeholder="Имя, профессия, навык"
            autoComplete="off"
            className="w-full py-3 text-[16px] md:text-[13px] bg-transparent outline-none text-[#0B1F3A]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="relative">
            <select
              value={filters.city}
              onChange={e => setFilters(f => ({ ...f, city: e.target.value }))}
              className="w-full rounded-xl px-3 py-3 text-[16px] md:text-[13px] bg-white outline-none cursor-pointer font-medium appearance-none border border-[#DCE3EC] pr-10"
              style={{ color: '#0B1F3A' }}
            >
              {CITIES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#64748B]">
              <i className="fa-solid fa-chevron-down text-[11px]" aria-hidden="true" />
            </div>
          </div>

          <div className="relative">
            <select
              value={filters.profession}
              onChange={e => setFilters(f => ({ ...f, profession: e.target.value }))}
              className="w-full rounded-xl px-3 py-3 text-[16px] md:text-[13px] bg-white outline-none cursor-pointer font-medium appearance-none border border-[#DCE3EC] pr-10"
              style={{ color: '#0B1F3A' }}
            >
              <option value="">Любая профессия</option>
              {PROFESSIONS.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#64748B]">
              <i className="fa-solid fa-chevron-down text-[11px]" aria-hidden="true" />
            </div>
          </div>
        </div>

        {(filters.search || filters.city || filters.profession) && (
          <button
            type="button"
            onClick={handleReset}
            className="text-[12px] font-bold py-2 text-[#1D4ED8] w-fit self-end active:opacity-75"
          >
            Сбросить фильтры
          </button>
        )}
      </div>

      <p className="text-[12px] font-bold mb-4 text-[#94A3B8]">
        Найдено кандидатов: <span className="text-[#0B1F3A]">{filtered.length}</span>
      </p>

      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center text-center rounded-2xl py-12 px-4"
          style={{ background: '#F5F7FA', border: '1.5px dashed #DCE3EC' }}
        >
          <i className="fa-solid fa-folder-open text-[28px] mb-3 text-[#94A3B8]" aria-hidden="true" />
          <p className="text-[15px] font-bold mb-1 text-[#0B1F3A]">
            Кандидаты не найдены
          </p>
          <p className="text-[13px] mb-5 text-[#64748B]">
            Попробуйте изменить критерии поиска или очистить фильтры
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="text-[13px] font-bold px-5 py-2.5 rounded-xl text-white active:scale-95 transition-transform"
            style={{ background: '#F97316' }}
          >
            Сбросить поиск
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(candidate => (
            <CandidateCard key={candidate.id} candidate={candidate} onOpen={setSelected} />
          ))}
        </div>
      )}

      {selected && <CandidateModal candidate={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

const MODE_META = {
  hero: { badge: 'Для работодателей', title: 'Работодателям' },
  createJob: { badge: 'Новая вакансия', title: 'Создание вакансии' },
  find: { badge: 'База кандидатов', title: 'Поиск кандидатов' },
}

function EmployerSection({ candidates = SAMPLE_CANDIDATES, onCreateJob }) {
  const [mode, setMode] = useState('hero')

  const handleJobSubmit = useCallback((formData) => {
    onCreateJob && onCreateJob(formData)
    setMode('hero')
  }, [onCreateJob])

  const meta = MODE_META[mode]

  return (
    <section
      id="employers"
      className="w-full px-4 py-8 md:px-12 md:py-16"
      style={{ backgroundColor: '#F5F7FA' }}
      aria-label="Работодателям"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[11px] md:text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-3"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: '#F97316' }} />
              {meta.badge}
            </span>
            <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0B1F3A' }}>
              {meta.title}
            </h2>
          </div>

          {mode !== 'hero' && (
            <button
              type="button"
              onClick={() => setMode('hero')}
              className="inline-flex items-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-colors w-fit bg-white border border-[#DCE3EC] text-[#64748B] hover:bg-[#F5F7FA]"
            >
              <i className="fa-solid fa-arrow-left text-[11px]" aria-hidden="true" />
              Назад
            </button>
          )}
        </div>

        {mode === 'hero' && (
          <EmployerHero
            onPostJob={() => setMode('createJob')}
            onFindCandidates={() => setMode('find')}
          />
        )}

        {mode === 'createJob' && (
          <CreateJobForm onSubmit={handleJobSubmit} onCancel={() => setMode('hero')} />
        )}

        {mode === 'find' && (
          <FindCandidates candidates={candidates} />
        )}

      </div>
    </section>
  )
}

export default EmployerSection