"use client"

import { useReducer } from "react"
import Link from "next/link";
import { descToBullets } from "@/lib";
import FormContext, { FormContextType } from "@/components/FormContext";
import EducationItem from "@/components/EducationItem";
import ExperienceItem from "@/components/ExperienceItem";

const Create = () => {
    const initialData = {
        education: [], 
        experience: [],
        name: window.localStorage.getItem("name"),
        email: window.localStorage.getItem("email")
    }

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
                    education: [...state.education, { school: '', degree: '', location: '', start_month: '', start_year: '', end_month: '', end_year: '', description: '' }]
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
                    education: state.education.filter((_, i) => i !== action.id)
                };

            case ACTIONS.ADD_EXPERIENCE:
                return {
                    ...state,
                    experience: [...state.experience, { company: '', position: '', location: '', start_month: '', start_year: '', end_month: '', end_year: '', description: '' }]
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
                    experience: state.experience.filter((_, i) => i !== action.index)
                };

            case "SET":
                return action.payload;

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialData);

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
    const formContext = {
        handleUpdateEducation,
        handleRemoveEducation,
        handleUpdateExperience,
        handleRemoveExperience
    }

    const handleForm = async (e) => {
        e.preventDefault()
        let t = { ...state }
        t.education = [...state.education]
        t.experience = [...state.experience]
        // let res = await (await fetch("http://localhost:8080/metadata", { method: "GET" })).json()
        t.name = window.localStorage.getItem("name")
        t.email = window.localStorage.getItem("email")
        t.experience.map(v => v.details = descToBullets(v.description))

        const res = fetch("http://localhost:8080/api/resumes", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${window.localStorage.getItem("token")}` },
            body: JSON.stringify({ title: "Resume", content: JSON.stringify(t) })
        })
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "resume.pdf", { type: "application/pdf" });
                const url = URL.createObjectURL(file);
                window.open(url, "_blank");
            });
    }

    const populate = () => dispatch({
        type: "SET", payload: {
            "education": [
                {
                    "school": "SRM Institute of Technology", "degree": "Bachelor's of Technology, Computer Science", "location": "Chennai", "description": "GPA: 9.4\nCourses: Advanced Programming Practice, Computer Architecture, Operating Systems", "start_month": "08", "start_year": "2023", "end_month": "08", "end_year": "2027"
                }
            ],
            "experience": [
                {
                    "company": "Skilzen", "position": "Project Manager", "location": "Bengaluru", "description": "- Led team of 8 developer interns and established Git version control guidelines.\n- Migrated the product’s codebase from JavaScript to TypeScript for large scale type safety and type documentation.\n- Worked closely with the founder to plan project timelines.\n- Developed automated CI/CD pipelines using Github Actions.", "start_month": "06", "start_year": "2022", "end_month": "08", "end_year": "2022",
                },
                {
                    "company": "Skilzen", "position": "Backend Engineer Intern", "location": "Bengaluru", "description": "- Wrote the backend for an ed-tech website using Next.js, Directus, and MySQL.\n- Designed database schemas for multiple products using MySQL Workbench.\n- Setup and maintained Directus and Ghost headless CMS for the content writers.\n- Designed and deployed AWS architecture for multiple production and internal programs using EC2, RDS, and R53.\n- Worked with the frontend team to adhere designs to modern web design guidelines.", "start_month": "05", "start_year": "2022", "end_month": "06", "end_year": "2022"
                }
            ],
            "metadata": {
                "name": "Aditya Kulshrestha", "email": "ak2162@srmist.edu.in", "phone": "+91 7840869129", "linkedin": "adikul358", "github": "adikul358", "website": "adikul.dev"
            }
        }
    })

    return (
        <>
            <div className="bg-gradient-to-l from-secondary to-primary px-3">
                <nav className="max-w-6xl w-full mx-auto flex flex-row items-center justify-between h-[72px] text-white z-10">
                    <Link href="/dashboard"><span className="text-2xl font-display font-bold">
                        LaTeX<span className="text-[#acf4e8]">Resume</span></span>
                    </Link>
                    <div className="flex flex-row items-center gap-x-6 font-medium">
                        <Link href="/" className="px-4 py-1 border border-white text-white rounded-lg font-medium">Sign Out</Link>
                    </div>
                </nav>
            </div>
            <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow pt-12 pb-24 px-3">

                <div className="flex items-center justify-between">
                    <p className="text-3xl font-display text-primary">Create a New Resume</p>
                    <button onClick={populate} className="px-6 py-2 bg-secondary text-white rounded-full">Test Data</button>
                </div>

                <FormContext.Provider value={formContext as FormContextType}>
                    <form className="max-w-3xl flex flex-col" onSubmit={handleForm}>

                        <p className="mt-12 text-2xl font-display text-gray-800 border-b border-gray-800">Education</p>

                        {state.education.map((v, i) => <EducationItem val={v} key={i} idx={i} />)}

                        <button type="button" onClick={handleAddEducation} className="mt-6 px-4 py-2 text-sm bg-secondary/40 hover:bg-secondary/60 text-[#197364] font-medium border-secondary border-2 rounded-lg">
                            <i className="fa fa-plus"></i> Add Education
                        </button>



                        <p className="mt-12 text-2xl font-display text-gray-800 border-b border-gray-800">Experience</p>

                        {state.experience.map((v, i) => <ExperienceItem val={v} key={i} idx={i} />)}

                        <button type="button" onClick={handleAddExperience} className="mt-6 px-4 py-2 text-sm bg-secondary/40 hover:bg-secondary/60 text-[#197364] font-medium border-secondary border-2 rounded-lg">
                            <i className="fa fa-plus"></i> Add Experience
                        </button>

                        <button type="submit" className="mt-12 ml-auto w-max bg-primary text-white font-medium py-2 px-6 rounded-md">
                            Save & Generate
                        </button>

                    </form>
                </FormContext.Provider>

            </div>
            <footer className="bg-gray-700 text-white font-light text-sm py-6 text-center">
                Copyright &copy; 2024 LaTeX Resume Builder. All rights reserved.
            </footer>
        </>
    )
}

export default Create