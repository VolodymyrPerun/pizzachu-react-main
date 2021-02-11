import React from 'react';
import {Input, Menu} from 'semantic-ui-react';
import Tab from "../../commons/Buttons/Tab/Tab";

const SortBy = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {

  console.log(setFilter, filterBy, searchQuery, setSearchQuery);

    return <>
        <div>
            {/*{FilterItems &&*/}
            {/*FilterItems.map((item, index) => (*/}
            {/*    <Tab*/}
            {/*        className={activeTab === index ? item.active : item.cN}*/}
            {/*        key={index}*/}
            {/*        label={item.label}*/}
            {/*        handleClick={!item.section*/}
            {/*            ? onPageChangeProductsType(item.type)*/}
            {/*            : onPageChangeProductsSection(item.type, item.section)}/>*/}
            {/*))}*/}

            <button
               // active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}>
                Всі
            </button>
            <button
                //active={filterBy === 'price_high'}
                onClick={() => setFilter('price_high')}>
                Ціна (дорогі)
            </button>
            <button
                //active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}>
                Ціна (дешеві)
            </button>
            <button
                //active={filterBy === 'name'}
                onClick={setFilter.bind(this, 'name')}>
                Назва
            </button>
            <div>
                <Input
                    onChange={e => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    placeholder="Введите запрос..."
                />
            </div>
        </div>
    </>
};

export default SortBy;
