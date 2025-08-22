import React, { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Download, Settings, AlertCircle } from 'lucide-react'

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [metrics, setMetrics] = useState({
    sessions: 0,
    users: 0,
    pageViews: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    organicTraffic: 0
  })

  const [aiRecommendations, setAiRecommendations] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Низкая скорость загрузки страниц',
      description: 'Среднее время загрузки страниц превышает 3 секунды',
      priority: 'high',
      action: 'Оптимизировать изображения и минимизировать CSS/JS'
    },
    {
      id: 2,
      type: 'info',
      title: 'Отсутствуют мета-описания',
      description: '15% страниц не имеют мета-описаний',
      priority: 'medium',
      action: 'Добавить уникальные мета-описания для всех страниц'
    },
    {
      id: 3,
      type: 'success',
      title: 'Хорошая структура заголовков',
      description: 'H1-H6 теги правильно используются на 95% страниц',
      priority: 'low',
      action: 'Продолжать поддерживать текущую структуру'
    }
  ])

  const connectAnalytics = async () => {
    setIsLoading(true)
    // Симуляция подключения к GA4
    setTimeout(() => {
      setIsConnected(true)
      setIsLoading(false)
      // Загружаем демо-данные
      setMetrics({
        sessions: 15420,
        users: 12850,
        pageViews: 45680,
        bounceRate: 42.3,
        avgSessionDuration: 185,
        organicTraffic: 8900
      })
    }, 2000)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-error-600 bg-error-50 border-error-200'
      case 'medium': return 'text-warning-600 bg-warning-50 border-warning-200'
      case 'low': return 'text-success-600 bg-success-50 border-success-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'warning': return <AlertCircle className="w-5 h-5 text-warning-500" />
      case 'info': return <AlertCircle className="w-5 h-5 text-primary-500" />
      case 'success': return <AlertCircle className="w-5 h-5 text-success-500" />
      default: return <AlertCircle className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Аналитика и AI-рекомендации для вашего сайта
        </p>
      </div>

      {/* Connection Status */}
      {!isConnected ? (
        <div className="card mb-8">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Подключите аналитику
            </h3>
            <p className="text-gray-600 mb-6">
              Подключите Google Analytics 4 и Search Console для получения данных
            </p>
            <button
              onClick={connectAnalytics}
              disabled={isLoading}
              className="btn-primary inline-flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Подключение...
                </>
              ) : (
                <>
                  <Settings className="w-4 h-4 mr-2" />
                  Подключить GA4 & GSC
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Сессии</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.sessions.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5%
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Пользователи</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.users.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-success-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8.2%
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Просмотры страниц</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.pageViews.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-warning-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15.3%
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.bounceRate}%</p>
                </div>
                <div className="w-12 h-12 bg-error-100 rounded-lg flex items-center justify-center">
                  <MousePointer className="w-6 h-6 text-error-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                -5.2%
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Средняя сессия</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.floor(metrics.avgSessionDuration / 60)}м {metrics.avgSessionDuration % 60}с</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +3.1%
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Органический трафик</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.organicTraffic.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +22.7%
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">AI-рекомендации</h3>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Экспорт
              </button>
            </div>

            <div className="space-y-4">
              {aiRecommendations.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className={`p-4 rounded-lg border ${getPriorityColor(recommendation.priority)}`}
                >
                  <div className="flex items-start space-x-3">
                    {getTypeIcon(recommendation.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{recommendation.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          recommendation.priority === 'high' ? 'bg-error-100 text-error-800' :
                          recommendation.priority === 'medium' ? 'bg-warning-100 text-warning-800' :
                          'bg-success-100 text-success-800'
                        }`}>
                          {recommendation.priority === 'high' ? 'Высокий' :
                           recommendation.priority === 'medium' ? 'Средний' : 'Низкий'}
                        </span>
                      </div>
                      <p className="text-sm mb-2">{recommendation.description}</p>
                      <p className="text-sm font-medium">Действие: {recommendation.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Трафик по источникам</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">График будет здесь</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Позиции в поиске</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">График будет здесь</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
