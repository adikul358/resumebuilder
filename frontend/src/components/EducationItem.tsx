import { useContext } from "react"
import FormContext from "./FormContext"

export default function EducationItem({ val, idx }) {
    const {
        handleRemoveEducation,
        handleUpdateEducation
    } = useContext(FormContext)

    return (
        <div className="flex mt-8 items-stretch">
            <div className="flex-grow">
                <div className="mt-3">
                    <label htmlFor="name" className="font-medium text-gray-700">Degree</label>
                    <input key={idx} type="text" id="name" name={`degree${idx}`} placeholder="Name of Bachelor's/Master's/PhD" value={val.degree} onChange={(e) => handleUpdateEducation(idx, "degree", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="name" className="font-medium text-gray-700">School</label>
                    <input key={idx} type="text" id="name" name={`school${idx}`} placeholder="Name of University/College/School" value={val.school} onChange={(e) => handleUpdateEducation(idx, "school", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="name" className="font-medium text-gray-700">Location</label>
                    <input key={idx} type="text" id="name" name={`location${idx}`} placeholder="City and Country of School" value={val.location} onChange={(e) => handleUpdateEducation(idx, "location", e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm"
                    />
                </div>
                {/* <div className="mt-3">
                    <label htmlFor="name" className="block font-medium text-gray-700">Grade</label>
                    <input type="text" id="name" name={`grade${idx}`} placeholder="CGPA" 
                        className="block mt-1 w-full max-w-[50%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" 
                    />
                </div> */}
                <div className="mt-3 grid grid-cols-2 gap-x-4">
                    <div>
                        <label htmlFor="name" className="font-medium text-gray-700">Start Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`start_month${idx}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.start_month} onChange={(e) => handleUpdateEducation(idx, "start_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`start_year${idx}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.start_year} onChange={(e) => handleUpdateEducation(idx, "start_year", e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="font-medium text-gray-700">End Date</label>
                        <div className="flex items-center gap-x-3 max-w-[200px]">
                            <input type="text" id="name" name={`end_month${idx}`} placeholder="MM"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.end_month} onChange={(e) => handleUpdateEducation(idx, "end_month", e.target.value)}
                            />
                            <input type="text" id="name" name={`end_year${idx}`} placeholder="YYYY"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.end_year} onChange={(e) => handleUpdateEducation(idx, "end_year", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="message" className="block font-medium text-gray-700">Description</label>
                    <textarea id="message" rows={4} placeholder="Activities, courses, leadership positions, ..."
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/75 focus:border-primary/75 sm:text-sm" value={val.description} onChange={(e) => handleUpdateEducation(idx, "description", e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="flex border-red-600/50 pl-4 my-2">
                <i onClick={() => handleRemoveEducation(idx)} className="fa fa-trash text-secondary text-2xl cursor-pointer"></i>
            </div>

        </div>
    )
}