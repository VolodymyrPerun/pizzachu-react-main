import {LABELS_UA, PRODUCT_SECTION, PRODUCT_TYPE} from '../../../../constants';
import {L, M, XL} from "../../../../constants/sizesDefault.enum";

export const TypesFilterItems = [
    {
        label: LABELS_UA.Pizza,
        type: PRODUCT_TYPE.PIZZA,
        section: null,
        size_id: L,
        cN: 'tabType',
        active: 'tabActiveType'
    },
    {
        label: LABELS_UA.SushiAndRoles,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: null,
        cN: 'tabType',
        active: 'tabActiveType'
    },
    {
        label: LABELS_UA.SoupsAndSalads,
        type: PRODUCT_TYPE.SOUPS_AND_SALADS,
        section: PRODUCT_SECTION.MISO_SOUPS,
        cN: 'tabType',
        active: 'tabActiveType'
    },
    {
        label: LABELS_UA.DessertsAndDrinks,
        type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
        section: PRODUCT_SECTION.DESSERTS,
        cN: 'tabType',
        active: 'tabActiveType'
    },
    {
        label: LABELS_UA.Supplements,
        type: PRODUCT_TYPE.SUPPLEMENTS,
        section: null,
        cN: 'tabType',
        active: 'tabActiveType'
    }
];

export const PizzaSectionsFilterItems = [
    {
        label: LABELS_UA.ALL,
        type: PRODUCT_TYPE.PIZZA,
        section: null,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Vegetarian,
        type: PRODUCT_TYPE.PIZZA,
        section: PRODUCT_SECTION.VEGETARIAN,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Hot,
        type: PRODUCT_TYPE.PIZZA,
        section: PRODUCT_SECTION.HOT,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Promotion,
        type: PRODUCT_TYPE.PIZZA,
        section: PRODUCT_SECTION.PROMOTIONAL,
        cN: 'tabPromoSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.L,
        type: PRODUCT_TYPE.PIZZA,
        section: null,
        size_id: L,
        cN: 'tabSize',
        active: 'tabActiveSize'
    },
    {
        label: LABELS_UA.M,
        type: PRODUCT_TYPE.PIZZA,
        section: null,
        size_id: M,
        cN: 'tabSize',
        active: 'tabActiveSize'
    },
    {
        label: LABELS_UA.XL,
        type: PRODUCT_TYPE.PIZZA,
        section: null,
        size_id: XL,
        cN: 'tabSize',
        active: 'tabActiveSize'
    }
];

export const SushiAndRolesSectionsFilterItems = [
    {
        label: LABELS_UA.ALL,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: null,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Philadelphia,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.PHILADELPHIA,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Cheese,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.CHEESE,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Half,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.HALF,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Vegetarian,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.VEGETARIAN,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.HotRoles,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.HOT_ROLES,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Sushi,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.SUSHI,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Chains,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.CHAINS,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Promotion,
        type: PRODUCT_TYPE.SUSHI_AND_ROLES,
        section: PRODUCT_SECTION.PROMOTIONAL,
        cN: 'tabPromoSection',
        active: 'tabActiveSection'
    }
];

export const SoupsAndSaladsSectionsFilterItems = [
    {
        label: LABELS_UA.MisoSoups,
        type: PRODUCT_TYPE.SOUPS_AND_SALADS,
        section: PRODUCT_SECTION.MISO_SOUPS,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Salads,
        type: PRODUCT_TYPE.SOUPS_AND_SALADS,
        section: PRODUCT_SECTION.SALADS,
        cN: 'tabSection',
        active: 'tabActiveSection'
    }
];

export const DessertsAndDrinksSectionsFilterItems = [
    {
        label: LABELS_UA.Desserts,
        type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
        section: PRODUCT_SECTION.DESSERTS,
        cN: 'tabSection',
        active: 'tabActiveSection'
    },
    {
        label: LABELS_UA.Drinks,
        type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
        section: PRODUCT_SECTION.DRINKS,
        cN: 'tabSection',
        active: 'tabActiveSection'
    }
];
