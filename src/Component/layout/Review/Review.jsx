// import { useRef, useEffect, useState } from 'react'

// const INITIAL_TESTIMONIALS = [
//   {
//     id: 1,
//     name: 'Алишер Назаров',
//     role: 'Frontend Developer',
//     company: 'IT Service',
//     initials: 'АН',
//     text: 'Нашёл работу за 4 дня. Разместил резюме вечером, утром уже было 3 отклика от компаний. Удобный фильтр по стеку — сразу видно где нужен React и TypeScript.',
//     stars: 5,
//     tag: 'Нашёл за 4 дня',
//   },
//   {
//     id: 2,
//     name: 'Камола Рахимова',
//     role: 'UI/UX Designer',
//     company: 'Payme',
//     initials: 'КР',
//     text: 'Искала работу с удалёнкой в Таджикистане — думала это нереально. Через Hamkor.tj нашла позицию в Payme с гибридным графиком. Теперь советую всем дизайнерам.',
//     stars: 5,
//     tag: 'Удалённая работа',
//   },
//   {
//     id: 3,
//     name: 'Достон Мирзаев',
//     role: 'Backend Engineer',
//     company: 'Эсхата Банк',
//     initials: 'ДМ',
//     text: 'Зарплата выросла в 2 раза после смены работы через этот сайт. Понравилось что вакансии реальные — без воды, сразу видна вилка зарплаты и стек технологий.',
//     stars: 5,
//     tag: 'Зарплата ×2',
//   },
// ]

// // Симуляция авторизации — замени на свой auth контекст
// const IS_LOGGED_IN = false

// function getInitials(name) {
//   return name
//     .trim()
//     .split(' ')
//     .slice(0, 2)
//     .map(w => w[0])
//     .join('')
//     .toUpperCase()
// }

// function Stars({ count, interactive = false, onSet }) {
//   const [hovered, setHovered] = useState(null)
//   const display = interactive ? (hovered ?? count) : count

//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <i
//           key={i}
//           className={`fa-star text-[15px] ${i < display ? 'fa-solid' : 'fa-regular'} transition-colors`}
//           style={{ color: i < display ? '#F97316' : '#EFE0D0', cursor: interactive ? 'pointer' : 'default' }}
//           aria-hidden="true"
//           onMouseEnter={() => interactive && setHovered(i + 1)}
//           onMouseLeave={() => interactive && setHovered(null)}
//           onClick={() => interactive && onSet?.(i + 1)}
//         />
//       ))}
//     </div>
//   )
// }

// function TestimonialCard({ item, index }) {
//   const ref = useRef(null)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return
//     const timer = setTimeout(() => {
//       el.style.opacity = '1'
//       el.style.transform = 'translateY(0)'
//     }, index * 100)
//     return () => clearTimeout(timer)
//   }, [index])

//   return (
//     <article
//       ref={ref}
//       style={{
//         opacity: 0,
//         transform: 'translateY(20px)',
//         transition: 'opacity 0.5s ease, transform 0.5s ease',
//       }}
//       className="bg-white border border-[#EFE0D0] rounded-[20px] p-6 flex flex-col gap-4 hover:border-[#FDCFA0] hover:bg-[#FFFAF5] transition-all duration-200 hover:-translate-y-1"
//     >
//       <div className="flex items-start justify-between gap-3">
//         <div className="flex items-center gap-3">
//           <div
//             className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-extrabold shrink-0"
//             style={{ background: '#FEE8D0', color: '#C2570A' }}
//           >
//             {item.initials}
//           </div>
//           <div>
//             <p className="text-[14px] font-bold leading-tight" style={{ color: '#0D1B2A' }}>
//               {item.name}
//             </p>
//             <p className="text-[12px] mt-0.5" style={{ color: '#B0A090' }}>
//               {item.role} · {item.company}
//             </p>
//           </div>
//         </div>
//         <span
//           className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0"
//           style={{ background: '#FEE8D0', color: '#C2570A', border: '1px solid #FDCFA0' }}
//         >
//           {item.tag}
//         </span>
//       </div>

//       <Stars count={item.stars} />

