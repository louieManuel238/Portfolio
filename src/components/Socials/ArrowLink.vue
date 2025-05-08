<template>
    <div class="arrow-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
        class="arrow-link__svg" 
        aria-hidden="true">
        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
        </svg>
    </div>
</template>
<style scoped lang="scss">
.arrow-link{
    display: inline-block;
    height: 1rem; 
    width: 1rem; 
    flex-shrink: 0; 
    transition: transform 0.2s; 
    &:hover,
    &:focus-visible {
        transform: translate(-0.25rem, -0.25rem); 
    }
    margin-left: 0.25rem; 
    transform: translate( -0.50rem, 0.0625rem); 
}
</style>