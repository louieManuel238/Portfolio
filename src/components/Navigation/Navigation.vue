<script setup>
    import { ref } from 'vue';
    const navList = ref([
        {title:"Profile", section:"#profile"},
        {title:"Projects", section:"#projects"},
        {title:"Work Experience", section:"#experience"},
        {title:"Contact", section:"#contact"},
    ])
    const isActive = ref(false);

</script>
<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list-item"
                :class="{active: isActive === index}"
                @click="isActive = index"
            v-for="(nav, index) in navList">
                <a class="nav__link"
                    :href="nav.section"
                >{{nav.title}}</a>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .active{
        font-size: 1.5rem;
        margin-left: 2rem;
    }
    .nav{
        &__list-item{
            display: flex;
            height: 36px;
            align-items: center;
            &:hover{
                font-size: 1.5rem;
                &:not(.active) {
                    padding-left: 2rem;
                }
            }
        }
    }
    
</style>