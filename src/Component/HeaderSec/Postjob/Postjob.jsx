import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SAMPLE_JOBS } from "../JobSection/JobSection"
const CATEGORIES = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

const CITIES = [
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'remote',      label: 'Удалённо' },
  { value: 'istaravshan', label: 'Истаравшан' },
]

const EMPLOYMENT_TYPES = [
  { value: 'full-time',  label: 'Полная занятость' },
  { value: 'part-time',  label: 'Частичная занятость' },
  { value: 'remote',     label: 'Удалённая работа' },
  { value: 'internship', label: 'Стажировка' },
]

function PostJob() {
  const navigate = useNavigate()

  // Состояния для полей формы
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [city, setCity] = useState('dushanbe')
  const [category, setCategory] = useState('Frontend')
  const [employmentType, setEmploymentType] = useState('full-time')
  const [salaryMin, setSalaryMin] = useState('')
  const [salaryMax, setSalaryMax] = useState('')
  const [description, setDescription] = useState('')
  
  // Требования и обязанности вводим построчно (с новой строки)
  const [requirementsText, setRequirementsText] = useState('')
  const [responsibilitiesText, setResponsibilitiesText] = useState('')
  
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')

  const handlePublish = useCallback((e) => {
    e.preventDefault()

    // Простая валидация обязательных полей
    if (!title.trim() || !company.trim() || !description.trim() || !contactEmail.trim()) {
      alert('Пожалуйста, заполните основные поля: Название вакансии, Компания, Описание и Эл. почта.')
      return
    }

    // Собираем объект новой вакансии
    const newVacancy = {
      id: 'job_' + Date.now(), // Уникальный ID на основе времени
      title: title.trim(),
      company: company.trim(),
      city,
      cityLabel: CITIES.find(c => c.value === city)?.label || 'Душанбе',
      category,
      employmentType,
      salaryMin: Number(salaryMin) || 0,
      salaryMax: Number(salaryMax) || 0,
      currency: 'TJS',
      postedAt: 'Сегодня', // Свежеопубликованная вакансия
      description: description.trim(),
      // Преобразуем построчный ввод в массивы
      requirements: requirementsText
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0),
      responsibilities: responsibilitiesText
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0),
      contactName: contactName.trim(),
      contactEmail: contactEmail.trim(),
      contactPhone: contactPhone.trim(),
    }

    try {
      // Загружаем текущий список из localStorage или берем демо-список
      const savedVacancies = localStorage.getItem('hamkor_jobs')
      const currentJobs = savedVacancies ? JSON.parse(savedVacancies) : SAMPLE_JOBS
      
      // Добавляем новую вакансию в начало списка
      const updatedJobs = [newVacancy, ...currentJobs]
      localStorage.setItem('hamkor_jobs', JSON.stringify(updatedJobs))

      alert('Вакансия успешно создана и опубликована!')
      navigate('/jobs') // Перенаправляем пользователя на страницу вакансий
    } catch (error) {
      console.error('Ошибка сохранения вакансии:', error)
      alert('Произошла ошибка при публикации вакансии.')
    }
  }, [
    title, company, city, category, employmentType, salaryMin, salaryMax, 
    description, requirementsText, responsibilitiesText, contactName, 
    contactEmail, contactPhone, navigate
  ])

  return (
    <section className="w-full px-4 py-12 md:px-12 md:py-16 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto">
        
        {/* Заголовок формы */}
        <div className="mb-8">
          <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-blue-700 block mb-2">
            Работодателям
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-[#0B1F3A] tracking-tight">
            Публикация вакансии
          </h1>
          <p className="text-[14px] text-slate-500 mt-1">
            Заполните форму, чтобы разместить вакансию на рынке IT-специалистов Таджикистана.
          </p>
        </div>

        {/* Форма */}
        <form 
          onSubmit={handlePublish}
          className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-6"
          style={{ 
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(11, 31, 58, 0.02)' 
          }}
        >
          {/* Основные сведения */}
          <div>
            <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-400 mb-4" style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '6px' }}>
              1. Основное
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Название должности *</label>
                <input
                  type="text"
                  required
                  placeholder="Например: Frontend-разработчик (React)"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Название компании *</label>
                <input
                  type="text"
                  required
                  placeholder="Например: Alif"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Стек / Направление</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 cursor-pointer font-medium"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Город</label>
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 cursor-pointer font-medium"
                >
                  {CITIES.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Тип занятости</label>
                <select
                  value={employmentType}
                  onChange={e => setEmploymentType(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 cursor-pointer font-medium"
                >
                  {EMPLOYMENT_TYPES.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#0B1F3A]">Мин. зарплата (TJS)</label>
                  <input
                    type="number"
                    placeholder="От"
                    value={salaryMin}
                    onChange={e => setSalaryMin(e.target.value)}
                    className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#0B1F3A]">Макс. зарплата (TJS)</label>
                  <input
                    type="number"
                    placeholder="До"
                    value={salaryMax}
                    onChange={e => setSalaryMax(e.target.value)}
                    className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Описание вакансии */}
          <div>
            <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-400 mb-4" style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '6px' }}>
              2. Детали вакансии
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Описание вакансии *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Расскажите о проекте, команде и задачах специалиста..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors resize-y"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Требования (каждое требование с новой строки)</label>
                <textarea
                  rows={4}
                  placeholder="Опыт работы с React от 2 лет&#10;Знание ES6+ и TypeScript&#10;Опыт адаптивной верстки"
                  value={requirementsText}
                  onChange={e => setRequirementsText(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors resize-y font-medium leading-relaxed"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Обязанности (каждая обязанность с новой строки)</label>
                <textarea
                  rows={4}
                  placeholder="Разработка и доработка компонентов системы&#10;Взаимодействие с UI/UX дизайнером&#10;Участие в код-ревью"
                  value={responsibilitiesText}
                  onChange={e => setResponsibilitiesText(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors resize-y font-medium leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-slate-400 mb-4" style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '6px' }}>
              3. Контакты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Контактное лицо</label>
                <input
                  type="text"
                  placeholder="Имя Фамилия HR"
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Электронная почта *</label>
                <input
                  type="email"
                  required
                  placeholder="hr@company.tj"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0B1F3A]">Телефон</label>
                <input
                  type="tel"
                  placeholder="+992 XX XXX XX XX"
                  value={contactPhone}
                  onChange={e => setContactPhone(e.target.value)}
                  className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#F8FAFC] outline-none border border-slate-200 focus:border-blue-300 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-all hover:bg-[#E0670B] mt-4 shadow-sm active:scale-[0.98]"
            style={{ background: '#F97316' }}
          >
            Опубликовать вакансию <i className="fa-solid fa-paper-plane text-[11px]" aria-hidden="true" />
          </button>
        </form>

      </div>
    </section>
  )
}

export default PostJob