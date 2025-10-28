import { useContext } from "react"
import FormContext from "./FormContext"

export default function ExperienceItem({ val, idx }) {
    const {
        handleRemoveEducation,
        handleUpdateEducation
    } = useContext(FormContext)

    return (
        <div className="flex mt-8 items-stretch">
            <div className="flex-grow">
                <div className="">
                    <label htmlFor="name" className="font-medium text-gray-700">Position</label>
                    <input type="text" id="name" name={`position${idx}`} placeholder="Position"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.position} onChange={(e) => handleUpdateExperience(idx, "position", e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="name" className="font-medium text-gray-700">Company</label>
                    <input type="text" id="name" name={`company${idx}`} placeholder="Company"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.company} onChange={(e) => handleUpdateExperience(idx, "company", e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="name" className="font-medium text-gray-700">Location</label>
                    <input type="text" id="name" name={`exp_location${idx}`} placeholder="Location of School"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.location} onChange={(e) => handleUpdateExperience(idx, "location", e.target.value)}
                    />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4">
                    <div>
                        <label htmlFor="name" className="font-medium text-gray-700">Start Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`start_month${idx}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.start_month} onChange={(e) => handleUpdateExperience(idx, "start_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`start_year${idx}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.start_year} onChange={(e) => handleUpdateExperience(idx, "start_year", e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="font-medium text-gray-700">End Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`end_month${idx}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.end_month} onChange={(e) => handleUpdateExperience(idx, "end_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`end_year${idx}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.end_year} onChange={(e) => handleUpdateExperience(idx, "end_year", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="message" className="block font-medium text-gray-700">Description</label>
                    <textarea id="message" name={`exp_description${idx}`} rows={4} placeholder="Goals achieved, tasks completed, leadership positions, ..." value={val.description} onChange={(e) => handleUpdateExperience(idx, "description", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    ></textarea>
                </div>
            </div>

            <div className="flex border-red-600/50 pl-4 my-2">
                <i onClick={() => handleRemoveExperience(idx)} className="fa fa-trash text-secondary text-2xl cursor-pointer"></i>
            </div>

        </div>
    )
}