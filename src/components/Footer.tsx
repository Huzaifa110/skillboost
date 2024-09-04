function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                    Skill Boost is a leading platform committed to empowering learners in the tech industry. We cultivate skills from the basics, building a dynamic community of developers and tech enthusiasts.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a
                                href="/"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/courseS"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us On</h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Karachi, Pakistan</p>
                    <p>Karachi, 75160</p>
                    <p>Email: support@skillboost.com</p>
                    <p>Phone: (021) 3501-8424</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })} Skill Boost. All rights reserved.</p>

        </footer>
    )
}

export default Footer;