//       <blockquote
//         className="text-[14px] leading-[1.75] relative"
//         style={{ color: '#7A6B5D' }}
//       >
//         <span
//           className="text-[40px] font-serif leading-none absolute -top-2 -left-1 select-none"
//           style={{ color: '#FEE8D0' }}
//           aria-hidden="true"
//         >"</span>
//         <p className="relative z-10 pl-4">{item.text}</p>
//       </blockquote>
//     </article>
//   )
// }

// function AuthModal({ onClose, onLogin, onRegister }) {
//   useEffect(() => {
//     const handler = (e) => e.key === 'Escape' && onClose()
//     window.addEventListener('keydown', handler)
//     return () => window.removeEventListener('keydown', handler)
//   }, [onClose])

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center px-4"
//       style={{ background: 'rgba(13,27,42,0.7)', backdropFilter: 'blur(4px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="relative w-full max-w-sm rounded-3xl p-8 flex flex-col gap-5"
//         style={{ background: '#fff', border: '2px solid #FFC894' }}
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Закрыть */}
//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
//           style={{ background: '#FFF8F2', color: '#B0A090' }}
//           aria-label="Закрыть"
//         >
//           <i className="fa-solid fa-xmark text-[14px]" aria-hidden="true" />
//         </button>

//         {/* Иконка */}
//         <div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] mx-auto"
//           style={{ background: '#FEE8D0', color: '#F97316' }}
//         >
//           <i className="fa-solid fa-lock" aria-hidden="true" />
//         </div>

//         <div className="text-center">
//           <h3 className="text-[20px] font-extrabold mb-1.5" style={{ color: '#0D1B2A' }}>
//             Нужна авторизация
//           </h3>
//           <p className="text-[13px] leading-[1.6]" style={{ color: '#7A6B5D' }}>
//             Чтобы оставить отзыв, войдите в аккаунт или зарегистрируйтесь — это займёт меньше минуты.
//           </p>
//         </div>

//         <div className="flex flex-col gap-2.5">
//           <button
//             type="button"
//             onClick={onRegister}
//             className="w-full py-3 rounded-xl text-[14px] font-bold text-white transition-colors hover:bg-[#E06413]"
//             style={{ background: '#F97316' }}
//           >
//             <i className="fa-solid fa-rocket mr-2 text-[13px]" aria-hidden="true" />
//             Зарегистрироваться
//           </button>
//           <button
//             type="button"
//             onClick={onLogin}
//             className="w-full py-3 rounded-xl text-[14px] font-semibold transition-colors"
//             style={{ background: '#FFF8F2', color: '#7C4217', border: '1px solid #FCD4AD' }}
//             onMouseOver={e => e.currentTarget.style.background = '#FEE8D0'}
//             onMouseOut={e => e.currentTarget.style.background = '#FFF8F2'}
//           >
//             <i className="fa-solid fa-arrow-right-to-bracket mr-2 text-[13px]" aria-hidden="true" />
//             Войти в аккаунт
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// function AddReviewForm({ onSubmit }) {
//   const [name,    setName]    = useState('')
//   const [role,    setRole]    = useState('')
//   const [company, setCompany] = useState('')
//   const [tag,     setTag]     = useState('')
//   const [text,    setText]    = useState('')
//   const [stars,   setStars]   = useState(5)
//   const [success, setSuccess] = useState(false)
//   const [errors,  setErrors]  = useState({})

//   const validate = () => {
//     const e = {}
//     if (!name.trim())    e.name    = 'Введите имя'
//     if (!role.trim())    e.role    = 'Введите должность'
//     if (!company.trim()) e.company = 'Введите компанию'
//     if (!text.trim() || text.trim().length < 20) e.text = 'Минимум 20 символов'
//     return e
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const errs = validate()
//     if (Object.keys(errs).length) { setErrors(errs); return }

//     onSubmit({
//       id:       Date.now(),
//       name:     name.trim(),
//       role:     role.trim(),
//       company:  company.trim(),
//       initials: getInitials(name),
//       text:     text.trim(),
//       stars,
//       tag:      tag.trim() || 'Мой отзыв',
//     })

//     setName(''); setRole(''); setCompany(''); setTag(''); setText(''); setStars(5)
//     setErrors({})
//     setSuccess(true)
//     setTimeout(() => setSuccess(false), 3500)
//   }

//   const inputStyle = (hasErr) => ({
//     width: '100%',
//     padding: '10px 14px',
//     borderRadius: 10,
//     border: `1.5px solid ${hasErr ? '#F97316' : '#EFE0D0'}`,
//     background: '#FFF8F2',
//     fontSize: 13,
//     color: '#0D1B2A',
//     outline: 'none',
//   })

