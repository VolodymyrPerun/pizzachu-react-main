import LANGS from '../../../../constants/langs.enum'
import { L, M, XL } from '../../../../constants/sizesDefault.enum'
import {
  LABELS_UA,
  LABELS_EN,
  PRODUCT_TYPE,
  PRODUCT_SECTION
} from '../../../../constants'
//////////////////////////////////////////////////

export const TypesFilterItems = (language) => [
  {
    cN: 'tabType',
    section: null,
    active: 'tabActiveType',
    type: PRODUCT_TYPE.PIZZA,
    label: language === LANGS.UA ? LABELS_UA.Pizza : LABELS_EN.Pizza,
  },
  {
    size_id: L,
    cN: 'tabType',
    section: null,
    active: 'tabActiveType',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.SushiAndRoles : LABELS_EN.SushiAndRoles,
  },
  {
    size_id: L,
    cN: 'tabType',
    active: 'tabActiveType',
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
    section: PRODUCT_SECTION.MISO_SOUPS,
    label: language === LANGS.UA
      ? LABELS_UA.SoupsAndSalads : LABELS_EN.SoupsAndSalads,
  },
  {
    size_id: L,
    cN: 'tabType',
    active: 'tabActiveType',
    section: PRODUCT_SECTION.DESSERTS,
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
    label: language === LANGS.UA
      ? LABELS_UA.DessertsAndDrinks : LABELS_EN.DessertsAndDrinks,
  },
  {
    size_id: L,
    cN: 'tabType',
    section: null,
    active: 'tabActiveType',
    type: PRODUCT_TYPE.SUPPLEMENTS,
    label: language === LANGS.UA
      ? LABELS_UA.Supplements : LABELS_EN.Supplements,
  },
]

export const PizzaSectionsFilterItems = (language) => [
  {
    section: null,
    cN: 'tabSection',
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    label: language === LANGS.UA
      ? LABELS_UA.ALL : LABELS_EN.ALL,
  },
  {
    cN: 'tabSection',
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.VEGETARIAN,
    label: language === LANGS.UA
      ? LABELS_UA.Vegetarian : LABELS_EN.Vegetarian,
  },
  {
    cN: 'tabSection',
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.HOT,
    label: language === LANGS.UA
      ? LABELS_UA.Hot : LABELS_EN.Hot,
  },
  {
    cN: 'tabPromoSection',
    type: PRODUCT_TYPE.PIZZA,
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.PROMOTIONAL,
    label: language === LANGS.UA
      ? LABELS_UA.Promotion : LABELS_EN.Promotion,
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

export const SushiAndRolesSectionsFilterItems = (language) => [
  {
    size_id: L,
    section: null,
    cN: 'tabSection',
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.ALL : LABELS_EN.ALL,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.PHILADELPHIA,
    label: language === LANGS.UA
      ? LABELS_UA.Philadelphia : LABELS_EN.Philadelphia,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.CHEESE,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.Cheese : LABELS_EN.Cheese,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.HALF,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.Half : LABELS_EN.Half,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.VEGETARIAN,
    label: language === LANGS.UA
      ? LABELS_UA.Vegetarian : LABELS_EN.Vegetarian,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.HOT_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.HotRoles : LABELS_EN.HotRoles,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.SUSHI,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.Sushi : LABELS_EN.Sushi,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.CHAINS,
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    label: language === LANGS.UA
      ? LABELS_UA.Chains : LABELS_EN.Chains,
  },
  {
    size_id: XL,
    cN: 'tabPromoSection',
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    section: PRODUCT_SECTION.PROMOTIONAL,
    label: language === LANGS.UA
      ? LABELS_UA.Promotion : LABELS_EN.Promotion,
  },
]

export const SoupsAndSaladsSectionsFilterItems = (language) => [
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
    section: PRODUCT_SECTION.MISO_SOUPS,
    label: language === LANGS.UA
      ? LABELS_UA.MisoSoups : LABELS_EN.MisoSoups,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.SALADS,
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
    label: language === LANGS.UA
      ? LABELS_UA.Salads : LABELS_EN.Salads,
  },
]

export const DessertsAndDrinksSectionsFilterItems = (language) => [
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.DESSERTS,
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
    label: language === LANGS.UA
      ? LABELS_UA.Desserts : LABELS_EN.Desserts,
  },
  {
    size_id: L,
    cN: 'tabSection',
    active: 'tabActiveSection',
    section: PRODUCT_SECTION.DRINKS,
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
    label: language === LANGS.UA
      ? LABELS_UA.Drinks : LABELS_EN.Drinks,
  },
]
