import { useState } from "react"
import { Link } from "react-router-dom"

const Create = () => {

    const [eduCount, setEduCount] = useState(0)
    const [expCount, setExpCount] = useState(0)

    const EducationItem = () => (
        <div className="flex mt-8 items-stretch">
            <div className="flex-grow">
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Degree</label>
                    <input type="text" id="name" name="name" placeholder="Name of Bachelor's/Master's/PhD" 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Institution</label>
                    <input type="text" id="name" name="name" placeholder="Name of University/College/School" 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Location</label>
                    <input type="text" id="name" name="name" placeholder="City and Country of Institution" 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="block font-medium text-gray-700">Grade</label>
                    <input type="text" id="name" name="name" placeholder="CGPA" 
                        className="block mt-1 w-full max-w-[50%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4">
                    <div>
                        <label for="name" className="font-medium text-gray-700">Start Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name="name" placeholder="MM" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                            <input type="text" id="name" name="name" placeholder="YYYY" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                    </div>
                    <div>
                        <label for="name" className="font-medium text-gray-700">End Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name="name" placeholder="MM" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                            <input type="text" id="name" name="name" placeholder="YYYY" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label for="message" className="block font-medium text-gray-700">Description</label>
                    <textarea id="message" name="message" rows="4" placeholder="Activities, courses, leadership positions, ..." 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    ></textarea>
                </div>
            </div>

            <div className="flex items-center border-l border-red-600/50 ml-6 pl-4 my-2">
                <i onClick={() => setEduCount(eduCount - 1)} className="fa fa-trash text-red-600 text-2xl cursor-pointer"></i>
            </div>

        </div>
    )

    const ExperienceItem = () => (
        <div className="flex mt-8 items-stretch">
            <div className="flex-grow">
                <div className="">
                    <label for="name" className="font-medium text-gray-700">Title</label>
                    <input type="text" id="name" name="name" placeholder="Job Title" 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Company</label>
                    <input type="text" id="name" name="name" placeholder="Name of Company" 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Location</label>
                    <input type="text" id="name" name="name" placeholder="City and Country of Institution" 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4">
                    <div>
                        <label for="name" className="font-medium text-gray-700">Start Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name="name" placeholder="MM" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                            <input type="text" id="name" name="name" placeholder="YYYY" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                    </div>
                    <div>
                        <label for="name" className="font-medium text-gray-700">End Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name="name" placeholder="MM" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                            <input type="text" id="name" name="name" placeholder="YYYY" 
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label for="message" className="block font-medium text-gray-700">Description</label>
                    <textarea id="message" name="message" rows="4" placeholder="Goals achieved, tasks completed, leadership positions, ..." 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    ></textarea>
                </div>
            </div>

            <div className="flex items-center border-l border-red-600/50 ml-6 pl-4 my-2">
                <i onClick={() => setExpCount(expCount - 1)} className="fa fa-trash text-red-600 text-2xl cursor-pointer"></i>
            </div>

        </div>
    )

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
            <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow pt-12 pb-24">
                <p className="text-3xl font-display text-primary">Create a New Resume</p>

                <form className="max-w-3xl flex flex-col" onSubmit={e => e.preventDefault()}>
                    
                    <p className="mt-12 text-2xl font-display text-gray-800 border-b border-gray-800">Education</p>
                    {[...Array(eduCount).keys()].map((v,i) => <EducationItem key={i}/>)}
                    <button type="button" onClick={() => setEduCount(eduCount + 1)} className="mt-6 px-4 py-2 text-sm bg-green-300/60 text-green-800 font-medium border-green-600 border-dashed border-2 rounded-lg">
                        Add Education
                    </button>
                    
                    <p className="mt-12 text-2xl font-display text-gray-800 border-b border-gray-800">Experience</p>
                    {[...Array(expCount).keys()].map((v,i) => <ExperienceItem key={i}/>)}
                    <button type="button" onClick={() => setExpCount(expCount + 1)} className="mt-6 px-4 py-2 text-sm bg-green-300/60 text-green-800 font-medium border-green-600 border-dashed border-2 rounded-lg">
                        Add Experience
                    </button>

                    <button type="submit" className="mt-12 ml-auto w-max bg-primary text-white font-medium py-2 px-6 rounded-md">
                        Save & Generate
                    </button>

                </form>



            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    )
}

export default Create