// import logo from '../../../assets/Recruit.png'

// const INFO_BLOCKS = [
//   {
//     icon: 'fa-solid fa-users',
//     title: 'Кто мы',
//     text: 'Hamkor.tj — платформа, которая соединяет IT-специалистов Таджикистана с ведущими компаниями и банками страны. Мы создаём пространство, где поиск работы и подбор кадров занимает дни, а не месяцы.',
//   },
//   {
//     icon: 'fa-solid fa-bullseye',
//     title: 'Цель проекта',
//     text: 'Сделать рынок IT-вакансий в Таджикистане прозрачным и доступным: помочь талантливым специалистам найти команду мечты, а компаниям — быстро закрывать технические позиции.',
//   },
//   {
//     icon: 'fa-solid fa-heart',
//     title: 'Для кого создан сайт',
//     text: 'Для разработчиков, дизайнеров, аналитиков и других IT-специалистов в поиске работы, а также для компаний и банков, которые растят технологические команды в Худжанде, Душанбе и за их пределами.',
//   },
// ]

// const SEEKER_BENEFITS = [
//   { icon: 'fa-solid fa-magnifying-glass',  text: 'Удобный поиск вакансий с фильтрами по городу, зарплате и типу занятости' },
//   { icon: 'fa-solid fa-file-lines',        text: 'Бесплатное создание и публикация резюме за несколько минут' },
//   { icon: 'fa-solid fa-bell',              text: 'Уведомления о новых вакансиях, подходящих под ваш профиль' },
//   { icon: 'fa-solid fa-eye',               text: 'Прямой доступ к контактам работодателя без посредников' },
// ]

// const EMPLOYER_BENEFITS = [
//   { icon: 'fa-solid fa-file-plus',  text: 'Быстрое размещение вакансий с гибкими условиями' },
//   { icon: 'fa-solid fa-address-book', text: 'База резюме с фильтрами по навыкам, опыту и городу' },
//   { icon: 'fa-solid fa-chart-bar',  text: 'Аналитика по рынку труда и зарплатным ожиданиям' },
//   { icon: 'fa-solid fa-bolt',       text: 'Прямая связь с кандидатами без лишних шагов' },
// ]

// function InfoCard({ icon, title, text }) {
//   return (
//     <div
//       className="flex flex-col gap-3 rounded-2xl p-6 bg-white h-full"
//       style={{ border: '1.5px solid #E8D5C4' }}
//     >
//       <div
//         className="w-12 h-12 rounded-[14px] flex items-center justify-center"
//         style={{ background: '#FEE8D0' }}
//       >
//         <i className={`${icon} text-[20px]`} style={{ color: '#F97316' }} aria-hidden="true" />
//       </div>
//       <h3 className="text-[17px] font-extrabold" style={{ color: '#0D1B2A' }}>
//         {title}
//       </h3>
//       <p className="text-[13.5px] leading-[1.65]" style={{ color: '#7A6B5D' }}>
//         {text}
//       </p>
//     </div>
//   )
// }

// function BenefitRow({ icon, text, light }) {
//   return (
//     <div className="flex items-start gap-3">
//       <div
//         className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
//         style={light ? { background: 'rgba(255,255,255,0.1)' } : { background: 'rgba(255,255,255,0.6)', border: '1px solid #FCD4AD' }}
//       >
//         <i className={`${icon} text-[14px]`} style={{ color: light ? '#fff' : '#F97316' }} aria-hidden="true" />
//       </div>
//       <p className="text-[13.5px] leading-[1.55] font-medium pt-1.5" style={{ color: light ? '#cbd5e1' : '#5C3415' }}>
//         {text}
//       </p>
//     </div>
//   )
// }

