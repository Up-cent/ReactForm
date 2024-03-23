import { FC } from "react"
import { InputRequirementStatus } from "shared/types"
import styles from './InputDescription.module.css';
import { classNames } from "shared/lib";

interface InputDescription {
    className?: string,
    requirementsStatus: InputRequirementStatus[]
}

export const InputDescription:FC<InputDescription> = ({requirementsStatus, className}) => {
    return (
        <ul className={className}>
            {requirementsStatus.map(status => {
                return (
                    <li className={classNames(styles.li, {[styles.achieved]: status.isAchieved})}>
                        {status.description}
                    </li>
                )
            })}
        </ul>
    )
}