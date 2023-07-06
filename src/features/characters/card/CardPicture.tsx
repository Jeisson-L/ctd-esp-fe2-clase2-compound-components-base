import { FC } from "react";

interface Props {
    image: string
}

export const CardPicture: FC<Props> = ({image}) => {
    return <div className={"card-image"}>
                <img src={image} />
            </div>
}