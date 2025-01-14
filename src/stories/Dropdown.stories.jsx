import React from 'react';
import Dropdown from '../lib/components/Dropdown';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        options: { control: 'array', description: 'Options in the dropdown' },
        placeholder: { control: 'text', description: 'Placeholder text' },
        withAnimation: { control: 'boolean', description: 'Enable opening animation' },
        backgroundColor: { control: 'color', description: 'Background color of the dropdown' },
        textColor: { control: 'color', description: 'Text color of the dropdown' },
        hoverColor: { control: 'color', description: 'Hover color for dropdown items' },
        border: { control: 'boolean', description: 'Show border around dropdown and options' },
    },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option',
    withAnimation: true,
    backgroundColor: '#fff',
    textColor: '#333',
    hoverColor: '#f1f1f1',
    border: false,
};

export const WithBorders = Template.bind({});
WithBorders.args = {
    options: ['Red', 'Green', 'Blue'],
    placeholder: 'Pick a color',
    withAnimation: true,
    backgroundColor: '#f9f9f9',
    textColor: '#007bff',
    hoverColor: '#ddd',
    border: true,
};
