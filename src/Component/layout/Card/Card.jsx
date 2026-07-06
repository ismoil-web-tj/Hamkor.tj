// import { useRef, useEffect } from 'react'

// const STEPS = [
//   {
//     id:    1,
//     icon:  'ti-search',
//     label: '01',
//     title: 'Найди вакансию',
//     desc:  'Умный поиск с фильтрами по стеку, городу, зарплате и типу занятости.',
//     perks: [
//       '1 200+ актуальных вакансий',
//       'Фильтр по стеку и зарплате',
//       'Удалёнка и офис',
//     ],
//   },
//   {
//     id:    2,
//     icon:  'ti-send',
//     label: '02',
//     title: 'Откликнись в один клик',
//     desc:  'Заполни профиль один раз — откликайся на любые вакансии мгновенно.',
//     perks: [
//       'Резюме прямо в профиле',
//       'Отклик за 1 секунду',
//       'Статус отклика в реальном времени',
//     ],
//   },
//   {
//     id:    3,
//     icon:  'ti-award',
//     label: '03',
//     title: 'Получи оффер',
//     desc:  'Работодатель связывается напрямую. Никаких посредников и лишних звонков.',
//     perks: [
//       'Прямой контакт с компанией',
//       'Среднее время — 3–5 дней',
//       'Поддержка на всех этапах',
//     ],
//   },
// ]

// const TIMELINE = [
//   { step: 1, label: 'Регистрация',    time: '5 мин'    },
//   { step: 2, label: 'Поиск и отклик', time: 'День 1'   },
//   { step: 3, label: 'Собеседование',  time: 'День 2–4' },
//   { step: 4, label: 'Оффер',          time: 'День 5–7' },
// ]

// function HowItWorks({ onRegister, onBrowse }) {
//   const cardsRef = useRef(null)

//   useEffect(() => {
//     if (!cardsRef.current) return
//     const cards = cardsRef.current.querySelectorAll('[data-card]')

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const el    = entry.target
//             const delay = el.dataset.delay ?? 0
//             setTimeout(() => {
//               el.style.opacity   = '1'
//               el.style.transform = 'translateY(0)'
//             }, delay)
//             observer.unobserve(el)
//           }
//         })
//       },
//       { threshold: 0.15 }
//     )

//     cards.forEach((card) => observer.observe(card))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       className="py-16 px-6 border-b overflow-hidden"
//       style={{ backgroundColor: '#FDF6EE', borderColor: '#EFE0D0' }}
//       aria-labelledby="hiw-title"
//     >
//       <div className="max-w-5xl mx-auto">

//         {/* Шапка */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-5">
//             <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDCFA0' }} aria-hidden="true" />
//             <span
//               className="text-[10px] font-bold uppercase tracking-[2.5px]"
//               style={{ color: '#C2570A' }}
//             >
//               Как это работает
//             </span>
//             <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDCFA0' }} aria-hidden="true" />
//           </div>

//           <h2
//             id="hiw-title"
//             className="text-[36px] font-extrabold tracking-[-1.5px] leading-[1.08] mb-4"
//             style={{ color: '#0D1B2A' }}
//           >
//             От поиска до оффера —<br />
//             без лишних шагов
//           </h2>

//           <p
//             className="text-[15px] max-w-sm mx-auto leading-[1.7]"
//             style={{ color: '#7A6B5D' }}
//           >
//             Простой процесс, который уже помог 8 500+ специалистам найти работу в IT
//           </p>
//         </div>

//         {/* Карточки шагов */}
//         <div
//           ref={cardsRef}
//           className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
//         >
//           {STEPS.map((step, i) => (
//             <article
//               key={step.id}
//               data-card
//               data-delay={i * 120}
//               style={{
//                 opacity: 0,
//                 transform: 'translateY(24px)',
//                 transition: 'opacity 0.5s ease, transform 0.5s ease',
//               }}
//               className="bg-white border border-[#EFE0D0] rounded-[20px] p-8 relative
//                 hover:border-[#FDCFA0] hover:bg-[#FFFAF5] hover:-translate-y-1
//                 transition-all duration-200"
//             >
//               {/* Номер в углу */}
//               <span
//                 className="absolute top-6 right-6 text-[11px] font-extrabold tracking-[1.5px]"
//                 style={{ color: '#EFE0D0' }}
//               >
//                 {step.label}
//               </span>

