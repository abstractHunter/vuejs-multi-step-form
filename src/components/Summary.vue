<script setup>
import { computed } from 'vue';
import { usePriceStore } from '@/stores/price';
import { useStepStore } from '@/stores/step';

const priceStore = usePriceStore();
const stepStore = useStepStore();

let period = computed(() => {
    return priceStore.yearly ?
        { short: "yr", long: "Yearly", verylong: "per year" }
        : { short: "mo", long: "Monthly", verylong: "per month" };
});

let total = computed(() => {
    let total = priceStore.plan.price[period.value.short];
    priceStore.addons.forEach(addon => {
        total += addon.price[period.value.short];
    });
    return total;
});

</script>

<template>
    <div>
        <h2 class="title">Finishing up</h2>
        <p class="subtitle">Double-check everything looks OK before confirming.</p>

        <div class="summary" v-if="priceStore.plan != {}">
            <div class="summary-plan">
                <div class="summary-plan-title">
                    <span>{{ priceStore.plan.name }} ({{ period.long }})</span>
                    <span @click="stepStore.step = 2">Change</span>
                </div>
                <div class="summary-plan-price">
                    <span>${{ priceStore.plan.price[period.short] }}/{{ period.short }}</span>
                </div>
            </div>
            <div class="summary-addons">
                <div v-for="addon in priceStore.addons" class="summary-addon">
                    <span>{{ addon.name }}</span>
                    <span>+${{ addon.price[period.short] }}/{{ period.short }}</span>
                </div>
            </div>
        </div>

        <div class="total" v-if="priceStore.plan != {}">
            <span>Total ({{ period.verylong }})</span>
            <span>${{ total }}/{{ period.short }}</span>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: 2.5rem;
    font-weight: 600;
    padding: 20px 0;
}

.subtitle {
    font-size: 18px;
    margin-bottom: 60px;
    color: var(--cool-gray);
}

.summary {
    background-color: var(--magnolia);
    border-radius: 8px;
    padding: 24px;
}

.summary-plan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--light-gray);
}

.summary-plan-title span {
    display: block;
}

.summary-plan-title span:first-child {
    font-size: 18px;
}

.summary-plan-title span:last-child {
    font-size: 16px;
    color: var(--cool-gray);
    cursor: pointer;
    text-decoration: underline;
}

.summary-plan-price span {
    font-size: 18px;
    font-weight: 600;
}

.summary-addons {
    padding-top: 20px;
}

.summary-addon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}

.summary-addon span:first-child {
    font-size: 18px;
    color: var(--cool-gray);
}

.total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.total span:first-child {
    font-size: 18px;
    color: var(--cool-gray);
}

.total span:last-child {
    font-size: 24px;
    color: var(--purplish-blue);
}
</style>