//   return (
//     <div
//       className="rounded-[20px] p-6 md:p-8 border"
//       style={{ background: '#FFF8F2', borderColor: '#EFE0D0' }}
//     >
//       <div className="flex items-center gap-3 mb-6">
//         <div
//           className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px]"
//           style={{ background: '#FEE8D0', color: '#F97316' }}
//         >
//           <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
//         </div>
//         <div>
//           <h3 className="text-[16px] font-bold" style={{ color: '#0D1B2A' }}>Оставить отзыв</h3>
//           <p className="text-[12px]" style={{ color: '#B0A090' }}>Поделитесь своим опытом с другими</p>
//         </div>
//       </div>

//       {success && (
//         <div
//           className="flex items-center gap-2.5 rounded-xl px-4 py-3 mb-5 text-[13px] font-semibold"
//           style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534' }}
//         >
//           <i className="fa-solid fa-circle-check text-[15px]" aria-hidden="true" />
//           Отзыв успешно добавлен — спасибо!
//         </div>
//       )}

//       <form onSubmit={handleSubmit} noValidate>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
//           <div>
//             <input
//               type="text"
//               placeholder="Ваше имя *"
//               value={name}
//               onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
//               style={inputStyle(errors.name)}
//             />
//             {errors.name && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.name}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Должность *"
//               value={role}
//               onChange={e => { setRole(e.target.value); setErrors(p => ({ ...p, role: '' })) }}
//               style={inputStyle(errors.role)}
//             />
//             {errors.role && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.role}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Компания *"
//               value={company}
//               onChange={e => { setCompany(e.target.value); setErrors(p => ({ ...p, company: '' })) }}
//               style={inputStyle(errors.company)}
//             />
//             {errors.company && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.company}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Тег (напр. Нашёл за 3 дня)"
//               value={tag}
//               onChange={e => setTag(e.target.value)}
//               style={inputStyle(false)}
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <textarea
//             placeholder="Ваш отзыв (минимум 20 символов) *"
//             value={text}
//             onChange={e => { setText(e.target.value); setErrors(p => ({ ...p, text: '' })) }}
//             rows={4}
//             style={{ ...inputStyle(errors.text), resize: 'vertical', fontFamily: 'inherit' }}
//           />
//           {errors.text && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.text}</p>}
//         </div>

//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <div className="flex items-center gap-3">
//             <span className="text-[12px] font-semibold" style={{ color: '#7A6B5D' }}>Оценка:</span>
//             <Stars count={stars} interactive onSet={setStars} />
//           </div>
//           <button
//             type="submit"
//             className="inline-flex items-center gap-2 text-white text-[13px] font-bold px-6 py-2.5 rounded-xl transition-colors hover:bg-[#E06413]"
//             style={{ background: '#F97316' }}
//           >
//             <i className="fa-solid fa-paper-plane text-[12px]" aria-hidden="true" />
//             Отправить отзыв
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// function Testimonials({ isLoggedIn = IS_LOGGED_IN, onLogin, onRegister }) {
//   const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS)
//   const [showModal,    setShowModal]    = useState(false)

//   const handleFormClick = () => {
//     if (!isLoggedIn) { setShowModal(true) }
//   }

//   const handleSubmit = (review) => {
//     setTestimonials(prev => [review, ...prev])
//   }

//   return (
//     <>
//       {showModal && (
//         <AuthModal
//           onClose={() => setShowModal(false)}
//           onLogin={() => { setShowModal(false); onLogin?.() }}
//           onRegister={() => { setShowModal(false); onRegister?.() }}
//         />
//       )}

//       <section
//         className="py-16 px-6 border-b"
//         style={{ backgroundColor: '#FDF6EE', borderColor: '#EFE0D0' }}
//         aria-labelledby="testimonials-title"
//       >
//         <div className="max-w-5xl mx-auto">

//           {/* Шапка */}
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-3 mb-4">
//               <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDCFA0' }} aria-hidden="true" />
//               <span className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: '#C2570A' }}>
//                 Отзывы
//               </span>
//               <span className="w-5 h-[1.5px] rounded" style={{ background: '#FDCFA0' }} aria-hidden="true" />
//             </div>

