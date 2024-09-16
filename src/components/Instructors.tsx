'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: 'Travis Head',
        designation: 'Python Expert',
        image:
            'https://tse3.mm.bing.net/th?id=OIP.WXfd-Kjc_gfv-Cy3WUDC5gHaE_&pid=Api&P=0&h=220',
    },
    {
        id: 2,
        name: 'Dawid Warner',
        designation: 'Frontend Expert',
        image:
            'https://tse2.mm.bing.net/th?id=OIP.HutR8DeHsF04QUw8Y0vTjwHaEK&pid=Api&P=0&h=220',
    },
    {
        id: 3,
        name: 'Mitchell Marsh',
        designation: 'Database Expert',
        image:
            'https://tse3.mm.bing.net/th?id=OIF.E6iFRJmbX5rHn%2buDC0bTNA&pid=Api&P=0&h=220',
    },
    {
        id: 4,
        name: 'Steve Smith',
        designation: 'Backend Expert',
        image:
            'https://tse2.mm.bing.net/th?id=OIP.e3tKqSRN567IYrQRvhZY8wHaFj&pid=Api&P=0&h=220',
    },
    {
        id: 5,
        name: 'Glenn Maxwell',
        designation: 'Full Stack Expert',
        image:
            'https://tse1.mm.bing.net/th?id=OIP.UKnnu0oiRdgG2wCP-hznhQHaEK&pid=Api&P=0&h=220',
    },
    {
        id: 6,
        name: 'Marcus Stoinis',
        designation: 'SQA Expert',
        image:
            'https://tse2.mm.bing.net/th?id=OIP.uZFtK1cMC6tbQ9d7VPGTFAHaJQ&pid=Api&P=0&h=220',
    },
    {
        id: 7,
        name: 'Mitchell Starc',
        designation: 'Cloud Computing Expert',
        image:
            'https://tse3.mm.bing.net/th?id=OIP.xSnA0twlhZK6CI5uTmMFsQAAAA&pid=Api&P=0&h=220',
    },
    {
        id: 8,
        name: 'Patrick Cummins',
        designation: 'Project Management Expert',
        image:
            'https://tse3.mm.bing.net/th?id=OIP.bLoE04wVW2ELfeSUiKgRFgHaE8&pid=Api&P=0&h=220',
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