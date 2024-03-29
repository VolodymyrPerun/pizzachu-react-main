import i18next from 'i18next'
import React, { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
//
import LAGS from '../../../../../constants/langs.enum'
//////////////////////////////////////////////////

export default function SelectVariants () {
  const initLng = localStorage.getItem('language')
  const [lang, setLang] = useState((initLng || LAGS.UA))

  const handleChange = (event) => {
    const lng = event.target.value
    setLang(lng)
    window.location.reload()
    i18next.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <div>
      <FormControl
        variant='standard'
        sx={{ m: 1, minWidth: 60, marginTop: 2.5 }}
      >
        <Select
          value={lang}
          onChange={handleChange}
          id='demo-simple-select-standard'
        >
          <MenuItem value={LAGS.UA}><em>UA</em></MenuItem>
          <MenuItem value={LAGS.EN}><em>EN</em></MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
