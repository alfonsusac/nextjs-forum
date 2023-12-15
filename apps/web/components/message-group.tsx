import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { CheckCircleSolidIcon } from '@/components/icons/check-circle-solid'

type MessageGroupProps = { isAnswer: boolean; children: ReactNode }

export const MessageGroup = ({ isAnswer, children }: MessageGroupProps) => {
  return (
    <div>
      <div
        className={twMerge(
          'px-2 py-2 sm:px-3 rounded space-y-0.5',
          // isAnswer && 'border-green-900 border-2',
          isAnswer && 'bg-green-900/30',
        )}
      >
        {isAnswer && (
          <div className="flex items-center space-x-1 text-green-400 font-semibold py-1 mb-2">
            <CheckCircleSolidIcon className="ml-14" />
            <span>Answer</span>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