//               {/* Иконка */}
//               <div
//                 className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[24px]"
//                 style={{ background: '#FEE8D0', color: '#F97316' }}
//               >
//                 <i className={`ti ${step.icon}`} aria-hidden="true" />
//               </div>

//               <h3
//                 className="text-[18px] font-bold tracking-tight mb-2.5 leading-snug"
//                 style={{ color: '#0D1B2A' }}
//               >
//                 {step.title}
//               </h3>

//               <p
//                 className="text-[14px] leading-[1.7] mb-5"
//                 style={{ color: '#7A6B5D' }}
//               >
//                 {step.desc}
//               </p>

//               <ul className="flex flex-col gap-2">
//                 {step.perks.map((perk) => (
//                   <li
//                     key={perk}
//                     className="flex items-center gap-2 text-[13px]"
//                     style={{ color: '#7A6B5D' }}
//                   >
//                     <i
//                       className="ti ti-check text-[14px] shrink-0"
//                       style={{ color: '#F97316' }}
//                       aria-hidden="true"
//                     />
//                     {perk}
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>

//         {/* Временная шкала */}
//         <div
//           className="flex items-start rounded-2xl px-8 py-6 mb-4 border"
//           style={{ background: '#FFF8F2', borderColor: '#EFE0D0' }}
//           role="list"
//           aria-label="Сроки процесса"
//         >
//           {TIMELINE.map((item, i) => (
//             <div
//               key={item.step}
//               className="flex-1 flex flex-col items-center text-center relative"
//               role="listitem"
//             >
//               {i > 0 && (
//                 <span
//                   className="absolute left-0 top-[9px] w-full h-px -z-0"
//                   style={{ background: '#EFE0D0' }}
//                   aria-hidden="true"
//                 />
//               )}
//               <div
//                 className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-[9px] font-extrabold z-10 mb-2"
//                 style={
//                   item.step === 4
//                     ? { background: '#0D1B2A', borderColor: '#0D1B2A', color: '#fff' }
//                     : item.step === 3
//                     ? { background: '#F97316', borderColor: '#F97316', color: '#fff' }
//                     : { background: '#FEE8D0', borderColor: '#FDCFA0', color: '#C2570A' }
//                 }
//               >
//                 {item.step}
//               </div>
//               <span
//                 className="text-[11px] font-semibold leading-tight"
//                 style={{ color: '#7A6B5D' }}
//               >
//                 {item.label}
//               </span>
//               <span
//                 className="text-[10px] mt-0.5"
//                 style={{ color: '#B0A090' }}
//               >
//                 {item.time}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* CTA блок */}
//         <div
//           className="flex flex-col sm:flex-row items-center justify-between rounded-[20px] px-10 py-8 gap-6"
//           style={{ background: '#0D1B2A' }}
//         >
//           <div>
//             <p className="text-[22px] font-extrabold text-white tracking-tight mb-1">
//               Готов начать?
//             </p>
//             <p style={{ color: '#7A8FA0' }} className="text-[14px]">
//               Регистрация бесплатна — займёт меньше минуты
//             </p>
//           </div>

//           <div className="flex items-center gap-3 shrink-0">
//             <button
//               type="button"
//               onClick={onBrowse}
//               className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold transition-all"
//               style={{ color: '#7A8FA0', border: '1px solid #2A3F52' }}
//               onMouseOver={e => {
//                 e.currentTarget.style.color = '#fff'
//                 e.currentTarget.style.borderColor = '#4A5F72'
//               }}
//               onMouseOut={e => {
//                 e.currentTarget.style.color = '#7A8FA0'
//                 e.currentTarget.style.borderColor = '#2A3F52'
//               }}
//             >
//               <i className="ti ti-eye text-[16px]" aria-hidden="true" />
//               Смотреть вакансии
//             </button>

