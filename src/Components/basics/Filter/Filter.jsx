import React from 'react';
import styles from "./Filter.module.scss";
import Tab from "../../commons/Buttons/Tabs/Tab";
import SectionsTabs from "../../commons/Buttons/SectionsTabs/SectionsTabs";


const Filter = ({type, onPageChangeProductsType, onPageChangeProductsSection}) => {

    return <>

        <div className={styles.container}>

                <Tab label={'Піца'} handleClick={onPageChangeProductsType(1)}/>
                <Tab label={'Суші та Роли'} handleClick={onPageChangeProductsType(2)}/>
                <Tab label={'Супи та салати'} handleClick={onPageChangeProductsType(3)}/>
                <Tab label={'Десерти та напої'} handleClick={onPageChangeProductsType(4)}/>
                <Tab label={'Додатки'} handleClick={onPageChangeProductsType(5)}/>

            <input
                // onChange={e => setSearchQuery(e.target.value)}
                // value={searchQuery}
                placeholder='Пошук...'/>

        </div>
        {(type === 1) && <div className={styles.container}>
            <div>
                <SectionsTabs label={'Всі'} handleClick={onPageChangeProductsType(1)}/>
                <SectionsTabs label={`Вегетаріанські`} handleClick={onPageChangeProductsSection(1, 1)}/>
                <SectionsTabs label={`Гострі`} handleClick={onPageChangeProductsSection(1, 2)}/>
            </div>
        </div>}
        {(type === 2) && <div className={styles.container}>
            <div>
                <SectionsTabs label={'Всі'} handleClick={onPageChangeProductsType(2)}/>
                <SectionsTabs label={`Філадельфія`} handleClick={onPageChangeProductsSection(2, 3)}/>
                <SectionsTabs label={`Сирні`} handleClick={onPageChangeProductsSection(2, 4)}/>
                <SectionsTabs label={`Половинки`} handleClick={onPageChangeProductsSection(2, 5)}/>
                <SectionsTabs label={`Вегетаріанські`} handleClick={onPageChangeProductsSection(2, 1)}/>
                <SectionsTabs label={`Гарячі роли`} handleClick={onPageChangeProductsSection(2, 6)}/>
                <SectionsTabs label={`Суші`} handleClick={onPageChangeProductsSection(2, 7)}/>
                <SectionsTabs label={`Сети`} handleClick={onPageChangeProductsSection(2, 8)}/>
            </div>
        </div>}
        {(type === 3) && <div className={styles.container}>
            <div>
                <SectionsTabs label={`Місо супи`} handleClick={onPageChangeProductsSection(3, 9)}/>
                <SectionsTabs label={`Салати`} handleClick={onPageChangeProductsSection(3, 10)}/>
            </div>
        </div>}
        {(type === 4) && <div className={styles.container}>
            <div>
                <SectionsTabs label={`Десерти`} handleClick={onPageChangeProductsSection(4, 11)}/>
                <SectionsTabs label={`Напої`} handleClick={onPageChangeProductsSection(4, 12)}/>
            </div>
        </div>}
        {(type === 5) && <div className={styles.container}>
            <div>
                <SectionsTabs label={'Додатки'} handleClick={onPageChangeProductsType(5)}/>
            </div>
        </div>}
    </>
}
export default Filter;
