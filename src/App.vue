<script setup>
import Navbar from "@/components/Navbar.vue";
import Welcome from "@/components/Welcome.vue";
import Gallery from "@/components/Gallery.vue";
</script>

<template>
    <header>
      <div class="background">

      </div>
      <div class="navbar">
        <Navbar />
      </div>
  </header>

  <main>
      <Welcome />
      <Gallery />
  </main>

</template>

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
