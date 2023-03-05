<script setup>
import NavButtons from './NavButtons.vue';
import { useStepStore } from '@/stores/step';

const stepStore = useStepStore();
</script>

<template>
    <div class="ct-container">
        <div class="ct-content">
            <slot />
        </div>
        <NavButtons v-if="stepStore.step < 5" />
    </div>
</template>

<style scoped>
.ct-container {
    padding: 20px 100px;
    margin-left: 20px;
    width: calc(100% - 320px);
}

.ct-content {
    height: 600px;
    width: 100%;
}
</style>