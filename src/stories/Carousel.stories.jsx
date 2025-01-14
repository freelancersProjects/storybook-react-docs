import Carousel from '../lib/components/Carousel';

export default {
    title: 'Components/Carousel',
    component: Carousel,
    argTypes: {
        autoPlay: { control: 'boolean', description: 'Enable auto-slide' },
        interval: { control: 'number', description: 'Auto-slide interval in ms' },
        showDots: { control: 'boolean', description: 'Show navigation dots' },
        showArrows: { control: 'boolean', description: 'Show navigation arrows' },
        swipeEnabled: { control: 'boolean', description: 'Enable swipe gesture' },
        mode: {
            control: 'radio',
            options: ['single', 'peek'],
            description: 'Display mode: single slide or peek mode',
        },
        slidesToShow: { control: 'number', description: 'Number of slides visible at once' },
        onImageClick: { action: 'image clicked', description: 'Handle image click' },
    },
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        'https://picsum.photos/800/300?random=1',
        'https://picsum.photos/800/300?random=2',
        'https://picsum.photos/800/300?random=3',
    ],
    autoPlay: true,
    interval: 3000,
    showDots: true,
    showArrows: true,
    swipeEnabled: true,
    mode: 'single',
    slidesToShow: 1,
};

export const PeekMode = Template.bind({});
PeekMode.args = {
    items: [
        'https://via.placeholder.com/800x300?text=Slide+1',
        'https://via.placeholder.com/800x300?text=Slide+2',
        'https://via.placeholder.com/800x300?text=Slide+3',
    ],
    autoPlay: false,
    showDots: true,
    showArrows: true,
    swipeEnabled: true,
    mode: 'peek',
    slidesToShow: 1.5, // Une partie de la diapositive suivante est visible
};

export const MultiSlides = Template.bind({});
MultiSlides.args = {
    items: [
        'https://via.placeholder.com/400x300?text=Slide+1',
        'https://via.placeholder.com/400x300?text=Slide+2',
        'https://via.placeholder.com/400x300?text=Slide+3',
        'https://via.placeholder.com/400x300?text=Slide+4',
    ],
    autoPlay: false,
    showDots: true,
    showArrows: true,
    swipeEnabled: true,
    mode: 'peek',
    slidesToShow: 3, // Trois diapositives visibles
};

export const WithCustomClick = Template.bind({});
WithCustomClick.args = {
    items: [
        'https://via.placeholder.com/800x300?text=Slide+1',
        'https://via.placeholder.com/800x300?text=Slide+2',
        'https://via.placeholder.com/800x300?text=Slide+3',
    ],
    autoPlay: false,
    showDots: true,
    showArrows: true,
    swipeEnabled: true,
    mode: 'single',
    slidesToShow: 1,
    onImageClick: (image) => alert(`Image clicked: ${image}`),
};
