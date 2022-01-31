import {
  useHubspotForm,
  UseHubSpotFormProps
} from '@aaronhayes/react-use-hubspot-form'
import * as React from 'react'

export interface PropTypes extends Omit<UseHubSpotFormProps, 'target'> {
  noscriptMessage?: string
  loadingMessage?: string
  errorMessage?: string
  className?: string
  style?: React.CSSProperties
  target?: string
  region?: string
}

export const HSForm = ({
  className,
  style,
  noscriptMessage = 'This feature requires JavaScript.',
  loadingMessage = 'Loading',
  errorMessage = 'Error',
  target = '',
  region = 'eu1',
  ...props
}: PropTypes) => {
  const htmlId = ['hs', props.portalId, props.formId, target]
    .filter(Boolean)
    .join('_')
  const { loaded, error, formCreated } = useHubspotForm({
    ...props,
    region,
    target: `#${htmlId}`
  } as UseHubSpotFormProps)

  if (error) {
    return <>{errorMessage || 'Error'}</>
  }

  if (!loaded) {
    return <>{loadingMessage || null}</>
  }

  return (
    <div className={className} style={style} id={htmlId}>
      <noscript>{noscriptMessage}</noscript>
    </div>
  )
}

export default HSForm
