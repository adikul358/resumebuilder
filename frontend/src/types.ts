"use client";
export interface UserType {
    name: string;
    email: string;
    profilePicture: string;
}
export interface MetadataType {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
}
export interface FormContextType {
    handleAddEducation: () => void
    handleUpdateEducation: (id: number, field: string, value: string) => void
    handleRemoveEducation: (id: number) => void
    handleAddExperience: () => void
    handleUpdateExperience: (id: number, field: string, value: string) => void
    handleRemoveExperience: (id: number) => void
}