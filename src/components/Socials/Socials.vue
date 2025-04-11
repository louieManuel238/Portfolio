<script>
import LinkedIn from './LinkedIn.vue';
import GitHub from './GitHub.vue';

export default {
  components: {
    LinkedIn,
    GitHub
  },
};
</script>
<template>
<ul aria-label="social media"
    class="social-list">
    <li class="social-list__item">
        <a aria-label="LinkedIn (opens in a new tab)" title="LinkedIn" target="_blank" href="#">
            <LinkedIn />
        </a>
    </li>
    <li class="social-list__item">
        <a aria-label="GitHub (opens in a new tab)" title="LinkedIn" target="_blank" href="#">
            <GitHub />
        </a>
    </li>
</ul>
</template>
<style lang="scss" scoped>
.social-list{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
}
</style>