// import { useState, useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const FILTERS = ['Все', 'Удалённо', 'Офис', 'Гибрид']

// const JOBS = [
//   {
//     id: 1,
//     title: 'Frontend Developer',
//     company: 'IT Service',
//     location: 'Худжанд',
//     type: 'Офис',
//     salary: '2 500 – 4 000 $',
//     tags: ['React', 'TypeScript', 'Tailwind'],
//     logo: 'IT',
//     posted: '2 часа назад',
//     hot: true,
//   },
//   {
//     id: 2,
//     title: 'Backend Engineer',
//     company: 'Эсхата Банк',
//     location: 'Душанбе',
//     type: 'Гибрид',
//     salary: '3 000 – 5 000 $',
//     tags: ['Python', 'Django', 'PostgreSQL'],
//     logo: 'ЭБ',
//     posted: '5 часов назад',
//     hot: false,
//   },
//   {
//     id: 3,
//     title: 'DevOps Engineer',
//     company: 'Payme',
//     location: 'Удалённо',
//     type: 'Удалённо',
//     salary: '4 000 – 6 500 $',
//     tags: ['Docker', 'Kubernetes', 'AWS'],
//     logo: 'PM',
//     posted: '1 день назад',
//     hot: true,
//   },
//   {
//     id: 4,
//     title: 'UI/UX Designer',
//     company: 'Click',
//     location: 'Худжанд',
//     type: 'Офис',
//     salary: '1 800 – 3 000 $',
//     tags: ['Figma', 'Prototyping', 'Research'],
//     logo: 'CL',
//     posted: '2 дня назад',
//     hot: false,
//   },
//   {
//     id: 5,
//     title: 'Mobile Developer',
//     company: 'DC Solutions',
//     location: 'Удалённо',
//     type: 'Удалённо',
//     salary: '3 500 – 5 500 $',
//     tags: ['React Native', 'iOS', 'Android'],
//     logo: 'DC',
//     posted: '3 дня назад',
//     hot: false,
//   },
//   {
//     id: 6,
//     title: 'Data Analyst',
//     company: 'IT Service',
//     location: 'Душанбе',
//     type: 'Гибрид',
//     salary: '2 000 – 3 500 $',
//     tags: ['Python', 'SQL', 'PowerBI'],
//     logo: 'IT',
//     posted: '3 дня назад',
//     hot: false,
//   },
// ]

// const TYPE_STYLES = {
//   'Удалённо': { background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' },
//   'Офис':     { background: '#FFF8F2', color: '#7C4217', border: '1px solid #FCD4AD' },
//   'Гибрид':   { background: '#FEE8D0', color: '#C2570A', border: '1px solid #FDCFA0' },
// }

// function JobCard({ job, index, onApply }) {
//   const cardRef = useRef(null)

//   useEffect(() => {
//     const el = cardRef.current
//     if (!el) return
//     const timer = setTimeout(() => {
//       el.style.opacity = '1'
//       el.style.transform = 'translateY(0)'
//     }, index * 80)
//     return () => clearTimeout(timer)
//   }, [index])

//   return (
//     <article
//       ref={cardRef}
//       style={{
//         opacity: 0,
//         transform: 'translateY(20px)',
//         transition: 'opacity 0.45s ease, transform 0.45s ease',
//       }}
//       className="group relative bg-white border border-[#EFE0D0] rounded-[18px] p-6 hover:border-[#FDCFA0] hover:bg-[#FFFAF5] cursor-pointer flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
//     >
      

//       {/* Лого + заголовок */}
//       <div className="flex items-start gap-3">
//         <div
//           className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[13px] font-extrabold shrink-0"
//           style={{ background: '#FEE8D0', color: '#C2570A' }}
//         >
//           {job.logo}
//         </div>
//         <div className="flex-1 min-w-0 pr-14">
//           <h3
//             className="text-[15px] font-bold leading-snug tracking-tight transition-colors duration-150 group-hover:text-[#F97316]"
//             style={{ color: '#0D1B2A' }}
//           >
//             {job.title}
//           </h3>
//           <p className="text-[13px] mt-0.5" style={{ color: '#B0A090' }}>{job.company}</p>
//         </div>
//       </div>

//       {/* Зарплата */}
//       <div className="flex items-center gap-2">
//         <svg className="w-4 h-4 shrink-0" style={{ color: '#F97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//         <span className="text-[15px] font-extrabold tracking-tight" style={{ color: '#0D1B2A' }}>
//           {job.salary}
//         </span>
//       </div>

