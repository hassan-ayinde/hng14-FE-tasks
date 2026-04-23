import React from 'react'


const AppLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="h-screen w-full m-auto">
      {children}
    </main>
  )
}

export default AppLayout