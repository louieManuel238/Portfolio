<script setup>
const props = defineProps({
    data: Object
})
const {title, description, tech, date, company} = props.data;
</script>
<template>
<div class="work-card">
    <div class="work-card__container">
        <p>{{ date }}</p>
        <div class="work-card__contents">
            <h3 class="text-title">{{title}} | {{ company }}</h3>
            <p class="text-description">{{ description }}</p>
            <ul class="tech-list">
                <li  v-for="tag in tech"
                    class="tech-list__tag">
                    {{ tag }}
                </li>
            </ul>
        </div>
    </div>
</div>

</template>
<style lang="scss" scoped>
@import '../../styles/partials/mixins'; 
@import '../../styles/partials/variables';
.work-card{
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
.text-title{
    font-size: 1rem;
}
.text-description{
    font-size: $text-sub-font;
    color: $text-sub-color;
}
</style>