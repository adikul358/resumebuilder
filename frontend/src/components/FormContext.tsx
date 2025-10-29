import { FormContextType } from "@/types";
import { createContext } from "react";

const FormContext = createContext<FormContextType>({} as FormContextType);

export default FormContext