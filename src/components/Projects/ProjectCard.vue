<script setup>
const props = defineProps({
    data: Object
})
const {title, description, tech, img} = props.data;
console.log(img)
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
@import '../../styles/partials/mixins'; 
.project-card{
    margin: .75rem 0;

    &:hover{
            background: #BDC3C725;
        }
    @include large-mobile{
        margin: 2rem 0;
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