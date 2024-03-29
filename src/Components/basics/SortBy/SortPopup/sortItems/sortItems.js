import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
//
import LANG from '../../../../../constants/langs.enum'
import { SORT_POPUP_LABELS } from '../../../../../constants'
//////////////////////////////////////////////////

export const sortItems = (language) => {
  if (language === LANG.UA) {

    return [
      {
        icon: faCaretUp,
        value: SORT_POPUP_LABELS.PriceLowValue,
        label: SORT_POPUP_LABELS.PriceLowLabel
      },
      {
        icon: faCaretDown,
        value: SORT_POPUP_LABELS.PriceHighValue,
        label: SORT_POPUP_LABELS.PriceHighLabel
      },
      {
        icon: faCaretUp,
        value: SORT_POPUP_LABELS.WeightLowValue,
        label: SORT_POPUP_LABELS.WeightLowLabel
      },
      {
        icon: faCaretDown,
        value: SORT_POPUP_LABELS.WeightHighValue,
        label: SORT_POPUP_LABELS.WeightHighLabel
      }
    ];
  }

  return [
    {
      icon: faCaretUp,
      value: SORT_POPUP_LABELS.PriceLowValue,
      label: SORT_POPUP_LABELS.PriceLowLabelEN
    },
    {
      icon: faCaretDown,
      value: SORT_POPUP_LABELS.PriceHighValue,
      label: SORT_POPUP_LABELS.PriceHighLabelEN
    },
    {
      icon: faCaretUp,
      value: SORT_POPUP_LABELS.WeightLowValue,
      label: SORT_POPUP_LABELS.WeightLowLabelEN
    },
    {
      icon: faCaretDown,
      value: SORT_POPUP_LABELS.WeightHighValue,
      label: SORT_POPUP_LABELS.WeightHighLabelEN
    },
  ]
}
