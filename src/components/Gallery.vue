<template>
    <div class="show-big-picture hidden" @click="closeBigPicture">
        <div class="picture-container">
            <img v-bind:src="imageUrl" alt="image1">
        </div>
    </div>
  <div id="gallery" class="container">

      <div class="gallery-container">

          <div class="image-card" @click="showBigPicture('/gallery/image1.jpg')">
              <div class="image-detail">
                  <h4>Megtekintés</h4>
              </div>
              <img src="/gallery/image1.jpg" alt="image1">
          </div>
          <div class="image-card" @click="showBigPicture('/gallery/image2.jpg')">
              <div class="image-detail">
                  <h4>Megtekintés</h4>
              </div>
              <img src="/gallery/image2.jpg" alt="image2">
          </div>
          <div class="image-card" @click="showBigPicture('/gallery/image3.jpg')">
              <div class="image-detail">
                <h4>Megtekintés</h4>
              </div>
              <img src="/gallery/image3.jpg" alt="image3">
          </div>

      </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
    setup() {
        const imageUrl = ref('');
        //watchEffect(() => console.log(imageUrl.value));
        return {
            imageUrl,
        }
    },
    name: "Gallery",
    methods: {
        showBigPicture(url) {
            const bigPicture = document.querySelector('.show-big-picture');
            if (bigPicture.classList.contains('hidden')) {
                this.imageUrl = url;
                bigPicture.classList.remove('hidden');
            }
        },
        closeBigPicture() {
            const bigPicture = document.querySelector('.show-big-picture');
            if (!bigPicture.classList.contains('hidden')) {
                bigPicture.classList.add('hidden');
            }
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20vw;
}
.gallery-container {
    width: 83vw;
    //border: 1px solid red;
    display: flex;
    gap: 2vw;
    justify-content: center;
}
.image-card {
    width: 25vw;
    height: 60vh;
    background-color: white;
    //border: 1px solid pink;
    box-shadow: 6px 6px 16px -6px rgba(0,0,0,0.59);
    -webkit-box-shadow: 6px 6px 16px -6px rgba(0,0,0,0.59);
    -moz-box-shadow: 6px 6px 16px -6px rgba(0,0,0,0.59);
    overflow: hidden;
}
.image-card img {
    width: 100%;
    height: 62vh;
    object-fit: cover;
    top: 0;
    transition: top 250ms;
}

.image-card:hover .image-detail {
    display: flex;

    background-image: linear-gradient(
        to bottom,
        hsla(0, 0%, 0%, 0) 0%,
        hsla(0, 0%, 0%, 0.009) 11.7%,
        hsla(0, 0%, 0%, 0.034) 22.1%,
        hsla(0, 0%, 0%, 0.072) 31.2%,
        hsla(0, 0%, 0%, 0.123) 39.4%,
        hsla(0, 0%, 0%, 0.182) 46.6%,
        hsla(0, 0%, 0%, 0.249) 53.1%,
        hsla(0, 0%, 0%, 0.320) 58.9%,
        hsla(0, 0%, 0%, 0.394) 64.3%,
        hsla(0, 0%, 0%, 0.468) 69.3%,
        hsla(0, 0%, 0%, 0.540) 74.1%,
        hsla(0, 0%, 0%, 0.607) 78.8%,
        hsla(0, 0%, 0%, 0.668) 83.6%,
        hsla(0, 0%, 0%, 0.721) 88.7%,
        hsla(0, 0%, 0%, 0.762) 94.1%,
        hsla(0, 0%, 0%, 0.790) 100%
    );
}
.image-card:hover img {
    cursor: pointer;
    top: -1vw;
}
.image-card:hover .image-detail h4 {
    cursor: pointer;
    bottom: 5vw;
    //transform: translateY(-5vw);
}

/*BIG PICTURE*/
.show-big-picture {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.79);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
.picture-container {
    max-width: 80vw;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.show-big-picture img {
    max-height: 90vh;
    box-shadow: 0.4vw 0.8vw 3vw -1vw rgba(0,0,0,2);
    -webkit-box-shadow: 0.4vw 0.8vw 3vw -1vw rgba(0,0,0,2);
    -moz-box-shadow: 0.4vw 0.8vw 3vw -1vw rgba(0,0,0,2);
}


.image-detail {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    z-index: 10;

    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.image-detail h4 {

    background-color: #181818;
    padding: 0.4vw 1.2vw;
    font-size: 1vw;
    color: white;
    position: absolute;
    bottom: 0;
}


.hidden {
    display: none;
}

</style>