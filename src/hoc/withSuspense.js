import React, {Suspense} from "react";
import Preloader from "../Components/commons/Preloader/Preloader";


export const withSuspense = Component => {

    return props => {
        return <Suspense fallback={<div><Preloader/></div>}>
            <Component {...props} />
        </Suspense>
    };
};
