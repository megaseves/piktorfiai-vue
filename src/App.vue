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

.background {
    width: 300vw;
    height: 100vh;
    background-color: var(--bgColor);
    position: absolute;
    transform: rotate(-140deg);
    top: 0;
    left: -120vw;
}

</style>
