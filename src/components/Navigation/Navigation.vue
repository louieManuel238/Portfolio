<script setup>
    import { ref, inject, watch } from 'vue';
    const navList = ref([
        {title:"Profile", section:"#profile-section"},
        {title:"Projects", section:"#projects-section"},
        {title:"Work Experience", section:"#work-section"},
        {title:"Contact", section:"#contact-section"},
    ])
    const isActive = ref(false);
    const visible = inject('visibleSection')
    watch(visible, ()=>{
        isActive.value=visible.value
    })

</script>
<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list-item"
            v-for="(nav, index) in navList">
                <a class="nav__link"
                    :href="nav.section"
                    :class="{active: isActive === index}"
                    @click="isActive = index"
                >{{nav.title}}</a>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .active{
        font-size: 1.75rem;
        padding-left: 2rem;
    }
    .nav{
        font-size: 1.25rem;
        &__list-item{
            display: flex;
            height: 36px;
            align-items: center;
        }
        &__link{
            width: 100%;
            &:hover{
                font-size: 1.75rem;
                &:not(.active) {
                    padding-left: 2rem;
                    transition: padding-left 0.3s ease-in-out;
                }
            }
        }
    }
    
</style>