"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function ReadmePreview() {
  const [typedText, setTypedText] = useState("")
  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "Problem Solver"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [quote, setQuote] = useState({ text: "", author: "" })

  const devQuotes = [
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    {
      text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
      author: "Dan Salomon",
    },
    {
      text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
      author: "Antoine de Saint-Exupery",
    },
  ]

  useEffect(() => {
    const randomQuote = devQuotes[Math.floor(Math.random() * devQuotes.length)]
    setQuote(randomQuote)
  }, [])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1000)
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentRole.slice(0, typedText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentRoleIndex])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Animated Header */}
        <div className="text-center py-12">
          <div className="relative inline-block">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Gokul Praba
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-25 animate-pulse" />
          </div>
          <div className="mt-4 h-8">
            <span className="text-xl text-gray-300">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative h-8">
          <svg className="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-cyan-500/20"
            />
          </svg>
        </div>

        {/* About Section */}
        <Card className="p-8 bg-gray-800/50 border-cyan-500/30 backdrop-blur">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate developer with expertise in modern web technologies. I love building scalable applications and
            contributing to open source projects. Always learning, always coding.
          </p>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 backdrop-blur overflow-hidden relative">
          <div className="absolute top-0 right-0 text-9xl text-amber-500/10 font-serif">"</div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Random Dev Quote
            </h2>
            <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4">"{quote.text}"</blockquote>
            <p className="text-right text-amber-400 font-semibold">— {quote.author}</p>
          </div>
        </Card>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "Docker", "AWS", "Vercel", "VS Code"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">500+</div>
              <div className="text-gray-400 mt-2">Contributions</div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">25+</div>
              <div className="text-gray-400 mt-2">Projects</div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border-pink-500/30 hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">3+</div>
              <div className="text-gray-400 mt-2">Years Experience</div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gray-800/50 border-green-500/30 backdrop-blur group hover:border-green-500/50 transition-colors">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Top Contributed Repo
          </h2>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  awesome-project
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  A full-stack web application built with React, Node.js, and MongoDB. Features include real-time chat,
                  user authentication, and responsive design.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                  TypeScript
                </span>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                    </svg>
                    142
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z" />
                    </svg>
                    28
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-700/50 border border-gray-600/30 rounded text-gray-300 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* GitHub Activity Simulation */}
        <Card className="p-8 bg-gray-800/50 border-cyan-500/30">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 91 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded bg-cyan-500/20 hover:bg-cyan-500/40 transition-colors cursor-pointer"
                style={{
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/30 backdrop-blur text-center">
          <div className="flex justify-center mb-4">
            <div className="text-5xl animate-bounce">💰</div>
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Support My Work
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you find my projects helpful and want to support my work, you can buy me a coffee!
          </p>
          <a
            href="https://paypal.me/GOKULNATHPRABAHARAN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:scale-110 transition-transform font-bold text-lg shadow-lg hover:shadow-blue-500/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.805.805 0 01-.794.679H7.72a.483.483 0 01-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z" />
              <path d="M2.379 5.479A1 1 0 013.364 4.5h8.243a5.128 5.128 0 013.63 1.474c1.553 1.554 2.064 3.783 1.506 6.646-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.805.805 0 01-.794.679H4.096a.483.483 0 01-.477-.558l2.76-17.446z" />
            </svg>
            Donate via PayPal
          </a>
        </Card>

        {/* Connect Section */}
        <Card className="p-8 bg-gray-800/50 border-purple-500/30">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "GitHub", color: "from-gray-400 to-gray-600" },
              { name: "LinkedIn", color: "from-blue-400 to-blue-600" },
              { name: "Twitter", color: "from-cyan-400 to-blue-500" },
              { name: "Email", color: "from-purple-400 to-pink-500" },
            ].map((social) => (
              <button
                key={social.name}
                className={`px-6 py-3 bg-gradient-to-r ${social.color} rounded-lg hover:scale-110 transition-transform font-semibold`}
              >
                {social.name}
              </button>
            ))}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-400">
            Made with <span className="text-red-500 animate-pulse">♥</span> by Gokul Praba
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  )
}
