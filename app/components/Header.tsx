export function Header() {
  return (
    <header className="text-center mb-16 w-full">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
        Pranesh Sharma
      </h1>
      <div className="flex items-center justify-center text-gray-300 text-lg">
        <span>Full Stack Developer</span>
        <span className="ml-2 inline-block w-2 h-2 rounded-full bg-green-500 m-2"></span>
        <span>Math/CS</span>

        <span className="ml-2 inline-block w-2 h-2 rounded-full bg-green-500"></span>
      </div>
    </header>
  )
}
