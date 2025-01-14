import React from 'react';
import Loader from '../lib/components/Loader';

export default {
    title: 'Components/Loader',
    component: Loader,
    argTypes: {
        loaderColor: { control: 'color', description: 'Color of the active loader part' },
        backgroundColor: { control: 'color', description: 'Background color of the loader' },
        animationType: {
            control: 'select',
            options: ['spinner', 'pulse', 'dots', 'bars', 'ring'],
            description: 'Type of animation',
        },
        imageSrc: { control: 'text', description: 'URL of the image to use as a loader' },
        size: { control: 'text', description: 'Size of the loader' },
    },
};

const Template = (args) => <Loader {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {
    loaderColor: '#6c63ff',
    backgroundColor: '#e0e0e0',
    animationType: 'spinner',
    size: '50px',
};

export const Pulse = Template.bind({});
Pulse.args = {
    loaderColor: '#ff5733',
    backgroundColor: '#ffe0d0',
    animationType: 'pulse',
    size: '60px',
};

export const Dots = Template.bind({});
Dots.args = {
    loaderColor: '#28a745',
    backgroundColor: '#e0f4e0',
    animationType: 'dots',
    size: '80px',
};

export const Bars = Template.bind({});
Bars.args = {
    loaderColor: '#007bff',
    backgroundColor: '#d0e0ff',
    animationType: 'bars',
    size: '70px',
};

export const ImageLoader = Template.bind({});
ImageLoader.args = {
    imageSrc: 'https://picsum.photos/100',
    animationType: 'spinner',
    size: '100px',
};
