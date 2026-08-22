// import { Link, useLocation } from 'react-router-dom'
// import logo from '../../../assets/Hamkor.png'

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
//       <header className="sticky top-0 z-50 border-b border-slate-400/15 bg-[#0B1F3A]/90 backdrop-blur-sm">
//         <div className="flex justify-between lg:justify-center gap-10 items-center h-18 px-4 lg:px-10 max-w-7xl mx-auto">
          
//           {/* Логотип */}
//           <Link
//             to="/"
//             className="flex items-center gap-2.5 font-bold text-2xl lg:text-[28px] tracking-tight"
//           >
//             <img
//               src={logo}
//               alt="Hamkor"
//               className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-full"
//             />
//             <span className="text-white">
//               Hamkor<span className="text-[#F97316]">.tj</span>
//             </span>
//           </Link>

//           {/* Навигация десктоп */}
//           <nav className="hidden lg:flex gap-1">
//             {NAV_LINKS.map(({ to, label }) => {
//               const active = pathname === to

//               return (
//                 <Link
//                   key={to}
//                   to={to}
//                   className={`px-4 py-2 text-[15px] font-semibold rounded-lg transition-colors tracking-tight ${
//                     active ? 'text-white' : 'text-slate-200/55 hover:text-white'
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* Кнопки десктоп */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Link
//               to="/Resume"
//               className="px-4 py-2 text-[13px] font-semibold text-slate-200/75 border border-slate-400/30 rounded-lg transition hover:text-white hover:bg-white/5"
//             >
//               Работодателям
//             </Link>

//             <a
//               href="https://t.me/ItrunRecruit_bot"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 text-[13px] font-semibold text-slate-200/75 border border-slate-400/30 rounded-lg transition hover:text-white hover:bg-white/5 flex items-center gap-1.5"
//             >
//               <i className="fa-solid fa-shield-halved text-[11px] text-blue-500" aria-hidden="true" />
//               Анализ резюме
//             </a>

//             <Link
//               to="/Imployer"
//               className="px-5 py-2.5 text-[13px] font-bold text-white bg-[#F97316] hover:bg-[#E0670B] rounded-lg transition-colors"
//             >
//               Разместить вакансию
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Мобильные кнопки под шапкой */}
//       <div className="lg:hidden px-4 py-3 bg-[#0B1F3A]">
//         <div className="grid grid-cols-2 gap-2">
//           <Link
//             to="/Resume"
//             className="text-center px-3 py-2 text-[13px] font-semibold text-white border border-slate-400/30 rounded-lg"
//           >
//             Работодателям
//           </Link>

//           <a
//             href="https://t.me/ItrunRecruit_bot"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-center px-3 py-2 text-[13px] font-semibold text-white border border-slate-400/30 rounded-lg"
//           >
//             Анализ резюме
//           </a>

//           <Link
//             to="/Imployer"
//             className="col-span-2 text-center px-3 py-2 text-[13px] font-bold text-white bg-[#F97316] rounded-lg"
//           >
//             Разместить вакансию
//           </Link>
//         </div>
//       </div>

//       {/* Нижний таббар (Мобильный) */}
//       <div
//         className="lg:hidden fixed bottom-0 left-0 right-0 z-50"
//         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
//       >
//         <div className="mx-4 mb-4">
//           <nav className="rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.25)] bg-[#0B1F3A] border border-slate-400/15">
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
//                         active ? 'bg-[#F97316]/20' : 'bg-transparent'
//                       }`}
//                     >
//                       <i
//                         className={`${icon} text-[18px]`}
//                         style={{ color: active ? '#F97316' : 'rgba(148,163,184,0.6)' }}
//                       />
//                     </div>

//                     <span
//                       className="text-[12px] font-semibold"
//                       style={{ color: active ? '#F97316' : 'rgba(148,163,184,0.6)' }}
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
  { to: '/about', label: 'О нас', icon: 'fa-solid fa-circle-info' },
]

function Header() {
  const { pathname } = useLocation()

  return (
    <>
      {/* Шапка */}
      <header className="sticky top-0 z-50 border-b border-slate-400/15 bg-[#0B1F3A]/95 backdrop-blur-md">
        <div className="flex justify-between lg:justify-center gap-10 items-center h-18 px-4 lg:px-10 max-w-7xl mx-auto">
          
          {/* Логотип */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-2xl lg:text-[26px] tracking-tight hover:opacity-95 transition-opacity"
          >
            <img
              src={logo}
              alt="Hamkor.tj"
              className="w-10 h-10 lg:w-11 lg:h-11 object-contain rounded-full"
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
                    active ? 'text-white bg-white/5' : 'text-slate-200/60 hover:text-white hover:bg-white/5'
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
              className="px-4 py-2 text-[13px] font-semibold text-slate-200/75 border border-slate-400/20 rounded-lg transition-all hover:text-white hover:bg-white/5"
            >
              Работодателям
            </Link>

            {/* Выделенная кнопка с AI-бейджем */}
            <a
              href="https://t.me/ItrunRecruit_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-[13px] font-semibold text-slate-200/75 border border-slate-400/20 rounded-lg transition-all hover:text-white hover:bg-white/5 flex items-center gap-1.5 overflow-hidden"
            >
              <i className="fa-solid fa-shield-halved text-[11px] text-blue-500" aria-hidden="true" />
              Анализ резюме
              <span className="absolute top-0 right-0 text-[8px] font-black uppercase px-1 py-0.5 bg-[#F97316] text-white rounded-bl-md leading-none scale-[0.8] origin-top-right">
                AI
              </span>
            </a>

            <Link
              to="/Imployer"
              className="px-5 py-2.5 text-[13px] font-bold text-white bg-[#F97316] hover:bg-[#E0670B] rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
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
            className="text-center px-3 py-2 text-[13px] font-semibold text-white border border-slate-400/20 rounded-lg"
          >
            Работодателям
          </Link>

          <a
            href="https://t.me/ItrunRecruit_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-3 py-2 text-[13px] font-semibold text-white border border-slate-400/20 rounded-lg"
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
          <nav className="rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] bg-[#0B1F3A] border border-slate-400/10">
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