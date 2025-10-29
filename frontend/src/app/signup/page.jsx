"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { validateEmail } from "@/lib/index"

const SignUp = () => {
    const router = useRouter()

    const submitForm = async (e) => {
        e.preventDefault()

        // Form validation
        setFormError("")
        if (!formName) {
            setTimeout(() => setFormError("Empty name."), 300)
            return -1
        }
        if (!formEmail) {
            setTimeout(() => setFormError("Empty email."), 300)
            return -1
        }
        if (!formPassword) {
            setTimeout(() => setFormError("Empty password."), 300)
            return -1
        }
        if (!validateEmail(formEmail)) {
            setTimeout(() => setFormError("Invalid email."), 300)
            return -1
        }
        if (formPassword !== formConfirmPassword) {
            setTimeout(() => setFormError("Passwords do not match."), 300)
            return -1
        }

        const res = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                credentials: "include",
            },
            body: JSON.stringify({ name: formName, email: formEmail, password: formPassword })
        })
        const userData = await res.json()
        window.localStorage.setItem("token", userData.token || "")
        window.localStorage.setItem("userId", userData.userId || "")
        window.localStorage.setItem("email", userData.email || "")
        window.localStorage.setItem("name", userData.name || "")
        window.localStorage.setItem("profilePicture", userData.profilePicture || "")

        router.push("/dashboard")
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI; // e.g., http://localhost:3000/oauth/callback
    useEffect(() => {
        window.addEventListener("message", async (event) => {
            if (event.data.type === "google_oauth_success") {
                try {
                    console.log(event.data.code)
                    const res = await fetch("http://localhost:8080/api/auth/google", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ code: event.data.code, redirectUri }),
                    })
                    const userData = await res.json()
                    const token = userData.token
                    document.cookie = `token=${token}` // Update expiry
                    window.localStorage.setItem("token", userData.token)
                    window.localStorage.setItem("userId", userData.userId)
                    window.localStorage.setItem("email", userData.email)
                    window.localStorage.setItem("name", userData.name)
                    window.localStorage.setItem("profilePicture", userData.profilePicture.slice(0, -6) || "")
                    router.push('/dashboard')
                } catch (err) {
                    console.error(err)
                }
            }
        });
    }, [])
    const googleSignUp = () => {
        const scope = encodeURIComponent("openid profile email");
        const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&access_type=offline&prompt=consent`;
        const strWindowFeatures = `toolbar=no, menubar=no, width=600, height=700, top=${(screen.height/2)-350}, left=${(screen.width/2)-300}`;
        window.open(url, "GoogleOAuthPopup", strWindowFeatures)
    };

    const [formError, setFormError] = useState("")

    const [formName, setFormName] = useState("Rohit Gupta")
    const [formEmail, setFormEmail] = useState("rg2121@srmist.edu.in")
    const [formPassword, setFormPassword] = useState("password")
    const [formConfirmPassword, setFormConfirmPassword] = useState("password")
    const handleName = (e) => setFormName(e.target.value)
    const handleEmail = (e) => setFormEmail(e.target.value)
    const handlePassword = (e) => setFormPassword(e.target.value)
    const handleConfirmPassword = (e) => setFormConfirmPassword(e.target.value)

    return (
        <>
            <div className="bg-gradient-to-tl from-secondary to-primary flex-grow flex flex-row  justify-center pt-[80px] pb-[120px]">
                <div className="max-w-6xl flex-grow mx-auto flex flex-col items-center">
                    <Link href="/"><span className="text-2xl font-display font-bold text-white">
                        LaTeX<span className="text-[#acf4e8]">Resume</span></span>
                    </Link>
                    <form method="POST" id="contact-form" className="flex flex-col items-center mx-auto mt-8 max-w-xl w-full p-8 bg-white/80 rounded-lg shadow-md shadow-[rgba(0,0,0,0.09)]">
                        <p className="text-3xl font-display opacity-95 text-center text-primary">
                            Sign Up
                        </p>
                        <div className="w-full mt-12">
                            <label htmlFor="name" className="block font-medium">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required value={formName} onChange={handleName}
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm bg-white/95"
                            />
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="email" className="block font-medium">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@doe.com" required value={formEmail} onChange={handleEmail}
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm bg-white/95"
                            />
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="password" className="block font-medium">Password</label>
                            <input type="password" id="password" name="password" placeholder="********" required value={formPassword} onChange={handlePassword}
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm bg-white/95"
                            />
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="confirm-password" className="block font-medium">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirmPassword" placeholder="********" required value={formConfirmPassword} onChange={handleConfirmPassword}
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm bg-white/95"
                            />
                        </div>
                        <span className="text-red-700 mt-3">{formError}</span>
                        <button onClick={submitForm} type="submit" className="mt-6 w-full bg-primary border-primary border-2 text-white font-semibold py-2 px-4 rounded-lg">
                            Sign Up
                        </button>
                        <button onClick={googleSignUp} className="flex items-center justify-center cursor-pointer mt-6 w-full bg-white border-primary text-primary border-2 font-semibold py-2 px-4 rounded-lg">
                            <img src="/google.svg" alt="" className="h-6 mr-3" />
                            Sign Up with Google
                        </button>
                        <span className="text-center mt-4">
                            Already a user?
                            <Link href="/signin" className="text-primary hover:underline"> Sign in</Link>
                        </span>
                    </form>
                </div>
            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    )
}

export default SignUp
