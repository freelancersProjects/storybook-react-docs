import React from 'react';
import Timeline from '../lib/components/Timeline';

export default {
    title: 'Components/Timeline',
    component: Timeline,
    argTypes: {
        events: { control: 'array', description: 'List of events in the timeline' },
        completedSteps: { control: 'number', description: 'Number of completed steps' },
        completedColor: { control: 'color', description: 'Color of completed steps' },
        defaultColor: { control: 'color', description: 'Color of incomplete steps' },
    },
};

const Template = (args) => <Timeline {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    events: [
        { title: 'Step 1', date: '01/01/2025' },
        { title: 'Step 2', date: '02/01/2025' },
        { title: 'Step 3', date: '03/01/2025' },
        { title: 'Step 4', date: '04/01/2025' },
    ],
    completedSteps: 2,
    completedColor: '#28a745',
    defaultColor: '#ccc',
};

export const Vertical = Template.bind({});
Vertical.args = {
    events: [
        { title: 'Planning', date: '01/01/2025' },
        { title: 'Execution', date: '15/01/2025' },
        { title: 'Review', date: '30/01/2025' },
    ],
    linear: false,
    completedSteps: 1,
    completedColor: '#007bff',
    defaultColor: '#ccc',
};
