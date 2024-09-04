'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "@/components/ui/moving-border";

function FeaturedWebinars() {

  const featuredWebinars = [
    {
      title: 'Mastering Full Stack Development',
      description:
        'Comprehensive guide to becoming proficient in both front-end and back-end development.',
      slug: 'mastering-full-stack-development',
      isFeatured: true,
    },
    {
      title: 'Data Science for Beginners',
      description:
        'An introductory course to understanding data science concepts and techniques.',
      slug: 'data-science-for-beginners',
      isFeatured: true,
    },
    {
      title: 'Building Scalable Web Applications',
      description:
        'Learn how to create scalable web applications using modern technologies.',
      slug: 'building-scalable-web-applications',
      isFeatured: true,
    },
    {
      title: 'UI/UX Design Fundamentals',
      description:
        'Explore the principles of UI/UX design and how to create user-friendly interfaces.',
      slug: 'ui-ux-design-fundamentals',
      isFeatured: true,
    },
    {
      title: 'Introduction to Cloud Computing',
      description:
        'Understand the basics of cloud computing and how to leverage it for your projects.',
      slug: 'introduction-to-cloud-computing',
      isFeatured: true,
    },
    {
      title: 'Career Advancement in Tech',
      description:
        'Strategies and tips for growing your career in the tech industry.',
      slug: 'career-advancement-in-tech',
      isFeatured: true,
    },
  ];


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">POPULAR WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Boost Your Skills to New Heights</p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: '/'
              }
            ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <Button borderRadius='1.75rem' className=' text-white border-neutral-200 dark:border-slate-600'>
              Visit All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWebinars;