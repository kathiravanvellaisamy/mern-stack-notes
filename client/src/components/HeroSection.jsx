

const HeroSection = () => {
  return (
    <section className="h-screen py-20 px-6 md:px-24 mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-extrabold  text-slate-700 py-5">Your Notes. Your Workflow. Supercharged.</h1>
        <p className="text-xl text-slate-900/80">A minimal and powerful notes manager built with the MERN stack, offering clean UI and seamless CRUD operations for all your learning notes.</p>

        <div className="flex gap-4 items-center mt-5">
            <button className="px-8 py-3 rounded-full border-2 border-slate-900 text-slate-900">Get Started</button>
            <button className="px-8 py-3 rounded-full border-2 border-slate-900 bg-slate-900 text-white">Try the App</button>
        </div>
    </section>
  )
}

export default HeroSection