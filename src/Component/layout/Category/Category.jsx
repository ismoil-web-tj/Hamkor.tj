// import { useEffect, useRef } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { CATEGORIES } from './CategoryPage' // один источник данных

// function CategoryCard({ cat, index }) {
//   const ref = useRef(null)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return
//     const timer = setTimeout(() => {
//       el.style.opacity = '1'
//       el.style.transform = 'translateY(0)'
//     }, index * 60)
//     return () => clearTimeout(timer)
//   }, [index])

//   return (
//     <Link
//       ref={ref}
//       to={`/jobs/${cat.slug}`}
//       style={{
//         opacity: 0,
//         transform: 'translateY(16px)',
//         transition: 'opacity 0.4s ease, transform 0.4s ease',
//       }}
//       className="group flex flex-col items-start gap-3 p-5 w-full text-left bg-white border border-[#EFE0D0] rounded-[18px] transition-all duration-200 hover:border-[#FDCFA0] hover:bg-[#FFFAF5] active:scale-[0.97]"
//     >
//       <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#FEE8D0]">
//         <i className={`${cat.icon} text-[18px] text-[#F97316]`} aria-hidden="true" />
//       </div>

//       <div className="flex-1">
//         <p className="text-[14px] font-bold text-[#0D1B2A] tracking-tight leading-snug">
//           {cat.title}
//         </p>
//         <p className="text-[12px] text-[#B0A090] mt-0.5">
//           {cat.count} вакансий
//         </p>
//       </div>

//       <div className="self-end opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
//         <i className="fa-solid fa-arrow-right text-[13px] text-[#F97316]" aria-hidden="true" />
//       </div>
//     </Link>
//   )
// }

// function Categories() {
//   return (
//     <section
//       className="py-16 px-6 border-b"
//       style={{ backgroundColor: '#FDF6EE', borderColor: '#EFE0D0' }}
//       aria-labelledby="cat-title"
//     >
//       <div className="max-w-5xl mx-auto">

//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
//           <div>
//             <div className="inline-flex items-center gap-3 mb-4">
//               <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDCFA0' }} aria-hidden="true" />
//               <span className="text-[18px] font-bold uppercase tracking-[2.5px]" style={{ color: '#C2570A' }}>
//                 Категории
//               </span>
//               <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDCFA0' }} aria-hidden="true" />
//             </div>
//             <h2
//               id="cat-title"
//               className="text-[38px] font-extrabold text-[#0D1B2A] tracking-[-1.2px] leading-[1.1]"
//             >
//               Выбери свой<br />
//               <span style={{ color: '#F97316' }}>стек технологий</span>
//             </h2>
//           </div>

//           <p className="text-[19px] max-w-50 leading-[1.6] sm:text-right" style={{ color: '#7A6B5D' }}>
//             1 200+ вакансий по всем направлениям IT
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//           {CATEGORIES.map((cat, i) => (
//             <CategoryCard
//               key={cat.id}
//               cat={cat}
//               index={i}
//             />
//           ))}
//         </div>

//         <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: '#bcb1a6' }}>
//           <span className="text-[15px] font-bold uppercase tracking-wider" style={{ color: '#B0A090' }}>
//             774 вакансии всего
//           </span>

//           {/* ✏️ Замените '/Job' на нужный маршрут страницы всех вакансий */}
//           <Link
//             to="/Job"
//             className="inline-flex items-center gap-2 text-white text-[16px] font-bold px-8 py-2.5 rounded-xl transition-all"
//             style={{ background: '#F97316' }}
//             onMouseOver={e => e.currentTarget.style.background = '#E06413'}
//             onMouseOut={e => e.currentTarget.style.background = '#ee8a43'}
//           >
//             Все категории
//             <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
//           </Link>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Categories









import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from './CategoryPage'

function CategoryCard({ cat, index, isVisible }) {
  // Шаг задержки — 80мс. Можно поставить 100ms, если хочется ещё медленнее.
  const delay = `${index * 180}ms`

  return (
    <Link
      to={`/jobs/${cat.slug}`}
      style={{ 
        // Задаём динамическую задержку старта анимации
        transitionDelay: isVisible ? delay : '0ms' 
      }}
      className={`group flex flex-col items-start gap-3 p-5 w-full text-left bg-white border border-slate-200 rounded-[18px] active:scale-[0.97]
        
        /* Свойства анимации появления: длительность 500мс (полсекунды) */
        transition-[opacity,transform,border-color,box-sizes,box-shadow] duration-500 ease-out
        
        /* Эффекты при наведении (hover) срабатывают быстро благодаря в group */
        hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_24px_-12px_rgba(11,31,58,0.12)]
        
        /* Состояние анимации: зависит от видимости секции */
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6' // смещение на 24px для более глубокого вылета
        }`}
    >
      {/* Иконка */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 transition-colors duration-200">
        <i className={`${cat.icon} text-[18px] text-blue-700`} aria-hidden="true" />
      </div>

      {/* Текст */}
      <div className="flex-1">
        <p className="text-[14px] font-bold tracking-tight leading-snug text-[#0B1F3A]">
          {cat.title}
        </p>
        <p className="text-[12px] mt-0.5 text-slate-400 font-mono tabular-nums">
          {cat.count} вакансий
        </p>
      </div>

      {/* Стрелка */}
      <div className="self-end opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
        <i className="fa-solid fa-arrow-right text-[13px] text-[#F97316]" aria-hidden="true" />
      </div>
    </Link>
  )
}

function Categories() {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true)
          observer.unobserve(el) // Перестаем следить после первого срабатывания
        }
      },
      { 
        threshold: 0.05, // Сработает, как только покажется хотя бы 5% секции
        rootMargin: '0px 0px -20px 0px' 
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 border-b border-[#DCE3EC] bg-[#F5F7FA]"
      aria-labelledby="cat-title"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Заголовок */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-5 h-[1.5px] rounded bg-blue-200" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-blue-700">
                Категории
              </span>
              <span className="w-5 h-[1.5px] rounded bg-blue-200" aria-hidden="true" />
            </div>
            <h2
              id="cat-title"
              className="text-[34px] font-extrabold tracking-[-1.2px] leading-[1.1] text-[#0B1F3A]"
            >
              Выбери свой<br />
              <span className="text-[#F97316]">стек технологий</span>
            </h2>
          </div>

          <p className="text-[15px] max-w-50 leading-[1.6] sm:text-right text-slate-500">
            1 200+ вакансий по всем направлениям IT
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              index={i}
              isVisible={isSectionVisible}
            />
          ))}
        </div>

        {/* Футер */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
          <span className="text-[13px] font-bold uppercase tracking-wider text-slate-400 font-mono tabular-nums">
            774 вакансии всего
          </span>

          <Link
            to="/Job"
            className="inline-flex items-center gap-2 text-white text-[14px] font-bold px-8 py-2.5 rounded-xl transition-all bg-[#F97316] hover:bg-[#E0670B]"
          >
            Все категории
            <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Categories