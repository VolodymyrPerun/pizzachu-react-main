import {profileAPI} from "../../../API/profileAPI/profileAPI";
import {setIsFetching, setStatus, setUserProfile, setPhotoSuccess} from "./actions";
import {stopSubmit} from "redux-form";



export const savePhoto = file => async dispatch => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
};
