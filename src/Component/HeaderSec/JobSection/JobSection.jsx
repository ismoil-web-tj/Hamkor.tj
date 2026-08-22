import { useState, useMemo, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'QA', 'UI/UX', 'Data/ML']

const CITIES = [
  { value: '',            label: 'Все города' },
  { value: 'khujand',     label: 'Худжанд' },
  { value: 'dushanbe',    label: 'Душанбе' },
  { value: 'istaravshan', label: 'Истаравшан' },
  { value: 'remote',      label: 'Удалённо' },
]

const EMPLOYMENT_TYPES = [
  { value: '',           label: 'Любой' },
  { value: 'full-time',  label: 'Полная занятость' },
  { value: 'part-time',  label: 'Частичная занятость' },
  { value: 'remote',     label: 'Удалённая работа' },
  { value: 'internship', label: 'Стажировка' },
]

const SALARY_MIN = 0
const SALARY_MAX = 25000

export const SAMPLE_JOBS = [
  {
    id: 'j1',
    title: 'Frontend-разработчик (React)',
    company: 'IT Service',
    city: 'khujand',
    cityLabel: 'Худжанд',
    category: 'Frontend',
    employmentType: 'full-time',
    salaryMin: 8000,
    salaryMax: 14000,
    currency: 'TJS',
    postedAt: '2 дня назад',
    description: 'Команда IT Service разрабатывает внутренние финтех-продукты для банков-партнёров. Ищем разработчика, который возьмёт на себя клиентскую часть личного кабинета и будет работать в связке с дизайнером и бэкенд-командой.',
    requirements: [
      'Опыт работы с React от 2 лет',
      'Уверенное знание JavaScript (ES6+) и TypeScript',
      'Опыт работы с REST API',
      'Знание Git и опыт командной разработки',
    ],
    responsibilities: [
      'Разработка и поддержка пользовательских интерфейсов',
      'Вёрстка по дизайн-макетам в Figma',
      'Оптимизация производительности приложений',
      'Код-ревью и участие в технических обсуждениях',
    ],
    contactName: 'Фарход Назаров',
    contactEmail: 'hr@itservice.tj',
    contactPhone: '+992 92 777 12 34',
  },
  {
    id: 'j2',
    title: 'Backend-разработчик (Python)',
    company: 'Эсхата',
    city: 'khujand',
    cityLabel: 'Худжанд',
    category: 'Backend',
    employmentType: 'full-time',
    salaryMin: 10000,
    salaryMax: 16000,
    currency: 'TJS',
    postedAt: '5 дней назад',
    description: 'Банк Эсхата расширяет команду цифровых продуктов. Нужен бэкенд-разработчик для развития платформы мобильного банкинга и интеграций с платёжными системами.',
    requirements: [
      'Python от 3 лет, опыт с Django или FastAPI',
      'Понимание принципов проектирования баз данных',
      'Опыт работы с PostgreSQL',
      'Базовые знания Docker',
    ],
    responsibilities: [
      'Проектирование и разработка серверной логики',
      'Интеграция с внешними платёжными API',
      'Обеспечение безопасности и производительности сервисов',
      'Написание автотестов',
    ],
    contactName: 'Шахноза Каримова',
    contactEmail: 'career@eskhata.tj',
    contactPhone: '+992 92 555 88 90',
  },
  {
    id: 'j3',
    title: 'QA-инженер',
    company: 'DC',
    city: 'remote',
    cityLabel: 'Удалённо',
    category: 'QA',
    employmentType: 'remote',
    salaryMin: 6000,
    salaryMax: 9000,
    currency: 'TJS',
    postedAt: 'Сегодня',
    description: 'DC ищет внимательного QA-инженера для тестирования веб- и мобильных продуктов команды. Полностью удалённый формат работы, гибкий график.',
    requirements: [
      'Опыт ручного тестирования от 1 года',
      'Знание основ тест-дизайна',
      'Опыт работы с Postman и DevTools',
      'Будет плюсом: опыт автотестов на Selenium',
    ],
    responsibilities: [
      'Тестирование новых функций перед релизом',
      'Составление тест-кейсов и баг-репортов',
      'Регрессионное тестирование',
      'Взаимодействие с разработчиками по найденным дефектам',
    ],
    contactName: 'Алишер Расулов',
    contactEmail: 'jobs@dc.tj',
    contactPhone: '+992 93 444 21 09',
  },
  {
    id: 'j4',
    title: 'Mobile-разработчик (Flutter)',
    company: 'Payme',
    city: 'dushanbe',
    cityLabel: 'Душанбе',
    category: 'Mobile',
    employmentType: 'full-time',
    salaryMin: 12000,
    salaryMax: 18000,
    currency: 'TJS',
    postedAt: '1 неделю назад',
    description: 'Payme развивает приложение для миллионов пользователей. Ищем мобильного разработчика для команды, отвечающей за основное приложение на Flutter.',
    requirements: [
      'Опыт разработки на Flutter от 2 лет',
      'Понимание архитектурных паттернов (BLoC, Provider)',
      'Опыт публикации приложений в App Store / Google Play',
      'Умение работать с push-уведомлениями и аналитикой',
    ],
    responsibilities: [
      'Разработка новых экранов и функций приложения',
      'Поддержка стабильности и производительности',
      'Совместная работа с дизайнерами и продуктовой командой',
      'Участие в планировании релизов',
    ],
    contactName: 'Мадина Юсупова',
    contactEmail: 'hr@payme.tj',
    contactPhone: '+992 93 222 67 45',
  },
  {
    id: 'j5',
    title: 'DevOps-инженер',
    company: 'Click',
    city: 'remote',
    cityLabel: 'Удалённо',
    category: 'DevOps',
    employmentType: 'remote',
    salaryMin: 14000,
    salaryMax: 20000,
    currency: 'TJS',
    postedAt: '3 дня назад',
    description: 'Click ищет DevOps-инженера для автоматизации инфраструктуры и поддержки CI/CD-процессов растущей команды разработки.',
    requirements: [
      'Опыт работы с Docker и Kubernetes',
      'Знание CI/CD (GitLab CI, GitHub Actions)',
      'Опыт администрирования Linux-серверов',
      'Понимание основ сетевой безопасности',
    ],
    responsibilities: [
      'Настройка и поддержка CI/CD-пайплайнов',
      'Мониторинг и обеспечение отказоустойчивости систем',
      'Автоматизация деплоя и инфраструктуры (IaC)',
      'Участие в инцидент-менеджменте',
    ],
    contactName: 'Бахтиёр Олимов',
    contactEmail: 'team@click.tj',
    contactPhone: '+992 90 111 33 22',
  },
  {
    id: 'j6',
    title: 'UI/UX-дизайнер',
    company: 'Alif',
    city: 'dushanbe',
    cityLabel: 'Душанбе',
    category: 'UI/UX',
    employmentType: 'part-time',
    salaryMin: 5000,
    salaryMax: 8000,
    currency: 'TJS',
    postedAt: '4 дня назад',
    description: 'Alif ищет дизайнера для проработки интерфейсов финансовых продуктов — от исследования пользователей до готовых макетов в Figma.',
    requirements: [
      'Портфолио с реализованными проектами',
      'Уверенное владение Figma',
      'Понимание принципов UX-исследований',
      'Опыт создания дизайн-систем приветствуется',
    ],
    responsibilities: [
      'Проектирование пользовательских интерфейсов',
      'Создание и поддержка дизайн-системы',
      'Проведение юзабилити-тестирований',
      'Подготовка макетов для разработки',
    ],
    contactName: 'Зарина Холова',
    contactEmail: 'design@alif.tj',
    contactPhone: '+992 98 666 09 78',
  },
]

