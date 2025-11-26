import type { Meta, StoryObj } from '@storybook/vue3-vite'

import MyInput from './MyInput.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Input',
  component: MyInput,
  render: (args: any) => ({
    components: { MyInput },
    setup() {
      return { args }
    },
    template: '<MyInput v-bind="args"/>',
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email'] },
    label: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof MyInput>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//   },
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//   },
// }

// export const SmallOutline: Story = {
//   args: {
//     size: 'small',
//     variant: 'outline',
//   },
// }
