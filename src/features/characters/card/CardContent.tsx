import { FC, ReactNode } from "react";

interface Props{
    children : ReactNode,
    name: string
}

export const CardContent: FC<Props> = ({children, name}) => {
    return <div className={"card-body"}>
        <span>{name}</span>
        {children}
    </div>
}