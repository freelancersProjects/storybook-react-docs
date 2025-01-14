import React from 'react';
import Card from '../lib/components/Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        image: { control: 'text', description: 'URL of the image' },
        title: { control: 'text', description: 'Title of the card' },
        description: { control: 'text', description: 'Description text of the card' },
        fullWidth: { control: 'boolean', description: 'If true, card takes full width' },
        height: { control: 'text', description: 'Height of the card' },
        borderRadius: { control: 'text', description: 'Border radius of the card' },
        showButton: { control: 'boolean', description: 'Show the "Voir plus" button' },
        buttonLabel: { control: 'text', description: 'Label for the button' },
        buttonAlign: {
            control: 'radio',
            options: ['left', 'right', 'center'],
            description: 'Alignment of the button',
        },
        centerText: { control: 'boolean', description: 'Center text vertically in fullWidth mode' },
        onClick: { action: 'card clicked', description: 'Callback for card click' },
        onButtonClick: { action: 'button clicked', description: 'Callback for button click' },
    },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: 'https://picsum.photos/800/300?random=1',
    title: 'Default Card',
    description: 'This is a simple card with an image and some text.',
    fullWidth: false,
    height: 'auto',
    borderRadius: '8px',
    showButton: true,
    buttonLabel: 'Voir plus',
    buttonAlign: 'left',
};

export const FullWidthWithCenteredText = Template.bind({});
FullWidthWithCenteredText.args = {
    image: 'https://picsum.photos/800/300?random=1',
    title: 'Full Width Card',
    description: 'This card has centered text beside the image.',
    fullWidth: true,
    height: '200px',
    borderRadius: '8px',
    centerText: true,
};
