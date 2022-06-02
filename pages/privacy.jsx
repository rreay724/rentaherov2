import React from 'react'

const Privacy = () => {
  return (
    <div class="grid h-screen place-items-center">
      <div className="space-y-4 px-40">
        <img
          src="/img/joker-privacy.jpeg"
          className="mx-auto w-40 rounded-full"
        />
        <p className="text-left text-xl font-semibold">
          "There is no privacy policy. Your personal information is ours
          aaahahaha!"
        </p>
        <p className="text-right">
          {' '}
          - <span className="font-semibold">Joker</span>, VP of Operations
        </p>
      </div>
    </div>
  )
}

export default Privacy
