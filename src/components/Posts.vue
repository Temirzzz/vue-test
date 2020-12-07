<template>
    <div class="post-block">
        <div class="post-block__header">
            <p class="post-block__item">Мой отзыв</p>
            <span class="close__btn"></span>
        </div>
        <div class="post-block__body">
            <div class="post-block__body__section post-block__body__section_small-height">
                <img class="wedding__img" src="/src/assets/images/wedding.png" alt="wedding">
                <div class="post-block__body__item__wrapper">
                    <p class="post-block__body__section__item1">Фоточки в свадебном платьице</p>
                    <p class="post-block__body__section__item2">Алена Смирнова</p>
                </div>
            </div>
            <div class="post-block__body__section post-block__body__section_large-height">
                <Stars />
                <div class="post-block__body__section__textarea">
                    <textarea v-model.trim="message" placeholder="Комментарий"></textarea>
                    <p>12/500</p>
                </div>
                <Input />
                <div class="post-block__body__section__footer">
                    <button v-on:click="submitBtn">Отправить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Stars from './Stars.vue'
import Input from './Input.vue'
import {submitBtn} from '../functions'


export default {
    name: 'stars',
    components: { 
        Stars,
        Input
    },
    data() {
       return {
            message: ''
       }
    },
    methods: {
        submitBtn
    }
}

</script>

<style lang="scss">

@font-face {
    font-family: 'Montserrat-Light';
    src: url('/src/assets/fonts/Montserrat/Montserrat-Light.ttf');
}

@font-face {
    font-family: 'Montserrat-Regular';
    src: url('/src/assets/fonts/Montserrat/Montserrat-Regular.ttf');
}
@font-face {
    font-family: 'Montserrat-Medium';
    src: url('/src/assets/fonts/Montserrat/Montserrat-Medium.ttf');
}
@font-face {
    font-family: 'Montserrat-Bold';
    src: url('/src/assets/fonts/Montserrat/Montserrat-Bold.ttf');
}
@font-face {
    font-family: 'Montserrat-Semibold';
    src: url('/src/assets/fonts/Montserrat/Montserrat-SemiBold.ttf');
}

.post-block {
    position: relative;
    margin: 0 auto;
    height: 600px;
    width: 507px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 13px;
    background: #fff;
}
.post-block__header {
    position: relative;
    display: flex;
    border-bottom: 1px solid #EAECF0;
    height: 56px;
}
.post-block__item {
    font-family: 'Montserrat-Semibold';
    margin-top: 22px;
    margin-left: 27px;
    font-size: 15px;
}
.close__btn {
    position: absolute;
    right: 25px;
    top: 24px;

}
.close__btn:hover {
    opacity: 0.5;
}
.close__btn:before, .close__btn:after {
    position: absolute;
    content: ' ';
    height: 13.31px;
    width: 2px;
    background-color: #7F899E;
}
.close__btn:before {
    transform: rotate(45deg);
}
.close__btn:after {
    transform: rotate(-45deg);
}
.wedding__img {
    width: 93px;
    height: 61px;
    border-radius: 5px;
    margin-top: 22px;
    margin-left: 28px;
    margin-right: 16px;
}
.post-block__body__section_small-height {
    display: flex;
}
.post-block__body__item__wrapper {
    text-align: left;
}
.post-block__body__section__item1 {
    font-family: 'Montserrat-Semibold';
    font-size: 14px;
    margin-top: 32px;
    line-height: 24px;
    color: #3C3C3C;
    margin-left: 3px;
    letter-spacing: 0.3px;
}
.post-block__body__section__item2 {
    font-family: 'Montserrat-Regular';
    color: #50586A;
    font-size: 11px;
    line-height: 18px;
    margin-left: 1px;
}
textarea {
    width: 450px;
    height: 93px;
    border: 1px solid #EAECF0;
    box-sizing: border-box;
    border-radius: 6px;
    resize: none;
    font-family: 'Montserrat-Light';
    font-size: 15px;
    color: #7F899E;
    padding-top: 12px;
    padding-left: 9px;
    margin-left: 28px;
    background: #FAFAFA;
}
.post-block__body__section__textarea {
    margin: 0 auto 16px;
}
.post-block__body__section__textarea p {
    text-align: right;
    margin-top: -2px;
    margin-right: 28px;
    font-family: 'Montserrat-Regular';
    font-size: 11px;
    color: #7F899E;
}
.post-block__body__section__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 68px;
}
.post-block__body__section__footer button {
   width: 93px;
    height: 32px;
    background: #53C6D1;
    border-radius: 5px;
    border: none;
    margin-right: 15px;
    margin-top: -9px;
    letter-spacing: -1px;
    font-family: 'Montserrat-semibold';
    color: #fff;
    cursor: pointer;
    font-size: 14px;
}
.popup {
    position: absolute;
    width: 279px;
    height: 36px;
    background: #15A758;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    color: #fff;
    font-family: 'Montserrat-Medium';
    padding-left: 12px;
    line-height: 36px;
    font-size: 14px;
    bottom: -80px;
    left: 50%;
    transform: translate(-50%);
}
.close {
    position: absolute;
    height: 20px;
    width: 20px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: #7CE2AA;
    right: 14px;
    top: 8px;
}
.close:active, .close:focus {
  outline: none;
}
.close::-moz-focus-inner {
  border: 0;
}
.close__img {
    position: absolute;
    top: 6.41px;
    left: 50%;
    transform: translate(-49%);
    z-index: 777;
}
</style>