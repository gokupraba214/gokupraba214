"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function ReadmePreview() {
  const [typedText, setTypedText] = useState("")
  const roles = [
    "Software Engineer | Full Stack Developer",
    "3+ Years IT Support Specialist",
    "Building Scalable Full-Stack Solutions",
  ]
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
              Gokulnath Prabaharan
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
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Code Object */}
            <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm border border-cyan-500/20">
              <pre className="text-cyan-400">
                <span className="text-purple-400">const</span> <span className="text-yellow-400">gokulnath</span> ={" "}
                {"{\n"}
                <span className="text-green-400"> pronouns:</span> <span className="text-orange-400">"He"</span> |{" "}
                <span className="text-orange-400">"Him"</span>,{"\n"}
                <span className="text-green-400"> location:</span>{" "}
                <span className="text-orange-400">"🌍 Based in Malaysia"</span>,{"\n"}
                <span className="text-green-400"> education:</span>{" "}
                <span className="text-orange-400">"🎓 Software Engineering Student"</span>,{"\n"}
                <span className="text-green-400"> currentRole:</span>{" "}
                <span className="text-orange-400">"💼 IT Support Specialist @ Micron Technology"</span>,{"\n"}
                <span className="text-green-400"> experience:</span>{" "}
                <span className="text-orange-400">"3+ years in IT Operations & Support"</span>,{"\n"}
                {"\n"}
                <span className="text-green-400"> askMeAbout:</span> {"[\n"}
                <span className="text-orange-400"> "Full Stack Development",{"\n"}</span>
                <span className="text-orange-400"> "System Architecture",{"\n"}</span>
                <span className="text-orange-400"> "Cloud Solutions",{"\n"}</span>
                <span className="text-orange-400"> "IT Operations",{"\n"}</span>
                <span className="text-orange-400"> "Troubleshooting"</span>
                {"\n"}
                {"  ],\n"}
                {"\n"}
                <span className="text-green-400"> technologies:</span> {"{\n"}
                <span className="text-blue-400"> frontEnd:</span>{" "}
                <span className="text-orange-400">["React", "Next.js", "TypeScript", "HTML5", "CSS3"]</span>,{"\n"}
                <span className="text-blue-400"> backEnd:</span>{" "}
                <span className="text-orange-400">["Node.js", "Java", "REST APIs"]</span>,{"\n"}
                <span className="text-blue-400"> databases:</span>{" "}
                <span className="text-orange-400">["MySQL", "Firebase"]</span>,{"\n"}
                <span className="text-blue-400"> cloudAndHosting:</span>{" "}
                <span className="text-orange-400">["Vercel", "Render", "Firebase"]</span>,{"\n"}
                <span className="text-blue-400"> toolsAndPlatforms:</span>{" "}
                <span className="text-orange-400">["Git", "GitHub", "VS Code", "Figma"]</span>
                {"\n"}
                {"  }\n"}
                {"};"}
              </pre>
            </div>

            {/* Animated Illustration */}
            <div className="relative h-80 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg overflow-hidden border border-cyan-500/20">
              {/* Desk */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-700/80 to-gray-800/80 rounded-t-3xl" />

              {/* Developer (person from behind) */}
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20">
                {/* Head */}
                <div className="w-16 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative">
                  {/* Hair */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 rounded-t-full" />
                </div>
                {/* Body */}
                <div className="w-24 h-20 bg-gradient-to-b from-cyan-700 to-cyan-800 rounded-b-lg -mt-2" />
                {/* Arms */}
                <div className="absolute top-12 -left-4 w-6 h-16 bg-cyan-700 rounded-lg transform -rotate-12" />
                <div className="absolute top-12 -right-4 w-6 h-16 bg-cyan-700 rounded-lg transform rotate-12" />
              </div>

              {/* Monitors */}
              <div className="absolute top-12 left-8 w-32 h-24 bg-gray-900 rounded-lg border-4 border-gray-700 z-10 transform -rotate-6">
                {/* Screen content - animated */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-2 overflow-hidden">
                  <div className="space-y-1">
                    <div className="h-1 bg-cyan-400/60 rounded animate-pulse" style={{ animationDelay: "0s" }} />
                    <div className="h-1 bg-purple-400/60 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div
                      className="h-1 bg-cyan-400/60 rounded w-3/4 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <div
                      className="h-1 bg-purple-400/60 rounded w-1/2 animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-36 h-28 bg-gray-900 rounded-lg border-4 border-gray-700 z-10 transform rotate-6">
                {/* Screen content - animated chart */}
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 p-2 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-green-400 to-cyan-400 rounded-t animate-grow"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-32 bg-gray-900 rounded-lg border-4 border-gray-700 z-10">
                {/* Main screen - animated terminal */}
                <div className="w-full h-full bg-black p-2 overflow-hidden">
                  <div className="space-y-1 font-mono text-[6px]">
                    <div className="text-green-400 animate-type">$ npm run dev</div>
                    <div className="text-cyan-400 animate-type" style={{ animationDelay: "0.5s" }}>
                      Starting development server...
                    </div>
                    <div className="text-yellow-400 animate-type" style={{ animationDelay: "1s" }}>
                      ✓ Compiled successfully
                    </div>
                    <div className="text-green-400 animate-type" style={{ animationDelay: "1.5s" }}>
                      Ready on http://localhost:3000
                    </div>
                  </div>
                  <div className="mt-2 w-2 h-2 bg-green-400 animate-pulse" />
                </div>
              </div>

              {/* Keyboard */}
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-800 rounded-lg z-10">
                <div className="grid grid-cols-8 gap-0.5 p-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-700 rounded-sm animate-key-press"
                      style={{ animationDelay: `${Math.random() * 2}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Mouse */}
              <div className="absolute bottom-36 right-1/4 w-6 h-8 bg-gray-800 rounded-t-lg rounded-b-xl z-10">
                <div className="w-1 h-3 bg-gray-600 mx-auto mt-1 rounded-full" />
              </div>

              {/* Coffee Cup */}
              <div className="absolute bottom-32 right-12 w-8 h-10 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-lg z-10">
                <div className="w-10 h-3 bg-amber-800 rounded-t-lg -mx-1" />
                <div className="absolute -right-2 top-2 w-3 h-4 border-2 border-amber-800 rounded-r-full" />
                {/* Steam animation */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-1 h-4 bg-gray-400/40 rounded-full animate-steam" />
                  <div
                    className="w-1 h-4 bg-gray-400/40 rounded-full animate-steam ml-2"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-2 mt-8">
            <p>
              <span className="text-2xl">🎓</span> Currently pursuing a <strong>Software Engineering Degree</strong>
            </p>
            <p>
              <span className="text-2xl">🛠️</span> <strong>3 years of IT support experience</strong> at{" "}
              <strong>Micron Technology</strong>
            </p>
            <p>
              <span className="text-2xl">🏢</span> Specialized in <strong>incident management</strong>,{" "}
              <strong>system troubleshooting</strong>, and <strong>IT operations</strong>
            </p>
            <p>
              <span className="text-2xl">🚀</span> Passionate about building <strong>scalable applications</strong> and{" "}
              <strong>full-stack solutions</strong>
            </p>
            <p>
              <span className="text-2xl">⚡</span> Fun fact: I can troubleshoot systems faster than I can order coffee!
              ☕
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 backdrop-blur">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            💼 Professional Experience
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-400">Micron Technology</h3>
                <p className="text-gray-400 text-sm mb-2">IT Support Specialist | 2021 - Present</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>
                    💻 Specialized in <strong>incident management</strong> & <strong>system troubleshooting</strong>
                  </li>
                  <li>
                    ⚙️ 3+ years managing <strong>IT operations</strong> and <strong>infrastructure</strong>
                  </li>
                  <li>🔧 Expert in resolving complex technical issues efficiently</li>
                  <li>🤝 Supporting teams with seamless IT solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            🎯 Current Goals
          </h2>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔭</span>
              <span>
                Currently learning <strong>Full Stack Development</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <span>
                Exploring <strong>AWS Cloud Architecture</strong> and <strong>Microservices</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">👯</span>
              <span>
                Looking to collaborate on <strong>Open Source Projects</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <span>
                Open to discuss <strong>new projects</strong> and <strong>opportunities</strong>
              </span>
            </li>
          </ul>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 backdrop-blur overflow-hidden relative">
          <div className="absolute top-0 right-0 text-9xl text-amber-500/10 font-serif">"</div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              💭 Random Dev Quote
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
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            🌟 Top Contributed Repo
          </h2>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  gokupraba214/Silder
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  An interactive slider component built with modern web technologies. Features smooth animations, touch
                  support, and customizable styling options.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                  JavaScript
                </span>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 fill-yellow-400" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                    </svg>
                    <span className="text-yellow-400">★</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z" />
                    </svg>
                    Forks
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["HTML", "CSS", "JavaScript", "Slider", "Animation"].map((tech) => (
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
            Made with <span className="text-red-500 animate-pulse">♥</span> by Gokulnath Prabaharan
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
        @keyframes grow {
          from {
            height: 0%;
          }
          to {
            height: var(--height);
          }
        }
        .animate-grow {
          animation: grow 1.5s ease-out forwards;
          --height: 100%;
        }
        @keyframes type {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-type {
          animation: type 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes key-press {
          0%, 90% {
            transform: translateY(0);
            background-color: rgb(55, 65, 81);
          }
          95% {
            transform: translateY(1px);
            background-color: rgb(96, 165, 250);
          }
          100% {
            transform: translateY(0);
            background-color: rgb(55, 65, 81);
          }
        }
        .animate-key-press {
          animation: key-press 3s ease-in-out infinite;
        }
        @keyframes steam {
          0% {
            opacity: 0.6;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(1.5);
          }
        }
        .animate-steam {
          animation: steam 2s ease-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
