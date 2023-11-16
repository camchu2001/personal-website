import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Home from "../../public/home.svg"

export const Navbar = () => {
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-[#2F4858] bg-opacity-100 backdrop-blur-[0.5rem]'>
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"}>
                    <Image src={Home} alt='Homepage' width={70} height={50} />
                </Link>
                <div className="menu md:block mb:w-auto" id='navbar'>
                    <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li>
                            <Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#FFC57C] sm:text-xl rounded md:p-0 hover:text-white '>
                                My Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/camchu2001">
                                <Image src={GithubIcon} alt="Github Icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/cam-chu/">
                                <Image src={LinkedinIcon} alt="Linkedin Icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
