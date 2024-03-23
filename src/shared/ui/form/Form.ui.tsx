import { FC, HTMLAttributes } from "react"
import { classNames } from "shared/lib"

export const Form:FC<HTMLAttributes<HTMLFormElement>> = ({children, className, onSubmit}) => {
    return (
        <form className={classNames(className)} onSubmit={onSubmit}>
            {children}
        </form>
    )
}