function formatSalary(min, max, currency) {
  const fmt = n => n.toLocaleString('ru-RU')
  if (min && max) return `${fmt(min)} – ${fmt(max)} ${currency}`
  if (min) return `от ${fmt(min)} ${currency}`
  if (max) return `до ${fmt(max)} ${currency}`
  return 'По договорённости'
}

function getCompanyInitials(company) {
  if (!company) return 'IT'
  const words = company.trim().split(/\s+/)
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return company.substring(0, 2).toUpperCase()
}

function FilterSidebar({ filters, onChange, onReset, resultCount }) {
  return (
    <aside
      className="w-full lg:w-70 shrink-0 rounded-2xl p-6 h-fit lg:sticky lg:top-6 bg-white"
      style={{ 
        border: '1px solid #E2E8F0', 
        boxShadow: '0 4px 20px rgba(11, 31, 58, 0.025)' 
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[14px] font-extrabold uppercase tracking-wider" style={{ color: '#0B1F3A' }}>
          Фильтры
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="text-[12px] font-bold transition-colors hover:underline"
          style={{ color: '#1D4ED8' }}
        >
          Сбросить все
        </button>
      </div>

      <div className="mb-6 pb-5" style={{ borderBottom: '1px solid #F1F5F9' }}>
        <label className="flex items-center gap-2.5 text-[13px] font-bold cursor-pointer select-none" style={{ color: '#0B1F3A' }}>
          <input
            type="checkbox"
            checked={filters.onlyFavorites}
            onChange={e => onChange({ ...filters, onlyFavorites: e.target.checked })}
            className="w-4 h-4 cursor-pointer"
            style={{ accentColor: '#F97316' }}
          />
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-heart text-[12px]" style={{ color: filters.onlyFavorites ? '#EF4444' : '#94A3B8' }} />
            Только избранные
          </span>
        </label>
      </div>

      <div className="mb-6">
        <label htmlFor="filter-search" className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Поиск
        </label>
        <div className="flex items-center gap-2 rounded-xl px-3 bg-[#F8FAFC]" style={{ border: '1px solid #E2E8F0' }}>
          <svg className="w-4 h-4 shrink-0" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            id="filter-search"
            type="search"
            value={filters.search}
            onChange={e => onChange({ ...filters, search: e.target.value })}
            placeholder="Должность или компания"
            autoComplete="off"
            className="w-full py-2.5 text-[13px] bg-transparent outline-none"
            style={{ color: '#0B1F3A' }}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="filter-city" className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Город
        </label>
        <select
          id="filter-city"
          value={filters.city}
          onChange={e => onChange({ ...filters, city: e.target.value })}
          className="w-full rounded-xl px-3 py-2.5 text-[13px] bg-[#F8FAFC] outline-none cursor-pointer font-medium"
          style={{ border: '1px solid #E2E8F0', color: '#0B1F3A' }}
        >
          {CITIES.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Категория
        </span>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map(cat => {
            const active = filters.category === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange({ ...filters, category: active ? '' : cat })}
                aria-pressed={active}
                className="text-[12px] font-semibold px-3 py-2 rounded-lg transition-all"
                style={active
                  ? { background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }
                  : { background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B' }
                }
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mb-6">
        <span className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Зарплата от
          <span className="font-extrabold" style={{ color: '#1D4ED8' }}>{filters.minSalary.toLocaleString('ru-RU')} TJS</span>
        </span>
        <input
          type="range"
          min={SALARY_MIN}
          max={SALARY_MAX}
          step={500}
          value={filters.minSalary}
          onChange={e => onChange({ ...filters, minSalary: Number(e.target.value) })}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          style={{ accentColor: '#F97316' }}
        />
      </div>

      <div className="mb-2">
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
          Тип занятости
        </span>
        <div className="flex flex-col gap-2.5">
          {EMPLOYMENT_TYPES.map(({ value, label }) => (
            <label key={value || 'any'} className="flex items-center gap-2.5 text-[13px] font-medium cursor-pointer select-none" style={{ color: '#0B1F3A' }}>
              <input
                type="radio"
                name="employmentType"
                checked={filters.employmentType === value}
                onChange={() => onChange({ ...filters, employmentType: value })}
                className="w-4 h-4"
                style={{ accentColor: '#F97316' }}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-5 text-[12px] font-bold" style={{ borderTop: '1px solid #F1F5F9', color: '#94A3B8' }}>
        Найдено: <span style={{ color: '#0B1F3A' }}>{resultCount}</span>
      </div>
    </aside>
  )
}

function JobCard({ job, onOpen, isFavorite, onToggleFavorite }) {
  const initials = getCompanyInitials(job.company)

  return (
    <div
      onClick={() => onOpen(job)}
      className="group text-left flex flex-col gap-4 rounded-2xl p-5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full cursor-pointer relative"
      style={{ 
        border: '1px solid #E2E8F0', 
        boxShadow: '0 4px 12px rgba(11, 31, 58, 0.015)' 
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-[12px] shrink-0 text-white select-none transition-transform duration-300 group-hover:scale-105" 
            style={{ backgroundColor: '#0B1F3A' }}
          >
            {initials}
          </div>
          
          <div className="min-w-0">
            <h3 className="text-[15px] font-extrabold leading-snug truncate group-hover:text-blue-600 transition-colors" style={{ color: '#0B1F3A' }}>
              {job.title}
            </h3>
            <p className="text-[13px] font-semibold mt-0.5" style={{ color: '#64748B' }}>
              {job.company}
            </p>
          </div>
        </div>
        
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(job.id)
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors shrink-0"
          style={{ color: isFavorite ? '#EF4444' : '#94A3B8' }}
          aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        >
          <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart text-[15px]`} aria-hidden="true" />
        </button>
      </div>

      <p className="text-[13px] leading-[1.55] line-clamp-2" style={{ color: '#64748B' }}>
        {job.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-1">
        {job.requirements.slice(0, 3).map((req, i) => {
          let tagText = req
            .replace(/Опыт работы с\s+/i, '')
            .replace(/Уверенное знание\s+/i, '')
            .split(' от ')[0]
            .split(' (')[0]
            .split(',')[0]
            .trim()
          if (tagText.length > 15) tagText = tagText.substring(0, 15) + '...'
          return (
            <span 
              key={i} 
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
              style={{ background: '#F1F5F9', color: '#475569' }}
            >
              {tagText}
            </span>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
        <span className="flex items-center gap-1.5 text-[12px] font-extrabold" style={{ color: '#0B1F3A' }}>
          <i className="fa-solid fa-sack-dollar text-[11px]" style={{ color: '#F97316' }} aria-hidden="true" />
          {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
        </span>
        <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#94A3B8' }}>
          <i className="fa-solid fa-location-dot text-[11px]" aria-hidden="true" />
          {job.cityLabel}
        </span>
        <span className="text-[11px] font-medium ml-auto" style={{ color: '#94A3B8' }}>
          {job.postedAt}
        </span>
      </div>
    </div>
  )
}

function JobModal({ job, onClose, onApply, isFavorite, onToggleFavorite }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!job) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      style={{ background: 'rgba(11,31,58,0.45)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-modal-title"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl my-0 sm:my-auto"
        style={{ border: '1px solid #E2E8F0' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
          style={{ background: '#F5F7FA', color: '#64748B' }}
        >
          <i className="fa-solid fa-xmark text-[15px]" aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          <span
            className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider mb-4"
            style={{ background: '#EFF6FF', color: '#1D4ED8' }}
          >
            {job.category}
          </span>

          <h2 id="job-modal-title" className="text-2xl font-extrabold leading-tight mb-1.5" style={{ color: '#0B1F3A' }}>
            {job.title}
          </h2>
          <p className="text-[14px] font-semibold mb-5" style={{ color: '#64748B' }}>
            {job.company}
          </p>

          <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl" style={{ background: '#F5F7FA', border: '1px solid #E1E7EF' }}>
            <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#0B1F3A' }}>
              <i className="fa-solid fa-sack-dollar text-[12px]" style={{ color: '#F97316' }} aria-hidden="true" />
              {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-location-dot text-[12px]" aria-hidden="true" />
              {job.cityLabel}
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#64748B' }}>
              <i className="fa-solid fa-clock text-[12px]" aria-hidden="true" />
              {(EMPLOYMENT_TYPES.find(t => t.value === job.employmentType) || {}).label || 'Не указано'}
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Описание
            </h3>
            <p className="text-[14px] leading-[1.65]" style={{ color: '#3D352B' }}>
              {job.description}
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Требования
            </h3>
            <ul className="flex flex-col gap-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] leading-normal" style={{ color: '#3D352B' }}>
                  <i className="fa-solid fa-check text-[11px] mt-1.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Обязанности
            </h3>
            <ul className="flex flex-col gap-2">
              {job.responsibilities.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] leading-normal" style={{ color: '#3D352B' }}>
                  <i className="fa-solid fa-arrow-right text-[11px] mt-1.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
                  {res}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-7">
            <h3 className="text-[12px] font-extrabold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
              Контакты
            </h3>
            <div className="flex flex-col gap-1.5 text-[14px]" style={{ color: '#3D352B' }}>
              {job.contactName && <span className="font-semibold">{job.contactName}</span>}
              {job.contactEmail && (
                <a href={`mailto:${job.contactEmail}`} className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-solid fa-envelope text-[12px]" aria-hidden="true" />
                  {job.contactEmail}
                </a>
              )}
              {job.contactPhone && (
                <a href={`tel:${job.contactPhone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline" style={{ color: '#64748B' }}>
                  <i className="fa-solid fa-phone text-[12px]" aria-hidden="true" />
                  {job.contactPhone}
                </a>
              )}
            </div>
          </section>

          {/* Панель действий в модалке */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onApply && onApply(job)}
              className="flex-1 flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-[14px] font-black transition-colors"
              style={{ background: '#F97316' }}
              onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
              onMouseOut={e => e.currentTarget.style.background = '#F97316'}
            >
              Откликнуться <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
            </button>
            
            <button
              type="button"
              onClick={() => onToggleFavorite(job.id)}
              className="w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-xl transition-colors"
              style={{
                border: '1px solid #E2E8F0',
                background: isFavorite ? '#FEF2F2' : '#FFFFFF',
                color: isFavorite ? '#EF4444' : '#94A3B8'
              }}
              aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
            >
              <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart text-[18px]`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const DEFAULT_FILTERS = {
  search: '',
  city: '',
  category: '',
  minSalary: SALARY_MIN,
  employmentType: '',
  onlyFavorites: false,
}

// 4. JobsSection: Чтение вакансий из localStorage, если они там есть, для интеграции с формой PostJob
function JobsSection({ jobs: propJobs, onApply }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [selectedJob, setSelectedJob] = useState(null)

  // Инициализация вакансий: приоритет у localStorage, резервный вариант — SAMPLE_JOBS
  const [jobs, setJobs] = useState(() => {
    try {
      const savedJobs = localStorage.getItem('hamkor_jobs')
      return savedJobs ? JSON.parse(savedJobs) : SAMPLE_JOBS
    } catch {
      return SAMPLE_JOBS
    }
  })

  // Синхронизация внешних пропсов (если они передаются из роутера)
  useEffect(() => {
    if (propJobs) {
      setJobs(propJobs)
    }
  }, [propJobs])

  // Получение и сохранение списка избранного из localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('hamkor_favorites')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('hamkor_favorites', JSON.stringify(favorites))
  }, [favorites])

  // Переключение избранного
  const handleToggleFavorite = useCallback((jobId) => {
    setFavorites(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    )
  }, [])

  // Фильтрация
  const filteredJobs = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    return jobs.filter(job => {
      if (q && !job.title.toLowerCase().includes(q) && !job.company.toLowerCase().includes(q)) return false
      if (filters.city && job.city !== filters.city) return false
      if (filters.category && job.category !== filters.category) return false
      if (filters.employmentType && job.employmentType !== filters.employmentType) return false
      if (filters.minSalary && (job.salaryMax || job.salaryMin || 0) < filters.minSalary) return false
      if (filters.onlyFavorites && !favorites.includes(job.id)) return false
      return true
    })
  }, [jobs, filters, favorites])

  const handleReset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

  return (
    <section
      id="jobs"
      className="w-full px-4 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: '#F5F7FA' }}
      aria-label="Вакансии"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-4"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8' }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F97316' }} />
              Открытые позиции
            </span>
            <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-1px]" style={{ color: '#0B1F3A' }}>
              Вакансии
            </h2>
          </div>

          <Link
            to="/PostJob"
            className="inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-xl text-[13px] font-black transition-colors shrink-0 w-fit"
            style={{ background: '#F97316' }}
            onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
            onMouseOut={e => e.currentTarget.style.background = '#F97316'}
          >
            Опубликовать вакансию <i className="fa-solid fa-plus text-[11px]" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onReset={handleReset}
            resultCount={filteredJobs.length}
          />

          <div className="flex-1 min-w-0 w-full">
            {filteredJobs.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-6"
                style={{ background: '#FFFFFF', border: '1.5px dashed #DCE3EC' }}
              >
                <i className="fa-solid fa-folder-open text-[28px] mb-3" style={{ color: '#94A3B8' }} aria-hidden="true" />
                <p className="text-[15px] font-bold mb-1" style={{ color: '#0B1F3A' }}>
                  Подходящих вакансий не найдено
                </p>
                <p className="text-[13px] mb-5" style={{ color: '#64748B' }}>
                  Попробуйте изменить фильтры или сбросить их
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[13px] font-bold px-5 py-2.5 rounded-xl text-white transition-colors"
                  style={{ background: '#F97316' }}
                  onMouseOver={e => e.currentTarget.style.background = '#E0670B'}
                  onMouseOut={e => e.currentTarget.style.background = '#F97316'}
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredJobs.map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onOpen={setSelectedJob}
                    isFavorite={favorites.includes(job.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={onApply}
        isFavorite={selectedJob ? favorites.includes(selectedJob.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </section>
  )
}

export default JobsSection