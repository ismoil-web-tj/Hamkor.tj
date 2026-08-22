import { useState } from 'react'

const METRICS = [
  { label: 'Просмотры', value: '840', hint: 'Конверсия в отклик: 14.2%' },
  { label: 'Всего откликов', value: '120', hint: '94 из Telegram-бота', hintClass: 'text-blue-600' },
  { label: 'Прошли скрининг', value: '32', hint: 'Зеленая зона (100% мэтч)', valueClass: 'text-emerald-600', borderClass: 'border-l-4 border-l-emerald-500' },
  { label: 'Нужен разбор', value: '18', hint: 'Желтая зона (50-97% мэтч)', valueClass: 'text-amber-600', borderClass: 'border-l-4 border-l-amber-500' },
]

// Кандидаты по зонам мэтчинга — в реальном компоненте придёт из Supabase
// (applications с join на resumes, отсортировано по match_score)
const GREEN_ZONE = [
  { id: 1, name: 'Алишер Рахимов', exp: '2 года', city: 'Худжанд', match: 100, source: 'TG Бот', time: 'Вчера, 14:20' },
  { id: 2, name: 'Мадина Тохирова', exp: '1.5 года', city: 'Душанбе (готова к переезду)', match: 100, source: 'Сайт', time: 'Сегодня, 09:15' },
]

const YELLOW_ZONE = [
  {
    id: 3, name: 'Ситора Каримова', exp: 'Без опыта', city: 'Худжанд', match: 66,
    source: 'TG Бот', time: 'Вчера, 18:02',
    flags: [
      { label: 'Нет опыта работы', tone: 'red' },
      { label: 'Языки: Тадж/Рус', tone: 'emerald' },
    ],
  },
]

const RED_ZONE_COUNT = 70

function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
      {METRICS.map(m => (
        <div
          key={m.label}
          className={`bg-white p-4 rounded-xl border border-slate-200 shadow-sm ${m.borderClass || ''}`}
        >
          <div className="text-xs font-medium text-slate-400 uppercase">{m.label}</div>
          <div className={`text-2xl font-bold mt-1 ${m.valueClass || 'text-slate-900'}`}>{m.value}</div>
          <div className={`text-xs mt-1 ${m.hintClass || 'text-slate-500'}`}>{m.hint}</div>
        </div>
      ))}

      <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-4 rounded-xl text-white shadow-md">
        <div className="text-xs font-medium opacity-80 uppercase">Сэкономлено времени</div>
        <div className="text-2xl font-bold mt-1">+11.6 часов</div>
        <div className="text-xs opacity-90 mt-1">Авто-отсев 70 кандидатов</div>
      </div>
    </div>
  )
}

function GreenCard({ candidate }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-slate-900">{candidate.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">Опыт: {candidate.exp} · {candidate.city}</p>
        </div>
        <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-1 rounded">{candidate.match}% мэтч</span>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
        <span className="text-slate-400">{candidate.time} · <span className="text-blue-500 font-medium">{candidate.source}</span></span>
        <div className="flex space-x-2">
          <button type="button" className="text-blue-600 hover:underline font-medium">Резюме</button>
          <button type="button" className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded font-medium hover:bg-blue-100">Чат</button>
        </div>
      </div>
    </div>
  )
}

function YellowCard({ candidate }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-slate-900">{candidate.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">Опыт: {candidate.exp} · {candidate.city}</p>
        </div>
        <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-2 py-1 rounded">{candidate.match}% мэтч</span>
      </div>
      {candidate.flags && (
        <div className="mt-2 flex flex-wrap gap-1">
          {candidate.flags.map(flag => (
            <span
              key={flag.label}
              className={`bg-${flag.tone}-50 text-${flag.tone}-600 text-[10px] px-2 py-0.5 rounded`}
            >
              {flag.label}
            </span>
          ))}
        </div>
      )}
      <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
        <span className="text-slate-400">{candidate.time} · <span className="text-blue-500 font-medium">{candidate.source}</span></span>
        <div className="flex space-x-2">
          <button type="button" className="text-blue-600 hover:underline font-medium">Резюме</button>
          <button type="button" className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-medium hover:bg-slate-200">Изучить</button>
        </div>
      </div>
    </div>
  )
}

function ApplicationsSection() {
  const [jobTitle] = useState('Специалист технической поддержки')

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Управление откликами</span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">{jobTitle}</h1>
          <p className="text-sm text-slate-500 mt-1">г. Худжанд · Полная занятость · Опубликовано 3 дня назад</p>
        </div>
        <div className="flex gap-3">
          <button type="button" className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
            Редактировать
          </button>
          <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            + Создать вакансию
          </button>
        </div>
      </div>

      <MetricsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <h2 className="font-bold text-slate-800">Зеленая зона (3/3 совпало)</h2>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">{GREEN_ZONE.length}</span>
          </div>
          <div className="space-y-3">
            {GREEN_ZONE.map(c => <GreenCard key={c.id} candidate={c} />)}
          </div>
        </div>

        <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <h2 className="font-bold text-slate-800">Желтая зона (2/3 или 1/3)</h2>
            </div>
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">{YELLOW_ZONE.length}</span>
          </div>
          <div className="space-y-3">
            {YELLOW_ZONE.map(c => <YellowCard key={c.id} candidate={c} />)}
          </div>
        </div>

        <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 opacity-75 hover:opacity-100 transition duration-200">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <h2 className="font-bold text-slate-600">Красная зона (0/3 совпадений)</h2>
            </div>
            <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-0.5 rounded-full">{RED_ZONE_COUNT}</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-dashed border-slate-300 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
            <h3 className="text-sm font-semibold text-slate-700">{RED_ZONE_COUNT} кандидатов скрыто</h3>
            <p className="text-xs text-slate-400 mt-1">Система автоматически отсеяла отклики без знания базовых требований вакансии.</p>
            <button type="button" className="mt-4 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium px-3 py-1.5 rounded-lg transition">
              Показать архив откликов
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default ApplicationsSection