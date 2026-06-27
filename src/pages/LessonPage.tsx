import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LessonRenderer from '../engine/LessonRendererV2'
import type { Lesson } from '../domain'
import { useAppData } from '../context/AppStateContext'

function LessonPage() {
  const { lessonId } = useParams()
  const { lessons } = useAppData()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadLesson() {
      if (!lessonId) {
        setLesson(null)
        setIsLoading(false)
        return
      }

      const foundLesson = lessons.find((item) => item.id === lessonId) ?? null
      setLesson(foundLesson)
      setIsLoading(false)
    }

    loadLesson()
  }, [lessonId, lessons])

  if (isLoading) {
    return (
      <section className="hero-card">
        <div className="brand-icon">📖</div>
        <h1>Loading</h1>
        <p className="subtitle">Preparing lesson...</p>
      </section>
    )
  }

  if (!lesson) {
    return (
      <section className="hero-card">
        <div className="brand-icon">🧭</div>
        <h1>Lesson Not Found</h1>
        <p className="subtitle">
          This lesson is not available for the active learner&apos;s form yet.
        </p>
      </section>
    )
  }

  return <LessonRenderer key={lesson.id} lesson={lesson} />
}

export default LessonPage
