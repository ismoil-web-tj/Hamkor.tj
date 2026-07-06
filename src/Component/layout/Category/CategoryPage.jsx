// import { useEffect, useRef, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// export const CATEGORIES = [
//   { id: 1, slug: 'frontend',     title: 'Frontend',        count: 214, icon: 'fa-brands fa-react' },
//   { id: 2, slug: 'backend',      title: 'Backend',         count: 189, icon: 'fa-solid fa-server' },
//   { id: 3, slug: 'mobile',       title: 'Mobile',          count: 97,  icon: 'fa-solid fa-mobile-screen' },
//   { id: 4, slug: 'devops',       title: 'DevOps',          count: 73,  icon: 'fa-solid fa-gears' },
//   { id: 5, slug: 'design',       title: 'UI/UX Design',    count: 58,  icon: 'fa-solid fa-pen-ruler' },
//   { id: 6, slug: 'data-science', title: 'Data Science',    count: 44,  icon: 'fa-solid fa-chart-column' },
//   { id: 7, slug: 'qa',           title: 'QA / Testing',    count: 61,  icon: 'fa-solid fa-bug' },
//   { id: 8, slug: 'pm',           title: 'Project Manager', count: 38,  icon: 'fa-solid fa-diagram-project' },
// ]

// const MOCK_JOBS = {
//   frontend: [
//     { id: 1,  title: 'React Developer',          company: 'Hamkor LLC',    salary: '$1 200 – $2 000', level: 'Middle', location: 'Душанбе / Remote', tags: ['React', 'TypeScript', 'Redux'] },
//     { id: 2,  title: 'Vue.js Frontend Engineer', company: 'IT Solutions',  salary: '$900 – $1 500',   level: 'Junior', location: 'Худжанд',          tags: ['Vue 3', 'Vite', 'CSS'] },
//     { id: 3,  title: 'Next.js Developer',        company: 'WebPro TJ',     salary: '$1 500 – $2 500', level: 'Senior', location: 'Remote',           tags: ['Next.js', 'React', 'SSR'] },
//     { id: 4,  title: 'HTML/CSS Верстальщик',     company: 'DigitalMedia',  salary: '$400 – $700',     level: 'Junior', location: 'Душанбе',          tags: ['HTML', 'CSS', 'Figma'] },
//     { id: 5,  title: 'React Native Developer',   company: 'MobileFirst',   salary: '$1 800 – $3 000', level: 'Middle', location: 'Remote',           tags: ['React Native', 'iOS', 'Android'] },
//     { id: 6,  title: 'Angular Developer',        company: 'EnterpriseTJ',  salary: '$1 000 – $1 800', level: 'Middle', location: 'Душанбе',          tags: ['Angular', 'RxJS', 'NgRx'] },
//   ],
//   backend: [
//     { id: 7,  title: 'Node.js Developer',        company: 'ServerPro',     salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Node.js', 'Express', 'MongoDB'] },
//     { id: 8,  title: 'Python Backend Engineer',  company: 'DataTech TJ',   salary: '$1 000 – $1 800', level: 'Middle', location: 'Душанбе',          tags: ['Python', 'Django', 'PostgreSQL'] },
//     { id: 9,  title: 'PHP Laravel Developer',    company: 'WebFactory',    salary: '$700 – $1 300',   level: 'Junior', location: 'Худжанд',          tags: ['PHP', 'Laravel', 'MySQL'] },
//     { id: 10, title: 'Go Developer',             company: 'HighLoad Inc',  salary: '$2 000 – $3 500', level: 'Senior', location: 'Remote',           tags: ['Go', 'gRPC', 'Kafka'] },
//     { id: 11, title: 'Java Spring Developer',    company: 'BankTech',      salary: '$1 500 – $2 500', level: 'Middle', location: 'Душанбе',          tags: ['Java', 'Spring Boot', 'Microservices'] },
//     { id: 12, title: 'Ruby on Rails Developer',  company: 'StartupLab',    salary: '$1 200 – $2 000', level: 'Middle', location: 'Remote',           tags: ['Ruby', 'Rails', 'Redis'] },
//   ],
//   mobile: [
//     { id: 13, title: 'iOS Developer (Swift)',     company: 'AppStudio TJ',  salary: '$1 500 – $2 800', level: 'Middle', location: 'Душанбе / Remote', tags: ['Swift', 'SwiftUI', 'Xcode'] },
//     { id: 14, title: 'Android Developer',         company: 'MobileDev',     salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Kotlin', 'Jetpack', 'Android'] },
//     { id: 15, title: 'Flutter Developer',         company: 'CrossPlatform', salary: '$1 000 – $2 000', level: 'Middle', location: 'Remote',           tags: ['Flutter', 'Dart', 'Firebase'] },
//     { id: 16, title: 'React Native Engineer',     company: 'Hamkor LLC',    salary: '$1 400 – $2 400', level: 'Middle', location: 'Remote',           tags: ['React Native', 'Expo', 'Redux'] },
//   ],
//   devops: [
//     { id: 17, title: 'DevOps Engineer',           company: 'CloudTech',     salary: '$1 800 – $3 000', level: 'Senior', location: 'Remote',           tags: ['Docker', 'Kubernetes', 'AWS'] },
//     { id: 18, title: 'Kubernetes Administrator',  company: 'InfraPro',      salary: '$2 000 – $3 500', level: 'Senior', location: 'Remote',           tags: ['K8s', 'Helm', 'Terraform'] },
//     { id: 19, title: 'CI/CD Engineer',            company: 'PipelineTJ',    salary: '$1 500 – $2 500', level: 'Middle', location: 'Душанбе',          tags: ['GitLab CI', 'Jenkins', 'Ansible'] },
//     { id: 20, title: 'Site Reliability Engineer', company: 'SRE Labs',      salary: '$2 200 – $4 000', level: 'Senior', location: 'Remote',           tags: ['SRE', 'Prometheus', 'Grafana'] },
//   ],
//   design: [
//     { id: 21, title: 'Product Designer',          company: 'UXStudio',      salary: '$900 – $1 800',   level: 'Middle', location: 'Душанбе / Remote', tags: ['Figma', 'Prototyping', 'Research'] },
//     { id: 22, title: 'UI Designer (Figma)',        company: 'DesignFirst',   salary: '$700 – $1 400',   level: 'Junior', location: 'Remote',           tags: ['Figma', 'UI Kit', 'Auto Layout'] },
//     { id: 23, title: 'UX Researcher',             company: 'UserInsights',  salary: '$1 000 – $1 800', level: 'Middle', location: 'Remote',           tags: ['User Testing', 'Interviews', 'Analytics'] },
//     { id: 24, title: 'Motion Designer',           company: 'AnimateIT',     salary: '$800 – $1 600',   level: 'Middle', location: 'Душанбе',          tags: ['After Effects', 'Lottie', 'Cinema 4D'] },
//   ],
//   'data-science': [
//     { id: 25, title: 'Data Scientist',            company: 'AnalyticsTJ',   salary: '$1 500 – $3 000', level: 'Middle', location: 'Remote',           tags: ['Python', 'ML', 'TensorFlow'] },
//     { id: 26, title: 'ML Engineer',               company: 'AI Solutions',  salary: '$2 000 – $4 000', level: 'Senior', location: 'Remote',           tags: ['PyTorch', 'LLM', 'MLOps'] },
//     { id: 27, title: 'Data Analyst',              company: 'DataVision',    salary: '$800 – $1 500',   level: 'Junior', location: 'Душанбе',          tags: ['SQL', 'Power BI', 'Excel'] },
//     { id: 28, title: 'Business Intelligence Dev', company: 'BITech',        salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Tableau', 'dbt', 'Redshift'] },
//   ],
//   qa: [
//     { id: 29, title: 'QA Engineer (Manual)',       company: 'QualityFirst',  salary: '$600 – $1 100',   level: 'Junior', location: 'Душанбе',          tags: ['Test Cases', 'Jira', 'Postman'] },
//     { id: 30, title: 'QA Automation Engineer',    company: 'AutoTest TJ',   salary: '$1 200 – $2 000', level: 'Middle', location: 'Remote',           tags: ['Selenium', 'Cypress', 'Playwright'] },
//     { id: 31, title: 'SDET Engineer',             company: 'TestLab',       salary: '$1 500 – $2 500', level: 'Senior', location: 'Remote',           tags: ['Java', 'TestNG', 'CI/CD'] },
//     { id: 32, title: 'Performance Tester',        company: 'LoadTech',      salary: '$1 000 – $1 800', level: 'Middle', location: 'Remote',           tags: ['JMeter', 'k6', 'Gatling'] },
//   ],
//   pm: [
//     { id: 33, title: 'Product Manager',           company: 'ProductHub',    salary: '$1 500 – $2 800', level: 'Middle', location: 'Душанбе / Remote', tags: ['Roadmap', 'OKR', 'Analytics'] },
//     { id: 34, title: 'Project Manager (Agile)',   company: 'AgileTJ',       salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Scrum', 'Jira', 'Confluence'] },
//     { id: 35, title: 'Scrum Master',              company: 'ScrumPro',      salary: '$1 400 – $2 400', level: 'Middle', location: 'Remote',           tags: ['Agile', 'Facilitation', 'Coaching'] },
//     { id: 36, title: 'Technical Product Owner',   company: 'TechOwner Inc', salary: '$1 800 – $3 200', level: 'Senior', location: 'Remote',           tags: ['Backlog', 'API', 'Stakeholders'] },
//   ],
// }

