import {SORT_POPUP_LABELS} from '../../../../../constants';
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

export const sortItems = [
    {
        value: SORT_POPUP_LABELS.PriceLowValue, label: SORT_POPUP_LABELS.PriceLowLabel, icon: faCaretUp
    },
    {
        value: SORT_POPUP_LABELS.PriceHighValue, label: SORT_POPUP_LABELS.PriceHighLabel, icon: faCaretDown
    },
    {
        value: SORT_POPUP_LABELS.WeightLowValue, label: SORT_POPUP_LABELS.WeightLowLabel, icon: faCaretUp
    },
    {
        value: SORT_POPUP_LABELS.WeightHighValue, label: SORT_POPUP_LABELS.WeightHighLabel, icon: faCaretDown
    }
]
