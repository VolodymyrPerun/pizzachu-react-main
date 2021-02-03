import React, {useState} from 'react';
import {MenuItems} from '../MenuItems/MenuItems';
import styles from './Dropdown.module.scss';
import {Link} from 'react-router-dom';


const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? styles.clicked : styles.dropdownMenu}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={`${styles.dropdownLink} ${item.cName}`}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;