// const LEVEL_CONFIG = {
//   Junior: { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
//   Middle: { bg: '#FFF7ED', text: '#C2570A', dot: '#F97316' },
//   Senior: { bg: '#F0FDF4', text: '#15803D', dot: '#22C55E' },
// }

// // ── Карточка вакансии ──
// function JobCard({ job, index }) {
//   const ref = useRef(null)
//   const level = LEVEL_CONFIG[job.level] || LEVEL_CONFIG.Middle

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return
//     const t = setTimeout(() => {
//       el.style.opacity = '1'
//       el.style.transform = 'translateY(0)'
//     }, index * 50)
//     return () => clearTimeout(t)
//   }, [index])

//   return (
//     <Link
//       ref={ref}
//       to={`/jobs/detail/${job.id}`}
//       style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease, border-color 0.2s ease' }}
//       className="group flex flex-col gap-0 bg-white border border-[#EFE0D0] rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 active:scale-[0.98] transition-all"
//     >
//       {/* Цветная полоска сверху */}
//       <div className="h-0.75 w-full" style={{ background: 'linear-gradient(90deg, #F97316, #FDBA74)' }} />

//       <div className="flex flex-col gap-4 p-5">
//         {/* Верх: заголовок + бейдж уровня */}
//         <div className="flex items-start justify-between gap-3">
//           <h3 className="text-[15px] font-bold text-[#0D1B2A] leading-snug group-hover:text-orange-500 transition-colors">
//             {job.title}
//           </h3>
//           <span
//             className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full"
//             style={{ backgroundColor: level.bg, color: level.text }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: level.dot }} />
//             {job.level}
//           </span>
//         </div>

