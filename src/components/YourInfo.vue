<script setup>
</script>

<template>
    <div>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address and phone number.</p>

        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="e.g. Stephen King" autofocus />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
        </div>

        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" />
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
</style>