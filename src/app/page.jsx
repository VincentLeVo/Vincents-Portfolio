import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { getAllProjects } from '@/sanity/queries'

export const metadata = {
  description:
    'Vincent Vo – Vancouver-based developer specializing in user-centered web design and seamless digital experiences. With a strong background in front-end development and a touch of wit, I build intuitive, clean, and high-performing websites.',
}

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="">
        <Portfolio projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
