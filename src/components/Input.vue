<template>
    <div class="post-block__body__section-img__block">
        <div class="post-block__body__section-img__block__wrapper">
            <div class="img_wrapper">
                <label for="file">
                    <img class="post-block__body__section-img__block__img" src="/src/assets/images/ampty.png" alt="">
                    <img class="img_pos_first" src="/src/assets/images/cross.png" alt="">

                    <input 
                    class="input_hidden"
                        id="file"
                        type="file" 
                        @change="onUpload"
                        accept="image/jpeg, image/png"
                    >
                </label> 
            </div>
            <img class="post-block__body__section-img__block__img" src="/src/assets/images/boat.png" alt="">
            <img class="post-block__body__section-img__block__img" src="/src/assets/images/couple.png" alt="">
            <img class="post-block__body__section-img__block__img" src="/src/assets/images/chick.png" alt="">
            <div class="img_wrapper">
                <img class="post-block__body__section-img__block__img" src="/src/assets/images/merredge.png" alt="">
                <img class="img_pos_second" src="/src/assets/images/buscet.png" alt="">         
            </div>
        </div>  
    </div>
    
</template>


<script>
import {fb, db} from '../firebase'
import submitBtn from '../functions'

export default {
    methods: {
        onUpload(e) {
            let file = e.target.files[0]
            if(!file) {
                alert('zzz')
            }
            else {
                let storageRef = fb.storage().ref('images/' + file.name)
                storageRef.put(file)
            }
        }
    }  
}

</script>

<style lang="scss">

.input_hidden {
    display: none;
}
.post-block__body__section-img__block {
    border-bottom: 1px solid #EAECF0;
    padding-bottom: 10px;
}
.post-block__body__section-img__block__wrapper {
    margin-left: 27px;
    display: flex;
    margin-bottom: 7px;
}
.img_wrapper {
    position: relative;
}
.img_pos_first {
    position: absolute;
    top: 29px;
    left: 50%;
    transform: translate(-66%);
    z-index: 9;
    cursor: pointer;
}
.img_pos_second {
    position: absolute;
    top: 7px;
    width: 30px;
    right: 16px;
    z-index: 9;
    cursor: pointer;
}
.post-block__body__section-img__block__img {
    width: 71.5px;
    height: 72px;
    border-radius: 6px;
    margin-right: 9px;
}

</style>