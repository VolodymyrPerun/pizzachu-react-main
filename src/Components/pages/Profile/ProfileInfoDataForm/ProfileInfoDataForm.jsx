import React, { memo } from 'react'
import styles from './ProfileInfoDataForm.module.scss'
import SubmitFollowBtn
  from '../../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
import FormsControlItem from '../../../commons/FormsControls/FormsControls'
import { SELECT, TEXT_FIELD } from '../../../../constants/formsControls.enum'
import {
  phone,
  age18,
  age120,
  number,
  maxLengthCreator,
  minLengthCreator,
} from '../../../../validators/validators'
import { Field, reduxForm } from 'redux-form'
import { UploadOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      width: '25ch',
      margin: theme.spacing(2),
    },
    '& .MuiSelect-root': {
      width: '25ch',
      margin: theme.spacing(2),
    },
  },
}))

const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)
const maxLength3 = maxLengthCreator(3)
const minLength1 = minLengthCreator(1)
const maxLength10 = maxLengthCreator(10)
const minLength10 = minLengthCreator(10)

const ProfileInfoDataForm = memo(({
  pristine,
  submitting,
  setEditMode,
  handleSubmit,
  goToEditMode,
  initialValues,
  onMainPhotoSelected,
}) => {

  const classes = useStyles()

  return (
    <form
      autoComplete='on'
      onSubmit={handleSubmit}
      className={classes.root}
    >
      <div>
        <label className={styles.customFileUpload}>
          <input type='file'
                 name='user_photo'
                 accept='.jpg, .png, .jpeg'
                 onChange={onMainPhotoSelected}
          />
          <UploadOutlined/> Завантажити фото
        </label>
      </div>
      <div>
        <Field style={{ color: '#008E46' }}
               type='text'
               name='name'
               label={'Ім\'я'}
               variant='filled'
               validate={[minLength2, maxLength20]}
               component={FormsControlItem(TEXT_FIELD)}
        />
      </div>
      <div>
        <Field style={{ color: '#008E46' }}
               type='text'
               name='surname'
               label='Прізвище'
               variant='filled'
               validate={[minLength2, maxLength20]}
               component={FormsControlItem(TEXT_FIELD)}
        />
      </div>
      <div>
        <Field style={{ color: '#008E46' }}
               name='age'
               type='text'
               label='Ваш вік'
               variant='filled'
               warn={[number, age18, age120]}
               validate={[minLength2, maxLength3]}
               component={FormsControlItem(TEXT_FIELD)}
        />
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <Field
            name='gender_id'
            className={styles.select}
            component={FormsControlItem(SELECT)}
          >
            <option/>
            <option value={1}>Чоловіча</option>
            <option value={2}>Жіноча</option>
          </Field>
          <FormHelperText>Стать</FormHelperText>
        </FormControl>
      </div>
      <div>
        <Field
          name='phone'
          warn={phone}
          label='Телефон'
          variant='filled'
          style={{ color: '#008E46' }}
          placeholder='(0xx) xxx xx xx'
          component={FormsControlItem(TEXT_FIELD)}
          validate={[number, minLength10, maxLength10]}
        />
      </div>
      <div>
        <FormControl variant='filled' className={classes.formControl}>
          <Field
            name='city'
            className={styles.select}
            component={FormsControlItem(SELECT)}
          >
            <option/>
            <option value='Львів'>Львів</option>
            <option value='Брюховичі'>Брюховичі</option>
            <option value='Наварія'>Наварія</option>
            <option value='Поршна'>Поршна</option>
            <option value='Муроване'>Муроване</option>
            <option value='Оброшине'>Оброшине</option>
            <option value='Пасіки-Зубрицькі'>Пасіки-Зубрицькі</option>
            <option value='Винники'>Винники</option>
            <option value='Сокільники'>Сокільники</option>
            <option value='Липники'>Липники</option>
            <option value='Лапаївка'>Лапаївка</option>
            <option value='Надичі'>Надичі</option>
            <option value='Бірки'>Бірки</option>
            <option value='Рудне'>Рудне</option>
            <option value='Рудно'>Рудно</option>
            <option value='Кротошин'>Кротошин</option>
            <option value='Конопниця'>Конопниця</option>
            <option value='Кожичі'>Кожичі</option>
            <option value='Малечковичі'>Малечковичі</option>
            <option value='Зимна Вода'>Зимна Вода</option>
            <option value='Дубляни'>Дубляни</option>
            <option value='Давидів'>Давидів</option>
            <option value='Грабово'>Грабово</option>
            <option value='Гамаліївка'>Гамаліївка</option>
            <option value='Великі Грибовичі'>Великі Грибовичі</option>
            <option value='Зубра'>Зубра</option>
            <option value='Холодновідка'>Холодновідка</option>
            <option value='Скнилів'>Скнилів</option>
            <option value='Солонка'>Солонка</option>
            <option value='Сулимів'>Сулимів</option>
            <option value='Рясне-Руське'>Рясне-Руське</option>
            <option value='Пустомити'>Пустомити</option>
            <option value='Підсадки'>Підсадки</option>
            <option value='Підбірці'>Підбірці</option>
          </Field>
          <FormHelperText>Населений пункт</FormHelperText>
        </FormControl>
      </div>
      <div>
        <Field
          name='street'
          label='Вулиця'
          variant='filled'
          style={{ color: '#008E46' }}
          validate={[minLength2, maxLength10]}
          component={FormsControlItem(TEXT_FIELD)}
        />
      </div>
      <div>
        <Field
          name='house'
          label='Будинок'
          variant='filled'
          style={{ color: '#008E46' }}
          validate={[minLength1, maxLength10]}
          component={FormsControlItem(TEXT_FIELD)}
        />
      </div>
      {initialValues.apartment && <div>
        <Field
          warn={number}
          name='apartment'
          label='Квартира'
          variant='filled'
          style={{ color: '#008E46' }}
          component={FormsControlItem(TEXT_FIELD)}
        />
      </div>}
      {initialValues.entrance && <div>
        <Field
          warn={number}
          name='entrance'
          variant='filled'
          label={'Під\'їзд'}
          style={{ color: '#008E46' }}
          component={FormsControlItem(TEXT_FIELD)}
        />
      </div>}
      {initialValues.floor && <div>
        <Field
          name='floor'
          warn={number}
          label='Поверх'
          variant='filled'
          style={{ color: '#008E46' }}
          component={FormsControlItem(TEXT_FIELD)}
        />
      </div>}
      <div className={styles.order}>
        <SubmitFollowBtn
          name='Submit'
          type='submit'
          label='Змінити '
          icon={faArrowRight}
          disabled={pristine || submitting}
          onClick={goToEditMode}
        />
        <SubmitFollowBtn
          icon={faArrowLeft}
          label=' Відмінити'
          handleClick={() => {
            setEditMode(false)
          }}
        />
      </div>
    </form>
  )
})

export default reduxForm({
  form: 'profileInfoDataForm',
})(ProfileInfoDataForm)
