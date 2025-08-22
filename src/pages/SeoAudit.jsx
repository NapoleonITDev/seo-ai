import React, { useState } from 'react'
import { Search, Download, Share2, CheckCircle, AlertCircle, XCircle, Clock, FileText } from 'lucide-react'

const SeoAudit = () => {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [auditResults, setAuditResults] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  const startAudit = async (e) => {
    e.preventDefault()
    if (!url) return

    setIsAnalyzing(true)
    // Симуляция анализа
    setTimeout(() => {
      setAuditResults({
        url: url,
        score: 78,
        timestamp: new Date().toLocaleString(),
        metaTags: {
          title: '✓ Title присутствует (65 символов)',
          description: '✓ Meta description присутствует (156 символов)',
          keywords: '✗ Meta keywords отсутствуют',
          robots: '✓ Robots meta tag присутствует'
        },
        headings: {
          h1: '✓ 1 H1 тег найден',
          h2: '✓ 3 H2 тега найдены',
          h3: '✓ 5 H3 тегов найдены',
          h4: '⚠ 2 H4 тега найдены',
          h5: '✗ H5 теги отсутствуют',
          h6: '✗ H6 теги отсутствуют'
        },
        links: {
          internal: '✓ 15 внутренних ссылок',
          external: '✓ 3 внешних ссылки',
          broken: '⚠ 1 битая ссылка найдена'
        },
        performance: {
          loadTime: '2.3s',
          pageSize: '1.2MB',
          images: '✓ 8 изображений оптимизированы',
          css: '⚠ CSS можно минимизировать',
          js: '⚠ JavaScript можно минимизировать'
        },
        seo: {
          ssl: '✓ SSL сертификат активен',
          mobile: '✓ Адаптивный дизайн',
          sitemap: '✓ Sitemap.xml найден',
          robots: '✓ Robots.txt найден'
        }
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-warning-600'
    return 'text-error-600'
  }

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-success-100'
    if (score >= 60) return 'bg-warning-100'
    return 'bg-error-100'
  }

  const getStatusIcon = (status) => {
    if (status.includes('✓')) return <CheckCircle className="w-5 h-5 text-success-500" />
    if (status.includes('⚠')) return <AlertCircle className="w-5 h-5 text-warning-500" />
    if (status.includes('✗')) return <XCircle className="w-5 h-5 text-error-500" />
    return <CheckCircle className="w-5 h-5 text-gray-500" />
  }

  const tabs = [
    { id: 'overview', name: 'Обзор', icon: FileText },
    { id: 'meta', name: 'Мета-теги', icon: FileText },
    { id: 'headings', name: 'Заголовки', icon: FileText },
    { id: 'links', name: 'Ссылки', icon: FileText },
    { id: 'performance', name: 'Производительность', icon: Clock },
    { id: 'seo', name: 'SEO', icon: Search }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Аудит</h1>
        <p className="text-gray-600">
          Проанализируйте SEO-метрики вашего сайта и получите рекомендации по улучшению
        </p>
      </div>

      {/* URL Input Form */}
      <div className="card mb-8">
        <form onSubmit={startAudit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              URL сайта для анализа
            </label>
            <div className="flex gap-3">
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="input-field flex-1"
                required
              />
              <button
                type="submit"
                disabled={isAnalyzing || !url}
                className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Анализ...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Анализировать
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Audit Results */}
      {auditResults && (
        <div className="space-y-6">
          {/* Score Overview */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Результаты анализа</h3>
                <p className="text-gray-600">Анализ завершен {auditResults.timestamp}</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary">
                  <Download className="w-4 h-4 mr-2" />
                  PDF отчет
                </button>
                <button className="btn-secondary">
                  <Share2 className="w-4 h-4 mr-2" />
                  Поделиться
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`w-24 h-24 rounded-full ${getScoreBg(auditResults.score)} flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-3xl font-bold ${getScoreColor(auditResults.score)}`}>
                    {auditResults.score}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Общий балл</h4>
                <p className="text-gray-600">
                  {auditResults.score >= 80 ? 'Отлично' : 
                   auditResults.score >= 60 ? 'Хорошо' : 'Требует улучшения'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    {auditResults.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Анализируемый сайт</h4>
                <p className="text-gray-600">URL проверен</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-success-600">
                    {auditResults.performance.loadTime}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Время загрузки</h4>
                <p className="text-gray-600">Быстро</p>
              </div>
            </div>
          </div>

          {/* Detailed Results Tabs */}
          <div className="card">
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 inline mr-2" />
                      {tab.name}
                    </button>
                  )
                })}
              </nav>
            </div>

            <div className="min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Мета-теги</h4>
                    <div className="space-y-2">
                      {Object.entries(auditResults.metaTags).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          {getStatusIcon(value)}
                          <span className="text-sm text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Заголовки</h4>
                    <div className="space-y-2">
                      {Object.entries(auditResults.headings).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          {getStatusIcon(value)}
                          <span className="text-sm text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ссылки</h4>
                    <div className="space-y-2">
                      {Object.entries(auditResults.links).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          {getStatusIcon(value)}
                          <span className="text-sm text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Производительность</h4>
                    <div className="space-y-2">
                      {Object.entries(auditResults.performance).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          {getStatusIcon(value)}
                          <span className="text-sm text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'meta' && (
                <div className="space-y-4">
                  {Object.entries(auditResults.metaTags).map(([key, value]) => (
                    <div key={key} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900 capitalize">{key}</h5>
                        {getStatusIcon(value)}
                      </div>
                      <p className="text-sm text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'headings' && (
                <div className="space-y-4">
                  {Object.entries(auditResults.headings).map(([key, value]) => (
                    <div key={key} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">{key.toUpperCase()}</h5>
                        {getStatusIcon(value)}
                      </div>
                      <p className="text-sm text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'links' && (
                <div className="space-y-4">
                  {Object.entries(auditResults.links).map(([key, value]) => (
                    <div key={key} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900 capitalize">{key}</h5>
                        {getStatusIcon(value)}
                      </div>
                      <p className="text-sm text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="space-y-4">
                  {Object.entries(auditResults.performance).map(([key, value]) => (
                    <div key={key} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900 capitalize">{key}</h5>
                        {getStatusIcon(value)}
                      </div>
                      <p className="text-sm text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'seo' && (
                <div className="space-y-4">
                  {Object.entries(auditResults.seo).map(([key, value]) => (
                    <div key={key} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900 capitalize">{key}</h5>
                        {getStatusIcon(value)}
                      </div>
                      <p className="text-sm text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-рекомендации по улучшению</h3>
            <div className="space-y-4">
              <div className="p-4 bg-error-50 border border-error-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-error-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-error-800">Добавить Meta Keywords</h4>
                    <p className="text-sm text-error-700 mt-1">
                      Хотя Google не использует meta keywords для ранжирования, 
                      другие поисковые системы могут их учитывать.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-warning-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-warning-800">Оптимизировать CSS и JavaScript</h4>
                    <p className="text-sm text-warning-700 mt-1">
                      Минимизируйте CSS и JavaScript файлы для улучшения скорости загрузки.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-info-50 border border-info-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-info-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-info-800">Проверить битые ссылки</h4>
                    <p className="text-sm text-info-700 mt-1">
                      Найдена 1 битая ссылка. Рекомендуется исправить для улучшения пользовательского опыта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SeoAudit