//             <h2
//               id="testimonials-title"
//               className="text-[32px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4"
//               style={{ color: '#0D1B2A' }}
//             >
//               Они уже нашли работу
//               <span className="block" style={{ color: '#F97316' }}>через Hamkor.tj</span>
//             </h2>

//             <p className="text-[15px] max-w-sm mx-auto leading-[1.7]" style={{ color: '#7A6B5D' }}>
//               8 500+ специалистов получили оффер за последний год
//             </p>
//           </div>

//           {/* Карточки */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//             {testimonials.map((item, i) => (
//               <TestimonialCard key={item.id} item={item} index={i} />
//             ))}
//           </div>

//           {/* Статистика */}
//           <div className="grid grid-cols-3 gap-3 mb-8">
//             {[
//               { num: '4.9',    label: 'Средняя оценка',      icon: 'fa-solid fa-star' },
//               { num: '8 500+', label: 'Трудоустроено',        icon: 'fa-solid fa-user-check' },
//               { num: '3–5 дн', label: 'Среднее время оффера', icon: 'fa-solid fa-clock' },
//             ].map((stat) => (
//               <div
//                 key={stat.label}
//                 className="bg-white border border-[#EFE0D0] rounded-2xl px-4 py-3.5 flex items-center gap-3"
//               >
//                 <div
//                   className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
//                   style={{ background: '#FEE8D0' }}
//                 >
//                   <i className={`${stat.icon} text-[14px]`} style={{ color: '#F97316' }} aria-hidden="true" />
//                 </div>
//                 <div>
//                   <p className="text-[15px] font-extrabold tracking-tight leading-none" style={{ color: '#0D1B2A' }}>
//                     {stat.num}
//                   </p>
//                   <p className="text-[11px] mt-0.5 leading-tight" style={{ color: '#B0A090' }}>
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Форма или заглушка */}
//           {isLoggedIn ? (
//             <AddReviewForm onSubmit={handleSubmit} />
//           ) : (
//             <div
//               className="rounded-[20px] p-6 md:p-8 border flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer group"
//               style={{ background: '#FFF8F2', borderColor: '#EFE0D0' }}
//               onClick={handleFormClick}
//             >
//               <div className="flex items-center gap-4">
//                 <div
//                   className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] shrink-0"
//                   style={{ background: '#FEE8D0', color: '#F97316' }}
//                 >
//                   <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
//                 </div>
//                 <div>
//                   <p className="text-[16px] font-bold" style={{ color: '#0D1B2A' }}>
//                     Нашли работу через Hamkor.tj?
//                   </p>
//                   <p className="text-[13px]" style={{ color: '#B0A090' }}>
//                     Войдите и поделитесь своей историей — это поможет другим
//                   </p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleFormClick}
//                 className="inline-flex items-center gap-2 text-white text-[13px] font-bold px-6 py-3 rounded-xl transition-colors hover:bg-[#E06413] shrink-0"
//                 style={{ background: '#F97316' }}
//               >
//                 <i className="fa-solid fa-lock text-[12px]" aria-hidden="true" />
//                 Войти и оставить отзыв
//               </button>
//             </div>
//           )}

//         </div>
//       </section>
//     </>
//   )
// }

// export default Testimonials





import { useRef, useEffect, useState } from 'react'

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: 'Алишер Назаров',
    role: 'Frontend Developer',
    company: 'IT Service',
    initials: 'АН',
    text: 'Нашёл работу за 4 дня. Разместил резюме вечером, утром уже было 3 отклика от компаний. Удобный фильтр по стеку — сразу видно где нужен React и TypeScript.',
    stars: 5,
    tag: 'Нашёл за 4 дня',
  },
  {
    id: 2,
    name: 'Камола Рахимова',
    role: 'UI/UX Designer',
    company: 'Payme',
    initials: 'КР',
    text: 'Искала работу с удалёнкой в Таджикистане — думала это нереально. Через Hamkor.tj нашла позицию в Payme с гибридным графиком. Теперь советую всем дизайнерам.',
    stars: 5,
    tag: 'Удалённая работа',
  },
  {
    id: 3,
    name: 'Достон Мирзаев',
    role: 'Backend Engineer',
    company: 'Эсхата Банк',
    initials: 'ДМ',
    text: 'Зарплата выросла в 2 раза после смены работы через этот сайт. Понравилось что вакансии реальные — без воды, сразу видна вилка зарплаты и стек технологий.',
    stars: 5,
    tag: 'Зарплата ×2',
  },
]

