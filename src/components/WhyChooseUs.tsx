"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const whyChooseUsContent = [
    {
        title: 'Why Choose Us?',
        description:
            "Choose us for expert-led courses crafted by industry leaders, offering practical skills for all levels. With flexible, self-paced learning, hands-on projects, and lifetime access to resources, you'll continue to grow and succeed long after the course ends.",
    },
    {
        title: 'Expert-Led Instruction',
        description:
            'Learn from industry-leading experts who bring real-world experience to the virtual classroom. Our courses are designed and taught by top professionals, ensuring you gain practical knowledge that can be applied immediately.',
    },
    {
        title: 'Comprehensive Course Catalog',
        description:
            "Explore a wide range of courses that cater to all skill levels, from beginners to advanced learners. Our diverse offerings ensure that you find the right path to meet your educational goals, whether you're upskilling or pursuing a new career.",
    },
    {
        title: 'Flexible Learning Options',
        description:
            'Our platform offers flexible schedules and self-paced learning options, allowing you to study on your own terms. Balance your education with your personal and professional life, without compromising on the quality of learning.',
    },
    {
        title: 'Hands-On Learning Experience',
        description:
            'Engage in practical, hands-on projects that simulate real-world scenarios. Our interactive assignments and case studies ensure that you apply what you learn, building confidence and competence along the way.',
    },
    {
        title: 'Personalized Learning Journey',
        description:
            'We understand that every learner is unique. Our personalized learning paths and mentorship opportunities help tailor the experience to your individual needs, ensuring you get the most out of your education.',
    },
    {
        title: 'Lifetime Access to Resources',
        description:
            'Once enrolled, you get lifetime access to all course materials and resources. This allows you to revisit lessons and stay updated with any new content or industry developments, ensuring your skills remain sharp and relevant.',
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={whyChooseUsContent} />
        </div>
    )
}

export default WhyChooseUs;