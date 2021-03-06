import instance from '../../helpers/API';


export const registerClientsAPI = {
    registerClient(user_photo, email, phone, name, surname,
                   age, password, gender_id, city, street, house,
                   apartment, entrance, floor) {

        // const user_photo = new FormData();
        //
        //user_photo.append('image', user_photo);

        return instance.post(`users`, {
                user_photo, email, phone, name, surname, age,
                password, gender_id, city, street, house, apartment, entrance, floor
            }
            // , {
            //     headers: {
            //         [CONTENT_TYPE]: 'multipart/form-data',
            //     }}
        );
    },
    // registerClient(user) {
    //     return instance.post(`
    //   users`, {user});
    // },

};


