<script setup>
import Socials from '../Socials/Socials.vue';
import {ref, inject, watch, useTemplateRef} from 'vue';
import { useFocus, useWindowScroll } from '@vueuse/core';

const inputName = useTemplateRef('inputName')
const inputEmail = useTemplateRef('inputEmail')
const inputMessage = useTemplateRef('inputMessage')
const { focused: isFocusedName } = useFocus(inputName);
const { focused: isFocusedEmail } = useFocus( inputEmail);
const { focused: isFocusedMessage } = useFocus(inputMessage);


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


const submit = (e) => {
    e.preventDefault();
    
    console.log(form.value.name)
     
}
</script>
<template>
    <section class="contact-section" id="contact-section" ref="contactRef">
        <h2>Connect with me</h2>
        <Socials/>
        <form class="contact" @submit="handleSubmit">
            <label class="contact__label" for="full-name" :class="{focused: isFocusedName}">Full Name</label>
            <input ref="inputName" class="contact__input" 
            type="text" id="full-name" name="name" v-model="form.name">

            <label class="contact__label" for="email-address" :class="{focused: isFocusedEmail}">Email</label>
            <input ref="inputEmail" class="contact__input" 
            type="email" id="email-address" name="email" v-model="form.email" >

            <label class="contact__label" for="message" :class="{focused: isFocusedMessage}">Message</label>
            <textarea ref="inputMessage" 
            class="contact__input contact__input--textarea" id="message" name="message" v-model="form.message"></textarea>
            <button type="submit" class="button-regular" @click="submit">Send</button>
        </form>
    </section>
</template>
<style lang="scss" scoped>
#ll{float: left; position: absolute; left: 0}
.contact{
    display: flex;
    flex-direction: column;

    padding: 0 1rem;
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
        background-color: #1B2F53;
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
</style>