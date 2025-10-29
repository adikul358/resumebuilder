import { fmtDate } from "@/lib"

export default function ResumeCard ({ data }) {
    const {id, title, createdAt, updatedAt} = data
    return (
        <div>
            <div className="w-full aspect-[0.707] shadow bg-blue-200 flex flex-col items-center justify-center relative group bg-cover bg-center" style={{ backgroundImage: `url('/generated/resume_${id}.jpg')` }}>
                <div className="absolute w-full h-full inset-0 z-10 bg-black/20 text-primary text-3xl group-hover:flex items-center justify-center gap-x-3 hidden">
                    <a href={`/edit/${id}`}>
                        <button title="Edit" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                            <i className="fa fa-pen"></i>
                        </button>
                    </a>
                    <a href={`/generated/resume_${id}.pdf`}>
                        <button title="Download" className="w-16 h-16 flex items-center cursor-pointer justify-center bg-white hover:bg-white/90 rounded-full">
                            <i className="fa fa-file-download"></i>
                        </button>
                    </a>
                </div>
            </div>
            <p className="text-lg font-medium font-serif mt-3 text-black/80">{title}</p>
            <div className="flex justify-between items-center mt-2">
                <p className="font-medium  text-sm text-black/50">Last Modifed</p>
                <p className="font-medium  text-sm text-black/50">{fmtDate(updatedAt)}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium  text-sm text-black/50">Created</p>
                <p className="font-medium  text-sm text-black/50">{fmtDate(createdAt)}</p>
            </div>
        </div>
    )
}