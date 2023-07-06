import { FC } from "react";
import { FollowingButtonComponent } from "features/following/button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
    addCharacterToFollowingList,
    removeCharacterToFollowingList
  } from 'features/following/following.slices';

interface Props {
    chracterId: number
}

export const CardActions : FC<Props> = ({chracterId})=>{
    const dispatch = useAppDispatch();
    const followingIds = useAppSelector((state) => state.following.followingIds);
    const isFav = followingIds.includes(chracterId);

    const onToggleFavorite = (chracterId: number, setFav: boolean) => {
        if (setFav) {
          dispatch(addCharacterToFollowingList(chracterId));
        } else {
          dispatch(removeCharacterToFollowingList(chracterId));
        }
      };


    return (
        <FollowingButtonComponent
            isFav={isFav}
            onToggleFavorite={(setFav) => onToggleFavorite(chracterId, setFav)}
        />
    )
}