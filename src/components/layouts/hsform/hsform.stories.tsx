import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { HSForm } from './hsform'

export default {
  title: 'Layouts/HSForm',
  component: HSForm,
  args: {
    className: 'some-class',
    style: {
      // backgroundColor: 'var(--debug-color)'
    }
  },
  argTypes: {
    // portalId: { control: { type: null } },
    // formId: { control: { type: null } },
    style: { control: { type: null } }
  },
  decorators: [
    (Story) => (
      <HubspotProvider>
        <Story />
      </HubspotProvider>
    )
  ]
} as ComponentMeta<typeof HSForm>

const Template: ComponentStory<typeof HSForm> = (args) => <HSForm {...args} />

export const GrowthPlan = Template.bind({})
GrowthPlan.args = {
  portalId: '25092455',
  formId: 'd220ca31-260d-43b7-8005-8f82b6740fb4'
}
GrowthPlan.argTypes = {
  portalId: { control: { type: null } },
  formId: { control: { type: null } }
  // style: { control: { type: null } }
}

export const StartupPlan = Template.bind({})
StartupPlan.args = {
  portalId: '25092455',
  formId: '29627180-accd-4163-a347-daf96e50b8d7'
}
StartupPlan.argTypes = {
  portalId: { control: { type: null } },
  formId: { control: { type: null } }
  // style: { control: { type: null } }
}

export const Feedback = Template.bind({})
Feedback.args = {
  portalId: '25504735',
  formId: '2ac5ad9c-9e5d-44a5-ba2d-9b5619e20ebd'
}
Feedback.argTypes = {
  portalId: { control: { type: null } },
  formId: { control: { type: null } }
  // style: { control: { type: null } }
}
