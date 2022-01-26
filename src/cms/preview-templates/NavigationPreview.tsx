import React from 'react'
import PropTypes from 'prop-types'

// import PreviewLayout from '../PreviewLayout'

const NavigationPreview = ({ entry, widgetFor }: any) => {
  return (
    <>
      TODO: src/cms/preview-templates/NavigationPreview.tsx
    </>
  )
}

NavigationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NavigationPreview
