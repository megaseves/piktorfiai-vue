<template>
  <div class="container">
      <div class="gallery-container">

          <div class="image-card">
              <img src="/gallery/image1.jpg" alt="image1">
          </div>
          <div class="image-card">
              <img src="/gallery/image2.jpg" alt="image1">
          </div>
          <div class="image-card">
              <img src="/gallery/image3.jpg" alt="image1">
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "Gallery"
}
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10vw;
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
}
.image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.image-card img:hover {
    cursor: pointer;
}
</style>