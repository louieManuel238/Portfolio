<script setup>
import LinkedIn from './LinkedIn.vue';
import GitHub from './GitHub.vue';
import Email from './Email.vue';
</script>
<template>
<ul aria-label="social media"
    class="social-list">
    <li class="social-list__item">
        <a aria-label="LinkedIn (opens in a new tab)" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/louiegayao/">
            <LinkedIn />
        </a>
    </li>
    <li class="social-list__item">
        <a aria-label="GitHub (opens in a new tab)" title="LinkedIn" target="_blank" href="https://github.com/louieManuel238">
            <GitHub />
        </a>
    </li>
    <li class="social-list__item">
        <a aria-label="Email (opens email app)" title="Email" target="_blank" href="mailto:manuel.gayao@outlook.com">
            <Email />
        </a>
    </li>
</ul>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
.social-list{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    &__item{
        width: 2rem;
        @include desktop{
            width: 1.5rem;
        }
    }
}
</style>