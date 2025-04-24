"use client"

import { Header } from "./Header"
// import { ProjectGrid } from "./project-grid"
import { Footer } from "./footer"
// import { projects } from "../../data/project"

export function Portfolio() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col items-center">
        <Header />
        {/* <ProjectGrid projects={projects} /> */}
      </div>
      <Footer />
    </div>
  )
}
