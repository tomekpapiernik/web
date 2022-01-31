/* eslint-disable no-undef */

/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import { NetlifyForm as Original, Honeypot } from 'react-netlify-forms'

export interface RenderProps {
  handleChange: (...args: any[]) => any
  success?: any
  error?: any
}

export { Honeypot }

type FieldBase = {
  label: string
  parentName?: string
}

// type ButtonAtts = React.ButtonHTMLAttributes<HTMLButtonElement>
// type InputAttrs = React.InputHTMLAttributes<HTMLInputElement>
// type TextAreaAttrs = React.TextareaHTMLAttributes<HTMLTextAreaElement>

// type InputProps = Omit<InputAttrs | TextAreaAttrs, 'name'> & FieldBase & {
//   multiline?: boolean;
// }
// type ButtonProps = Omit<ButtonAtts, 'name'> & FieldBase & {}
// type FieldSetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & FieldBase & {
//   fields: Fields;
//   asObject?: boolean;
// }

// type Field = (InputProps | ButtonProps | FieldSetProps);
type Field = (
  | ((
      | React.InputHTMLAttributes<HTMLInputElement>
      | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    ) & {
      multiline?: boolean
    })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {})
  | (React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
      fields: Fields
      asObject?: boolean
    })
) &
  FieldBase & {
    multiline?: boolean
    fields?: Fields
    asObject?: boolean
  }

export type Fields = {
  [name: string]: Field
}

export type PropTypes = {
  name: string
  fields: Fields
  action?: string
  honeypotName?: string
  successMessage?: React.ReactElement
  errorMessage?: React.ReactElement
}

export interface FieldsMapper {
  (fields: Fields, props?: Partial<Field>): (
    name: string
  ) => React.ReactElement | null
}

const elementsMapper: FieldsMapper = (fields, additions) => (name) => {
  const {
    label,
    parentName,
    multiline,
    fields: childrenFields,
    ...props
  } = { ...fields[name], ...additions }

  const fieldId = name
  const elProps = {
    id: fieldId,
    type: 'text',
    ...props
  }

  if (Object.keys(childrenFields || {}).length) {
    return (
      <fieldset key={name}>
        <legend>{name}</legend>
      </fieldset>
    )
  }

  let Comp = 'input'
  if (elProps.type === 'hidden') {
    return <input key={name} {...elProps} />
  } else if (multiline) {
    Comp = 'textarea'
  } else if (['button', 'reset', 'submit'].includes(elProps.type)) {
    Comp = 'button'
    elProps.children = label
    return (
      <React.Fragment key={name}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Comp {...elProps} />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment key={name}>
      <label htmlFor={fieldId}>{label}</label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Comp {...elProps} />
    </React.Fragment>
  )
}

export const NetlifyForm = ({
  name,
  action,
  fields = {},
  honeypotName,
  successMessage,
  errorMessage
}: PropTypes) =>
  name ? (
    <Original name={name} action={action} honeypotName={honeypotName}>
      {({ handleChange, success, error }: RenderProps) => (
        <>
          <Honeypot />
          {success && successMessage}
          {error && errorMessage}

          {Object.keys(fields)
            .map(elementsMapper(fields, { onChange: handleChange }))
            .filter(Boolean)}
        </>
      )}
    </Original>
  ) : (
    <></>
  )

NetlifyForm.defaultProps = {
  action: null,
  honeypotName: 'bot-field',
  successMessage: <p>Thanks!</p>,
  errorMessage: (
    <p>Sorry, we could not reach our servers. Please try again later.</p>
  )
}

export default NetlifyForm
