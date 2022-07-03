import { PRODUCT_TYPE } from '../../../../constants'
import {
  PizzaSectionsFilterItems,
  SushiAndRolesSectionsFilterItems,
  SoupsAndSaladsSectionsFilterItems,
  DessertsAndDrinksSectionsFilterItems,
} from './FilterItems'
//////////////////////////////////////////////////

export default function(language) {
  return [
    {
      type: PRODUCT_TYPE.PIZZA,
      filterItem: PizzaSectionsFilterItems(language),
    },
    {
      type: PRODUCT_TYPE.SUSHI_AND_ROLES,
      filterItem: SushiAndRolesSectionsFilterItems(language),
    },
    {
      type: PRODUCT_TYPE.SOUPS_AND_SALADS,
      filterItem: SoupsAndSaladsSectionsFilterItems(language),
    },
    {
      type: PRODUCT_TYPE.DESSERTS_AND_DRINKS,
      filterItem: DessertsAndDrinksSectionsFilterItems(language),
    },
  ]
}