//             <button
//               type="button"
//               onClick={onRegister}
//               className="flex items-center gap-2 text-white px-6 py-3 rounded-xl text-[14px] font-bold transition-colors active:scale-[0.97] hover:bg-[#E06413]"
//               style={{ background: '#F97316' }}
//             >
//               <i className="ti ti-rocket text-[16px]" aria-hidden="true" />
//               Зарегистрироваться
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default HowItWorks





import { useRef, useEffect } from 'react'

const STEPS = [
  {
    id:    1,
    icon:  'ti-search',
    label: '01',
    title: 'Найди вакансию',
    desc:  'Умный поиск с фильтрами по стеку, городу, зарплате и типу занятости.',
    perks: [
      '1 200+ актуальных вакансий',
      'Фильтр по стеку и зарплате',
      'Удалёнка и офис',
    ],
  },
  {
    id:    2,
    icon:  'ti-send',
    label: '02',
    title: 'Откликнись в один клик',
    desc:  'Заполни профиль один раз — откликайся на любые вакансии мгновенно.',
    perks: [
      'Резюме прямо в профиле',
      'Отклик за 1 секунду',
      'Статус отклика в реальном времени',
    ],
  },
  {
    id:    3,
    icon:  'ti-award',
    label: '03',
    title: 'Получи оффер',
    desc:  'Работодатель связывается напрямую. Никаких посредников и лишних звонков.',
    perks: [
      'Прямой контакт с компанией',
      'Среднее время — 3–5 дней',
      'Поддержка на всех этапах',
    ],
  },
]

const TIMELINE = [
  { step: 1, label: 'Регистрация',    time: '5 мин'    },
  { step: 2, label: 'Поиск и отклик', time: 'День 1'   },
  { step: 3, label: 'Собеседование',  time: 'День 2–4' },
  { step: 4, label: 'Оффер',          time: 'День 5–7' },
]

