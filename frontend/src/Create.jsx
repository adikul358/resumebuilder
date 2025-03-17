import { useState, useReducer, createContext, useContext } from "react"
import { Link } from "react-router-dom"

const ReducerContext = createContext()

const ACTIONS = {
    ADD_EDUCATION: 'ADD_EDUCATION',
    UPDATE_EDUCATION: 'UPDATE_EDUCATION',
    REMOVE_EDUCATION: 'REMOVE_EDUCATION',
    ADD_EXPERIENCE: 'ADD_EXPERIENCE',
    UPDATE_EXPERIENCE: 'UPDATE_EXPERIENCE',
    REMOVE_EXPERIENCE: 'REMOVE_EXPERIENCE'
};

const formReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_EDUCATION:
            return {
                ...state,
                education: [...state.education, { institution: '', degree: '', location: '', start_month: '', start_year: '', end_month: '', end_year: '', description: '' }]
            };

        case ACTIONS.UPDATE_EDUCATION:
            return {
                ...state,
                education: state.education.map((item, i) =>
                    i === action.payload.id
                        ? { ...item, [action.payload.field]: action.payload.value }
                        : item
                )
            };

        case ACTIONS.REMOVE_EDUCATION:
            return {
                ...state,
                education: state.education.splice(action.id, 1)
            };

        case ACTIONS.ADD_EXPERIENCE:
            return {
                ...state,
                experience: [...state.experience, { company: '', title: '', location: '', start_month: '', start_year: '', end_month: '', end_year: '', description: '' }]
            };

        case ACTIONS.UPDATE_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.map((item, i) =>
                    i === action.payload.id
                        ? { ...item, [action.payload.field]: action.payload.value }
                        : item
                )
            };

        case ACTIONS.REMOVE_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.splice(action.id, 1)
            };

        case "SET":
            return action.payload;

        default:
            return state;
    }
}

