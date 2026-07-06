// import { Link, useLocation } from 'react-router-dom'
// // import logo from '../../../assets/Recruit.png'
// import logo from '../../../assets/Hamkor1.png'
// // import logo from '../../../assets/Hamkor.png'

// const NAV_LINKS = [
//   { to: '/', label: 'Главная', icon: 'fa-solid fa-house' },
//   { to: '/Job', label: 'Вакансии', icon: 'fa-solid fa-briefcase' },
//   { to: '/Resume', label: 'Резюме', icon: 'fa-solid fa-file-lines' },
//   { to: '/About', label: 'О нас', icon: 'fa-solid fa-circle-info' },
// ]

// function Header() {
//   const { pathname } = useLocation()

//   return (
//     <>
//       {/* Шапка */}
//       <header
//         className="sticky top-0 z-50 border-b border-white/10"
//         style={{ backgroundColor: '#0D1B2A' }}
//       >
//         <div className="flex justify-center gap-10 items-center h-20 px-4 lg:px-10 max-w-7xl mx-auto">
//           {/* Логотип */}
//           <Link
//             to="/"
//             className="flex items-center gap-2 font-bold text-2xl lg:text-4xl tracking-tight text-orange-400"
//           >
//             <img
//               src={logo}
//               alt="Hamkor"
//               className="w-10 h-10 lg:w-12 lg:h-12 object-contain "
//             />
//             <span className="text-white">Hamkor</span>.tj
//           </Link>

//           {/* Навигация десктоп */}
//           <nav className="hidden lg:flex gap-1">
//             {NAV_LINKS.map(({ to, label }) => {
//               const active = pathname === to

//               return (
//                 <Link
//                   key={to}
//                   to={to}
//                   className="px-4 py-2 text-[18px] font-semibold rounded-lg transition-colors"
//                   style={{
//                     color: active
//                       ? '#fff'
//                       : 'rgba(255,255,255,0.6)',
//                   }}
//                   onMouseOver={(e) => {
//                     if (!active) e.currentTarget.style.color = '#fff'
//                   }}
//                   onMouseOut={(e) => {
//                     if (!active)
//                       e.currentTarget.style.color =
//                         'rgba(255,255,255,0.8)'
//                   }}
//                 >
//                   {label}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* Кнопки десктоп */}
//           <div className="hidden lg:flex items-center gap-3 ">
//             <Link
//               to="/Resume"
//               className="px-4 py-2 text-sm font-medium text-white/80 border border-white/30 rounded-lg hover:text-white hover:bg-white/10 transition"
//             >
//               Работодателям
//             </Link>

//             <a
//               href="https://t.me/ItrunRecruit_bot"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 text-sm font-medium text-white/80 border border-white/30 rounded-lg hover:text-white hover:bg-white/10 transition"
//             >
//               Анализ резюме
//             </a>

//             <Link
//               to="/Imployer"
//               className="px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
//             >
//               Разместить вакансию
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Мобильные кнопки */}
//       <div className="lg:hidden bg-[#0D1B2A] px-4 py-3 ">
//         <div className="grid grid-cols-2 gap-2">
//           <Link
//             to="/Resume"
//             className="text-center px-3 py-2 text-sm font-medium text-white border border-white/30 rounded-lg"
//           >
//             Работодателям
//           </Link>

//           <a
//             href="https://t.me/ItrunRecruit_bot"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-center px-3 py-2 text-sm font-medium text-white border border-white/30 rounded-lg"
//           >
//             Анализ резюме
//           </a>

//           <Link
//             to="/Imployer"
//             className="col-span-2 text-center px-3 py-2 text-sm font-semibold text-white bg-orange-500 rounded-lg"
//           >
//             Разместить вакансию
//           </Link>
//         </div>
//       </div>

//       {/* Нижний таббар */}
//       <div
//         className="lg:hidden fixed bottom-0 left-0 right-0 z-50"
//         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
//       >
//         <div className="mx-4 mb-4">
//           <nav
//             className="border border-gray-200 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
//             style={{ backgroundColor: '#0D1B2A' }}
//           >
//             <div className="flex items-center justify-around px-2 py-2">
//               {NAV_LINKS.map(({ to, label, icon }) => {
//                 const active = pathname === to

//                 return (
//                   <Link
//                     key={to}
//                     to={to}
//                     className="flex flex-col items-center gap-0.5 transition-all active:scale-[0.90] w-full"
//                   >
//                     <div
//                       className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-200 ${
//                         active ? 'bg-orange-500/20' : ''
//                       }`}
//                     >
//                       <i
//                         className={`${icon} text-[18px] ${
//                           active
//                             ? 'text-orange-500'
//                             : 'text-white/40'
//                         }`}
//                       />
//                     </div>

