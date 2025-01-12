import { Button } from '../lib';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: { control: 'text' },
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
        theme: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger'], // Thèmes disponibles
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    theme: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
    label: 'Danger Button',
    theme: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Button',
    disabled: true,
};
