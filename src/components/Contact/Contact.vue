<script setup>
import Socials from '../Socials/Socials.vue';
import Toast from '../Modal/Toast.vue';
import {ref, inject, watch, useTemplateRef} from 'vue';
import { useFocus, useWindowScroll } from '@vueuse/core';
import emailjs from '@emailjs/browser';

const inputName = useTemplateRef('inputName')
const inputEmail = useTemplateRef('inputEmail')
const inputMessage = useTemplateRef('inputMessage')
const { focused: isFocusedName } = useFocus(inputName);
const { focused: isFocusedEmail } = useFocus( inputEmail);
const { focused: isFocusedMessage } = useFocus(inputMessage);
const isError = ref(false);

const visibleSection = inject('visibleSection')
const {y} = useWindowScroll();


watch(y,()=>{
    if(y.value>2000) visibleSection.value=3;
})
const form = ref({
    name:'',
    email:'',
    message:''
})
const sendStatus = ref(false);

const sendEmail = () => {
    isError.value = false;
    const {name, message, email} = form.value;
    if(name != ''
    &&message != ''
    &&email != ''){
       
    emailjs
        .send(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, 
        {   name: form.value.name,
            message: form.value.message,
            email: form.value.email,
        },
        {
        publicKey: import.meta.env.VITE_EMAIL_KEY,
        })
        .then(
        () => {
             sendStatus.value = true;
            setTimeout(()=> sendStatus.value = false, 3000)
        },
        (error) => {
            sendStatus.value = false;
            isError.value = true;
        },
        );
    }else{
       isError.value = true;
    }
    
};
</script>
<template>
    <section class="contact-section" aria-label="Contact Me" id="contact-section" ref="contactRef">
        <div class="section-header">
            <h2>Connect With Me</h2>
        </div>
        <Socials/>
        <form class="contact" @submit.prevent="sendEmail">
            <label class="contact__label" for="full-name" :class="{focused: isFocusedName}">Full Name</label>
            <input ref="inputName" class="contact__input" aria-label="input name" autocomplete="on"
            type="text" id="full-name" name="name" v-model="form.name" :class="{error:isError}">

            <label class="contact__label" for="email-address" :class="{focused: isFocusedEmail}">Email</label>
            <input ref="inputEmail" class="contact__input" aria-label="input email address" autocomplete="on"
            type="email" id="email-address" name="email" v-model="form.email" :class="{error:isError}">

            <label class="contact__label" for="message" :class="{focused: isFocusedMessage}">Message</label>
            <textarea ref="inputMessage" aria-label="input massage" 
            class="contact__input contact__input--textarea" 
            id="message" name="message" v-model="form.message" :class="{error:isError}"></textarea>
            <button type="submit" class="button-regular" aria-label="submit message button">Send</button>
        </form>
    </section>
    <Transition name="toast">
        <Toast v-if="sendStatus" ><p v-if="sendStatus">Message Sent!</p></Toast>
    </Transition>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
.error{
    border: 1px solid #ff0000;
}
.contact{
    display: flex;
    flex-direction: column;

    padding: 0 1rem 2rem;
    &__label{
        width: 100%;
        margin-top: .75rem;

        & + input:focus,
        & + textarea:focus {
            font-weight: 600;
        }
    }
    &__input{
        width: 100%;
        background-color: $background-dark-input-color;
        border-radius: 5px;
        &--textarea{
            height: 8rem;
        }
    }
}
.button-regular{
    align-self: flex-end;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    padding: .25rem 2rem;
    background-color: #1B2F53;
    border-radius: 10px;
    width: 8rem;
    &:hover{
        font-weight: 800;
        transition: .25s;
        color: #00C2CB;
    }
}
.focused{
    color: #00C2CB;
    font-weight: 600;
}
.toast-enter-from,
.toast-leave-to{
    opacity: 0;
    transform: translateY(60px);
}
.toast-enter-to,
.toast-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.toast-enter-active,
.toast-leave-active{
    transition: all 0.3s ease;
}
</style>