//         {/* Компания */}
//         <div className="flex items-center gap-2">
//           <div className="w-7 h-7 rounded-lg bg-[#FEE8D0] flex items-center justify-center shrink-0">
//             <i className="fa-solid fa-building text-[11px] text-orange-400" />
//           </div>
//           <span className="text-[13px] font-semibold text-[#7A6B5D]">{job.company}</span>
//         </div>

//         {/* Теги */}
//         {job.tags && (
//           <div className="flex flex-wrap gap-1.5">
//             {job.tags.map(tag => (
//               <span key={tag} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F5F0EB] text-[#7A6B5D]">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Нижняя строка */}
//         <div className="flex items-center justify-between pt-3 border-t border-[#EFE0D0] mt-auto">
//           <span className="text-[13px] font-bold text-[#0D1B2A]">
//             {job.salary}
//           </span>
//           <span className="text-[12px] text-[#B0A090] flex items-center gap-1">
//             <i className="fa-solid fa-location-dot text-[10px] text-orange-300" />
//             {job.location}
//           </span>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ── Чип категории (в блоке «Другие категории») ──
// function CategoryChip({ cat }) {
//   return (
//     <Link
//       to={`/jobs/${cat.slug}`}
//       className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[12px] font-semibold border border-[#EFE0D0] bg-white text-[#7A6B5D] hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all"
//     >
//       <i className={`${cat.icon} text-[11px]`} />
//       {cat.title}
//       <span className="text-[10px] text-[#B0A090]">{cat.count}</span>
//     </Link>
//   )
// }

// // ── Главный компонент ──
// function CategoryPage() {
//   const { slug } = useParams()
//   const [filter, setFilter] = useState('Все')

