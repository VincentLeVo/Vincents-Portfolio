import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/Navbar'
import { TechnologyBadge } from '@/components/TechnologyBadge'
import { image } from '@/sanity/image'
import { getProject } from '@/sanity/queries'
import { ArrowUpRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import dayjs from 'dayjs'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  params = await params

  let project = await getProject(params.slug)

  return project ? { title: project.title, description: project.excerpt } : {}
}

export default async function projectsPost({ params }) {
  params = await params
  let project = (await getProject(params.slug)) || notFound()

  return (
    <main>
      <div className="relative flex flex-col justify-end bg-blue-800">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-full w-full overflow-hidden"
        >
          {project.mainImage && (
            <>
              <img
                alt={project.mainImage.alt || ''}
                src={image(project.mainImage).url()}
                className="h-[calc(100%-18rem)] w-full object-cover object-center sm:h-[calc(100%-10rem)]"
              />
            </>
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-blue-800 from-[calc(8/16*100%)] to-[calc(13/16*100%)] sm:from-[calc(25/100*100%)] sm:to-70%"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-slate-950/20" />
        <Container className="w-full">
          <Navbar dark />
          <div className="relative grid w-full grid-cols-1 items-end gap-y-8 pb-5 pt-[42vh] sm:grid-cols-2 sm:pb-10">
            <div className="flex-col">
              <h1 className="bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text text-5xl font-normal text-transparent">
                {project.title}
              </h1>
              <p className="text-md/6 mt-2 font-semibold uppercase tracking-wider text-slate-200">
                {project.excerpt}
              </p>
              <p className="mt-2 max-w-md text-sm text-slate-200">
                {project.summary}
              </p>
              <div className="mt-12 flex max-w-md flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <TechnologyBadge size="large" key={index}>
                    {tech}
                  </TechnologyBadge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-4 items-end gap-5 md:grid-cols-2 md:grid-rows-2">
              {project.categories &&
                project.categories.map((category, index) => (
                  <p
                    key={index}
                    className="p-1 font-mono text-base font-normal uppercase tracking-wider text-slate-400"
                  >
                    {category.title}
                  </p>
                ))}
              <p className="p-1 font-mono text-base font-normal uppercase tracking-wider text-slate-400">
                {dayjs(project.publishedAt).format('MMMM, YYYY')}
              </p>
              {project.gitHubLink && (
                <div>
                  <Button
                    variant="link"
                    className="p-1 text-slate-300"
                    href={project.gitHubLink}
                  >
                    Github Link
                    <ArrowUpRightIcon className="size-5" />
                  </Button>
                </div>
              )}
              {project.demoLink && (
                <div>
                  <Button
                    variant="link"
                    className="p-1 text-slate-300"
                    href={project.demoLink}
                  >
                    Demo Link
                    <ArrowUpRightIcon className="size-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-16 text-gray-700">
          <div className="max-w-2xl xl:mx-auto">
            {project.body && (
              <PortableText
                value={project.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-1 mt-2 text-base/8 first:mt-0 last:mb-0">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mb-2 mt-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mb-2 mt-9 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
                        {children}
                      </blockquote>
                    ),
                  },
                  types: {
                    image: ({ value }) => (
                      <img
                        alt={value.alt || ''}
                        src={image(value).width(2000).url()}
                        className="w-full rounded-2xl"
                      />
                    ),
                    separator: ({ value }) => {
                      switch (value.style) {
                        case 'line':
                          return (
                            <hr className="my-8 border-t border-gray-200" />
                          )
                        case 'space':
                          return <div className="my-8" />
                        default:
                          return null
                      }
                    },
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => {
                      return (
                        <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                      )
                    },
                    number: ({ children }) => {
                      return (
                        <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                      )
                    },
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-950">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <>
                        <span aria-hidden>`</span>
                        <code className="text-[15px]/8 font-semibold text-gray-950">
                          {children}
                        </code>
                        <span aria-hidden>`</span>
                      </>
                    ),
                    link: ({ value, children }) => {
                      return (
                        <Link
                          href={value.href}
                          className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                        >
                          {children}
                        </Link>
                      )
                    },
                  },
                }}
              />
            )}
          </div>
          {project.gallery && (
            <div className="grid-col-1 mx-auto my-16 mt-10 grid max-w-4xl items-center gap-y-10">
              {project.gallery.map((galleryImage) => (
                <img
                  key={galleryImage._key}
                  alt={galleryImage.alt || ''}
                  src={image(galleryImage).url()}
                  className="w-full rounded-3xl shadow-xl"
                />
              ))}
            </div>
          )}

          <div className="my-10 max-w-2xl xl:mx-auto">
            <div className="flex justify-center">
              <Button variant="outline" href="/#projects">
                <ChevronLeftIcon className="size-4" />
                Back to projects
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
