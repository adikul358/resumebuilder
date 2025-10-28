import { createContext } from "react";

export interface FormContextType {
    handleAddEducation: () => void
    handleUpdateEducation: (id: number, field: string, value: string) => void
    handleRemoveEducation: (id: number) => void
    handleAddExperience: () => void
    handleUpdateExperience: (id: number, field: string, value: string) => void
    handleRemoveExperience: (id: number) => void
}

const FormContext = createContext<FormContextType>({} as FormContextType);

export default FormContext