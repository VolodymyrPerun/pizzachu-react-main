import React from 'react';
import styles from "./CardFilter.module.scss";
import Tab from "../../commons/Buttons/Tab/Tab";
import SectionsTab from "../../commons/Buttons/SectionsTab/SectionsTab";
import {PRODUCT_SECTION, PRODUCT_TYPE} from '../../../constants';


const CardFilter = ({type,onPageChangeProductsType, onPageChangeProductsSection}) => {

    return <>

        <div className={styles.container}>

            <Tab label={'Піца'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.PIZZA)}/>
            <Tab label={'Суші та Роли'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.SUSHI_AND_ROLES)}/>
            <Tab label={'Супи та салати'} handleClick={
                onPageChangeProductsSection(PRODUCT_TYPE.SOUPS_AND_SALADS, PRODUCT_SECTION.MISO_SOUPS)}/>
            <Tab label={'Десерти та напої'} handleClick={
                onPageChangeProductsSection(PRODUCT_TYPE.DESSERTS_AND_DRINKS, PRODUCT_SECTION.DESSERTS)}/>
            <Tab label={'Додатки'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.SUPPLEMENTS)}/>

            <input
                // onChange={e => setSearchQuery(e.target.value)}
                // value={searchQuery}
                placeholder='Пошук...'/>

        </div>
        {(type === 1) && <div className={styles.container}>
            <div>
                <SectionsTab label={'Всі'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.PIZZA)}/>
                <SectionsTab label={`Вегетаріанські`}
                             handleClick={onPageChangeProductsSection(PRODUCT_TYPE.PIZZA, PRODUCT_SECTION.VEGETARIAN_ROLES)}/>
                <SectionsTab label={`Гострі`}
                             handleClick={onPageChangeProductsSection(PRODUCT_TYPE.PIZZA, PRODUCT_SECTION.HOT)}/>
            </div>
        </div>}
        {(type === 2) && <div className={styles.container}>
            <div>
                <SectionsTab label={'Всі'}
                             handleClick={onPageChangeProductsType(PRODUCT_TYPE.SUSHI_AND_ROLES)}/>
                <SectionsTab label={`Філадельфія`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.PHILADELPHIA)}/>
                <SectionsTab label={`Сирні`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.CHEESE)}/>
                <SectionsTab label={`Половинки`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.HALF)}/>
                <SectionsTab label={`Вегетаріанські`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.VEGETARIAN_ROLES)}/>
                <SectionsTab label={`Гарячі роли`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.HOT_ROLES)}/>
                <SectionsTab label={`Суші`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.SUSHI)}/>
                <SectionsTab label={`Сети`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.CHAINS)}/>
            </div>
        </div>}
        {(type === 3) && <div className={styles.container}>
            <div>
                <SectionsTab label={`Місо супи`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SOUPS_AND_SALADS, PRODUCT_SECTION.MISO_SOUPS)}/>
                <SectionsTab label={`Салати`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SOUPS_AND_SALADS, PRODUCT_SECTION.SALADS)}/>
            </div>
        </div>}
        {(type === 4) && <div className={styles.container}>
            <div>
                <SectionsTab label={`Десерти`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.DESSERTS_AND_DRINKS, PRODUCT_SECTION.DESSERTS)}/>
                <SectionsTab label={`Напої`}
                             handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.DESSERTS_AND_DRINKS, PRODUCT_SECTION.DRINKS)}/>
            </div>
        </div>}
        {(type === 5) && <div className={styles.container}>
            <div>
                <SectionsTab label={'Додатки'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.SUPPLEMENTS)}/>
            </div>
        </div>}
    </>
};

export default CardFilter;
