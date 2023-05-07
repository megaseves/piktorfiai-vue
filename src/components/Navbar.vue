<template>
  <div class="container">
      <h2 class="title">Piktor Fiai bt.</h2>

      <div class="menu">
          <div class="menu-btn" @click="$emit('scroll-to-information')">Rólunk</div>
          <div class="menu-btn" @click="$emit('scroll-to-gallery')" >Galéria</div>
          <div class="menu-btn" @click="$emit('scroll-to-information')">Elérhetőség</div>
      </div>
      <div class="phone-menu">
          <div class="menu-icon">
              <font-awesome-icon @click="showMobileMenu" class="phone-menu-btn" :icon="['fas', 'bars']" />
          </div>
          <div class="phone-menu-container">
              <div class="phone-menu-header">
                  <div class="phone-menu-header-call"><a href="tel:+36308823087" class="phone">30 / 882 3087</a></div>
                  <div class="phone-menu-header-close"><font-awesome-icon @click="closeMobileMenu" class="phone-menu-btn-close" icon="fa-solid fa-xmark" /></div>
              </div>
              <div class="phone-menu-content">
                  <span class="phone-menu-btn" @click="goToInformation" >Rólunk</span>
                  <span class="phone-menu-btn" @click="goToGallery" >Galéria</span>
                  <span class="phone-menu-btn" @click="goToInformation">Elérhetőség</span>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        showMobileMenu() {
            const menuContainerDiv = document.querySelector('.phone-menu-container');
            menuContainerDiv.style.display = 'flex';
        },
        closeMobileMenu() {
            const menuContainerDiv = document.querySelector('.phone-menu-container');
            menuContainerDiv.style.display = 'none';
        },
        goToGallery() {
            this.$emit('scroll-to-gallery');
            this.closeMobileMenu();
        },
        goToInformation() {
            this.$emit('scroll-to-information');
            this.closeMobileMenu();
        }
    }

}
</script>

<style scoped>

.phone-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;

    display: none;
    flex-direction: column;
    text-align: left;
    align-items: center;
    padding-top: 7.5vw;
    gap: 5vw;

    width: 100%;
    height: 100vh;
    background-color: var(--bgColor);
}
.phone-menu-container span {
    font-size: 8vw;
}

.phone-menu-header {
    width: 83vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}

.phone-menu-btn-close {
    font-size: 7vw;
}

.phone {
    align-items: center;
    background-clip: padding-box;
    background-color: var(--linkColor);
    border: 0.1vw solid transparent;
    border-radius: 0.5vw;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    font-size: 4.2vw;
    padding: 2vw 3vw;
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    top: -0.4vw;
}
.phone-menu-content {
    margin-top: 12vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4vw;

    width: 82vw;
}



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