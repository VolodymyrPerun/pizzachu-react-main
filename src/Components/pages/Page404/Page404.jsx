import React, {useEffect} from 'react';
import style from "./Page404.module.scss";
import error from "../../../assets/images/not_found_bg.png";
import PagePhoto from "../../../assets/images/404.gif";


export const Page404 = ({history}) => {

    useEffect(() => {
        setTimeout(() => history.push('/'), 10000);
    }, [history]);

    return (
        <div className={style.page}>
            <img
                alt='img'
                src={PagePhoto}/>
            <div className={style.errorContent}
                 style={{
                     backgroundImage: `url(${error})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     alignContent: 'center'
                 }}
            >
            </div>
        </div>
    );
};