// function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="w-full px-4 py-14 md:px-12 md:py-20"
//       style={{ backgroundColor: '#FDF6EE' }}
//       aria-label="О нас"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* ── Заголовок раздела ── */}
//         <div className="flex flex-col items-start mb-12">
//           <span
//             className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
//             style={{ background: '#FEE8D0', border: '1px solid #FDCFA0', color: '#C2570A' }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
//             О проекте
//           </span>
//           <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px] mb-4" style={{ color: '#0D1B2A' }}>
//             О нас
//           </h2>
//           <p className="text-[15px] leading-[1.65] max-w-2xl" style={{ color: '#7A6B5D' }}>
//             Hamkor.tj помогает IT-специалистам и компаниям Таджикистана находить друг друга быстрее и проще.
//           </p>
//         </div>

//         {/* ── Информационный блок ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
//           {INFO_BLOCKS.map(block => (
//             <InfoCard key={block.title} {...block} />
//           ))}
//         </div>

//         {/* ── Преимущества ── */}
//         <div className="flex flex-col items-start mb-8">
//           <h3 className="text-xl md:text-[26px] font-extrabold tracking-[-0.5px]" style={{ color: '#0D1B2A' }}>
//             Почему выбирают Hamkor.tj
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Для соискателей */}
//           <div
//             className="flex flex-col h-full rounded-2xl p-6 md:p-8"
//             style={{ background: '#FFF3E5', border: '2px solid #FFC894' }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-white">
//                 <i className="fa-solid fa-user text-[20px]" style={{ color: '#F97316' }} aria-hidden="true" />
//               </div>
//               <h4 className="text-lg font-black" style={{ color: '#4A1D00' }}>
//                 Для соискателей
//               </h4>
//             </div>

//             <div className="flex flex-col gap-4">
//               {SEEKER_BENEFITS.map(b => (
//                 <BenefitRow key={b.text} {...b} />
//               ))}
//             </div>
//           </div>

//           {/* Для работодателей */}
//           <div
//             className="flex flex-col h-full rounded-2xl p-6 md:p-8"
//             style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '2px solid #334155' }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
//                 <i className="fa-solid fa-building text-[20px] text-white" aria-hidden="true" />
//               </div>
//               <h4 className="text-lg font-black text-white">
//                 Для работодателей
//               </h4>
//             </div>

//             <div className="flex flex-col gap-4">
//               {EMPLOYER_BENEFITS.map(b => (
//                 <BenefitRow key={b.text} {...b} light />
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* ── Подпись с логотипом ── */}
//         <div className="flex items-center gap-3 mt-14 pt-8" style={{ borderTop: '1px solid #EFE0D0' }}>
//           <img src={logo} alt="Hamkor" className="w-9 h-9 object-contain" />
//           <p className="text-[13px] font-medium" style={{ color: '#B0A090' }}>
//             Hamkor.tj — IT-рекрутинг в Таджикистане, сделанный для людей.
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default AboutSection






import logo from '../../../assets/Recruit.png'

const INFO_BLOCKS = [
  {
    icon: 'fa-solid fa-users',
    title: 'Кто мы',
    text: 'Hamkor.tj — платформа, которая соединяет IT-специалистов Таджикистана с ведущими компаниями и банками страны. Мы создаём пространство, где поиск работы и подбор кадров занимает дни, а не месяцы.',
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Цель проекта',
    text: 'Сделать рынок IT-вакансий в Таджикистане прозрачным и доступным: помочь талантливым специалистам найти команду мечты, а компаниям — быстро закрывать технические позиции.',
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Для кого создан сайт',
    text: 'Для разработчиков, дизайнеров, аналитиков и других IT-специалистов в поиске работы, а также для компаний и банков, которые растят технологические команды в Худжанде, Душанбе и за их пределами.',
  },
]

const SEEKER_BENEFITS = [
  { icon: 'fa-solid fa-magnifying-glass',  text: 'Удобный поиск вакансий с фильтрами по городу, зарплате и типу занятости' },
  { icon: 'fa-solid fa-file-lines',        text: 'Бесплатное создание и публикация резюме за несколько минут' },
  { icon: 'fa-solid fa-bell',              text: 'Уведомления о новых вакансиях, подходящих под ваш профиль' },
  { icon: 'fa-solid fa-eye',               text: 'Прямой доступ к контактам работодателя без посредников' },
]

