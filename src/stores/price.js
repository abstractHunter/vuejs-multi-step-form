import { defineStore } from 'pinia';

export const usePriceStore = defineStore('price', {
    state: () => {
        return {
            yearly: true,
            plan: {},
            addons: [],
        }
    },
    actions: {
        setYearly() {
            this.yearly = true;
        },
        setPlan(plan) {
            this.plan = plan;
        },
        setAddons(addons) {
            this.addons = addons;
        }
    }
});
