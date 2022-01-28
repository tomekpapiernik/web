import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { HSForm } from './hsform'

export default {
  title: 'Layouts/HSForm',
  component: HSForm,
  args: {
    onSubmit: () => {
      console.log('Submitted')
    },
    onReady: () => {
      console.log('Submitted')
    },
    loading: <div>Loading...</div>,
    className: 'some-class',
    style: {
      backgroundColor: 'var(--debug-color)'
    },
  }
} as ComponentMeta<typeof HSForm>

const Template: ComponentStory<typeof HSForm> = (args) => <HSForm {...args} />

export const GrowthPlan = Template.bind({})
GrowthPlan.args = {
  portalId: '25092455',
  formId: 'd220ca31-260d-43b7-8005-8f82b6740fb4',
}

export const StartupPlan = Template.bind({})
GrowthPlan.args = {
  portalId: '25092455',
  formId: '29627180-accd-4163-a347-daf96e50b8d7',
}