//   const category = CATEGORIES.find(c => c.slug === slug)
//   const allJobs  = MOCK_JOBS[slug] || []

//   const levels   = ['Все', 'Junior', 'Middle', 'Senior']
//   const jobs     = filter === 'Все' ? allJobs : allJobs.filter(j => j.level === filter)

//   if (!category) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4" style={{ backgroundColor: '#FDF6EE' }}>
//         <i className="fa-solid fa-triangle-exclamation text-[48px] text-orange-400" />
//         <p className="text-[20px] font-bold text-[#0D1B2A]">Категория не найдена</p>
//         <Link to="/Job" className="text-[14px] font-semibold text-orange-500 underline underline-offset-2">
//           ← Все вакансии
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen pb-28 lg:pb-16" style={{ backgroundColor: '#FDF6EE' }}>

//       {/* ══ HERO ══ */}
//       <div style={{ backgroundColor: '#0D1B2A' }}>
//         <div className="max-w-5xl mx-auto px-6 pt-8 pb-10 lg:pt-12 lg:pb-14">

//           {/* Хлебные крошки */}
//           <nav className="flex items-center gap-2 text-[12px] mb-8">
//             <Link to="/" className="text-white/30 hover:text-white/60 transition-colors">Главная</Link>
//             <i className="fa-solid fa-chevron-right text-[8px] text-white/20" />
//             <Link to="/Job" className="text-white/30 hover:text-white/60 transition-colors">Вакансии</Link>
//             <i className="fa-solid fa-chevron-right text-[8px] text-white/20" />
//             <span className="text-orange-400 font-semibold">{category.title}</span>
//           </nav>

//           {/* Заголовок */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//             <div className="flex items-center gap-5">
//               <div
//                 className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
//                 style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}
//               >
//                 <i className={`${category.icon} text-[26px] text-orange-400`} />
//               </div>
//               <div>
//                 <p className="text-[12px] font-bold uppercase tracking-[3px] text-orange-400 mb-1">Категория</p>
//                 <h1 className="text-[30px] lg:text-[40px] font-extrabold text-white tracking-[-1px] leading-none">
//                   {category.title}
//                 </h1>
//               </div>
//             </div>

//             {/* Счётчики */}
//             <div className="flex gap-4 sm:gap-6">
//               <div className="text-center">
//                 <p className="text-[28px] font-extrabold text-white leading-none">{allJobs.length}</p>
//                 <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">вакансий</p>
//               </div>
//               <div className="w-px bg-white/10" />
//               <div className="text-center">
//                 <p className="text-[28px] font-extrabold text-orange-400 leading-none">{category.count}</p>
//                 <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">всего</p>
//               </div>
//             </div>
//           </div>

//           {/* Фильтр уровней */}
//           <div className="flex items-center gap-2 mt-8 flex-wrap">
//             {levels.map(lvl => (
//               <button
//                 key={lvl}
//                 onClick={() => setFilter(lvl)}
//                 className="px-4 py-1.5 rounded-xl text-[13px] font-bold transition-all"
//                 style={{
//                   backgroundColor: filter === lvl ? '#F97316' : 'rgba(255,255,255,0.06)',
//                   color:           filter === lvl ? '#fff'     : 'rgba(255,255,255,0.45)',
//                   border:          filter === lvl ? 'none'     : '1px solid rgba(255,255,255,0.1)',
//                 }}
//               >
//                 {lvl}
//                 {lvl !== 'Все' && (
//                   <span className="ml-1.5 opacity-60 text-[11px]">
//                     {allJobs.filter(j => j.level === lvl).length}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Оранжевая линия-разделитель */}
//       <div className="h-0.75" style={{ background: 'linear-gradient(90deg, #F97316 0%, #FDBA74 60%, transparent 100%)' }} />

//       {/* ══ ВАКАНСИИ ══ */}
//       <div className="max-w-5xl mx-auto px-6 py-10">

//         {/* Шапка блока */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-[20px] font-extrabold text-[#0D1B2A]">
//               {filter === 'Все' ? 'Все вакансии' : `${filter}-специалисты`}
//             </h2>
//             <p className="text-[13px] text-[#B0A090] mt-0.5">{jobs.length} результатов</p>
//           </div>

