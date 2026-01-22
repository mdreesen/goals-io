import { defineStore } from 'pinia';

type YearState = {
    year: number
};

const isYear = () => {
    const date = new Date();
    return date.getFullYear();
}

export const useYear = defineStore('year', {
    state: () => ({ year: isYear() }) as YearState,

    actions: {
        setYear(year: number) {
            console.log(year)
            this.year = year;
        }
    },
  })