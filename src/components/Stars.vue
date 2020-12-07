<template>
    <div class="post-block__body__section__stars-block">
        <div   class="stars__block_first">
            <div class="stars__block__wrapper stars__block__wrapper_margin">
                <p>Скорость</p>
                <div class="stars">
                    <div v-for="n in 5">
                        <img @click="starShine" v-for="img in stars" v-bind:src="img" />
                    </div>
                </div>
            </div>
            <div class="stars__block__wrapper stars__block__wrapper_margin-sec">
                <p>Качество</p>
                <div class="stars">
                    <div v-for="n in 5">
                        <img @click="starShine" v-for="img in stars" v-bind:src="img" />
                    </div>
                </div>
            </div>
        </div>
        <div class="stars__block_second">
            <div class="stars__block__wrapper stars__block__wrapper_margin">
                <p>Скорость отдачи видео</p>
                <div class="stars">
                    <div v-for="n in 5">
                        <img @click="starShine" v-for="img in stars" v-bind:src="img" />
                    </div>
                </div>
            </div>
            <div class="stars__block__wrapper stars__block__wrapper_margin-sec">
                <p>Пунктуальность</p>
                <div class="stars">
                    <div v-for="n in 5">
                        <img @click="starShine" v-for="img in stars" v-bind:src="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const stars = ['/src/assets/images/star-gray.png']

export default {
    data() {
    return {
        stars
    }
  },
    methods: {
        starShine: function(event) {
            event.target.classList.toggle('star_shine')
        }
    }
}
</script>


<style lang="scss">
.post-block__body__section__stars-block {
    display: flex;
    margin-top: 31px;
}
.stars__block__wrapper_margin {
    margin-bottom: 21px;
}
.stars__block__wrapper_margin-sec {
    margin-bottom: 24px;
}
.stars__block_first {
    display: flex;
    flex-direction: column;
    margin: 0 37px 0 28px;
}
.stars__block_second {
    display: flex;
    flex-direction: column;
}
.stars__block_first p,
.stars__block_second p {
    font-family: 'Montserrat-Medium';
    font-size: 12px;
    text-align: left;
    margin-bottom: 12px;
    color: #3C3C3C;
    letter-spacing: 0.5px;
}
.stars {
    display: flex;
    cursor: pointer;
    margin-left: 2px;
}
.stars img {
    margin-right: 10px;
}
.star_shine {
    background-color: #53C6D1; 
    mix-blend-mode: multiply;
}


</style>