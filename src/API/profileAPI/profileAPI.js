import instance from '../../helpers/API';
import {HEADER_ENUM} from "../../constants";


export const profileAPI = {

    updateProfilePhoto: (user_photo, access_token) => {

        const formData = new FormData();

        formData.append('image', user_photo);

        return instance.put(`users/update-user-photo`, formData, {
            headers: {
                [HEADER_ENUM.CONTENT_TYPE]: 'multipart/form-data',
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    }
};




