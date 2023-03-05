<script setup>
import { computed } from 'vue';
import { usePriceStore } from '@/stores/price';

import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';


const priceStore = usePriceStore();

const duration = computed(() => {
    return priceStore.yearly ? 'yr' : 'mo';
})

const plans = [
    {
        id: 1,
        name: 'Arcade',
        icon: IconArcade,
        price: {
            mo: 9,
            yr: 90
        },
    },
    {
        id: 2,
        name: 'Advanced',
        icon: IconAdvanced,
        price: {
            mo: 12,
            yr: 120
        },
    },
    {
        id: 3,
        name: 'Pro',
        icon: IconPro,
        price: {
            mo: 15,
            yr: 150
        },
    },
]

const selectPlan = (plan) => {
    priceStore.plan = plan;
}

</script>

<template>
    <div>
        <h2 class="title">Select your plan</h2>
        <p class="subtitle">You have the option of monthly or yearly billing.</p>
        <div class="plans">
            <div v-for="plan in plans" :key="plan.id" class="plan"
                :class="{ 'selected-plan': priceStore.plan && priceStore.plan.id == plan.id }" @click="selectPlan(plan)">
                <img :src="plan.icon" alt="" />
                <h3>{{ plan.name }}</h3>
                <p class="price">
                    ${{ plan.price[duration] }}/{{ duration }}
                </p>
                <p v-if="duration == 'yr'" class="months-free">2 months free</p>
            </div>
        </div>

        <div class="duration">
            <label for="published">
                Monthly
                <input type="checkbox" v-model="priceStore.yearly" id="published" />
                <span></span>
                Yearly
            </label>
        </div>

        <p v-if="priceStore.error" class="plan-error">You must choose a plan to continue</p>
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

.plans {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
}

.plan {
    width: 160px;
    height: auto;
    background-color: var(--white);
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    border: 1px solid var(--light-gray);
}

.selected-plan {
    border: 1px solid var(--purplish-blue);
    background-color: var(--magnolia);
}

.plan:hover {
    border: 1px solid var(--purplish-blue);
}

.plan img {
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
}

.plan h3 {
    font-size: 1.2rem;
}


.plan .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--cool-gray);
}

.plan .months-free {
    font-size: 1rem;
    margin-top: 10px;
}

.duration {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: var(--magnolia);
    border-radius: 8px;
}

.duration label {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    padding: 8px;
}

.duration label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    display: none;
}

.duration label span {
    position: relative;
    display: flex;
    align-items: center;
    width: 50px;
    height: 25px;
    background-color: var(--marine-blue);
    border-radius: 25px;
    transition: 0.4s;
}

.duration label span:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--white);
    border-radius: 50%;
    transition: 0.4s;
    top: 2px;
    left: 3px;
}

.duration label input:checked+span {
    background-color: var(--marine-blue);
}

.duration label input:checked+span:after {
    transform: translateX(25px);
}

.plan-error {
    color: var(--strawberry-red);
    font-size: 1rem;
    margin-top: 20px;
    text-align: center;
}
</style>