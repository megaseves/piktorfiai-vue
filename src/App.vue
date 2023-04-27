<script setup>
import Navbar from "@/components/Navbar.vue";
import Welcome from "@/components/Welcome.vue";
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
  </main>

</template>

<style scoped>

.background {
    width: 300vw;
    height: 100vh;
/*    background-image: url("/bg.jpg");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;*/
    background-color: var(--bgColor);
    position: absolute;
    transform: rotate(-140deg);
    top: 0;
    left: -120vw;
}

</style>
