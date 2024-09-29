import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        navigate("/dashboard")
    }

    return (
        <>
            <div className="bg-gradient-to-tl from-secondary to-primary flex-grow flex flex-row  justify-center pt-[80px] pb-[120px]">
                <div className="max-w-6xl flex-grow mx-auto flex flex-col items-center">
                    <Link to="/"><span className="text-2xl font-display font-bold text-white">
                        LaTeX<span className="text-[#acf4e8]">Resume</span></span>
                    </Link>
                    <form id="contact-form" className="flex flex-col items-center mx-auto mt-8 max-w-xl w-full p-8 bg-white/80 rounded-lg shadow-md shadow-[rgba(0,0,0,0.09)] ">
                        <p className="text-3xl font-display opacity-95 text-center text-primary">
                            Sign Up
                        </p>
                        <div className="w-full mt-12">
                            <label for="name" className="block font-medium">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <div className="w-full mt-4">
                            <label for="email" className="block font-medium">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@doe.com" required
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <div className="w-full mt-4">
                            <label for="password" className="block font-medium">Password</label>
                            <input type="password" id="password" name="password" placeholder="********" required
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <div className="w-full mt-4">
                            <label for="confirm-password" className="block font-medium">Confirm Password</label>
                            <input type="confirm-password" id="confirm-password" name="confirmPassword" placeholder="********" required
                                className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <button onClick={submitForm} type="submit" className="mt-6 w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg">
                            Sign Up
                        </button>
                        <span className="text-center mt-4">
                            Already a user? 
                            <Link to="/signin" className="text-primary hover:underline"> Sign in</Link>
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
