<script setup>
import Navbar from "@/components/Navbar.vue";
import Welcome from "@/components/Welcome.vue";
import Gallery from "@/components/Gallery.vue";
import Information from "@/components/Information.vue";

</script>

<template>
    <header>

        <div class="background"></div>
        <div id="backgroundBottomCurveContainer">
            <svg id="backgroundBottomCurve" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(57, 72, 103, 1)" offset="0%"></stop><stop stop-color="rgba(57, 72, 103, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,80L16,68.3C32,57,64,33,96,35C128,37,160,63,192,73.3C224,83,256,77,288,75C320,73,352,77,384,75C416,73,448,67,480,56.7C512,47,544,33,576,26.7C608,20,640,20,672,20C704,20,736,20,768,28.3C800,37,832,53,864,55C896,57,928,43,960,45C992,47,1024,63,1056,61.7C1088,60,1120,40,1152,30C1184,20,1216,20,1248,23.3C1280,27,1312,33,1344,30C1376,27,1408,13,1440,20C1472,27,1504,53,1536,63.3C1568,73,1600,67,1632,66.7C1664,67,1696,73,1728,65C1760,57,1792,33,1824,28.3C1856,23,1888,37,1920,50C1952,63,1984,77,2016,81.7C2048,87,2080,83,2112,75C2144,67,2176,53,2208,48.3C2240,43,2272,47,2288,48.3L2304,50L2304,100L2288,100C2272,100,2240,100,2208,100C2176,100,2144,100,2112,100C2080,100,2048,100,2016,100C1984,100,1952,100,1920,100C1888,100,1856,100,1824,100C1792,100,1760,100,1728,100C1696,100,1664,100,1632,100C1600,100,1568,100,1536,100C1504,100,1472,100,1440,100C1408,100,1376,100,1344,100C1312,100,1280,100,1248,100C1216,100,1184,100,1152,100C1120,100,1088,100,1056,100C1024,100,992,100,960,100C928,100,896,100,864,100C832,100,800,100,768,100C736,100,704,100,672,100C640,100,608,100,576,100C544,100,512,100,480,100C448,100,416,100,384,100C352,100,320,100,288,100C256,100,224,100,192,100C160,100,128,100,96,100C64,100,32,100,16,100L0,100Z"></path></svg>
        </div>


      <div class="navbar">
        <Navbar @scroll-to-gallery="scrollToGallery" @scroll-to-information="scrollToInformation" />
      </div>
  </header>

  <main>

      <Welcome />
      <Gallery />
      <Information />
  </main>

</template>

<script>
export default {
    methods: {
        scrollToGallery() {
            const galleryEl = document.getElementById('gallery');
            const yOffset = -60; // az elemhez való közelebbi görgetés érdekében a y-offsetet állíthatjuk
            const y = galleryEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
        },
        scrollToInformation() {
            const galleryEl = document.getElementById('information');
            const yOffset = -60; // az elemhez való közelebbi görgetés érdekében a y-offsetet állíthatjuk
            const y = galleryEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
        }
    }
}
</script>

<style scoped>


.bg {
    display: none;
}

.background {
    width: 300vw;
    height: 100vh;
    background-color: var(--bgColor);
    position: absolute;
    transform: rotate(-145deg);
    top: 0;
    left: -120vw;
}
#backgroundBottomCurveContainer {
  position: absolute;
    z-index: -999;
}


/*TABLET VIEW*/
@media screen and (max-width: 1300px) {
    .background {
        display: none;
    }
    .bg {
        display: block;
    }

    #wave {
        //border: 1px solid red;
    }
    .curved {
        color: black;
        text-align: center;
        position: absolute;
        background-color: white;

        width: 100%;
        top: 65vh;
    }

    .curved svg {
        display: block;
        width: 100%;
        height: 30vh;

    }
}

</style>
