<script setup>
import TheSideBar from '@/components/TheSideBar.vue';
import Content from '@/components/Content.vue';
import YourInfo from '@/components/YourInfo.vue';
import SelectPlan from '@/components/SelectPlan.vue';
import AddOns from '@/components/AddOns.vue';
import Summary from '@/components/Summary.vue';
import ThankYou from '@/components/ThankYou.vue';
import { useStepStore } from '@/stores/step';

const stepStore = useStepStore();

</script>

<template>
  <div class="container">
    <TheSideBar />
    <Content>
      <YourInfo v-if="stepStore.step == 1" />
      <SelectPlan v-if="stepStore.step == 2" />
      <AddOns v-if="stepStore.step == 3" />
      <Summary v-if="stepStore.step == 4" />
      <ThankYou v-if="stepStore.step == 5" />
    </Content>
  </div>
</template>

<style scoped>
.container {
  width: 1080px;
  height: 720px;
  background-color: var(--alabaster);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  display: flex;
}
</style>
