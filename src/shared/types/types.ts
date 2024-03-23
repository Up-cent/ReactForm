export type InputRequirement = {
    regex: RegExp
    description: string
}

export type InputRequirementStatus = {
    description: string
    isAchieved: boolean,
    regex: RegExp
}