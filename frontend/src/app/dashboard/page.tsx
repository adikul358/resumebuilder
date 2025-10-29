"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Avatar from "../../components/Avatar";
import ResumeCard from "@/components/ResumeCard";
import { UserType, MetadataType } from "../../types";
import { useRouter } from "next/navigation";

export default function UserCard() {
    const [loading, setLoading] = useState<Boolean>(true)
    const [user, setUser] = useState<UserType>({} as UserType)
    const [metadata, setMetadata] = useState<MetadataType>({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        website: "",
    } as MetadataType)
    const [resumes, setResumes] = useState([])
    const handleName = () => { }
    const handleEmail = () => { }
    const handlePhone = () => { }
    const handleLinkedin = () => { }
    const handleGithub = () => { }
    const handleWebsite = () => { }
    const handleSignOut = () => { window.localStorage.clear(); router.push("/signin") }

    const router = useRouter()

    useEffect(() => {

        (async () => {

            if (!(window.localStorage.getItem("token"))) {
                router.push("/signin")
            }
            
            setUser({
                email: window.localStorage.getItem("email"),
                name: window.localStorage.getItem("name"),
                profilePicture: window.localStorage.getItem("profilePicture")
            })
            setMetadata({
                email: window.localStorage.getItem("email"),
                name: window.localStorage.getItem("name")
            } as MetadataType)
            try {
                const res = await fetch("http://localhost:8080/api/resumes", {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${window.localStorage.getItem("token")}` },
                })
                const resJson = await res.json()
                console.log(resJson)
                setResumes(Array.isArray(resJson) ? resJson : [])
                setLoading(!Array.isArray(resJson))
            } catch (e) {}
        })()

    }, [])

    return !loading ? (
        <>
            <div className="bg-gradient-to-l from-secondary to-primary">
                <nav className="max-w-6xl w-full mx-auto px-4 flex flex-row items-center justify-between h-[72px] text-white z-10">
                    <Link href="/dashboard"><span className="text-2xl font-display font-bold">
                        LaTeX<span className="text-[#acf4e8]">Resume</span></span>
                    </Link>
                    <div className="flex flex-row items-center gap-x-6 font-medium">
                        <Avatar />
                    </div>
                </nav>
            </div>
            <div className="bg-primary/5 py-12 px-4">
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:gap-x-12">
                    <div>
                        <p className="text-3xl font-display text-primary">Your Profile</p>
                        <p className="text-lg font-serif mt-1 text-gray-600">Edit the basic details included in all resumes</p>
                    </div>
                    <form id="contact-form" className="flex-grow flex flex-col" >
                        <div className="mt-3">
                            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required value={metadata.name || ""} 
                            onChange={handleName}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                            />
                        </div>
                        <div className="mt-4 grid md:grid-cols-2 md:gap-x-3">
                            <div>
                                <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" placeholder="john@doe.com" required value={metadata.email || ""} 
                                onChange={handleEmail}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="name" className="block font-medium text-gray-700">Phone</label>
                                <input type="text" id="name" name="name" placeholder="+91 99999 99999" required value={metadata.phone || ""} 
                                onChange={handlePhone}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-5 grid md:grid-cols-3 md:gap-x-3">
                            <div>
                                <label htmlFor="name" className="block font-medium text-gray-700">LinkedIn</label>
                                <input type="text" id="name" name="name" placeholder="Your LinkedIn Profile URL" required value={metadata.linkedin || ""} 
                                onChange={handleLinkedin}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block font-medium text-gray-700">Github</label>
                                <input type="text" id="name" name="name" placeholder="Your Github Profile URL" required value={metadata.github || ""} 
                                onChange={handleGithub}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block font-medium text-gray-700">Website</label>
                                <input type="text" id="name" name="name" placeholder="Your Personal Website URL" required value={metadata.website || ""} 
                                onChange={handleWebsite}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                                />
                            </div>
                        </div>

                        <button type="submit" className="mt-6 ml-auto w-max bg-primary text-white font-medium py-2 px-4 rounded-md">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <div className="max-w-6xl w-full mx-auto px-4 flex flex-col flex-grow pt-12 pb-24">
                <p className="text-3xl font-display text-primary">New Resume</p>
                <div className="grid grid-cols-4 w-full gap-x-6 gap-y-12 mt-6">
                    <Link href="/create">
                        <div className="w-full aspect-[0.707] shadow bg-primary/25 flex flex-col items-center justify-center hover:bg-primary/40">
                            <i className="fa fa-plus text-primary text-8xl" />
                            <p className="text-lg font-medium font-serif mt-3 text-primary">Create New Resume</p>
                        </div>
                    </Link>
                    {resumes.map((v, i) => <ResumeCard key={i} data={v} />)}
                </div>
            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    ) : <></>;
}

