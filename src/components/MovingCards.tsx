'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const courseTestimonials = [
    {
        quote:
            'Taking this course was a game-changer for my career. The practical knowledge I gained here made me confident in my new role.',
        name: 'John Doe',
        title: 'Web Development Student',
    },
    {
        quote:
            "The course content is so comprehensive and up-to-date. I've already implemented the skills in real-world projects with success.",
        name: 'Jane Smith',
        title: 'Data Science Student',
    },
    {
        quote:
            "This platform offers an incredible learning experience. The instructors are knowledgeable, and the community is supportive.",
        name: 'Ayesha Khan',
        title: 'Digital Marketing Student',
    },
    {
        quote:
            'I was able to upskill and get a promotion thanks to the cutting-edge curriculum. The flexible schedule was perfect for my busy life.',
        name: 'Carlos Rodriguez',
        title: 'Software Engineering Student',
    },
    {
        quote:
            'The projects in the course were hands-on and practical. I feel ready to tackle any challenge in the industry.',
        name: 'Emily Davis',
        title: 'Cloud Computing Student',
    },
    {
        quote:
            'The instructors are industry experts, and their insights were invaluable. I now feel prepared to excel in my chosen field.',
        name: 'Michael Brown',
        title: 'Cybersecurity Student',
    },
    {
        quote:
            "I appreciated the balance between theory and practice. This course gave me the tools I needed to land my dream job.",
        name: 'Sarah Wilson',
        title: 'UI/UX Design Student',
    },
    {
        quote:
            'I loved the interactive elements of the course. It kept me engaged and motivated to learn more every day.',
        name: 'David Lee',
        title: 'Mobile App Development Student',
    },
    {
        quote:
            "This course taught me skills that are directly applicable to my current job. I'm more productive and confident in my work.",
        name: 'Sophia Patel',
        title: 'Project Management Student',
    },
    {
        quote:
            "The real-world examples and case studies helped me understand the concepts better. I'm ready to take on new challenges.",
        name: 'Ryan Chen',
        title: 'Machine Learning Student',
    },
    {
        quote:
            'The course material was clear, and the support from the instructors was outstanding. I highly recommend this platform.',
        name: 'Olivia Martinez',
        title: 'Business Analytics Student',
    },
    {
        quote:
            'This course exceeded my expectations. I feel like I’ve gained not just skills, but a deeper understanding of the field.',
        name: 'Ethan Parker',
        title: 'Blockchain Development Student',
    },
    {
        quote:
            'Thanks to this course, I have a solid foundation in data analysis and have already started applying it at work.',
        name: 'Mia Thompson',
        title: 'Data Analytics Student',
    },
    {
        quote:
            'The combination of video lessons, hands-on projects, and quizzes kept me on track and motivated throughout the course.',
        name: 'Noah Evans',
        title: 'Artificial Intelligence Student',
    },
    {
        quote:
            'This course opened my eyes to new possibilities in my career. I’m grateful for the mentorship and support provided.',
        name: 'Isabella Murphy',
        title: 'E-Commerce Student',
    },
];


function MovingCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Success Stories: Our Students’ Achievements</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={courseTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}

export default MovingCards;