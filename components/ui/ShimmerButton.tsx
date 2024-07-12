import React from 'react'

const ShimmerButton = ({ text } : { text: string }) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 focus:ring-offset-green-50 hover:scale-110 transition-all">
      {text}
    </button>
  )
}

export default ShimmerButton