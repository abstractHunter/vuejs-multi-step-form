<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

</script>

<template>
    <div>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address and phone number.</p>

        <div class="form-group">
            <div class="form-group-label">
                <label for="name">Name</label>
                <span v-if="userStore.errors.name">{{ userStore.errors.name }}</span>
            </div>
            <input type="text" id="name" placeholder="e.g. Stephen King" autofocus v-model="userStore.name" />
        </div>

        <div class="form-group">
            <div class="form-group-label">
                <label for="email">Email</label>
                <span v-if="userStore.errors.email">{{ userStore.errors.email }}</span>
            </div>
            <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" v-model="userStore.email" />
        </div>

        <div class="form-group">
            <div class="form-group-label">
                <label for="phone">Phone Number</label>
                <span v-if="userStore.errors.phoneNumber">{{ userStore.errors.phoneNumber }}</span>
            </div>
            <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" v-model="userStore.phoneNumber" />
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 2.5rem;
    font-weight: 600;
    padding: 20px 0;
}

p {
    font-size: 18px;
    margin-bottom: 60px;
    color: var(--cool-gray);
}

.form-group {
    margin-bottom: 40px;
}

.form-group label {
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
}

.form-group input {
    width: 100%;
    height: 50px;
    border: 1px solid var(--cool-gray);
    border-radius: 8px;
    padding: 0 20px;
    font-size: 18px;
    padding: 24px 16px;
}

.form-group input:focus {
    outline: none;
    border: 1px solid var(--purplish-blue);
}

.form-group input::placeholder {
    color: var(--cool-gray);
}

.form-group input[type="email"] {
    text-transform: lowercase;
}

.form-group input[type="email"]:focus {
    text-transform: lowercase;
}

.form-group-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-group-label span {
    color: var(--strawberry-red);
    font-size: 14px;
}
</style>