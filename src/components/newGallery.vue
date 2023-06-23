<script>
 export default {
   data() {
     return {
       imageIndex: 6,
       imageUrlIndex: 0,
       imageUrls: [
           '/gallery/image1.webp',
           '/gallery/image2.webp',
           '/gallery/image3.webp',
           '/gallery/image4.webp',
           '/gallery/image5.webp',
           '/gallery/image6.webp',
           '/gallery/image7.webp',
           '/gallery/image8.webp',
           '/gallery/image9.webp',
           '/gallery/image10.webp',
           '/gallery/image11.webp',
           '/gallery/image12.webp',
           '/gallery/image13.webp',
           '/gallery/image14.webp',
           '/gallery/image15.webp',
           '/gallery/image16.webp',
           '/gallery/image17.webp',
           '/gallery/image18.webp',
       ]
     }
   },
   methods: {
     showAllImage() {
       const showAllButton = document.querySelector('.show-all-list');
       const closeButton = document.querySelector('.close-btn');
       showAllButton.classList.add('hidden');
       closeButton.classList.remove('hidden');

       this.imageIndex = 18;
     },
     closeAllImage() {
       const showAllButton = document.querySelector('.show-all-list');
       const closeButton = document.querySelector('.close-btn');
       showAllButton.classList.remove('hidden');
       closeButton.classList.add('hidden');

       this.imageIndex = 6;
     },



     showBigPicture(index) {

       const bigPicture = document.querySelector('.show-big-picture');
       if (bigPicture.classList.contains('hidden')) {
         this.imageUrlIndex = index;
         bigPicture.classList.remove('hidden');
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
       if(this.imageUrlIndex === this.imageUrls.length-1) {
         this.imageUrlIndex = 0;
       } else {
         this.imageUrlIndex++;
       }
     },
     skipBackImage() {
       if(this.imageUrlIndex === 0) {
         this.imageUrlIndex = this.imageUrls.length-1;
       } else {
         this.imageUrlIndex--;
       }
     },

     handleSwipe() {
       if (this.touchStartX - this.touchEndX > 50 && this.imageUrlIndex !== this.imageUrls.length - 1) {
         // swipe right to left
         this.imageUrlIndex++
       } else if (this.touchEndX - this.touchStartX > 50 && this.imageUrlIndex !== 0) {
         // swipe left to right
         this.imageUrlIndex--
       }
     },
     onTouchStart(event) {
       this.touchStartX = event.touches[0].clientX
     },
     onTouchEnd(event) {
       this.touchEndX = event.changedTouches[0].clientX
       this.handleSwipe()
     },
   }
 }
</script>

<template>

  <div class="show-big-picture hidden" @click="closeBigPicture" @touchstart="onTouchStart" @touchend="onTouchEnd" >
    <div class="stepControl">
      <div class="stepBack" @click.stop><font-awesome-icon class="icon" :icon="['fas', 'chevron-left']" @click="skipBackImage" /></div>
      <div class="stepForward" @click.stop><font-awesome-icon class="icon" :icon="['fas', 'chevron-right']" @click="skipForwardImage" /></div>
    </div>

    <div class="picture-container">
      <img v-bind:src="imageUrls[imageUrlIndex]" alt="image">
    </div>
  </div>

  <div id="gallery" class="container">

    <div class="gallery">

      <div class="gallery-item" v-for="(index) in imageIndex">
        <img class="gallery-image" :src="'/gallery/image' + index + '_pre.webp'" :alt="'piktorfiai bt. image' + index"
             @click="showBigPicture(index-1)">
      </div>

    </div>

    <div class="gallery-show-button">
      <button class="show-all-list" @click="showAllImage">Összes megtekintése</button>
      <button class="show-all-list close-btn hidden" @click="closeAllImage"><font-awesome-icon :icon="['fas', 'chevron-up']" /></button>
    </div>


  </div>
</template>

<style scoped>

body {
  min-height: 100vh;
  background-color: #fafafa;
}


.container {
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}


.gallery {
  display: flex;
  flex-wrap: wrap;
  /* Compensate for excess margin on outer gallery flex items */
  margin: -1rem -1rem;
}

.gallery-item {
  /* Minimum width of 24rem and grow to fit available space */
  flex: 1 0 24rem;
  /* Margin value should be half of grid-gap value as margins on flex items don't collapse */
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: pointer;
}

.gallery-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-image:hover {
  transform: scale(1.15);
}

/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling.

*/

.gallery-show-button {
  display: flex;
  justify-content: center;
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


/* ICON */

.icon {
  font-size: 4vw;
  color: var(--secBgColor);
  opacity: 0.8;
  cursor: pointer;
}
.icon:hover {
  color: white;
}



@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2rem;
  }

  .gallery,
  .gallery-item {
    margin: 0;
  }
}


/*ÖSSZES MEGTEKINTÉSE BUTTON*/

.show-all-list {
  background-color: var(--bgColor);
  border-radius: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  margin-top: 30px;
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

.hidden {
  display: none;
}


/* TABLET VIEW */
@media screen and (max-width: 1280px) {
  .show-all-list {
    font-size: 3vw;
    padding: 4vw 6vw;
  }
}

/* MOBILE VIEW */
@media screen and (max-width: 500px) {
  .show-all-list {
    margin-top: 30px;
    font-size: 4vw;
    width: 80vw;
    border-radius: 1vw;
    padding: 4vw 0;
    background-color: var(--textColor);
    color: var(--bgColor);
  }
  .show-all-list:hover {
    background-color: var(--textColor);
  }
}

</style>