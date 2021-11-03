import React from 'react'
import { Field } from 'redux-form'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//////////////////////////////////////////////////

const FieldsetComponent = ({ field }) => {
  if (field.isSelect === true) {
    return (
      <FormControl
        variant={field.variant}
        className={field.formControlClassName}>
        <Field
          name={field.name}
          style={field.style}
          required={field.required}
          component={field.component}
          className={field.className}
        >
          {field.optionsSelect.map(
            (option, index) => (
              <option
                key={index}
                style={option.style}
                value={option.value}>
                {option.value || option.title}
              </option>
            ),
          )}
        </Field>
        <FormHelperText>{field.labelText}</FormHelperText>
      </FormControl>
    )
  } else {
    return (
      <Field
        id={field.id}
        name={field.name}
        type={field.type}
        warn={field.warn}
        style={field.style}
        variant={field.variant}
        required={field.required}
        validate={field.validate}
        className={field.className}
        component={field.component}
        placeholder={field.placeholder}
        label={
          <>
            {field.labelIcon && <FontAwesomeIcon
              icon={field.labelIcon || null}
              style={field.labelStyle}/>}
            {field.labelText || null}
          </>
        }/>
    )
  }
}

export default FieldsetComponent
