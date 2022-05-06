import { useState } from "react"

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { CloseButton } from "../CloseButton"

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Leave your feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ?(
        <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFeedbackType(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )) }
      </div>
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