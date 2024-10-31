import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Heading, Lead } from '@/components/Text'
import Image from 'next/image'
export const metadata = {
  title: 'Company',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}

function Header() {
  return (
    <Container className="my-24 mt-16">
      <Heading as="h1">Hello, World! Meet Vincent.</Heading>
      <Lead className="mt-5 max-w-3xl">
        Crafting pixels and chasing dreams. Welcome to my digital playground – a
        corner of the internet where code meets creativity, and solutions come
        with a side of wit.
      </Lead>
      <section className="mt-20 grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">
            The Full Scoop:
          </h2>
          <p className="mt-5 text-sm/6 text-gray-600">
            Hey there! I’m Vincent – a front-end enthusiast with a minor in
            statistically amazing solutions and a passion for giving tech a
            personality. My goal? To make sure users don’t just visit a site;
            they have a smooth, engaging experience. I build with a focus on
            responsive design, clear code, and a straightforward user
            experience.
          </p>
          <p className="mt-5 text-sm/6 text-gray-600">
            When I’m not coding, I like getting creative with makeup, keeping
            fit, and swimming. Each of these gives me a fresh perspective on
            problem-solving, discipline, and focus, qualities I bring right back
            to my work.
          </p>
          <p className="mt-5 text-sm/6 text-gray-600">
            So, if you&apos;re looking for a developer who brings equal parts
            logic and laughter, creativity and code, wit and web wizardry –
            you&apos;re in the right place.
          </p>
        </div>
        <div className="relative justify-self-center">
          <div className="absolute -right-16 -top-9 size-60 rounded-full bg-neutral-300 ring-2 ring-white/35"></div>
          <Image
            src={'/personal/profile_picture.jpg'}
            className="image-cover ring-3 relative aspect-square h-auto w-[24rem] rounded-full shadow-lg ring-white/35"
            width={400}
            height={400}
            alt="Photo of Vincent"
          />
        </div>
      </section>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Navbar />
      </Container>
      <Header />

      <Footer />
    </main>
  )
}
