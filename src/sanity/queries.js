import { defineQuery } from 'next-sanity'
import { sanityFetch } from './client'

const TOTAL_PROJECTS_QUERY = defineQuery(/* groq */ `count(*[
  _type == "project"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
])`)

export async function getProjectCount(category) {
  return await sanityFetch({
    query: TOTAL_PROJECTS_QUERY,
    params: { category: category ?? null },
  })
}

const PROJECTS_QUERY = defineQuery(/* groq */ `*[
  _type == "project"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getProjects(startIndex, endIndex, category) {
  return await sanityFetch({
    query: PROJECTS_QUERY,
    params: {
      startIndex,
      endIndex,
      category: category ?? null,
    },
  })
}
const ALL_PROJECTS_QUERY = defineQuery(/* groq */ `*[
  _type == "project"
  && defined(slug.current)  // Ensure a valid slug is present
  && (!defined($category) || category == $category)
]|order(publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  technologies[0...7],
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getAllProjects(startIndex, endIndex, category) {
  return await sanityFetch({
    query: ALL_PROJECTS_QUERY,
    params: {
      category: category ?? null,
    },
  })
}

const FEATURED_PROJECTS_QUERY = defineQuery(/* groq */ `*[
  _type == "project"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getFeaturedProjects(quantity) {
  return await sanityFetch({
    query: FEATURED_PROJECTS_QUERY,
    params: { quantity },
  })
}

const PROJECT_QUERY = defineQuery(/* groq */ `*[
  _type == "project"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  gallery,
  excerpt,
  summary,
  body,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  },
  technologies,
  gitHubLink,
  demoLink,
}
`)

export async function getProject(slug) {
  return await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  })
}

const CATEGORIES_QUERY = defineQuery(/* groq */ `*[
  _type == "category"
  && count(*[_type == "project" && defined(slug.current) && ^._id in categories[]._ref]) > 0
]|order(title asc){
  title,
  "slug": slug.current,
}`)

export async function getCategories() {
  return await sanityFetch({
    query: CATEGORIES_QUERY,
  })
}
