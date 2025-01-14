import React from 'react';
import Button from '../lib/components/Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: { control: 'text', description: 'Button label text' },
        backgroundColor: { control: 'color', description: 'Button background color' },
        hoverColor: { control: 'color', description: 'Button hover background color' },
        textColor: { control: 'color', description: 'Text color' },
        borderRadius: { control: 'text', description: 'Button border radius' },
        fontSize: { control: 'text', description: 'Font size of the button' },
        disabled: { control: 'boolean', description: 'Disable the button' },
        onClick: { action: 'clicked', description: 'Callback for button click' },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Click Me',
    backgroundColor: '#6c63ff',
    hoverColor: '#4e4fcf',
    textColor: '#fff',
    borderRadius: '8px',
    fontSize: '1rem',
    disabled: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
    label: 'Rounded Button',
    backgroundColor: '#28a745',
    hoverColor: '#218838',
    textColor: '#fff',
    borderRadius: '50px',
    fontSize: '1.2rem',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled',
    backgroundColor: '#6c757d',
    hoverColor: '#6c757d',
    textColor: '#fff',
    borderRadius: '8px',
    fontSize: '1rem',
    disabled: true,
};