const EMPLOYER_BENEFITS = [
  { icon: 'fa-solid fa-file-plus',  text: 'Быстрое размещение вакансий с гибкими условиями' },
  { icon: 'fa-solid fa-address-book', text: 'База резюме с фильтрами по навыкам, опыту и городу' },
  { icon: 'fa-solid fa-chart-bar',  text: 'Аналитика по рынку труда и зарплатным ожиданиям' },
  { icon: 'fa-solid fa-bolt',       text: 'Прямая связь с кандидатами без лишних шагов' },
]

function InfoCard({ icon, title, text }) {
  return (
    <div
      className="flex flex-col gap-3 rounded-2xl p-6 bg-white h-full"
      style={{ border: '1.5px solid #DCE3EC' }}
    >
      <div
        className="w-12 h-12 rounded-[14px] flex items-center justify-center"
        style={{ background: '#EFF6FF' }}
      >
        <i className={`${icon} text-[20px]`} style={{ color: '#F97316' }} aria-hidden="true" />
      </div>
      <h3 className="text-[17px] font-extrabold" style={{ color: '#0B1F3A' }}>
        {title}
      </h3>
      <p className="text-[13.5px] leading-[1.65]" style={{ color: '#64748B' }}>
        {text}
      </p>
    </div>
  )
}

function BenefitRow({ icon, text, light }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
        style={light ? { background: 'rgba(255,255,255,0.1)' } : { background: 'rgba(255,255,255,0.6)', border: '1px solid #FCD4AD' }}
      >
        <i className={`${icon} text-[14px]`} style={{ color: light ? '#fff' : '#F97316' }} aria-hidden="true" />
      </div>
      <p className="text-[13.5px] leading-[1.55] font-medium pt-1.5" style={{ color: light ? '#94A3B8' : '#0B1F3A' }}>
        {text}
      </p>
    </div>
  )
}

function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-4 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: '#F5F7FA' }}
      aria-label="О нас"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col items-start mb-12">
          <span
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
            style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
            О проекте
          </span>
          <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px] mb-4" style={{ color: '#0B1F3A' }}>
            О нас
          </h2>
          <p className="text-[15px] leading-[1.65] max-w-2xl" style={{ color: '#64748B' }}>
            Hamkor.tj помогает IT-специалистам и компаниям Таджикистана находить друг друга быстрее и проще.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {INFO_BLOCKS.map(block => (
            <InfoCard key={block.title} {...block} />
          ))}
        </div>

        <div className="flex flex-col items-start mb-8">
          <h3 className="text-xl md:text-[26px] font-extrabold tracking-[-0.5px]" style={{ color: '#0B1F3A' }}>
            Почему выбирают Hamkor.tj
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div
            className="flex flex-col h-full rounded-2xl p-6 md:p-8"
            style={{ background: '#FFFFFF', border: '2px solid #E1E7EF' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-white">
                <i className="fa-solid fa-user text-[20px]" style={{ color: '#F97316' }} aria-hidden="true" />
              </div>
              <h4 className="text-lg font-black" style={{ color: '#0B1F3A' }}>
                Для соискателей
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              {SEEKER_BENEFITS.map(b => (
                <BenefitRow key={b.text} {...b} />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col h-full rounded-2xl p-6 md:p-8"
            style={{ background: 'linear-gradient(135deg, #14304F 0%, #0B1F3A 100%)', border: '2px solid #1E3A5F' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <i className="fa-solid fa-building text-[20px] text-white" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-black text-white">
                Для работодателей
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              {EMPLOYER_BENEFITS.map(b => (
                <BenefitRow key={b.text} {...b} light />
              ))}
            </div>
          </div>

        </div>

        <div className="flex items-center gap-3 mt-14 pt-8" style={{ borderTop: '1px solid #E1E7EF' }}>
          <img src={logo} alt="Hamkor" className="w-9 h-9 object-contain" />
          <p className="text-[13px] font-medium" style={{ color: '#94A3B8' }}>
            Hamkor.tj — IT-рекрутинг в Таджикистане, сделанный для людей.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutSection