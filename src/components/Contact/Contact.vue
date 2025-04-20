<script setup>
import Socials from '../Socials/Socials.vue';
import {ref, useTemplateRef, inject, watch} from 'vue';
import { useElementVisibility, useWindowScroll } from '@vueuse/core';

const sectionRef = useTemplateRef('contactRef');
const sectionVisibility = useElementVisibility(sectionRef)
const visibleSection = inject('visibleSection')
const {y} = useWindowScroll();

// watch(sectionVisibility, ()=>{
//     if(sectionVisibility.value==true) visibleSection.value=3;
// })
watch(y,()=>{
    if(y.value>2000) visibleSection.value=3;
})
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
    <section class="contact-section" id="contact-section" ref="contactRef">
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
#ll{float: left; position: absolute; left: 0}
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