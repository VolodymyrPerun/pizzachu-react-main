import { L, M, XL } from '../../../../constants/sizesDefault.enum'
import { LABELS_UA, PRODUCT_SECTION, PRODUCT_TYPE } from '../../../../constants'
//////////////////////////////////////////////////

export const TypesFilterItems = [
  {
    size_id: L,
    cN: 'tabType',
    section: null,
    label: LABELS_UA.Pizza,
    active: 'tabActiveType',
    type: PRODUCT_TYPE.PIZZA,
  },
  {
    size_id: L,
    cN: 'tabType',
    section: null,
    active: 'tabActiveType',
    label: LABELS_UA.SushiAndRoles,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
  },
  {
    size_id: L,
    cN: 'tabType',
    active: 'tabActiveType',
    label: LABELS_UA.SoupsAndSalads,
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
    section: PRODUCT_SECTION.MISO_SOUPS,
  },
  {
    size_id: L,
    cN: 'tabType',
    active: 'tabActiveType',
    section: PRODUCT_SECTION.DESSERTS,
    label: LABELS_UA.DessertsAndDrinks,
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
  },
  {
    size_id: L,
    cN: 'tabType',
    section: null,
    active: 'tabActiveType',
    label: LABELS_UA.Supplements,
    type: PRODUCT_TYPE.SUPPLEMENTS,
  },
]

export const PizzaSectionsFilterItems = [
  {
    size_id: L,
    section: null,
    cN: 'tabSection',
    label: LABELS_UA.ALL,
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
  },
  {
    size_id: L,
    cN: 'tabSection',
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    label: LABELS_UA.Vegetarian,
    section: PRODUCT_SECTION.VEGETARIAN,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Hot,
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.HOT,
  },
  {
    size_id: XL,
    cN: 'tabPromoSection',
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    label: LABELS_UA.Promotion,
    section: PRODUCT_SECTION.PROMOTIONAL,
  },
  {
    size_id: L,
    cN: 'tabSize',
    section: null,
    label: LABELS_UA.L,
    active: 'tabActiveSize',
    type: PRODUCT_TYPE.PIZZA,
  },
  {
    size_id: M,
    cN: 'tabSize',
    section: null,
    label: LABELS_UA.M,
    active: 'tabActiveSize',
    type: PRODUCT_TYPE.PIZZA,
  },
  {
    size_id: XL,
    cN: 'tabSize',
    section: null,
    label: LABELS_UA.XL,
    active: 'tabActiveSize',
    type: PRODUCT_TYPE.PIZZA,
  },
]

export const SushiAndRolesSectionsFilterItems = [
  {
    size_id: L,
    section: null,
    cN: 'tabSection',
    label: LABELS_UA.ALL,
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    label: LABELS_UA.Philadelphia,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.PHILADELPHIA,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Cheese,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.CHEESE,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Half,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.HALF,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    label: LABELS_UA.Vegetarian,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.VEGETARIAN,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    label: LABELS_UA.HotRoles,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.HOT_ROLES,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Sushi,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.SUSHI,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Chains,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.CHAINS,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
  },
  {
    size_id: XL,
    cN: 'tabPromoSection',
    label: LABELS_UA.Promotion,
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.PROMOTIONAL,
  },
]

export const SoupsAndSaladsSectionsFilterItems = [
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    label: LABELS_UA.MisoSoups,
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
    section: PRODUCT_SECTION.MISO_SOUPS,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Salads,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.SALADS,
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
  },
]

export const DessertsAndDrinksSectionsFilterItems = [
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Desserts,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.DESSERTS,
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
  },
  {
    size_id: L,
    cN: 'tabSection',
    label: LABELS_UA.Drinks,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.DRINKS,
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
  },
]
