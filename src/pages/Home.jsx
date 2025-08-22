import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, BarChart3, Zap, Shield, Users, ArrowRight, Play, Star } from 'lucide-react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Здесь можно добавить логику отправки email
      console.log('Beta registration:', email)
    }
  }

  const features = [
    {
      icon: Search,
      title: 'SEO Аудит',
      description: 'Полный анализ SEO-метрик вашего сайта с AI-рекомендациями'
    },
    {
      icon: BarChart3,
      title: 'Аналитика',
      description: 'Интеграция с GA4 и Google Search Console для глубокой аналитики'
    },
    {
      icon: Zap,
      title: 'AI Рекомендации',
      description: 'Умные советы по улучшению SEO на основе машинного обучения'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Защищенный доступ к данным и конфиденциальность'
    }
  ]

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'SEO-специалист',
      company: 'Digital Agency',
      content: 'Отличный инструмент для быстрого анализа SEO. AI-рекомендации очень точные!',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      role: 'Владелец сайта',
      company: 'E-commerce',
      content: 'Помог улучшить позиции в поиске на 40% за 3 месяца.',
      rating: 5
    },
    {
      name: 'Елена Козлова',
      role: 'Маркетолог',
      company: 'Startup',
      content: 'Простой интерфейс и мощная аналитика. Точно то, что нужно!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              SEO Анализ с{' '}
              <span className="text-primary-600">Искусственным Интеллектом</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Анализируйте SEO вашего сайта, получайте AI-рекомендации и отслеживайте 
              результаты с интеграцией Google Analytics 4 и Search Console
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/seo-audit"
                className="btn-primary text-lg px-8 py-3 inline-flex items-center"
              >
                Начать Аудит
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-secondary text-lg px-8 py-3 inline-flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Смотреть Демо
              </button>
            </div>

            {/* Beta Registration Form */}
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Присоединяйтесь к Beta-тестированию
              </h3>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    className="input-field flex-1"
                    required
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Присоединиться
                  </button>
                </form>
              ) : (
                <div className="bg-success-50 border border-success-200 rounded-lg p-4 text-success-700">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Возможности продукта
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Все необходимые инструменты для профессионального SEO-анализа в одном месте
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Посмотрите как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Демонстрация основных возможностей SEO Analyzer
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Демо-видео будет здесь</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы первых пользователей
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас beta-тестеры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role} в {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы улучшить SEO вашего сайта?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к beta-тестированию и получите ранний доступ к мощным SEO-инструментам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/seo-audit"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Начать бесплатный аудит
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/user-management"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
