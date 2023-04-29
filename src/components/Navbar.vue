<template>
  <div class="container">
      <h2 class="title">Piktor Fiai bt.</h2>

      <div class="menu">
          <div class="menu-btn">Rólunk</div>
          <div class="menu-btn" @click="$emit('scroll-to-gallery')" >Galéria</div>
          <div class="menu-btn">Elérhetőség</div>
      </div>
      <div class="phone-menu">
          <div class="menu-icon">
              <font-awesome-icon class="phone-menu-btn" :icon="['fas', 'bars']" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar",

}
</script>

<style scoped>

.phone-menu {
    display: none;
}
.container {
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    padding: 5vw 8.2vw;
    align-items: center;
}
.title {
    font-size: 1.8vw;
    color: var(--textColor);
}
.title:hover {
    cursor: pointer;
}
.menu {
    display: flex;
    gap: 3vw;
}
.menu-btn {
    padding: 0.5vw 2vw;
    border-radius: 0.5vw;
    font-size: 1.4vw;
}
.menu-btn:hover {
    background-color: #e5e5e5;
    cursor: pointer;
}



/*  TABLET VIEW  */
@media screen and (max-width: 1300px) {
    .container {
        background-color: var(--bgColor);
        color: white;
    }
    .title {
        font-size: 3vw;
    }

    .menu-btn {
        padding: 2vw;
        border-radius: 0.5vw;
        font-size: 2vw;
    }
    .menu-btn:hover {
        color: var(--bgColor);
    }
}

/*  TABLET VIEW 2 */
@media screen and (max-width: 900px) {
    .container {
        max-height: 13vh;
        padding: 0 8vw;
    }
    .title {
        font-size: 3vw;
    }

    .menu-btn {
        padding: 2vw;
        border-radius: 0.5vw;
        font-size: 2vw;
    }
    .menu-btn:hover {
        color: var(--bgColor);
    }
}

/*  PHONE VIEW  */
@media screen and (max-width: 500px) {

    .container {
        max-height: 13vh;
        padding: 0 8vw;
    }
    .phone-menu {
      display: block;
    }
    .phone-menu-btn {
        font-size: 6vw;
    }
    .title {
        font-size: 6vw;
    }
    .menu {
        display: none;
    }

}

</style>