import { formatDateAndTime } from '@/lib/formatters';
import { fetchUser } from '@/actions/user';

export async function userSettings() {

    const settings = [
        { setting: 'showAffirmations', title: 'Show Affirmations', value: true },
        { setting: 'showBible', title: 'Show Bible', value: true },
        { setting: 'showBooks', title: 'Show Books', value: true },
        { setting: 'showColdSoak', title: 'Show Cold Soak', value: true },
        { setting: 'showFasting', title: 'Show Fasting', value: true },
        { setting: 'showGratitudes', title: 'Show Gratitudes', value: true },
        { setting: 'showHabits', title: 'Show Habits', value: true },
        { setting: 'showJournal', title: 'Show Journal', value: true },
        { setting: 'showWaterIntake', title: 'Show Water Intake', value: true },
        { setting: 'showWeight', title: 'Show Weight', value: true },
        { setting: 'showWorkout', title: 'Show Workout', value: true },
        { setting: 'darkMode', title: 'Dark Mode', value: false },
    ];

    return settings;

};

export function userAffirmations() {
    const now = Date.now();
    const formatedDate = formatDateAndTime(now);

    return [
        {
            affirmation: 'I am worthy of love and respect.',
            kind: 'Self Worth',
            date: formatedDate,
        },
        {
            affirmation: 'I am enough, just as I am.',
            kind: 'Self Worth',
            date: formatedDate,
        },
        {
            affirmation: 'I am confident in my abilities.',
            kind: 'Self Worth',
            date: formatedDate,
        },
        {
            affirmation: 'I am proud of myself and my accomplishments.',
            kind: 'Self Worth',
            date: formatedDate,
        },
        {
            affirmation: 'I am deserving of happiness and success.',
            kind: 'Self Worth',
            date: formatedDate,
        },
        {
            affirmation: 'Today will be a wonderful day.',
            kind: 'Positivity',
            date: formatedDate,
        },
        {
            affirmation: 'I choose to focus on the positive.',
            kind: 'Positivity',
            date: formatedDate,
        },
        {
            affirmation: 'I am grateful for all that I have.',
            kind: 'Positivity',
            date: formatedDate,
        },
        {
            affirmation: 'I am open to new experiences and opportunities.',
            kind: 'Positivity',
            date: formatedDate,
        },
        {
            affirmation: 'I am surrounded by love and support.',
            kind: 'Positivity',
            date: formatedDate,
        },
        {
            affirmation: 'I embrace challenges as opportunities for growth.',
            kind: 'Growth',
            date: formatedDate,
        },
        {
            affirmation: 'I am resilient and can overcome any obstacle.',
            kind: 'Growth',
            date: formatedDate,
        },
        {
            affirmation: 'I am committed to self-improvement.',
            kind: 'Growth',
            date: formatedDate,
        },
        {
            affirmation: 'I am capable of achieving my goals.',
            kind: 'Growth',
            date: formatedDate,
        },
        {
            affirmation: 'I am grateful for my body and mind.',
            kind: 'Mindfulness',
            date: formatedDate,
        },
        {
            affirmation: 'I am at peace with myself and the world around me.',
            kind: 'Mindfulness',
            date: formatedDate,
        },
        {
            affirmation: 'I am mindful of my thoughts and feelings.',
            kind: 'Mindfulness',
            date: formatedDate,
        },
        {
            affirmation: 'I choose to live in the present moment.',
            kind: 'Mindfulness',
            date: formatedDate,
        },
        {
            affirmation: 'I am constantly learning and growing.',
            kind: 'Growth',
            date: formatedDate,
        }
    ]
};

export function userHabits() {
    return [
        {
            title: 'Mentor',
            description: 'Mentor',
            kind: 'Personal',
            status: 'Active',
        },
        {
            title: 'Do not talk negatively about others',
            description: "Do not talk negatively about others.",
            kind: 'Family',
            status: 'Active',
        },
        {
            title: 'Home date night (Thursday)',
            description: "Sometimes it's hard to leave but we can still find valuable time together at night when kids go to bed.",
            kind: 'Marriage',
            status: 'Active',
        },
        {
            title: 'Be reliable and present',
            description: 'Be reliable and present in community. Be a leader that Christ has us to be.',
            kind: 'Community',
            status: 'Active',
        },
        {
            title: 'Leave a legacy of love, challenges, and faith',
            description: 'Leave a legacy for my family.',
            kind: 'Family',
            status: 'Active',
        },
        {
            title: 'Practice what we preach',
            description: 'We must follow what we say.',
            kind: 'Personal',
            status: 'Active',
        },
        {
            title: 'Let yes be yes, no be no.',
            description: "Give direct answers and don't stumble around with maybe, give confident answers and what you want.",
            kind: 'Personal',
            status: 'Active',
        }
    ]
};

export function userJournal() {

    const now = Date.now();
    const formatedDate = formatDateAndTime(now);

    return [
        {
            title: 'First journal entry',
            entry: 'Here is your first journal entry! Here is a space for you to write your experience!',
            date: formatedDate,
        }
    ]
}