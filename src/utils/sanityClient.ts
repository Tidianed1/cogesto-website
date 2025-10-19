import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity configuration
const config = {
  projectId: import.meta.env.SANITY_PROJECT_ID || 'your_project_id_here',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: import.meta.env.SANITY_USE_CDN === 'true' || true,
  token: import.meta.env.SANITY_TOKEN, // Optional: for authenticated requests
}

// Create Sanity client
export const sanityClient = createClient(config)

// Image URL builder for optimized images
const builder = imageUrlBuilder(sanityClient)

// Helper function to generate image URLs
export const urlFor = (source: any) => {
  return builder.image(source)
}

// Common queries
export const queries = {
  // Page queries with page builder
  getPageBySlug: `*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    pageBuilder[]{
      _type,
      _key,
      ...,
      backgroundImage{
        asset->,
        alt
      },
      image{
        asset->,
        alt
      },
      cards[]{
        ...,
        image{
          asset->,
          alt
        }
      },
      advantages[]{
        ...
      },
      links[]{
        ...
      },
      navLinks[]{
        ...
      },
      iconLinks[]{
        ...
      }
    }
  }`,
  
  // Site settings query
  getSiteSettings: `*[_type == "siteSettings"][0]{
    _id,
    title,
    description,
    logo{
      asset->,
      alt
    },
    favicon{
      asset->
    },
    contactInfo,
    header{
      navLinks[]{
        text,
        href
      },
      iconLinks[]{
        icon,
        href
      }
    },
    footer{
      newsletter{
        title,
        description,
        ctaText,
        ctaHref
      },
      linkColumns[]{
        title,
        links[]{
          text,
          href
        }
      },
      socialLinks[]{
        text,
        href
      },
      legalLinks[]{
        text,
        href
      },
      copyright
    }
  }`,
  
  // Blog queries
  getAllPosts: `*[_type == "post"] | order(publishedAt desc)`,
  getPostBySlug: `*[_type == "post" && slug.current == $slug][0]`,
  
  // Service queries
  getAllServices: `*[_type == "service"] | order(_createdAt desc)`,
  getServiceBySlug: `*[_type == "service" && slug.current == $slug][0]`,
  
  // Case study queries
  getAllCaseStudies: `*[_type == "caseStudy"] | order(publishedAt desc)`,
  getCaseStudyBySlug: `*[_type == "caseStudy" && slug.current == $slug][0]`,
}

// Type definitions for TypeScript support
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Section type definitions
export interface HeroSection {
  _type: 'hero'
  _key: string
  kicker?: string
  heading: string
  subheading?: string
  backgroundImage?: SanityImage
}

export interface BrandTaglineSection {
  _type: 'brandTagline'
  _key: string
  logoSrc: string
  tagline: string
}

export interface ContentWithNavSection {
  _type: 'contentWithNav'
  _key: string
  kicker?: string
  heading: string
  text: string
  links: Array<{
    text: string
    href: string
  }>
}

export interface ImageTextSplitSection {
  _type: 'imageTextSplit'
  _key: string
  image: SanityImage
  imagePosition: 'left' | 'right'
  kicker?: string
  heading: string
  text: string
  ctaButton?: {
    text: string
    href: string
  }
  backgroundColor?: 'sick-navy' | 'sick-light' | 'white'
}

export interface CardGridSection {
  _type: 'cardGrid'
  _key: string
  cards: Array<{
    title: string
    description: string
    style: 'primary' | 'light' | 'image' | 'default'
    image?: SanityImage
  }>
}

export interface AdvantagesSection {
  _type: 'advantages'
  _key: string
  heading: string
  advantages: Array<{
    icon: string
    title: string
    description: string
  }>
  ctaButton?: {
    text: string
    href: string
  }
}

export interface BlogShowcaseSection {
  _type: 'blogShowcase'
  _key: string
  kicker?: string
  heading: string
  ctaButton?: {
    text: string
    href: string
  }
  blogPosts: Array<{
    title: string
    excerpt: string
    slug: string
    publishedAt: string
    image?: SanityImage
  }>
}

// Union type for all sections
export type PageSection = 
  | HeroSection 
  | BrandTaglineSection 
  | ContentWithNavSection 
  | ImageTextSplitSection 
  | CardGridSection 
  | AdvantagesSection 
  | BlogShowcaseSection

// Page type
export interface Page {
  _id: string
  _type: 'page'
  title: string
  slug: {
    current: string
  }
  pageBuilder: PageSection[]
}

// Site settings type
export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  title: string
  description?: string
  logo?: SanityImage
  favicon?: SanityImage
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
  header?: {
    navLinks?: Array<{
      text: string
      href: string
    }>
    iconLinks?: Array<{
      icon: string
      href?: string
    }>
  }
  footer?: {
    newsletter?: {
      title: string
      description: string
      ctaText: string
      ctaHref: string
    }
    linkColumns?: Array<{
      title: string
      links: Array<{
        text: string
        href: string
      }>
    }>
    socialLinks?: Array<{
      text: string
      href: string
    }>
    legalLinks?: Array<{
      text: string
      href: string
    }>
    copyright?: string
  }
}
