import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

interface IStepsProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: IStepsProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Leave your feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )) }
      </div>
    </>
  )
}