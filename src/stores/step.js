import { defineStore } from 'pinia';

export const useStepStore = defineStore('step', {
    state: () => {
        return {
            step: 1,
        }
    },
    actions: {
        nextStep() {
            if (this.step < 5) {
                this.step++;
            }
        },
        previousStep() {
            if (this.step > 1) {
                this.step--;
            }
        },
    },
});