// Симуляция авторизации — замени на свой auth контекст
const IS_LOGGED_IN = false

function getInitials(name) {
  return name
    .trim()
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

function Stars({ count, interactive = false, onSet }) {
  const [hovered, setHovered] = useState(null)
  const display = interactive ? (hovered ?? count) : count

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-star text-[14px] sm:text-[15px] ${i < display ? 'fa-solid' : 'fa-regular'} transition-colors`}
          style={{ color: i < display ? '#F97316' : '#DCE3EC', cursor: interactive ? 'pointer' : 'default' }}
          aria-hidden="true"
          onMouseEnter={() => interactive && setHovered(i + 1)}
          onMouseLeave={() => interactive && setHovered(null)}
          onClick={() => interactive && onSet?.(i + 1)}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ item, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <article
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
      className="bg-white border rounded-[20px] p-5 sm:p-6 flex flex-col gap-3.5 sm:gap-4 transition-all duration-200 hover:-translate-y-1"
      onMouseOver={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.background = '#FAFBFE' }}
      onMouseOut={e => { e.currentTarget.style.borderColor = '#E1E7EF'; e.currentTarget.style.background = '#fff' }}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[12px] sm:text-[13px] font-extrabold shrink-0"
            style={{ background: '#0B1F3A', color: '#fff' }}
          >
            {item.initials}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] sm:text-[14px] font-bold leading-tight flex items-center gap-1.5 truncate" style={{ color: '#0B1F3A' }}>
              <span className="truncate">{item.name}</span>
              <i className="fa-solid fa-circle-check text-[11px] shrink-0" style={{ color: '#3B82F6' }} title="Верифицированный отзыв" aria-hidden="true" />
            </p>
            <p className="text-[11px] sm:text-[12px] mt-0.5 truncate" style={{ color: '#94A3B8' }}>
              {item.role} · {item.company}
            </p>
          </div>
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0"
          style={{ background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE' }}
        >
          {item.tag}
        </span>
      </div>

      <Stars count={item.stars} />

      <blockquote
        className="text-[13px] sm:text-[14px] leading-[1.7] sm:leading-[1.75] relative"
        style={{ color: '#64748B' }}
      >
        <span
          className="text-[36px] sm:text-[40px] font-serif leading-none absolute -top-2 -left-1 select-none"
          style={{ color: '#E1E7EF' }}
          aria-hidden="true"
        >"</span>
        <p className="relative z-10 pl-4">{item.text}</p>
      </blockquote>
    </article>
  )
}

function AuthModal({ onClose, onLogin, onRegister }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(11,31,58,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl p-6 sm:p-8 flex flex-col gap-5"
        style={{ background: '#fff', border: '1px solid #E1E7EF', boxShadow: '0 24px 64px -16px rgba(11,31,58,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Закрыть */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ background: '#F5F7FA', color: '#94A3B8' }}
          aria-label="Закрыть"
        >
          <i className="fa-solid fa-xmark text-[14px]" aria-hidden="true" />
        </button>

        {/* Иконка */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] mx-auto"
          style={{ background: '#F5F7FA', color: '#F97316' }}
        >
          <i className="fa-solid fa-lock" aria-hidden="true" />
        </div>

        <div className="text-center">
          <h3 className="text-[18px] sm:text-[20px] font-extrabold mb-1.5" style={{ color: '#0B1F3A' }}>
            Нужна авторизация
          </h3>
          <p className="text-[13px] leading-[1.6]" style={{ color: '#64748B' }}>
            Чтобы оставить отзыв, войдите в аккаунт или зарегистрируйтесь — это займёт меньше минуты.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onRegister}
            className="w-full py-3 rounded-xl text-[14px] font-bold text-white transition-colors"
            style={{ background: '#F97316' }}
            onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
            onMouseOut={e => e.currentTarget.style.background = '#F97316'}
          >
            <i className="fa-solid fa-rocket mr-2 text-[13px]" aria-hidden="true" />
            Зарегистрироваться
          </button>
          <button
            type="button"
            onClick={onLogin}
            className="w-full py-3 rounded-xl text-[14px] font-semibold transition-colors"
            style={{ background: '#F5F7FA', color: '#0B1F3A', border: '1px solid #E1E7EF' }}
            onMouseOver={e => e.currentTarget.style.background = '#EFF6FF'}
            onMouseOut={e => e.currentTarget.style.background = '#F5F7FA'}
          >
            <i className="fa-solid fa-arrow-right-to-bracket mr-2 text-[13px]" aria-hidden="true" />
            Войти в аккаунт
          </button>
        </div>
      </div>
    </div>
  )
}

function AddReviewForm({ onSubmit }) {
  const [name,    setName]    = useState('')
  const [role,    setRole]    = useState('')
  const [company, setCompany] = useState('')
  const [tag,     setTag]     = useState('')
  const [text,    setText]    = useState('')
  const [stars,   setStars]   = useState(5)
  const [success, setSuccess] = useState(false)
  const [errors,  setErrors]  = useState({})

  const validate = () => {
    const e = {}
    if (!name.trim())    e.name    = 'Введите имя'
    if (!role.trim())    e.role    = 'Введите должность'
    if (!company.trim()) e.company = 'Введите компанию'
    if (!text.trim() || text.trim().length < 20) e.text = 'Минимум 20 символов'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    onSubmit({
      id:       Date.now(),
      name:     name.trim(),
      role:     role.trim(),
      company:  company.trim(),
      initials: getInitials(name),
      text:     text.trim(),
      stars,
      tag:      tag.trim() || 'Мой отзыв',
    })

    setName(''); setRole(''); setCompany(''); setTag(''); setText(''); setStars(5)
    setErrors({})
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3500)
  }

  const inputStyle = (hasErr) => ({
    width: '100%',
    padding: '10px 14px',
    borderRadius: 10,
    border: `1.5px solid ${hasErr ? '#F97316' : '#DCE3EC'}`,
    background: '#F5F7FA',
    fontSize: 13,
    color: '#0B1F3A',
    outline: 'none',
  })

  return (
    <div
      className="rounded-[20px] p-5 sm:p-6 md:p-8 border"
      style={{ background: '#FFFFFF', borderColor: '#E1E7EF' }}
    >
      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] shrink-0"
          style={{ background: '#F5F7FA', color: '#F97316' }}
        >
          <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-[15px] sm:text-[16px] font-bold" style={{ color: '#0B1F3A' }}>Оставить отзыв</h3>
          <p className="text-[11px] sm:text-[12px]" style={{ color: '#94A3B8' }}>Поделитесь своим опытом с другими</p>
        </div>
      </div>

      {success && (
        <div
          className="flex items-center gap-2.5 rounded-xl px-4 py-3 mb-5 text-[13px] font-semibold"
          style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#15803D' }}
        >
          <i className="fa-solid fa-circle-check text-[15px]" aria-hidden="true" />
          Отзыв успешно добавлен — спасибо!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <input
              type="text"
              placeholder="Ваше имя *"
              value={name}
              onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
              style={inputStyle(errors.name)}
            />
            {errors.name && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Должность *"
              value={role}
              onChange={e => { setRole(e.target.value); setErrors(p => ({ ...p, role: '' })) }}
              style={inputStyle(errors.role)}
            />
            {errors.role && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.role}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Компания *"
              value={company}
              onChange={e => { setCompany(e.target.value); setErrors(p => ({ ...p, company: '' })) }}
              style={inputStyle(errors.company)}
            />
            {errors.company && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.company}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Тег (напр. Нашёл за 3 дня)"
              value={tag}
              onChange={e => setTag(e.target.value)}
              style={inputStyle(false)}
            />
          </div>
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Ваш отзыв (минимум 20 символов) *"
            value={text}
            onChange={e => { setText(e.target.value); setErrors(p => ({ ...p, text: '' })) }}
            rows={4}
            style={{ ...inputStyle(errors.text), resize: 'vertical', fontFamily: 'inherit' }}
          />
          {errors.text && <p className="text-[11px] mt-1 ml-1" style={{ color: '#F97316' }}>{errors.text}</p>}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold" style={{ color: '#64748B' }}>Оценка:</span>
            <Stars count={stars} interactive onSet={setStars} />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-[13px] font-bold px-6 py-2.5 rounded-xl transition-colors"
            style={{ background: '#F97316' }}
            onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
            onMouseOut={e => e.currentTarget.style.background = '#F97316'}
          >
            <i className="fa-solid fa-paper-plane text-[12px]" aria-hidden="true" />
            Отправить отзыв
          </button>
        </div>
      </form>
    </div>
  )
}

function Testimonials({ isLoggedIn = IS_LOGGED_IN, onLogin, onRegister }) {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS)
  const [showModal,    setShowModal]    = useState(false)

  const handleFormClick = () => {
    if (!isLoggedIn) { setShowModal(true) }
  }

  const handleSubmit = (review) => {
    setTestimonials(prev => [review, ...prev])
  }

  return (
    <>
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onLogin={() => { setShowModal(false); onLogin?.() }}
          onRegister={() => { setShowModal(false); onRegister?.() }}
        />
      )}

      <section
        className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 border-b"
        style={{ backgroundColor: '#F5F7FA', borderColor: '#DCE3EC' }}
        aria-labelledby="testimonials-title"
      >
        <style>{`
          .Hamkor-tabular { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace; }
        `}</style>
        <div className="max-w-5xl mx-auto">

          {/* Шапка */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-5 h-[1.5px] rounded" style={{ background: '#BFDBFE' }} aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] sm:tracking-[2.5px]" style={{ color: '#1D4ED8' }}>
                Отзывы
              </span>
              <span className="w-5 h-[1.5px] rounded" style={{ background: '#BFDBFE' }} aria-hidden="true" />
            </div>

            <h2
              id="testimonials-title"
              className="text-[26px] sm:text-[30px] md:text-[32px] font-extrabold tracking-[-0.8px] sm:tracking-[-1.2px] leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4 px-2"
              style={{ color: '#0B1F3A' }}
            >
              Они уже нашли работу
              <span className="block" style={{ color: '#F97316' }}>через Hamkor.tj</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] max-w-70 sm:max-w-sm mx-auto leading-[1.7]" style={{ color: '#64748B' }}>
              <span className="Hamkor-tabular font-semibold" style={{ color: '#0B1F3A' }}>8 500+</span> специалистов получили оффер за последний год
            </p>
          </div>

          {/* Карточки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {testimonials.map((item, i) => (
              <TestimonialCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
            {[
              { num: '4.9',    label: 'Средняя оценка',      icon: 'fa-solid fa-star' },
              { num: '8 500+', label: 'Трудоустроено',        icon: 'fa-solid fa-user-check' },
              { num: '3–5 дн', label: 'Среднее время оффера', icon: 'fa-solid fa-clock' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border rounded-2xl px-2.5 sm:px-4 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left"
                style={{ borderColor: '#E1E7EF' }}
              >
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ background: '#F5F7FA' }}
                >
                  <i className={`${stat.icon} text-[12px] sm:text-[14px]`} style={{ color: '#F97316' }} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="Hamkor-tabular text-[13px] sm:text-[15px] font-extrabold tracking-tight leading-none" style={{ color: '#0B1F3A' }}>
                    {stat.num}
                  </p>
                  <p className="text-[9px] sm:text-[11px] mt-0.5 leading-tight" style={{ color: '#94A3B8' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Форма или заглушка */}
          {isLoggedIn ? (
            <AddReviewForm onSubmit={handleSubmit} />
          ) : (
            <div
              className="rounded-[20px] p-5 sm:p-6 md:p-8 border flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 cursor-pointer group text-center sm:text-left"
              style={{ background: '#FFFFFF', borderColor: '#E1E7EF' }}
              onClick={handleFormClick}
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] shrink-0"
                  style={{ background: '#F5F7FA', color: '#F97316' }}
                >
                  <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[15px] sm:text-[16px] font-bold" style={{ color: '#0B1F3A' }}>
                    Нашли работу через Hamkor.tj?
                  </p>
                  <p className="text-[12px] sm:text-[13px]" style={{ color: '#94A3B8' }}>
                    Войдите и поделитесь своей историей — это поможет другим
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleFormClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-[13px] font-bold px-6 py-3 rounded-xl transition-colors shrink-0"
                style={{ background: '#F97316' }}
                onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
                onMouseOut={e => e.currentTarget.style.background = '#F97316'}
              >
                <i className="fa-solid fa-lock text-[12px]" aria-hidden="true" />
                Войти и оставить отзыв
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  )
}

export default Testimonials