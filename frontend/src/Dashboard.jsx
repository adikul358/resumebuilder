import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <>
            <div className="bg-gradient-to-l from-secondary to-primary">
                <nav className="max-w-6xl w-full mx-auto flex flex-row items-center justify-between h-[72px] text-white z-10">
                    <Link to="/dashboard"><span className="text-2xl font-display font-bold">
                        LaTeX<span className="text-[#acf4e8]">Resume</span></span>
                    </Link>
                    <div className="flex flex-row items-center gap-x-6 font-medium">
                        <Link to="/" className="px-4 py-1 border border-white text-white rounded-lg font-medium">Sign Out</Link>
                    </div>
                </nav>
            </div>
            <div className="bg-primary/15 py-12">
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:gap-x-12">
                    <div>
                        <p className="text-3xl font-display text-primary">Your Profile</p>
                        <p className="text-lg font-serif mt-1 text-gray-600">Edit the basic details included in all resumes</p>
                    </div>
                    <form id="contact-form" className="flex-grow flex flex-col">
                        <div className="mt-3">
                            <label for="name" className="block font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                        <div className="mt-4 grid md:grid-cols-2 md:gap-x-3">
                            <div>
                                <label for="email" className="block font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" placeholder="john@doe.com" required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                                />
                            </div>
                            <div className="">
                                <label for="name" className="block font-medium text-gray-700">Phone</label>
                                <input type="number" id="name" name="name" placeholder="+91 99999 99999" required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                                />
                            </div>
                        </div>

                        <div className="mt-5 grid md:grid-cols-3 md:gap-x-3">
                            <div>
                                <label for="name" className="block font-medium text-gray-700">LinkedIn</label>
                                <input type="text" id="name" name="name" placeholder="Your LinkedIn Profile URL" required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                                />
                            </div>
                            <div>
                                <label for="name" className="block font-medium text-gray-700">Github</label>
                                <input type="text" id="name" name="name" placeholder="Your Github Profile URL" required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                                />
                            </div>
                            <div>
                                <label for="name" className="block font-medium text-gray-700">Website</label>
                                <input type="text" id="name" name="name" placeholder="Your Personal Website URL" required
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
            <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow pt-12 pb-24">
                <p className="text-3xl font-display text-primary">New Resume</p>
                <div className="grid grid-cols-4 w-full gap-x-6 gap-y-12 mt-6">
                    <Link to="/create">
                        <div className="w-full aspect-[0.707] shadow bg-primary/25 flex flex-col items-center justify-center hover:bg-primary/40">
                            <i className="fa fa-plus text-primary text-8xl" />
                            <p className="text-lg font-medium font-serif mt-3 text-primary">Create New Resume</p>
                        </div>
                    </Link>
                    <div>
                        <div className="w-full aspect-[0.707] shadow bg-gray-100 flex flex-col items-center justify-center relative group bg-cover bg-center" style={{backgroundImage: "url('/resume.png')"}}>
                            <div className="absolute w-full h-full inset-0 z-10 bg-black/20 text-primary text-3xl group-hover:flex items-center justify-center gap-x-3 hidden">
                                <button title="Edit" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button title="Download" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-file-download"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text-lg font-medium font-serif mt-3 text-black/80">Resume for Nyubya</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-medium  text-sm text-black/50">Last Modifed</p>
                            <p className="font-medium  text-sm text-black/50">18 Sep 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium  text-sm text-black/50">Created</p>
                            <p className="font-medium  text-sm text-black/50">8 Aug 2024</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full aspect-[0.707] shadow bg-gray-100 flex flex-col items-center justify-center relative group bg-cover bg-center" style={{backgroundImage: "url('/resume.png')"}}>
                            <div className="absolute w-full h-full inset-0 z-10 bg-black/20 text-primary text-3xl group-hover:flex items-center justify-center gap-x-3 hidden">
                                <button title="Edit" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button title="Download" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-file-download"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text-lg font-medium font-serif mt-3 text-black/80">Resume for Nyubya</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-medium  text-sm text-black/50">Last Modifed</p>
                            <p className="font-medium  text-sm text-black/50">18 Sep 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium  text-sm text-black/50">Created</p>
                            <p className="font-medium  text-sm text-black/50">8 Aug 2024</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full aspect-[0.707] shadow bg-gray-100 flex flex-col items-center justify-center relative group bg-cover bg-center" style={{backgroundImage: "url('/resume.png')"}}>
                            <div className="absolute w-full h-full inset-0 z-10 bg-black/20 text-primary text-3xl group-hover:flex items-center justify-center gap-x-3 hidden">
                                <button title="Edit" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button title="Download" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-file-download"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text-lg font-medium font-serif mt-3 text-black/80">Resume for Nyubya</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-medium  text-sm text-black/50">Last Modifed</p>
                            <p className="font-medium  text-sm text-black/50">18 Sep 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium  text-sm text-black/50">Created</p>
                            <p className="font-medium  text-sm text-black/50">8 Aug 2024</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full aspect-[0.707] shadow bg-gray-100 flex flex-col items-center justify-center relative group bg-cover bg-center" style={{backgroundImage: "url('/resume.png')"}}>
                            <div className="absolute w-full h-full inset-0 z-10 bg-black/20 text-primary text-3xl group-hover:flex items-center justify-center gap-x-3 hidden">
                                <button title="Edit" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button title="Download" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-file-download"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text-lg font-medium font-serif mt-3 text-black/80">Resume for Nyubya</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-medium  text-sm text-black/50">Last Modifed</p>
                            <p className="font-medium  text-sm text-black/50">18 Sep 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium  text-sm text-black/50">Created</p>
                            <p className="font-medium  text-sm text-black/50">8 Aug 2024</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full aspect-[0.707] shadow bg-gray-100 flex flex-col items-center justify-center relative group bg-cover bg-center" style={{backgroundImage: "url('/resume.png')"}}>
                            <div className="absolute w-full h-full inset-0 z-10 bg-black/20 text-primary text-3xl group-hover:flex items-center justify-center gap-x-3 hidden">
                                <button title="Edit" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button title="Download" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                                    <i className="fa fa-file-download"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text-lg font-medium font-serif mt-3 text-black/80">Resume for Nyubya</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="font-medium  text-sm text-black/50">Last Modifed</p>
                            <p className="font-medium  text-sm text-black/50">18 Sep 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium  text-sm text-black/50">Created</p>
                            <p className="font-medium  text-sm text-black/50">8 Aug 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    )
}

export default Dashboard