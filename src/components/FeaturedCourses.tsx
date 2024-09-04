'use client'
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import courseData from "@/data/courses.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)


    return (
        <div className='min-h-screen py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-bold tracking-wide">
                        POPULAR COURSES
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Be mentored by the finest
                    </p>
                </div>
            </div >
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className="text-teal-600 border border-transparent p-2">
                                        Get Enrolled
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}>
                    <Button borderRadius='1.75rem' className=' text-white border-neutral-200 dark:border-slate-600'>
                        Check Out Courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses;