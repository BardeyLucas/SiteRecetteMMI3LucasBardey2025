import type { Meta, StoryObj } from '@storybook/vue3-vite'

import MyButton from './MyButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: MyButton,
  render: (args: any) => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: '<MyButton v-bind="args">Click me</MyButton>',
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'tiny', 'small', 'medium', 'large', 'giant'] },
    variant: { control: 'radio', options: ['default', 'outline', 'clear'] },
    state: { control: 'radio', options: ['default', 'disabled'] },
    href: { control: 'text' },
    content: { control: 'radio', options: ['default', 'IconOnly'] },
  },
} satisfies Meta<typeof MyButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const SmallOutline: Story = {
  args: {
    size: 'small',
    variant: 'outline',
  },
}
