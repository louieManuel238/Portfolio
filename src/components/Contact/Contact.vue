<script setup>
import {ref} from 'vue';
import Socials from '../Socials/Socials.vue';
const form = ref({
    name:'',
    email:'',
    message:''
})
const emit = defineEmits(['submit'])
const submit = () => {
  emit('submit', { ...form.value })
}
</script>
<template>
    <section class="contact-section">
        <h2>Connect with me</h2>
        <Socials/>
        <form class="contact">
            <label class="contact__label" for="full-name">Full Name</label>
            <input class="contact__input" type="text" id="full-name" name="name" v-model="form.name">
            <label class="contact__label" for="email-address">Email</label>
            <input class="contact__input" type="email" id="email-address" name="email" v-model="form.email">
            <label class="contact__label" for="message">Message</label>
            <textarea class="contact__input" id="message" name="message" v-model="form.message"></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
</template>
<style lang="scss" scoped>
.contact{
    padding: 0 1rem;
    &__label{
        width: 100%;
    }
    &__input{
        width: 100%;
        background-color: #1B2F53;
    }
}
</style>