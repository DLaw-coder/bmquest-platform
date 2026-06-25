import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LessonRenderer from '../engine/LessonRenderer'
import { getLessonById } from '../repositories/curriculum/lessonRepository'
import type { Lesson } from '../domain'

function LessonPage() {
  const { lessonId } = useParams()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadLesson() {
      if (!lessonId) {
        setLesson(null)
        setIsLoading(false)
        return
      }

      const foundLesson = await getLessonById(lessonId)
      setLesson(foundLesson)
      setIsLoading(false)
    }

    loadLesson()
  }, [lessonId])

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
        <p className="subtitle">This lesson is not available yet.</p>
      </section>
    )
  }

  return <LessonRenderer lesson={lesson} />
}

export default LessonPage
