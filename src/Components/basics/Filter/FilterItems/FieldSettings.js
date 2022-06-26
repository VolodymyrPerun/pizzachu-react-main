import { PRODUCT_TYPE } from '../../../../constants'
import {
  PizzaSectionsFilterItems,
  SushiAndRolesSectionsFilterItems,
  SoupsAndSaladsSectionsFilterItems,
  DessertsAndDrinksSectionsFilterItems,
} from './FilterItems'
//////////////////////////////////////////////////

export default [
  {
    type: PRODUCT_TYPE.PIZZA,
    filterItem: PizzaSectionsFilterItems,
  },
  {
    type: PRODUCT_TYPE.SUSHI_AND_ROLES,
    filterItem: SushiAndRolesSectionsFilterItems,
  },
  {
    type: PRODUCT_TYPE.SOUPS_AND_SALADS,
    filterItem: SoupsAndSaladsSectionsFilterItems,
  },
  {
    type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
    filterItem: DessertsAndDrinksSectionsFilterItems,
  },
]