//           <Link
//             to="/Job"
//             className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-xl transition-all"
//             style={{ backgroundColor: '#0D1B2A' }}
//             onMouseOver={e => e.currentTarget.style.backgroundColor = '#1a2f47'}
//             onMouseOut={e => e.currentTarget.style.backgroundColor = '#0D1B2A'}
//           >
//             <i className="fa-solid fa-briefcase text-[11px] text-orange-400" />
//             Смотреть все вакансии
//           </Link>
//         </div>

//         {/* Сетка */}
//         {jobs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {jobs.map((job, i) => (
//               <JobCard key={job.id} job={job} index={i} />
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center py-20 gap-3 bg-white rounded-2xl border border-[#EFE0D0]">
//             <i className="fa-solid fa-magnifying-glass text-[40px] text-[#EFE0D0]" />
//             <p className="text-[16px] font-bold text-[#B0A090]">Нет вакансий для «{filter}»</p>
//             <button
//               onClick={() => setFilter('Все')}
//               className="mt-1 text-[13px] font-bold text-orange-500 underline underline-offset-2"
//             >
//               Сбросить фильтр
//             </button>
//           </div>
//         )}
//       </div>

//       {/* ══ ДРУГИЕ КАТЕГОРИИ ══ */}
//       <div className="max-w-5xl mx-auto px-6 pb-6">
//         <div className="rounded-2xl border border-[#EFE0D0] bg-white p-6">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-8 h-8 rounded-lg bg-[#FEE8D0] flex items-center justify-center">
//               <i className="fa-solid fa-layer-group text-[13px] text-orange-400" />
//             </div>
//             <p className="text-[14px] font-bold text-[#0D1B2A]">Другие направления</p>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {CATEGORIES.filter(c => c.slug !== slug).map(c => (
//               <CategoryChip key={c.id} cat={c} />
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default CategoryPage





import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const CATEGORIES = [
  { id: 1, slug: 'frontend',     title: 'Frontend',        count: 214, icon: 'fa-brands fa-react' },
  { id: 2, slug: 'backend',      title: 'Backend',         count: 189, icon: 'fa-solid fa-server' },
  { id: 3, slug: 'mobile',       title: 'Mobile',          count: 97,  icon: 'fa-solid fa-mobile-screen' },
  { id: 4, slug: 'devops',       title: 'DevOps',          count: 73,  icon: 'fa-solid fa-gears' },
  { id: 5, slug: 'design',       title: 'UI/UX Design',    count: 58,  icon: 'fa-solid fa-pen-ruler' },
  { id: 6, slug: 'data-science', title: 'Data Science',    count: 44,  icon: 'fa-solid fa-chart-column' },
  { id: 7, slug: 'qa',           title: 'QA / Testing',    count: 61,  icon: 'fa-solid fa-bug' },
  { id: 8, slug: 'pm',           title: 'Project Manager', count: 38,  icon: 'fa-solid fa-diagram-project' },
]

const MOCK_JOBS = {
  frontend: [
    { id: 1,  title: 'React Developer',          company: 'Hamkor LLC',    salary: '$1 200 – $2 000', level: 'Middle', location: 'Душанбе / Remote', tags: ['React', 'TypeScript', 'Redux'] },
    { id: 2,  title: 'Vue.js Frontend Engineer', company: 'IT Solutions',  salary: '$900 – $1 500',   level: 'Junior', location: 'Худжанд',          tags: ['Vue 3', 'Vite', 'CSS'] },
    { id: 3,  title: 'Next.js Developer',        company: 'WebPro TJ',     salary: '$1 500 – $2 500', level: 'Senior', location: 'Remote',           tags: ['Next.js', 'React', 'SSR'] },
    { id: 4,  title: 'HTML/CSS Верстальщик',     company: 'DigitalMedia',  salary: '$400 – $700',     level: 'Junior', location: 'Душанбе',          tags: ['HTML', 'CSS', 'Figma'] },
    { id: 5,  title: 'React Native Developer',   company: 'MobileFirst',   salary: '$1 800 – $3 000', level: 'Middle', location: 'Remote',           tags: ['React Native', 'iOS', 'Android'] },
    { id: 6,  title: 'Angular Developer',        company: 'EnterpriseTJ',  salary: '$1 000 – $1 800', level: 'Middle', location: 'Душанбе',          tags: ['Angular', 'RxJS', 'NgRx'] },
  ],
  backend: [
    { id: 7,  title: 'Node.js Developer',        company: 'ServerPro',     salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Node.js', 'Express', 'MongoDB'] },
    { id: 8,  title: 'Python Backend Engineer',  company: 'DataTech TJ',   salary: '$1 000 – $1 800', level: 'Middle', location: 'Душанбе',          tags: ['Python', 'Django', 'PostgreSQL'] },
    { id: 9,  title: 'PHP Laravel Developer',    company: 'WebFactory',    salary: '$700 – $1 300',   level: 'Junior', location: 'Худжанд',          tags: ['PHP', 'Laravel', 'MySQL'] },
    { id: 10, title: 'Go Developer',             company: 'HighLoad Inc',  salary: '$2 000 – $3 500', level: 'Senior', location: 'Remote',           tags: ['Go', 'gRPC', 'Kafka'] },
    { id: 11, title: 'Java Spring Developer',    company: 'BankTech',      salary: '$1 500 – $2 500', level: 'Middle', location: 'Душанбе',          tags: ['Java', 'Spring Boot', 'Microservices'] },
    { id: 12, title: 'Ruby on Rails Developer',  company: 'StartupLab',    salary: '$1 200 – $2 000', level: 'Middle', location: 'Remote',           tags: ['Ruby', 'Rails', 'Redis'] },
  ],
  mobile: [
    { id: 13, title: 'iOS Developer (Swift)',     company: 'AppStudio TJ',  salary: '$1 500 – $2 800', level: 'Middle', location: 'Душанбе / Remote', tags: ['Swift', 'SwiftUI', 'Xcode'] },
    { id: 14, title: 'Android Developer',         company: 'MobileDev',     salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Kotlin', 'Jetpack', 'Android'] },
    { id: 15, title: 'Flutter Developer',         company: 'CrossPlatform', salary: '$1 000 – $2 000', level: 'Middle', location: 'Remote',           tags: ['Flutter', 'Dart', 'Firebase'] },
    { id: 16, title: 'React Native Engineer',     company: 'Hamkor LLC',    salary: '$1 400 – $2 400', level: 'Middle', location: 'Remote',           tags: ['React Native', 'Expo', 'Redux'] },
  ],
  devops: [
    { id: 17, title: 'DevOps Engineer',           company: 'CloudTech',     salary: '$1 800 – $3 000', level: 'Senior', location: 'Remote',           tags: ['Docker', 'Kubernetes', 'AWS'] },
    { id: 18, title: 'Kubernetes Administrator',  company: 'InfraPro',      salary: '$2 000 – $3 500', level: 'Senior', location: 'Remote',           tags: ['K8s', 'Helm', 'Terraform'] },
    { id: 19, title: 'CI/CD Engineer',            company: 'PipelineTJ',    salary: '$1 500 – $2 500', level: 'Middle', location: 'Душанбе',          tags: ['GitLab CI', 'Jenkins', 'Ansible'] },
    { id: 20, title: 'Site Reliability Engineer', company: 'SRE Labs',      salary: '$2 200 – $4 000', level: 'Senior', location: 'Remote',           tags: ['SRE', 'Prometheus', 'Grafana'] },
  ],
  design: [
    { id: 21, title: 'Product Designer',          company: 'UXStudio',      salary: '$900 – $1 800',   level: 'Middle', location: 'Душанбе / Remote', tags: ['Figma', 'Prototyping', 'Research'] },
    { id: 22, title: 'UI Designer (Figma)',        company: 'DesignFirst',   salary: '$700 – $1 400',   level: 'Junior', location: 'Remote',           tags: ['Figma', 'UI Kit', 'Auto Layout'] },
    { id: 23, title: 'UX Researcher',             company: 'UserInsights',  salary: '$1 000 – $1 800', level: 'Middle', location: 'Remote',           tags: ['User Testing', 'Interviews', 'Analytics'] },
    { id: 24, title: 'Motion Designer',           company: 'AnimateIT',     salary: '$800 – $1 600',   level: 'Middle', location: 'Душанбе',          tags: ['After Effects', 'Lottie', 'Cinema 4D'] },
  ],
  'data-science': [
    { id: 25, title: 'Data Scientist',            company: 'AnalyticsTJ',   salary: '$1 500 – $3 000', level: 'Middle', location: 'Remote',           tags: ['Python', 'ML', 'TensorFlow'] },
    { id: 26, title: 'ML Engineer',               company: 'AI Solutions',  salary: '$2 000 – $4 000', level: 'Senior', location: 'Remote',           tags: ['PyTorch', 'LLM', 'MLOps'] },
    { id: 27, title: 'Data Analyst',              company: 'DataVision',    salary: '$800 – $1 500',   level: 'Junior', location: 'Душанбе',          tags: ['SQL', 'Power BI', 'Excel'] },
    { id: 28, title: 'Business Intelligence Dev', company: 'BITech',        salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Tableau', 'dbt', 'Redshift'] },
  ],
  qa: [
    { id: 29, title: 'QA Engineer (Manual)',       company: 'QualityFirst',  salary: '$600 – $1 100',   level: 'Junior', location: 'Душанбе',          tags: ['Test Cases', 'Jira', 'Postman'] },
    { id: 30, title: 'QA Automation Engineer',    company: 'AutoTest TJ',   salary: '$1 200 – $2 000', level: 'Middle', location: 'Remote',           tags: ['Selenium', 'Cypress', 'Playwright'] },
    { id: 31, title: 'SDET Engineer',             company: 'TestLab',       salary: '$1 500 – $2 500', level: 'Senior', location: 'Remote',           tags: ['Java', 'TestNG', 'CI/CD'] },
    { id: 32, title: 'Performance Tester',        company: 'LoadTech',      salary: '$1 000 – $1 800', level: 'Middle', location: 'Remote',           tags: ['JMeter', 'k6', 'Gatling'] },
  ],
  pm: [
    { id: 33, title: 'Product Manager',           company: 'ProductHub',    salary: '$1 500 – $2 800', level: 'Middle', location: 'Душанбе / Remote', tags: ['Roadmap', 'OKR', 'Analytics'] },
    { id: 34, title: 'Project Manager (Agile)',   company: 'AgileTJ',       salary: '$1 200 – $2 200', level: 'Middle', location: 'Remote',           tags: ['Scrum', 'Jira', 'Confluence'] },
    { id: 35, title: 'Scrum Master',              company: 'ScrumPro',      salary: '$1 400 – $2 400', level: 'Middle', location: 'Remote',           tags: ['Agile', 'Facilitation', 'Coaching'] },
    { id: 36, title: 'Technical Product Owner',   company: 'TechOwner Inc', salary: '$1 800 – $3 200', level: 'Senior', location: 'Remote',           tags: ['Backlog', 'API', 'Stakeholders'] },
  ],
}

const LEVEL_CONFIG = {
  Junior: { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
  Middle: { bg: '#FFF7ED', text: '#1D4ED8', dot: '#F97316' },
  Senior: { bg: '#F0FDF4', text: '#15803D', dot: '#22C55E' },
}

function JobCard({ job, index }) {
  const ref = useRef(null)
  const level = LEVEL_CONFIG[job.level] || LEVEL_CONFIG.Middle

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const t = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, index * 50)
    return () => clearTimeout(t)
  }, [index])

  return (
    <Link
      ref={ref}
      to={`/jobs/detail/${job.id}`}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease, border-color 0.2s ease' }}
      className="group flex flex-col gap-0 bg-white border border-[#E1E7EF] rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 active:scale-[0.98] transition-all"
    >
      <div className="h-0.75 w-full" style={{ background: 'linear-gradient(90deg, #F97316, #FDBA74)' }} />

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-bold text-[#0B1F3A] leading-snug group-hover:text-orange-500 transition-colors">
            {job.title}
          </h3>
          <span
            className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: level.bg, color: level.text }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: level.dot }} />
            {job.level}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
            <i className="fa-solid fa-building text-[11px] text-orange-400" />
          </div>
          <span className="text-[13px] font-semibold text-[#64748B]">{job.company}</span>
        </div>

        {job.tags && (
          <div className="flex flex-wrap gap-1.5">
            {job.tags.map(tag => (
              <span key={tag} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F5F7FA] text-[#64748B]">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-[#E1E7EF] mt-auto">
          <span className="text-[13px] font-bold text-[#0B1F3A]">
            {job.salary}
          </span>
          <span className="text-[12px] text-[#94A3B8] flex items-center gap-1">
            <i className="fa-solid fa-location-dot text-[10px] text-orange-300" />
            {job.location}
          </span>
        </div>
      </div>
    </Link>
  )
}

function CategoryChip({ cat }) {
  return (
    <Link
      to={`/jobs/${cat.slug}`}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[12px] font-semibold border border-[#E1E7EF] bg-white text-[#64748B] hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all"
    >
      <i className={`${cat.icon} text-[11px]`} />
      {cat.title}
      <span className="text-[10px] text-[#94A3B8]">{cat.count}</span>
    </Link>
  )
}

function CategoryPage() {
  const { slug } = useParams()
  const [filter, setFilter] = useState('Все')

  const category = CATEGORIES.find(c => c.slug === slug)
  const allJobs  = MOCK_JOBS[slug] || []

  const levels   = ['Все', 'Junior', 'Middle', 'Senior']
  const jobs     = filter === 'Все' ? allJobs : allJobs.filter(j => j.level === filter)

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4" style={{ backgroundColor: '#F5F7FA' }}>
        <i className="fa-solid fa-triangle-exclamation text-[48px] text-orange-400" />
        <p className="text-[20px] font-bold text-[#0B1F3A]">Категория не найдена</p>
        <Link to="/Job" className="text-[14px] font-semibold text-orange-500 underline underline-offset-2">
          ← Все вакансии
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-28 lg:pb-16" style={{ backgroundColor: '#F5F7FA' }}>

      <div style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-10 lg:pt-12 lg:pb-14">

          <nav className="flex items-center gap-2 text-[12px] mb-8">
            <Link to="/" className="text-white/30 hover:text-white/60 transition-colors">Главная</Link>
            <i className="fa-solid fa-chevron-right text-[8px] text-white/20" />
            <Link to="/Job" className="text-white/30 hover:text-white/60 transition-colors">Вакансии</Link>
            <i className="fa-solid fa-chevron-right text-[8px] text-white/20" />
            <span className="text-orange-400 font-semibold">{category.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}
              >
                <i className={`${category.icon} text-[26px] text-orange-400`} />
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[3px] text-orange-400 mb-1">Категория</p>
                <h1 className="text-[30px] lg:text-[40px] font-extrabold text-white tracking-[-1px] leading-none">
                  {category.title}
                </h1>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-[28px] font-extrabold text-white leading-none">{allJobs.length}</p>
                <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">вакансий</p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <p className="text-[28px] font-extrabold text-orange-400 leading-none">{category.count}</p>
                <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">всего</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-8 flex-wrap">
            {levels.map(lvl => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className="px-4 py-1.5 rounded-xl text-[13px] font-bold transition-all"
                style={{
                  backgroundColor: filter === lvl ? '#F97316' : 'rgba(255,255,255,0.06)',
                  color:           filter === lvl ? '#fff'     : 'rgba(255,255,255,0.45)',
                  border:          filter === lvl ? 'none'     : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {lvl}
                {lvl !== 'Все' && (
                  <span className="ml-1.5 opacity-60 text-[11px]">
                    {allJobs.filter(j => j.level === lvl).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-0.75" style={{ background: 'linear-gradient(90deg, #F97316 0%, #FDBA74 60%, transparent 100%)' }} />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#0B1F3A]">
              {filter === 'Все' ? 'Все вакансии' : `${filter}-специалисты`}
            </h2>
            <p className="text-[13px] text-[#94A3B8] mt-0.5">{jobs.length} результатов</p>
          </div>

          <Link
            to="/Job"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-xl transition-all"
            style={{ backgroundColor: '#0B1F3A' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#1a2f47'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#0B1F3A'}
          >
            <i className="fa-solid fa-briefcase text-[11px] text-orange-400" />
            Смотреть все вакансии
          </Link>
        </div>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-3 bg-white rounded-2xl border border-[#E1E7EF]">
            <i className="fa-solid fa-magnifying-glass text-[40px] text-[#E1E7EF]" />
            <p className="text-[16px] font-bold text-[#94A3B8]">Нет вакансий для «{filter}»</p>
            <button
              onClick={() => setFilter('Все')}
              className="mt-1 text-[13px] font-bold text-orange-500 underline underline-offset-2"
            >
              Сбросить фильтр
            </button>
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-6">
        <div className="rounded-2xl border border-[#E1E7EF] bg-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
              <i className="fa-solid fa-layer-group text-[13px] text-orange-400" />
            </div>
            <p className="text-[14px] font-bold text-[#0B1F3A]">Другие направления</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.filter(c => c.slug !== slug).map(c => (
              <CategoryChip key={c.id} cat={c} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CategoryPage