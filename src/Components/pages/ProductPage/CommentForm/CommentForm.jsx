import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import styles from './CommentForm.module.scss'
import { TEXTAREA } from '../../../../constants/formsControls.enum'
import FormsControlItem from '../../../commons/FormsControls/FormsControls'
//////////////////////////////////////////////////

export const Form = ({ isAuth, pristine, submitting, handleSubmit }) => {

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      {isAuth
        ? <div className={styles.formInfo}>
          <div>
            <Field
              name='text'
              autoFocus={false}
              placeholder='Залишити відгук...'
              component={FormsControlItem(TEXTAREA)}/>
          </div>
        </div>
        : <div className={styles.formInfo}>
          <Field
            disabled
            placeholder='Залишити відгук...'
            component={FormsControlItem(TEXTAREA)}/>
          <div className={styles.noAuth}>
            Залишати відгуки можуть лише авторизовані користувачі
          </div>
        </div>}
      <div>
        {isAuth && <div>
          <button
            type='submit'
            onClick={reset}
            className={styles.commentBtn}
            disabled={pristine || submitting}
          >
            Надіслати
          </button>
        </div>}
      </div>
    </form>
  )
}

export const CommentForm = reduxForm({
  form: 'comment',
})(Form)

