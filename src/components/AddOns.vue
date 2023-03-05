<script setup>
import { computed } from 'vue';
import { usePriceStore } from '@/stores/price';

const priceStore = usePriceStore();

const duration = computed(() => {
    return priceStore.yearly ? 'yr' : 'mo';
})

const addons = [
    {
        id: 1,
        name: "Online service",
        message: "Access to multiplayer games",
        price: {
            mo: 1,
            yr: 10
        },
    },
    {
        id: 2,
        name: "Larger storage",
        message: "Extra 1TB of cloud save",
        price: {
            mo: 2,
            yr: 20
        },
    },
    {
        id: 3,
        name: "Customizable Profile",
        message: "Custom theme on your profile",
        price: {
            mo: 2,
            yr: 20
        },
    }
]

const checkSelected = (addon) => {
    return priceStore.addons.some(a => a.id === addon.id);
}

const selectAddon = (addon) => {
    if (checkSelected(addon)) {
        priceStore.addons = priceStore.addons.filter(a => a.id !== addon.id);
    } else {
        priceStore.addons.push(addon);
    }
    console.log(priceStore.addons);
}
</script>

<template>
    <div>
        <h2 class="title">Pick add-ons</h2>
        <p class="subtitle">Add-ons help enhance your gaming experience.</p>

        <div class="addons">
            <div v-for="addon in addons" :key="addon.id" class="addon" :class="{ 'selected-addon': checkSelected(addon) }"
                @click="selectAddon(addon)">
                <input type="checkbox" :checked="checkSelected(addon)">
                <div class="addon-content">
                    <h3>{{ addon.name }}</h3>
                    <p>{{ addon.message }}</p>
                </div>
                <p class="price">
                    ${{ addon.price[duration] }}/{{ duration }}
                </p>
            </div>
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

.addons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
}

.addon {
    display: flex;
    align-items: center;
    padding: 20px;
    height: 100px;
    border-radius: 10px;
    background-color: var(--white);
    border: 1px solid var(--cool-gray);
    cursor: pointer;
}

.addon input[type="checkbox"] {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid var(--cool-gray);
    margin: 10px;
    cursor: pointer;
}

.addon input[type="checkbox"]:checked {
    content: '';
    background-color: var(--purplish-blue);
}

.addon:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.addon-content {
    flex: 1;
    margin-left: 20px;
}

.selected-addon {
    background-color: var(--magnolia);
    border: 1px solid var(--purplish-blue);
}
</style>