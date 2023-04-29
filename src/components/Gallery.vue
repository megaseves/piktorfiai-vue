<template>
    <div class="show-big-picture hidden" @click="closeBigPicture" >
        <div class="stepControl">
            <div class="stepBack" @click.stop><font-awesome-icon class="icon" :icon="['fas', 'chevron-left']" @click="skipBackImage" /></div>
            <div class="stepForward" @click.stop><font-awesome-icon class="icon" :icon="['fas', 'chevron-right']" @click="skipForwardImage" /></div>
        </div>

        <div class="picture-container">
            <img v-bind:src="imageUrls[imageIndex]" alt="image">
        </div>
    </div>
  <div id="gallery" class="container">

      <div class="gallery-container">


          <div v-for="(image, index) in imageUrls.slice(0, sliceIndex)" :key="index" v-bind:class="index === 2 || index === 3 || index === 12 || index === 13 ? 'image-card twoSpace' : 'image-card'" @click="showBigPicture(index)">
              <div class="image-detail">
                  <h4>Megtekintés</h4>
              </div>
              <img :src="image" :alt="'image' + (index+1)">
          </div>

      </div>
      <button class="show-all-list" @click="showAllImage">Összes megtekintése</button>
      <button class="show-all-list close-btn hidden" @click="closeAllImage"><font-awesome-icon :icon="['fas', 'chevron-up']" /></button>
  </div>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
    data() {
      return {
          imageUrls: ['/gallery/image1.jpg', '/gallery/image2.jpg', '/gallery/image3.jpg', '/gallery/image4.jpg', '/gallery/image5.jpg', '/gallery/image8.jpg', '/gallery/image9.jpg', '/gallery/image10.jpg', '/gallery/image11.jpg', '/gallery/image12.jpg', '/gallery/image13.jpg', '/gallery/image14.jpg', '/gallery/image15.jpg', '/gallery/image16.jpg', '/gallery/image17.jpg', '/gallery/image18.jpg', '/gallery/image19.jpg', '/gallery/image20.jpg', '/gallery/image21.jpg', '/gallery/image22.jpg'],
          sliceIndex: 6
      }
    },
    setup() {
        const imageIndex = ref(0);
        //watchEffect(() => this.checkIndexForIconDesign());
        return {
            imageIndex,
        }
    },
    name: "Gallery",
    methods: {
        showBigPicture(index) {

            const bigPicture = document.querySelector('.show-big-picture');
            if (bigPicture.classList.contains('hidden')) {
                this.imageIndex = index;
                bigPicture.classList.remove('hidden');
            }
        },


        checkIndexForIconDesign() {
            const stepForward = document.querySelector('.stepForward');
            const stepBack = document.querySelector('.stepBack');

            if(this.imageIndex === 0) {
                stepBack.children[0].classList.add('last-skip-icon');
            } else {
                stepBack.children[0].classList.remove('last-skip-icon');
            }
        },


        closeBigPicture(event) {
            const stepForward = document.querySelector('.stepForward');
            const bigPicture = document.querySelector('.show-big-picture');
            if (!bigPicture.classList.contains('hidden') && !this.isDescendant(stepForward, event.target)) {
                bigPicture.classList.add('hidden');
            }
        },
        isDescendant(parent, child) {
            let node = child.parentNode;
            while (node != null) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },
        skipForwardImage() {
            if(this.imageIndex === this.imageUrls.length-1) {
                this.imageIndex = 0;
            } else {
                this.imageIndex++;
            }
        },
        skipBackImage() {
            if(this.imageIndex === 0) {
                this.imageIndex = this.imageUrls.length-1;
            } else {
                this.imageIndex--;
            }
        },
        showAllImage() {
            const showAllButton = document.querySelector('.show-all-list');
            const closeButton = document.querySelector('.close-btn');
            showAllButton.classList.add('hidden');
            closeButton.classList.remove('hidden');
            this.sliceIndex = this.imageUrls.length-1 + 1;

        },
        closeAllImage() {
            const showAllButton = document.querySelector('.show-all-list');
            const closeButton = document.querySelector('.close-btn');
            showAllButton.classList.remove('hidden');
            closeButton.classList.add('hidden');
            this.sliceIndex = 6;
        },

    }
}
</script>

<style scoped>
#gallery {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20vw;
    flex-direction: column;
    align-items: center;
}
.gallery-container {
    width: 86vw;
    //border: 1px solid red;
    display: flex;
    gap: 1vw;
    justify-content: center;
    flex-wrap: wrap;
}
.image-card {
    width: 20vw;
    height: 38vh;
    background-color: white;
    //border: 1px solid pink;
    box-shadow: 6px 6px 16px -6px rgba(0,0,0,0.59);
    -webkit-box-shadow: 6px 6px 16px -6px rgba(0,0,0,0.59);
    -moz-box-shadow: 6px 6px 16px -6px rgba(0,0,0,0.59);
    overflow: hidden;
    flex-basis: 21.25%;
}
.image-card img {
    width: 100%;
    height: 40vh;
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
    max-width: 80vw;
    max-height: 90vh;
    box-shadow: 0.4vw 0.8vw 3vw -1vw rgba(0,0,0,2);
    -webkit-box-shadow: 0.4vw 0.8vw 3vw -1vw rgba(0,0,0,2);
    -moz-box-shadow: 0.4vw 0.8vw 3vw -1vw rgba(0,0,0,2);
}

.stepControl {
    width: 91vw;
    height: 10vh;
    position: absolute;
    z-index: 10;
    /*border: 1px solid red;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.icon {
    font-size: 4vw;
    color: var(--secBgColor);
    opacity: 0.8;
    cursor: pointer;
}
.icon:hover {
    color: white;
}

.twoSpace {
    flex-basis: 43.7%;
}




/*ÖSSZES MEGTEKINTÉSE BUTTON*/

.show-all-list {
    background-color: var(--bgColor);
    border-radius: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    margin-top: 1vw;
    cursor: pointer;
    color: var(--textColor);
    font-size: 1vw;
    font-weight: bold;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.show-all-list:hover {
    background-color: #435379;
}
.show-all-list:active {
    background-color: #2f3d57;
}

.last-skip-icon {
    color: #c85000;
}
.hidden {
    display: none;
}

</style>