<script setup>
</script>

<template>
    <div class="thank-you-container">
        <img src="../assets/images/icon-thank-you.svg" alt="">
        <h2 class="title">Thank you!</h2>
        <p class="subtitle">
            Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
        </p>
    </div>
</template>


<style scoped>
.thank-you-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}

img {
    width: 100px;
    margin-bottom: 20px;
}

.title {
    font-size: 2.5rem;
    font-weight: 600;
    padding: 20px 0;
}

.subtitle {
    font-size: 18px;
    color: var(--cool-gray);
    line-height: 30px;
}
</style>