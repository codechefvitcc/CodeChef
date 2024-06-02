import React from 'react';

//CSS for instagram and linkedin icons
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">

                {/* Events Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">
                        Events
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <a className="hover:underline">
                                CodeQuest
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline">
                                Cook-off 2024
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline">
                                Decode DSA
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Links for Blogs */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">
                        Blogs
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <a className="hover:underline">
                                Blog 1
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline">
                                Blog 2
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Links for Team Leads showcase*/}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">
                        Our Team
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <a className="hover:underline">
                                2024-2025
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline">
                                2023-2024
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Icons for Socials */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="flex space-x-4">
                        <li><a href="https://www.instagram.com/codechef.vitc/" className="hover:underline"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/codechef-vitc/mycompany/" className="hover:underline"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