//                     <span
//                       className={`text-[12px] font-semibold ${
//                         active
//                           ? 'text-orange-500'
//                           : 'text-white/40'
//                       }`}
//                     >
//                       {label}
//                     </span>
//                   </Link>
//                 )
//               })}
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* Отступ под нижнее меню */}
//       {/* <div className="lg:hidden h-24" /> */}
//     </>
//   )
// }

// export default Header






import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/Hamkor.png'

const NAV_LINKS = [
  { to: '/', label: 'Главная', icon: 'fa-solid fa-house' },
  { to: '/Job', label: 'Вакансии', icon: 'fa-solid fa-briefcase' },
  { to: '/Resume', label: 'Резюме', icon: 'fa-solid fa-file-lines' },
  { to: '/About', label: 'О нас', icon: 'fa-solid fa-circle-info' },
]

function Header() {
  const { pathname } = useLocation()

  return (
    <>
      {/* Шапка */}
      <header className="sticky top-0 z-50 border-b border-slate-400/15 bg-[#0B1F3A]/90 backdrop-blur-sm">
        <div className="flex justify-between lg:justify-center gap-10 items-center h-18 px-4 lg:px-10 max-w-7xl mx-auto">
          
          {/* Логотип */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-2xl lg:text-[28px] tracking-tight"
          >
            <img
              src={logo}
              alt="Hamkor"
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-full"
            />
            <span className="text-white">
              Hamkor<span className="text-[#F97316]">.tj</span>
            </span>
          </Link>

          {/* Навигация десктоп */}
          <nav className="hidden lg:flex gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const active = pathname === to

              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 text-[15px] font-semibold rounded-lg transition-colors tracking-tight ${
                    active ? 'text-white' : 'text-slate-200/55 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Кнопки десктоп */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/Resume"
              className="px-4 py-2 text-[13px] font-semibold text-slate-200/75 border border-slate-400/30 rounded-lg transition hover:text-white hover:bg-white/5"
            >
              Работодателям
            </Link>

            <a
              href="https://t.me/ItrunRecruit_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[13px] font-semibold text-slate-200/75 border border-slate-400/30 rounded-lg transition hover:text-white hover:bg-white/5 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-shield-halved text-[11px] text-blue-500" aria-hidden="true" />
              Анализ резюме
            </a>

            <Link
              to="/Imployer"
              className="px-5 py-2.5 text-[13px] font-bold text-white bg-[#F97316] hover:bg-[#E0670B] rounded-lg transition-colors"
            >
              Разместить вакансию
            </Link>
          </div>
        </div>
      </header>

      {/* Мобильные кнопки под шапкой */}
      <div className="lg:hidden px-4 py-3 bg-[#0B1F3A]">
        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/Resume"
            className="text-center px-3 py-2 text-[13px] font-semibold text-white border border-slate-400/30 rounded-lg"
          >
            Работодателям
          </Link>

          <a
            href="https://t.me/ItrunRecruit_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-3 py-2 text-[13px] font-semibold text-white border border-slate-400/30 rounded-lg"
          >
            Анализ резюме
          </a>

          <Link
            to="/Imployer"
            className="col-span-2 text-center px-3 py-2 text-[13px] font-bold text-white bg-[#F97316] rounded-lg"
          >
            Разместить вакансию
          </Link>
        </div>
      </div>

      {/* Нижний таббар (Мобильный) */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="mx-4 mb-4">
          <nav className="rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.25)] bg-[#0B1F3A] border border-slate-400/15">
            <div className="flex items-center justify-around px-2 py-2">
              {NAV_LINKS.map(({ to, label, icon }) => {
                const active = pathname === to

                return (
                  <Link
                    key={to}
                    to={to}
                    className="flex flex-col items-center gap-0.5 transition-all active:scale-[0.90] w-full"
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-200 ${
                        active ? 'bg-[#F97316]/20' : 'bg-transparent'
                      }`}
                    >
                      <i
                        className={`${icon} text-[18px]`}
                        style={{ color: active ? '#F97316' : 'rgba(148,163,184,0.6)' }}
                      />
                    </div>

                    <span
                      className="text-[12px] font-semibold"
                      style={{ color: active ? '#F97316' : 'rgba(148,163,184,0.6)' }}
                    >
                      {label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header