//       {/* Теги */}
//       <div className="flex flex-wrap gap-1.5">
//         {job.tags.map(tag => (
//           <span
//             key={tag}
//             className="text-[12px] font-medium px-2.5 py-1 rounded-[7px]"
//             style={{ background: '#FFF8F2', border: '1px solid #EFE0D0', color: '#7A6B5D' }}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Футер */}
//       <div
//         className="flex items-center justify-between pt-3 border-t mt-auto"
//         style={{ borderColor: '#EFE0D0' }}
//       >
//         <div className="flex items-center gap-3 text-[12px]" style={{ color: '#B0A090' }}>
//           <span className="flex items-center gap-1">
//             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             {job.location}
//           </span>
//           <span className="flex items-center gap-1">
//             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             {job.posted}
//           </span>
//         </div>
//         <span
//           className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
//           style={TYPE_STYLES[job.type]}
//         >
//           {job.type}
//         </span>
//       </div>
//     </article>
//   )
// }

// function FeaturedJobs({ onViewAll }) {
//   const [activeFilter, setActiveFilter] = useState('Все')

//   const filtered = activeFilter === 'Все'
//     ? JOBS
//     : JOBS.filter(j => j.type === activeFilter)

//   return (
//     <section
//       className="py-16 px-6 border-b"
//       style={{ backgroundColor: '#FDF6EE', borderColor: '#1E2D3D' }}
//       aria-labelledby="fj-title"
//     >
//       <div className="max-w-5xl mx-auto">

//         {/* Шапка секции */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
//           <div>
//             <div className="inline-flex items-center gap-3 mb-4">
//               <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDF6EE' }} aria-hidden="true" />
//               <span className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: '#C2570A' }}>
//                 Свежие вакансии
//               </span>
//               <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDF6EE' }} aria-hidden="true" />
//             </div>
//             <h2
//               id="fj-title"
//               className="text-[32px] font-extrabold tracking-[-1.2px] leading-[1.1] text-#0D1B2A"
//             >
//               Открытые позиции
//               <span className="block" style={{ color: '#F97316' }}>прямо сейчас</span>
//             </h2>
//           </div>

//           {/* Фильтры */}
//           <div
//             className="flex items-center gap-1 p-1 rounded-xl self-start sm:self-auto"
//             style={{ background: '#1E2D3D', border: '1px solid #2A3F52' }}
//           >
//             {FILTERS.map(f => (
//               <button
//                 key={f}
//                 type="button"
//                 onClick={() => setActiveFilter(f)}
//                 className="text-[12px] font-semibold px-3.5 py-1.5 rounded-[9px] transition-all duration-150"
//                 style={activeFilter === f
//                   ? { background: '#F97316', color: '#fff' }
//                   : { background: 'transparent', color: '#7A8FA0' }
//                 }
//               >
//                 {f}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Карточки */}
//         {filtered.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
//             {filtered.map((job, i) => (
//               <JobCard key={job.id} job={job} index={i} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <p className="text-[14px]" style={{ color: '#7A8FA0' }}>Вакансий по этому фильтру пока нет</p>
//           </div>
//         )}

//         {/* CTA */}
//         <div className="text-center">
//            <Link
//             to="/Job"
//             className="inline-flex items-center gap-2.5 text-[14px] font-bold px-8 py-3.5 rounded-xl transition-all duration-150 active:scale-[0.98] hover:bg-[#E06413] text-white"
//             style={{ background: '#F97316' }}
//           >
//             Смотреть все вакансии
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </Link>
//           <p className="text-[12px] mt-3" style={{ color: '#7A8FA0' }}>
//             Ещё 1 190+ вакансий ждут тебя
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default FeaturedJobs







import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FILTERS = ['Все', 'Удалённо', 'Офис', 'Гибрид']

const JOBS = [
  { id: 1, title: 'Frontend Developer', company: 'IT Service', location: 'Худжанд', type: 'Офис', salary: '2 500 – 4 000 $', tags: ['React', 'TypeScript', 'Tailwind'], logo: 'IT', posted: '2 часа назад', verified: true },
  { id: 2, title: 'Backend Engineer', company: 'Эсхата Банк', location: 'Душанбе', type: 'Гибрид', salary: '3 000 – 5 000 $', tags: ['Python', 'Django', 'PostgreSQL'], logo: 'ЭБ', posted: '5 часов назад', verified: true },
  { id: 3, title: 'DevOps Engineer', company: 'Payme', location: 'Удалённо', type: 'Удалённо', salary: '4 000 – 6 500 $', tags: ['Docker', 'Kubernetes', 'AWS'], logo: 'PM', posted: '1 день назад', verified: true },
  { id: 4, title: 'UI/UX Designer', company: 'Click', location: 'Худжанд', type: 'Офис', salary: '1 800 – 3 000 $', tags: ['Figma', 'Prototyping', 'Research'], logo: 'CL', posted: '2 дня назад', verified: false },
  { id: 5, title: 'Mobile Developer', company: 'DC Solutions', location: 'Удалённо', type: 'Удалённо', salary: '3 500 – 5 500 $', tags: ['React Native', 'iOS', 'Android'], logo: 'DC', posted: '3 дня назад', verified: false },
  { id: 6, title: 'Data Analyst', company: 'IT Service', location: 'Душанбе', type: 'Гибрид', salary: '2 000 – 3 500 $', tags: ['Python', 'SQL', 'PowerBI'], logo: 'IT', posted: '3 дня назад', verified: true },
]

