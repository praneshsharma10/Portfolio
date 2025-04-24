"use client"

import { Header } from "./Header"
import { Footer } from "./footer"
import { MyProjects } from "./MyProjects";

export function Portfolio() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col">
        <Header />
        <MyProjects/>
      </div>
      <Footer />
    </div>
  )
}
