<script setup>
const props = defineProps({
    data: Object
})
const {title, description, tech, start_date, end_date, company} = props.data;
</script>
<template>
<div class="work-card">
    <div class="work-card__container">
        <p class="work-date">{{ `${new Date(start_date).getUTCFullYear()} - ${end_date ? new Date(end_date).getUTCFullYear() : "present"}` }}</p>
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
.work-date{
    font-size: 12px;
    color: $text-sub-color;
    padding: 0 .45rem;
    flex: 0 0 20%;
    @include tablet{
        padding: .45rem;
    }
}
</style>