const TYPE_CLASSES = {
  'Удалённо': 'bg-green-50 text-green-700 border border-green-200',
  'Офис':     'bg-[#F5F7FA] text-[#0B1F3A] border border-[#DCE3EC]',
  'Гибрид':   'bg-blue-50 text-blue-700 border border-blue-200',
}

function JobCard({ job, index, isVisible }) {
  // Задержка 80мс между карточками для красивого эффекта волны
  const delay = `${index * 290}ms`

  return (
    <article
      style={{ transitionDelay: isVisible ? delay : '0ms' }}
      className={`group relative bg-white border border-slate-200 rounded-[18px] p-6 cursor-pointer flex flex-col gap-4 active:scale-[0.98]
        /* Полусекундная плавная анимация появления и ховера */
        transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out
        hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_28px_-14px_rgba(11,31,58,0.15)]
        /* Состояние анимации */
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Лого + заголовок */}
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 bg-[#0B1F3A] text-white rounded-[10px] flex items-center justify-center text-[13px] font-extrabold shrink-0">
          {job.logo}
        </div>
        <div className="flex-1 min-w-0 pr-4">
          <h3 className="text-[15px] font-bold leading-snug tracking-tight text-[#0B1F3A] group-hover:text-[#F97316] transition-colors duration-200 truncate">
            {job.title}
          </h3>
          <p className="text-[13px] mt-0.5 flex items-center gap-1.5 text-slate-400">
            {job.company}
            {job.verified && (
              <i className="fa-solid fa-circle-check text-[11px] text-blue-500" title="Проверенный работодатель" aria-hidden="true" />
            )}
          </p>
        </div>
      </div>

      {/* Зарплата */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 shrink-0 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[15px] font-bold tracking-tight text-[#0B1F3A] font-mono tabular-nums">
          {job.salary}
        </span>
      </div>

      {/* Теги */}
      <div className="flex flex-wrap gap-1.5">
        {job.tags.map(tag => (
          <span
            key={tag}
            className="text-[12px] font-medium px-2.5 py-1 rounded-[7px] bg-[#F5F7FA] border border-slate-200 text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Футер */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
        <div className="flex items-center gap-3 text-[12px] text-slate-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {job.posted}
          </span>
        </div>
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${TYPE_CLASSES[job.type]}`}>
          {job.type}
        </span>
      </div>
    </article>
  )
}

function FeaturedJobs() {
  const [activeFilter, setActiveFilter] = useState('Все')
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filtered = activeFilter === 'Все'
    ? JOBS
    : JOBS.filter(j => j.type === activeFilter)

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 border-b border-[#DCE3EC] bg-[#F5F7FA]"
      aria-labelledby="fj-title"
    >
      <div className="max-w-5xl mx-auto">

        {/* Шапка секции */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-5 h-[1.5px] rounded bg-blue-200" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-blue-700">
                Свежие вакансии
              </span>
              <span className="w-5 h-[1.5px] rounded bg-blue-200" aria-hidden="true" />
            </div>
            <h2
              id="fj-title"
              className="text-[30px] font-extrabold tracking-[-1.2px] leading-[1.1] text-[#0B1F3A]"
            >
              Открытые позиции
              <span className="block text-[#F97316]">прямо сейчас</span>
            </h2>
          </div>

          {/* Фильтры */}
          <div className="flex items-center gap-1 p-1 rounded-xl self-start sm:self-auto bg-[#0B1F3A]">
            {FILTERS.map(f => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`text-[12px] font-semibold px-3.5 py-1.5 rounded-[9px] transition-all duration-200 ${
                  activeFilter === f ? 'bg-[#F97316] text-white' : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка вакансий */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filtered.map((job, i) => (
              <JobCard 
                // key сочетает ID и фильтр для перезапуска анимации при сортировке
                key={`${job.id}-${activeFilter}`} 
                job={job} 
                index={i} 
                isVisible={isSectionVisible} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[14px] text-slate-400">Вакансий по этому фильтру пока нет</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/Job"
            className="inline-flex items-center gap-2.5 text-[14px] font-bold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] text-white bg-[#F97316] hover:bg-[#E0670B]"
          >
            Смотреть все вакансии
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-[12px] mt-3 text-slate-400">
            Ещё 1 190+ вакансий ждут тебя
          </p>
        </div>

      </div>
    </section>
  )
}

export default FeaturedJobs