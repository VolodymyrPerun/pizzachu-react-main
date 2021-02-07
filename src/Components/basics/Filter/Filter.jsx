import React from 'react';
import styles from "./Filter.module.scss";
import Tab from "../../commons/Buttons/Tabs/Tab";
import SectionsTabs from "../../commons/Buttons/SectionsTabs/SectionsTabs";
import {PRODUCT_SECTION, PRODUCT_TYPE} from '../../../constants/';


const Filter = ({type, onPageChangeProductsType, onPageChangeProductsSection}) => {

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
                <SectionsTabs label={'Всі'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.PIZZA)}/>
                <SectionsTabs label={`Вегетаріанські`}
                              handleClick={onPageChangeProductsSection(PRODUCT_TYPE.PIZZA, PRODUCT_SECTION.VEGETARIAN)}/>
                <SectionsTabs label={`Гострі`}
                              handleClick={onPageChangeProductsSection(PRODUCT_TYPE.PIZZA, PRODUCT_SECTION.HOT)}/>
            </div>
        </div>}
        {(type === 2) && <div className={styles.container}>
            <div>
                <SectionsTabs label={'Всі'}
                              handleClick={onPageChangeProductsType(PRODUCT_TYPE.SUSHI_AND_ROLES)}/>
                <SectionsTabs label={`Філадельфія`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.PHILADELPHIA)}/>
                <SectionsTabs label={`Сирні`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.CHEESE)}/>
                <SectionsTabs label={`Половинки`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.HALF)}/>
                <SectionsTabs label={`Вегетаріанські`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.VEGETARIAN)}/>
                <SectionsTabs label={`Гарячі роли`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.HOT_ROLES)}/>
                <SectionsTabs label={`Суші`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.SUSHI)}/>
                <SectionsTabs label={`Сети`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SUSHI_AND_ROLES, PRODUCT_SECTION.CHAINS)}/>
            </div>
        </div>}
        {(type === 3) && <div className={styles.container}>
            <div>
                <SectionsTabs label={`Місо супи`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SOUPS_AND_SALADS, PRODUCT_SECTION.MISO_SOUPS)}/>
                <SectionsTabs label={`Салати`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.SOUPS_AND_SALADS, PRODUCT_SECTION.SALADS)}/>
            </div>
        </div>}
        {(type === 4) && <div className={styles.container}>
            <div>
                <SectionsTabs label={`Десерти`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.DESSERTS_AND_DRINKS, PRODUCT_SECTION.DESSERTS)}/>
                <SectionsTabs label={`Напої`}
                              handleClick={onPageChangeProductsSection(
                                  PRODUCT_TYPE.DESSERTS_AND_DRINKS, PRODUCT_SECTION.DRINKS)}/>
            </div>
        </div>}
        {(type === 5) && <div className={styles.container}>
            <div>
                <SectionsTabs label={'Додатки'} handleClick={onPageChangeProductsType(PRODUCT_TYPE.SUPPLEMENTS)}/>
            </div>
        </div>}
    </>
}
export default Filter;