const EducationItem = ({ sno }) => {
    const { handleUpdateEducation, state, handleRemoveEducation } = useContext(ReducerContext)
    return (
        <div className="flex mt-8 items-stretch">
            <div className="flex-grow">
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Degree</label>
                    <input type="text" id="name" name={`degree${sno}`} placeholder="Name of Bachelor's/Master's/PhD" value={state.education[sno].degree} onChange={(e) => handleUpdateEducation(sno, "degree", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Institution</label>
                    <input type="text" id="name" name={`institute${sno}`} placeholder="Name of University/College/School" value={state.education[sno].institution} onChange={(e) => handleUpdateEducation(sno, "institution", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Location</label>
                    <input type="text" id="name" name={`location${sno}`} placeholder="City and Country of Institution" value={state.education[sno].location} onChange={(e) => handleUpdateEducation(sno, "location", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    />
                </div>
                {/* <div className="mt-3">
                    <label for="name" className="block font-medium text-gray-700">Grade</label>
                    <input type="text" id="name" name={`grade${sno}`} placeholder="CGPA" 
                        className="block mt-1 w-full max-w-[50%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div> */}
                <div className="mt-3 grid grid-cols-2 gap-x-4">
                    <div>
                        <label for="name" className="font-medium text-gray-700">Start Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`start_month${sno}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.education[sno].start_month} onChange={(e) => handleUpdateEducation(sno, "start_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`start_year${sno}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.education[sno].start_year} onChange={(e) => handleUpdateEducation(sno, "start_year", e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label for="name" className="font-medium text-gray-700">End Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`end_month${sno}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.education[sno].end_month} onChange={(e) => handleUpdateEducation(sno, "end_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`end_year${sno}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.education[sno].end_year} onChange={(e) => handleUpdateEducation(sno, "end_year", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label for="message" className="block font-medium text-gray-700">Description</label>
                    <textarea id="message" rows="4" placeholder="Activities, courses, leadership positions, ..."
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.education[sno].description} onChange={(e) => handleUpdateEducation(sno, "description", e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="flex border-red-600/50 pl-4 my-2">
                <i onClick={() => handleRemoveEducation(sno)} className="fa fa-trash text-secondary text-2xl cursor-pointer"></i>
            </div>

        </div>
    )
}

const ExperienceItem = ({ sno }) => {
    const { handleUpdateExperience, state, handleRemoveExperience } = useContext(ReducerContext)
    return (
        <div className="flex mt-8 items-stretch">
            <div className="flex-grow">
                <div className="">
                    <label for="name" className="font-medium text-gray-700">Title</label>
                    <input type="text" id="name" name={`title${sno}`} placeholder="Job Title"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].title} onChange={(e) => handleUpdateExperience(sno, "title", e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Company</label>
                    <input type="text" id="name" name={`company${sno}`} placeholder="Name of Company"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].company} onChange={(e) => handleUpdateExperience(sno, "company", e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label for="name" className="font-medium text-gray-700">Location</label>
                    <input type="text" id="name" name={`exp_location${sno}`} placeholder="City and Country of Institution"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].location} onChange={(e) => handleUpdateExperience(sno, "location", e.target.value)}
                    />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4">
                    <div>
                        <label for="name" className="font-medium text-gray-700">Start Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`start_month${sno}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].start_month} onChange={(e) => handleUpdateExperience(sno, "start_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`start_year${sno}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].start_year} onChange={(e) => handleUpdateExperience(sno, "start_year", e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label for="name" className="font-medium text-gray-700">End Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`end_month${sno}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].end_month} onChange={(e) => handleUpdateExperience(sno, "end_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`end_year${sno}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={state.experience[sno].end_year} onChange={(e) => handleUpdateExperience(sno, "end_year", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label for="message" className="block font-medium text-gray-700">Description</label>
                    <textarea id="message" name={`exp_description${sno}`} rows="4" placeholder="Goals achieved, tasks completed, leadership positions, ..." value={state.experience[sno].description} onChange={(e) => handleUpdateExperience(sno, "description", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    ></textarea>
                </div>
            </div>

            <div className="flex border-red-600/50 pl-4 my-2">
                <i onClick={() => handleRemoveExperience(sno)} className="fa fa-trash text-secondary text-2xl cursor-pointer"></i>
            </div>

        </div>
    )
}


const Create = () => {
    const initialState = { education: [], experience: [] }
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleAddEducation = () => {
        dispatch({ type: ACTIONS.ADD_EDUCATION });
    };
    const handleUpdateEducation = (id, field, value) => {
        dispatch({ type: ACTIONS.UPDATE_EDUCATION, payload: { id, field, value } });
    };
    const handleRemoveEducation = (id) => {
        dispatch({ type: ACTIONS.REMOVE_EDUCATION, id });
    };
    const handleAddExperience = () => {
        dispatch({ type: ACTIONS.ADD_EXPERIENCE });
    };
    const handleUpdateExperience = (id, field, value) => {
        dispatch({ type: ACTIONS.UPDATE_EXPERIENCE, payload: { id, field, value } });
    };
    const handleRemoveExperience = (id) => {
        dispatch({ type: ACTIONS.REMOVE_EXPERIENCE, id });
    };

    const reducers = {
        state,
        handleUpdateEducation,
        handleRemoveEducation,
        handleUpdateExperience,
        handleRemoveExperience,
    }
    const handleForm = async (e) => {
        e.preventDefault()
        let t = { ...state }
        t.education = [ ...state.education ]
        t.experience = [ ...state.experience ]
        t.education.forEach(v => {
            v["description"] = v.description.split("\n").join("\\\\")
            v["start_date"] = v.start_month + "/" + v.start_year
            delete v.start_month
            delete v.start_year
            v["end_date"] = v.end_month + "/" + v.end_year
            delete v.end_month
            delete v.end_year
        })
        t.experience.forEach(v => {
            v["description"] = v.description.split("\n").join("\\\\")
            v["start_date"] = v.start_month + "/" + v.start_year
            delete v.start_month
            delete v.start_year
            v["end_date"] = v.end_month + "/" + v.end_year
            delete v.end_month
            delete v.end_year
        })

        let res = await (await fetch("http://localhost:8080/metadata", { method: "GET" })).json()
        console.log(res)
        t.metadata = res
        console.log(t)

        res = fetch("http://localhost:8080/get-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t)
        }).then(res => res.blob())
            .then(blob => {
                var file = window.URL.createObjectURL(blob);
                window.open(file, '_blank')
            });

        console.dir(t)
    }

    const populate = () => dispatch({type: "SET", payload: {
        "education": [
            {
                "institution": "SRM Institute of Technology","degree": "Bachelor's of Technology, Computer Science","location": "Chennai","description": "GPA: 9.4\nCourses: Advanced Programming Practice, Computer Architecture, Operating Systems","start_month": "08","start_year": "2023","end_month": "08","end_year": "2027"
            }
        ],
        "experience": [
            {
                "company": "Skilzen","title": "Project Manager","location": "Bengaluru","description": "- Led team of 8 developer interns and established Git version control guidelines.\n- Migrated the product’s codebase from JavaScript to TypeScript for large scale type safety and type documentation.\n- Worked closely with the founder to plan project timelines.\n- Developed automated CI/CD pipelines using Github Actions.","start_month": "06","start_year": "2022","end_month": "08","end_year": "2022"
            },
            {
                "company": "Skilzen","title": "Backend Engineer Intern","location": "Bengaluru","description": "- Wrote the backend for an ed-tech website using Next.js, Directus, and MySQL.\n- Designed database schemas for multiple products using MySQL Workbench.\n- Setup and maintained Directus and Ghost headless CMS for the content writers.\n- Designed and deployed AWS architecture for multiple production and internal programs using EC2, RDS, and R53.\n- Worked with the frontend team to adhere designs to modern web design guidelines.","start_month": "05","start_year": "2022","end_month": "06","end_year": "2022"
            }
        ],
        "metadata": {
            "name": "Aditya Kulshrestha","email": "ak2162@srmist.edu.in","phone": "+91 7840869129","linkedin": "adikul358","github": "adikul358","website": "adikul.dev"
        }
    }})

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
            <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow pt-12 pb-24 max-lg:px-3">

                <div className="flex items-center justify-between">
                    <p className="text-3xl font-display text-primary">Create a New Resume</p>
                    <button onClick={populate} className="px-6 py-2 bg-secondary text-white rounded-full">Test Data</button>
                </div>

                <ReducerContext.Provider value={reducers}>
                    <form className="max-w-3xl flex flex-col" onSubmit={handleForm}>

                        <p className="mt-12 text-2xl font-display text-gray-800 border-b border-gray-800">Education</p>

                        {state.education.map((v, i) => <EducationItem key={i} sno={i} />)}

                        <button type="button" onClick={handleAddEducation} className="mt-6 px-4 py-2 text-sm bg-secondary/40 hover:bg-secondary/60 text-[#197364] font-medium border-secondary border-2 rounded-lg">
                            <i className="fa fa-plus"></i> Add Education
                        </button>



                        <p className="mt-12 text-2xl font-display text-gray-800 border-b border-gray-800">Experience</p>

                        {state.experience.map((v, i) => <ExperienceItem key={i} sno={i} />)}

                        <button type="button" onClick={handleAddExperience} className="mt-6 px-4 py-2 text-sm bg-secondary/40 hover:bg-secondary/60 text-[#197364] font-medium border-secondary border-2 rounded-lg">
                            <i className="fa fa-plus"></i> Add Experience
                        </button>

                        <button type="submit" className="mt-12 ml-auto w-max bg-primary text-white font-medium py-2 px-6 rounded-md">
                            Save & Generate
                        </button>

                    </form>
                </ReducerContext.Provider>



            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    )
}

export default Create