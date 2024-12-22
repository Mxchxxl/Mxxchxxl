import { Card, CardContent } from "@/components/Card"
import { FaCss3Alt, FaGit, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact } from "react-icons/fa"
import React, { useEffect, useState } from "react"
import { SiCplusplus, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiRedux, SiSass } from "react-icons/si"

import AnimatedTitle from "@/components/AnimatedTitle"
import { Button } from "@/components/Button"
import { CiLink } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"

const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black  text-white" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "REST API", icon: <SiPostman className="text-orange-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Git", icon: <FaGit className="text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
]

const projects = [
    { title: "Clip cloud", description: "A full-stack video streaming app built using MERN stack.", link: "https://clipcloud.vercel.app/" },
    { title: "saas landing page", description: "A modern landing page .", link: "https://2024-saas.vercel.app/" },
    { title: "viralhive", description: "A web app for an influencer marketing startup", link: "https://viralhive.vercel.app/" },
    { title: "Project Regal", description: "A website for a Dropship store", link: "https://mxchxxl.github.io/regal/" },
]



export default function Portfolio()
{
    const [ hoveredIndex, setHoveredIndex ] = useState( null )

    return (
        <main className="min-h-screen  bg-background text-primary  text-gray-100 p-6">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <header className="space-y-4">
                    <AnimatedTitle text="Hi🖖 welcome to my Portfolio, I'm Michael, a Web Programmer💻" />

                    <p className="text-lg">I build responsive, modern web applications using a wide range of technologies.</p>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 underline">Socials</h2>
                    <ul className="flex flex-row gap-4 flex-wrap list-none justify-around">
                        <li  >
                            <a href="https://github.com/Mxchxxl"><FaGithub className=" inline-block w-8 h-8" /></a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/ojonugwa-michael-xx/"><FaLinkedin className=" inline-block w-8 h-8" /></a>
                        </li>

                        <li>
                            <a href="https://linktr.ee/mxxchxxl"><CiLink className=" inline-block w-8 h-8" /></a>
                        </li>

                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 underline">Tech Stack</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
                        {techStack.map( ( { name, icon }, index ) => (
                            <div
                                key={name}
                                className="flex flex-col items-center text-center space-y-1 cursor-pointer"
                                onMouseEnter={() => setHoveredIndex( index )}
                                onMouseLeave={() => setHoveredIndex( null )}
                            >
                                <div className={`text-4xl transition-colors duration-300 ${ hoveredIndex !== null && hoveredIndex !== index ? 'text-gray-400' : '' }`}>{icon}</div>
                                <span className={`text-sm transition-colors duration-300 ${ hoveredIndex !== null && hoveredIndex !== index ? 'text-gray-400' : '' }`}>{name}</span>
                            </div>
                        ) )}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 underline">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map( ( project ) => (
                            <Card key={project.title} className="hover:shadow-xl transition-shadow">
                                <CardContent className="space-y-2">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button>View Project website</Button>
                                    </a>
                                </CardContent>
                            </Card>
                        ) )}
                    </div>
                </section>

                <footer className="pt-10 border-t  border-gray-700">
                    <div class="credits">SVG icons from <a href="https://iconoir.com/">Iconoir</a></div>
                    <p>&copy; {new Date().getFullYear()} Michael's Portfolio</p>
                </footer>
            </div>
        </main>
    )
}
