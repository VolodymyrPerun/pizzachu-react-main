import React from 'react'
import i18next from 'i18next'
//////////////////////////////////////////////////

export const RenderError = ({
  error,
  errClassName
}) => (
  <>
    {
      error &&
      <div
        className={errClassName}
        style={{
        display: 'flex',
        maxWidth: '70%',
        color: '#c21500',
        margin: '5px auto',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        font: '15px raleway-grid, sans-serif'
      }}
      >
        <span>{i18next.t('ERROR')}: {error}</span>
      </div>
    }
  </>
)

export const CheckErrorMessage = ({
  url,
  adminUrl,
  errMsgStyle,
  errorMessage,
  errMsgClassName,
  adminErrorMessage,
  adminErrMsgClassName,
  adminErrorMessageStyle,
}) => (
  <>
    {
      errorMessage &&
      '/' + window.location.href.split('/').pop() === `${url}` &&
      <div
        className={errMsgClassName}
        style={{ color: 'darkred', ...errMsgStyle }}
      >
        {errorMessage}
      </div>
    }
    {
      adminErrorMessage &&
      '/' + window.location.href.split('/').pop() === `${adminUrl}` &&
      <div
        className={adminErrMsgClassName}
        style={{ color: 'darkred', ...adminErrorMessageStyle }}
      >
        {adminErrorMessage}
      </div>
    }
  </>
)




