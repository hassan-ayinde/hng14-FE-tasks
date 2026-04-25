import React from 'react'

const AppLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <main className="h-screen w-full m-auto dark:bg-neutral-900">
      {children}
    </main>
  )
}

export default AppLayout