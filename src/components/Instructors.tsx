'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: 'Dwight Schrute',
        designation: 'Python Expert',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        name: 'Toby Flenderson',
        designation: 'Frontend Expert',
        image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
        id: 3,
        name: 'Stanley Hudson',
        designation: 'Database Expert',
        image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        name: 'Jim Halpert',
        designation: 'Backend Expert',
        image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 5,
        name: 'Pam Beesly',
        designation: 'Full Stack Expert',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzM0OTM2NHx8ZW58MHx8fHw%3D&w=1000&q=80',
    },
    {
        id: 6,
        name: 'Michael Scott',
        designation: 'SQA Expert',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTczNDkzNjR8fGVufDB8fHx8&w=1000&q=80',
    },
    {
        id: 7,
        name: 'Andre Gomez',
        designation: 'Cloud Computing Expert',
        image:
            'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=463&h=363.1372549019608&q=60',
    },
    {
        id: 8,
        name: 'Cristian Romero',
        designation: 'Project Management Expert',
        image:
            'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzM0OTM2NHx8ZW58MHx8fHw%3D&w=1000&q=80',
    },
    {
        id: 9,
        name: 'Nicholas Otamendi',
        designation: 'Data Science Expert',
        image:
            'https://images.unsplash.com/photo-1543984613-f55ca6a1ba35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w5NzE0NTI3OXx8ZW58MHx8fHw%3D&w=1000&q=80',
    },
    {
        id: 10,
        name: 'Pam Beesly',
        designation: 'MS Office Expert',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyNTY5MzYzfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
    },
];

function Instructors() {
    return (
        <div className="relative h-[40rem] dark:bg-black dark:bg-grid-white/[0.2] overflow-hidden flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Get to Know Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Explore the experts who will elevate your skills and knowledge on your learning journey.</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors} />
                </div>
            </div>
        </div>
    )
}

export default Instructors;