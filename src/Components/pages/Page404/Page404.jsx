import React, {useMemo} from 'react';
import style from "./Page404.module.scss";
import error from "../../../assets/images/not_found_bg.png";
import PagePhoto from "../../../assets/images/404.gif";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Page404 = ({history}) => {

    useMemo(() => {
        setTimeout(() => history.push('/'), 10000);
    }, [history]);

    return (
        <div className={style.page}>
            <LazyLoadImage
                effect="blur"
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
