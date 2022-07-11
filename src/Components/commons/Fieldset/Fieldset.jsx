import React from 'react'
import { Field } from 'redux-form'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//////////////////////////////////////////////////

const FieldsetComponent = ({ field }) =>
  !!field.isSelect
    ?  (
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
          {
            field.optionsSelect.map(
              (option, index) => (
                <option
                  key={index}
                  style={option.style}
                  value={option.value}
                >
                  {option.value || option.title}
                </option>
              ),
            )
          }
        </Field>
        <FormHelperText>{field.labelText}</FormHelperText>
      </FormControl>
    )
    : (
      <Field
        // id={field.id}
        name={field.name}
        type={field.type}
        warn={field.warn}
        style={field.style}
       // variant={field.variant}
       // required={field.required}
        validate={field.validate}
        className={field.className}
        component={field.component}
        placeholder={field.placeholder}
        label={
          <>
            {
              field.labelIcon &&
              <FontAwesomeIcon
                style={field.labelStyle}
                icon={field.labelIcon || null}
              />
            }
            {field.labelText || null}
          </>
        }
      />
    )

export default FieldsetComponent
