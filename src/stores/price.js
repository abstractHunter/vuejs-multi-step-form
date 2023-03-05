import { defineStore } from 'pinia';

export const usePriceStore = defineStore('price', {
    state: () => {
        return {
            yearly: true,
            plan: null,
            addons: [],
            error: false,
        }
    },
    actions: {
        validate() {
            if (this.plan) {
                this.error = false;
                return true;
            }
            this.error = true;
            return false;
        }
    }
});