function HowItWorks({ onRegister, onBrowse }) {
  const cardsRef = useRef(null)

  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('[data-card]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el    = entry.target
            const delay = el.dataset.delay ?? 0
            setTimeout(() => {
              el.style.opacity   = '1'
              el.style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-16 px-6 border-b overflow-hidden"
      style={{ backgroundColor: '#F5F7FA', borderColor: '#DCE3EC' }}
      aria-labelledby="hiw-title"
    >
      <style>{`
        .Hamkor-tabular { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace; }
      `}</style>
      <div className="max-w-5xl mx-auto">

        {/* Шапка */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-5 h-[1.5px] rounded" style={{ background: '#BFDBFE' }} aria-hidden="true" />
            <span
              className="text-[11px] font-bold uppercase tracking-[2.5px]"
              style={{ color: '#1D4ED8' }}
            >
              Как это работает
            </span>
            <span className="w-5 h-[1.5px] rounded" style={{ background: '#BFDBFE' }} aria-hidden="true" />
          </div>

          <h2
            id="hiw-title"
            className="text-[36px] font-extrabold tracking-[-1.5px] leading-[1.08] mb-4"
            style={{ color: '#0B1F3A' }}
          >
            От поиска до оффера —<br />
            без лишних шагов
          </h2>

          <p
            className="text-[15px] max-w-sm mx-auto leading-[1.7]"
            style={{ color: '#64748B' }}
          >
            Простой процесс, который уже помог <span className="Hamkor-tabular font-semibold" style={{ color: '#0B1F3A' }}>8 500+</span> специалистам найти работу в IT
          </p>
        </div>

        {/* Карточки шагов */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        >
          {STEPS.map((step, i) => (
            <article
              key={step.id}
              data-card
              data-delay={i * 120}
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className="bg-white border rounded-[20px] p-8 relative hover:-translate-y-1 transition-all duration-200"
              onMouseOver={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.background = '#FAFBFE' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#E1E7EF'; e.currentTarget.style.background = '#fff' }}
            >
              {/* Номер в углу */}
              <span
                className="Hamkor-tabular absolute top-6 right-6 text-[11px] font-extrabold tracking-[1.5px]"
                style={{ color: '#E1E7EF' }}
              >
                {step.label}
              </span>

              {/* Иконка */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[24px]"
                style={{ background: '#F5F7FA', color: '#F97316' }}
              >
                <i className={`ti ${step.icon}`} aria-hidden="true" />
              </div>

              <h3
                className="text-[18px] font-bold tracking-tight mb-2.5 leading-snug"
                style={{ color: '#0B1F3A' }}
              >
                {step.title}
              </h3>

              <p
                className="text-[14px] leading-[1.7] mb-5"
                style={{ color: '#64748B' }}
              >
                {step.desc}
              </p>

              <ul className="flex flex-col gap-2">
                {step.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2 text-[13px]"
                    style={{ color: '#64748B' }}
                  >
                    <i
                      className="ti ti-check text-[14px] shrink-0"
                      style={{ color: '#1D4ED8' }}
                      aria-hidden="true"
                    />
                    {perk}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Временная шкала */}
        <div
          className="flex items-start rounded-2xl px-8 py-6 mb-4 border"
          style={{ background: '#FFFFFF', borderColor: '#E1E7EF' }}
          role="list"
          aria-label="Сроки процесса"
        >
          {TIMELINE.map((item, i) => (
            <div
              key={item.step}
              className="flex-1 flex flex-col items-center text-center relative"
              role="listitem"
            >
              {i > 0 && (
                <span
                  className="absolute left-0 top-2.25 w-full h-px z-0"
                  style={{ background: '#E1E7EF' }}
                  aria-hidden="true"
                />
              )}
              <div
                className="Hamkor-tabular w-5 h-5 rounded-full border-2 flex items-center justify-center text-[9px] font-extrabold z-10 mb-2"
                style={
                  item.step === 4
                    ? { background: '#0B1F3A', borderColor: '#0B1F3A', color: '#fff' }
                    : item.step === 3
                    ? { background: '#F97316', borderColor: '#F97316', color: '#fff' }
                    : { background: '#EFF6FF', borderColor: '#BFDBFE', color: '#1D4ED8' }
                }
              >
                {item.step}
              </div>
              <span
                className="text-[11px] font-semibold leading-tight"
                style={{ color: '#64748B' }}
              >
                {item.label}
              </span>
              <span
                className="Hamkor-tabular text-[10px] mt-0.5"
                style={{ color: '#94A3B8' }}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>

        {/* CTA блок */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between rounded-[20px] px-10 py-8 gap-6"
          style={{ background: '#0B1F3A' }}
        >
          <div>
            <p className="text-[22px] font-extrabold text-white tracking-tight mb-1">
              Готов начать?
            </p>
            <p style={{ color: '#94A3B8' }} className="text-[14px]">
              Регистрация бесплатна — займёт меньше минуты
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBrowse}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold transition-all"
              style={{ color: '#94A3B8', border: '1px solid rgba(148,163,184,0.3)' }}
              onMouseOver={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.color = '#94A3B8'
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)'
              }}
            >
              <i className="ti ti-eye text-[16px]" aria-hidden="true" />
              Смотреть вакансии
            </button>

            <button
              type="button"
              onClick={onRegister}
              className="flex items-center gap-2 text-white px-6 py-3 rounded-xl text-[14px] font-bold transition-colors active:scale-[0.97]"
              style={{ background: '#F97316' }}
              onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
              onMouseOut={e => e.currentTarget.style.background = '#F97316'}
            >
              <i className="ti ti-rocket text-[16px]" aria-hidden="true" />
              Зарегистрироваться
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks