import React from 'react'

function SectionHeading({children}: {children:React.ReactNode}) {
  return (
     <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
      {children}
    </h2>
  )
}

export default SectionHeading