/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { NetlifyForm, Fields } from './netlifyform'

const fields: Fields = {
  fieldAName: {
    label: 'Field A label',
    placeholder: 'Placeholder text'
  },
  fieldBName: {
    label: 'Field B label',
    multiline: true,
    placeholder: 'Placeholder text'
  },
  submit: {
    label: 'Submit',
    type: 'submit'
  }
}

export default {
  title: 'Layouts/NetlifyForm',
  component: NetlifyForm,
  args: {
    name: 'some-name',
    fields
  }
} as ComponentMeta<typeof NetlifyForm>

const Template: ComponentStory<typeof NetlifyForm> = (args) => (
  <NetlifyForm {...args} />
)

export const Feedback = Template.bind({})
Feedback.args = {
  name: 'feedback',
  fields: {
    no: {
      label: 'No',
      type: 'submit'
    },
    yes: {
      label: 'Yes',
      type: 'submit'
    },
    article: {
      type: 'hidden',
      value: 'article a'
    }
  }
}
