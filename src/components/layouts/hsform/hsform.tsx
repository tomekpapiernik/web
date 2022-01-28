import * as React from 'react'
import HubspotForm from 'react-hubspot-form'

export interface PropTypes {
  portalId: string
  formId: string
  onReady?: (form: any) => void
  onSubmit?: (form: any) => void
  loading?: React.ReactElement
  className?: string
  style?: React.CSSProperties
}

export const HSForm = ({ className, style, ...props }: PropTypes) => (props.portalId && props.formId && (
  className || style
    ? (<div className={className} style={style}><HubspotForm {...props} /></div>)
    : (<HubspotForm {...props} />)
)) || null

export default HSForm
