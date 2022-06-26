import { SORT_POPUP_LABELS } from '../../../../../constants'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

export const sortItems = [
  {
    icon: faCaretUp,
    value: SORT_POPUP_LABELS.PriceLowValue,
    label: SORT_POPUP_LABELS.PriceLowLabel,
  },
  {
    icon: faCaretDown,
    value: SORT_POPUP_LABELS.PriceHighValue,
    label: SORT_POPUP_LABELS.PriceHighLabel,
  },
  {
    icon: faCaretUp,
    value: SORT_POPUP_LABELS.WeightLowValue,
    label: SORT_POPUP_LABELS.WeightLowLabel,
  },
  {
    icon: faCaretDown,
    value: SORT_POPUP_LABELS.WeightHighValue,
    label: SORT_POPUP_LABELS.WeightHighLabel,
  },
]
