export interface TypeAffirmation {
    affirmation: string;
    kind: string;
}

export interface TypeBible {
    book_title: string;
    chapter: string;
    verses: string;
    notes: string;
    type: string;
    icon: string;
}

export interface TypeGratitude {
    gratitude: string;
    date: string;
}

export interface TypeHabit {
    title: string;
    description: string;
    kind: string;
    status: string;
    date_start: string;
    date_end: string;
}

export interface TypeJournal {
    title: string;
    entry: string;
    mood: string;
    date: string;
}

export interface TypeWeight {
    weight: string;
    weight_date: string;
    starting_weight: string;
}

export interface TypeWorkout {
    type: string;
    description: string;
    date: string;
    sets: string;
    duration: string;
}