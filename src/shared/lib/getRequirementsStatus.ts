import { InputRequirement, InputRequirementStatus } from "shared/types";

export const getRequirementsStatus = (requirements: InputRequirement[]):InputRequirementStatus[] => {
    return requirements.map(req => ({
        description: req.description, 
        isAchieved: false,
        regex: req.regex
    }))
}