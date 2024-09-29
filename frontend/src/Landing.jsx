import { Link } from "react-router-dom"

const Landing = () => {

    return (
        <>
            <nav className="max-w-6xl w-full mx-auto flex flex-row items-center justify-between h-[72px] text-white z-10">
                <Link to="/"><span className="text-2xl font-display font-bold">
                    LaTeX<span className="text-[#acf4e8]">Resume</span></span>
                </Link>
                <div className="flex flex-row items-center gap-x-6 font-medium">
                    <a href="#features">Features</a>
                    <a href="#contact-us">Contact Us</a>
                    <Link to="/signup" className="px-4 py-1 border border-white/25 bg-secondary text-white rounded-lg font-medium">Sign Up</Link>
                </div>
            </nav>
            <div className="bg-gradient-to-tl from-secondary to-primary -mt-[72px] pt-[72px] text-white">
                <div className="max-w-6xl mx-auto flex flex-col items-center py-24">
                    <p className="text-6xl font-display opacity-95 text-center">
                        Generate Your Professional LaTeX Resume Effortlessly
                    </p>
                    <p className="mt-4 text-xl font-serif opacity-80 text-center max-w-lg">
                        Create a beautiful, industry-standard resume with our easy-to-use LaTeX resume builder.
                    </p>
                    <Link to="/signup" className="px-8 py-3 mt-8 text-white bg-secondary font-bold rounded-full shadow-md shadow-[#2d7e7045]">
                        Start Building
                    </Link>
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col items-center pt-[120px] pb-[160px]" id="features">
                <p className="text-5xl font-display opacity-95 text-center text-[#4A95E0]">
                    Features
                </p>
                <div className="grid grid-cols-3 gap-3 w-full mt-12">
                    <div className="p-6 flex flex-col items-center rounded-lg shadow-md shadow-[rgba(0,0,0,0.09)]">
                        <i className="fas fa-file-alt text-[#4A95E0] text-6xl"></i>
                        <h3 className="mt-6 font-display text-xl " >Industry-Standard Templates</h3>
                        <p className="mt-1 font-serif text-lg text-center opacity-90">Choose from professional LaTeX templates that meet industry standards.</p>
                    </div>
                    <div className="p-6 flex flex-col items-center rounded-lg shadow-md shadow-[rgba(0,0,0,0.09)]">
                        <i className="fas fa-edit text-[#4A95E0] text-6xl"></i>
                        <h3 className="mt-6 font-display text-xl " >User-Friendly Interface</h3>
                        <p className="mt-1 font-serif text-lg text-center opacity-90">Simple forms and intuitive design make it easy to build your resume step-by-step.</p>
                    </div>
                    <div className="p-6 flex flex-col items-center rounded-lg shadow-md shadow-[rgba(0,0,0,0.09)]">
                        <i className="fas fa-file-pdf text-[#4A95E0] text-6xl"></i>
                        <h3 className="mt-6 font-display text-xl " >Export to PDF</h3>
                        <p className="mt-1 font-serif text-lg text-center opacity-90">Generate a high-quality PDF of your resume that is ready to use.</p>
                    </div>
                </div>
            </div>
            <div className="bg-primary/10" id="contact-us">
                <div className="max-w-6xl mx-auto flex flex-col items-center pt-[80px] pb-[120px]">
                    <p className="text-5xl font-display opacity-95 text-center text-[#4A95E0]">
                        Contact Us
                    </p>
                    <form id="contact-form" className="p-8 mt-8 bg-white rounded-lg shadow-md shadow-[rgba(0,0,0,0.09)] max-w-2xl w-full">
                        <div className="">
                            <label for="name" className="block font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <div className="mt-6">
                            <label for="email" className="block font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@doe.com" required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <div className="mt-6">
                            <label for="message" className="block font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Hello! I would like to say..." required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                            ></textarea>
                        </div>
                        <button type="submit" className="mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    )
}

export default Landing
