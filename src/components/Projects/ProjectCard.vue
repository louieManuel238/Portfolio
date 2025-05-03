<script setup>
const props = defineProps({
    data: Object
})
const {title, description, tech, img} = props.data;
</script>
<template>
<div class="project-card">
    <div class="project-card__container">
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
        <img :alt="'Image of ' + title" :src="img" class="project-card__img"/>
    </div>
</div>

</template>
<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *; 
@use '../../styles/partials/variables' as *;
.project-card{
    margin: .75rem 0;
    border-radius: 20px;
    padding: .5rem;
    cursor: pointer;
    &:hover{
            background: #BDC3C725;
            color: #00C2CB;
        }
    &__contents{
        padding: .45rem;
        border-radius: 10px;
        @include tablet{
            flex:1 1 60%;
        }
    }
    &__img{
        display: none;
        width: 100%;
        @include large-mobile{
            display: flex;
        }
        @include tablet{
            width: 20%;
            flex:1 1 40%;
        }
    }
    &__container{
        @include tablet{
            display: flex;
            flex-direction: row;
        }
    }
    
}
.tech-list{
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    &__tag{
        @include tag;
    }
}
.text-title{
    font-size: 1rem;
}
.text-description{
    font-size: $text-sub-font;
    color: $text-sub-color;
}
</style>