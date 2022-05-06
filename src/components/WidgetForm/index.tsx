import { useState } from "react"

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { CloseButton } from "../CloseButton"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: bugImageUrl,
      alt: 'image of an insect'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Image of a light bulb'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'Image of a thought bubble'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Leave your feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ?(
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ):(
        <p>Hello World</p>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{' '}
        <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
} 