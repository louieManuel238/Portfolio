<script setup>
const props = defineProps({
    data: Object
})
const {title, description, tech} = props.data;
</script>
<template>
<div class="project-card">
    <div class="project-card__contents">
        <h3 class="text-title">{{title}}</h3>
        <p class="text-description">{{ description }}</p>
        <ul class="tech-list">
            <li  v-for="tag in tech"
                class="tech-list__tag">
                {{ tag }}
            </li>
        </ul>
    </div>
</div>
</template>
<style lang="scss" scoped>
.project-card{
    margin: .5rem 0;
    &__contents{
        padding: .45rem;
        border-radius: 10px;
        &:hover{
            background: #BDC3C725;
        }
    }

}
.tech-list{
    display: flex;
    gap: .5rem;
    &__tag{
        width: fit-content;
        padding: 0 .25rem;
        border: solid 1px #00C2CB;
        border-radius: 10px;
        color: #07cfda;
        font-weight: 700;
        background: #00C2CB20;
        
    }
}
</style>