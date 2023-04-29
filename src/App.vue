<script setup>
import Navbar from "@/components/Navbar.vue";
import Welcome from "@/components/Welcome.vue";
import Gallery from "@/components/Gallery.vue";

</script>

<template>
    <header>

        <div class="background"></div>

      <div class="navbar">
        <Navbar @scroll-to-gallery="scrollToGallery" />
      </div>
  </header>

  <main>
      <Welcome />
      <Gallery />
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
    transform: rotate(-140deg);
    top: 0;
    left: -120vw;
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
