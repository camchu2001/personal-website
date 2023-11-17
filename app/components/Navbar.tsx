"use client"
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Home from "../../public/home.svg"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-[#2F4858] bg-opacity-100 backdrop-blur-[0.5rem]'>
            <div className="flex container lg:py-4 flex-wrap items-center justify-around lg:justify-between mx-auto px-4 py-2">
                {/* first line */}
                <div className="mt-2">
                    <div className="grid grid-cols-12 md:grid-cols-4">
                        <Link href={"/"} className='col-span-2'>
                            <Image src={Home} alt='Homepage' width={70} height={50} className='ml-2 md:w-[90px] lg:w-[120px]' />
                        </Link>

                        <div className="col-span-8"></div>

                        <div className="mobile-menu block mt-3 md:hidden col-span-2">
                            {!navbarOpen ? (
                                <button
                                    onClick={() => setNavbarOpen(true)}
                                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                >
                                    <Bars3Icon className="h-5 w-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setNavbarOpen(false)}
                                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* second line */}
                <div className={`menu mt-2 ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto flex justify-center`} id='navbar'>
                    <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li>
                            <Link href={"#experience"} className='block py-2 md:pl-3 pr-4 text-[#FFC57C] font-semibold md:text-2xl text-xl rounded md:p-0 hover:text-white '>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link href={"#projects"} className='block py-2 md:pl-3 pr-4 text-[#FFC57C] font-semibold md:text-2xl text-xl rounded md:p-0 hover:text-white '>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/camchu2001">
                                <Image src={GithubIcon} alt="Github Icon" className='ml-0' />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/cam-chu/">
                                <Image src={LinkedinIcon} alt="Linkedin Icon" className='ml-4' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
