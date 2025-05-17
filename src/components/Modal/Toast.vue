<script setup>
const { message } = defineProps({
    message: String
});
</script>
<template>
    <div class="toast">
        <p class="toast__message"><slot>Error</slot></p>
    </div>
</template>

<style lang="scss">
.toast{
    width: 400px;
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 40px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    border-radius: 1.25rem;
    background-color: #9bfd6d50;
    color: #328b02;
    font-size: 24px;

}
</style>