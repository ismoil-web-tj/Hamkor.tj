// import { useEffect, useState, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { CATEGORIES } from './CategoryPage'

// function CategoryCard({ cat, index, isVisible }) {
//   // Шаг задержки — 80мс. Можно поставить 100ms, если хочется ещё медленнее.
//   const delay = `${index * 180}ms`

//   return (
//     <Link
//       to={`/jobs/${cat.slug}`}
//       style={{ 
//         // Задаём динамическую задержку старта анимации
//         transitionDelay: isVisible ? delay : '0ms' 
//       }}
//       className={`group flex flex-col items-start gap-3 p-5 w-full text-left bg-white border border-slate-200 rounded-[18px] active:scale-[0.97]
        
//         /* Свойства анимации появления: длительность 500мс (полсекунды) */
//         transition-[opacity,transform,border-color,box-sizes,box-shadow] duration-500 ease-out
        
//         /* Эффекты при наведении (hover) срабатывают быстро благодаря в group */
//         hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_24px_-12px_rgba(11,31,58,0.12)]
        
//         /* Состояние анимации: зависит от видимости секции */
//         ${isVisible 
//           ? 'opacity-100 translate-y-0' 
//           : 'opacity-0 translate-y-6' // смещение на 24px для более глубокого вылета
//         }`}
//     >
//       {/* Иконка */}
//       <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 transition-colors duration-200">
//         <i className={`${cat.icon} text-[18px] text-blue-700`} aria-hidden="true" />
//       </div>

//       {/* Текст */}
//       <div className="flex-1">
//         <p className="text-[14px] font-bold tracking-tight leading-snug text-[#0B1F3A]">
//           {cat.title}
//         </p>
//         <p className="text-[12px] mt-0.5 text-slate-400 font-mono tabular-nums">
//           {cat.count} вакансий
//         </p>
//       </div>

//       {/* Стрелка */}
//       <div className="self-end opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
//         <i className="fa-solid fa-arrow-right text-[13px] text-[#F97316]" aria-hidden="true" />
//       </div>
//     </Link>
//   )
// }

// function Categories() {
//   const [isSectionVisible, setIsSectionVisible] = useState(false)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const el = sectionRef.current
//     if (!el) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsSectionVisible(true)
//           observer.unobserve(el) // Перестаем следить после первого срабатывания
//         }
//       },
//       { 
//         threshold: 0.05, // Сработает, как только покажется хотя бы 5% секции
//         rootMargin: '0px 0px -20px 0px' 
//       }
//     )

//     observer.observe(el)

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="py-16 px-6 border-b border-[#DCE3EC] bg-[#F5F7FA]"
//       aria-labelledby="cat-title"
//     >
//       <div className="max-w-5xl mx-auto">
        
//         {/* Заголовок */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
//           <div>
//             <div className="inline-flex items-center gap-3 mb-4">
//               <span className="w-5 h-[1.5px] rounded bg-blue-200" aria-hidden="true" />
//               <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-blue-700">
//                 Категории
//               </span>
//               <span className="w-5 h-[1.5px] rounded bg-blue-200" aria-hidden="true" />
//             </div>
//             <h2
//               id="cat-title"
//               className="text-[34px] font-extrabold tracking-[-1.2px] leading-[1.1] text-[#0B1F3A]"
//             >
//               Выбери свой<br />
//               <span className="text-[#F97316]">стек технологий</span>
//             </h2>
//           </div>

//           <p className="text-[15px] max-w-50 leading-[1.6] sm:text-right text-slate-500">
//             1 200+ вакансий по всем направлениям IT
//           </p>
//         </div>

//         {/* Сетка карточек */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//           {CATEGORIES.map((cat, i) => (
//             <CategoryCard
//               key={cat.id}
//               cat={cat}
//               index={i}
//               isVisible={isSectionVisible}
//             />
//           ))}
//         </div>

//         {/* Футер */}
//         <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
//           <span className="text-[13px] font-bold uppercase tracking-wider text-slate-400 font-mono tabular-nums">
//             774 вакансии всего
//           </span>

//           <Link
//             to="/Job"
//             className="inline-flex items-center gap-2 text-white text-[14px] font-bold px-8 py-2.5 rounded-xl transition-all bg-[#F97316] hover:bg-[#E0670B]"
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
  const delay = `${index * 120}ms` // Умеренная задержка в 120мс для плавного каскадного появления

  return (
    <Link
      to={`/jobs/${cat.slug}`}
      style={{ 
        transitionDelay: isVisible ? delay : '0ms' 
      }}
      className={`group flex flex-col items-start gap-3 p-5 w-full text-left bg-white border border-slate-200 rounded-[18px] active:scale-[0.97]
        
        transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out
        
        hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_24px_-12px_rgba(11,31,58,0.12)]
        
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
        }`}
    >
      {/* Иконка */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 group-hover:bg-blue-100/50 transition-colors duration-200">
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

      {/* Стрелка перехода */}
      <div className="self-end opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300">
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
          observer.unobserve(el)
        }
      },
      { 
        threshold: 0.05,
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

        {/* Футер категории */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
          <span className="text-[13px] font-bold uppercase tracking-wider text-slate-400 font-mono tabular-nums">
            774 вакансии всего
          </span>

          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-white text-[14px] font-bold px-8 py-2.5 rounded-xl transition-all bg-[#F97316] hover:bg-[#E0670B] hover:scale-[1.02] active:scale-[0.98]"
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