<template>
    <div class="welcome-container">
        <div class="container">
            <div class="container-header">
                <h1>Ingyenes helyszíni</h1>
                <h3>felmérés és árajánlat!</h3>

                <button class="phone">30 / 882 3087</button>

                <div class="call-us">
                    <p>A szobafestéstől a parkettázáson át, egészen a kerti faházak építéséig állunk kedves ügyfeleink rendelkezésére!</p>
                    <p>Kérjen árajánlatot telefonon vagy e-mailben a <span class="email">piktorfiaibt@gmail.com</span> címen!</p>
                </div>
            </div>

            <div class="container-image">
                <div class="hover-container" @mouseover="increaseTop" @mouseleave="decreaseTop" @click="goToGallery" >
                    <div class="image-bottom-border"></div>
                    <img class="image-link" :style="{top: top + 'vw'}" src="/proba.jpg" alt="building1">
                </div>
            </div>
        </div>



<!--        <div class="footer">
            <div class="img-rotate">
                <div class="point-border"><div class="point point-active"></div></div>
                <div class="point-border"><div class="point"></div></div>
                <div class="point-border"><div class="point"></div></div>
            </div>
        </div>-->

    </div>



</template>

<script>
export default {
    name: "Welcome",
    data() {
        return {
            top: 0
        }
    },
    methods: {
        increaseTop() {
            this.top = -0.6;
        },
        decreaseTop() {
            this.top = 0;
        },
        goToGallery() {
            window.location.href = 'https://www.google.com/';
        }
    }
}
</script>

<style scoped>
.welcome-container {
    width: 100vw;
    min-height: 80vh;
    padding: 1vw 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-shadow: -1px 3px 5px rgba(0,0,0,0.2);
    color: var(--textColor);
}
.welcome-container h1 {
    font-size: 4.2vw;
    font-weight: bold;

}
.welcome-container h3 {
    font-size: 2.8vw;
    top: -1vw;

}
.container {
    display: flex;

}
.container-header {
    width: 50vw;
    /*text-align: right;*/
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 2vw 0 0 8vw;
}


/*
.phone {
    font-size: 1.6vw;
    padding: 1vw;
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 0.1vw solid transparent;
    border-radius: 0.6vw;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
}*/
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
    font-size: 1.4vw;
    padding: 1vw 1.4vw;
    position: relative;
    text-decoration: none;
    /*transition: all 250ms;*/
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
}
.phone:hover,
.phone:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.phone:hover {
    transform: translateY(-1px);
}

.phone:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
}

.call-us {
    margin-top: 5vw;
    width: 37vw;
    height: 10vh;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2vw;
/*    background: rgba(225, 219, 219, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );*/
}
.call-us p {
    font-size: 1.3vw;
    color: var(--textColor);
}
.email {
    color: var(--linkColor);
    cursor: pointer;
}

.container-image {
    width: 50vw;
    padding-left: 7vw;
}
.container-image img {
    width: 35vw;
    border-radius: 1vw;
    box-shadow: 3px 4px 22px -1px rgba(0,0,0,0.47);
    -webkit-box-shadow: 3px 4px 22px -1px rgba(0,0,0,0.47);
    -moz-box-shadow: 3px 4px 22px -1px rgba(0,0,0,0.47);
}

.hover-container {
    cursor: pointer;

}

.image-link {
    cursor: pointer;
    transition: all 200ms;
    top: 0;
}

.image-bottom-border {
    width: 35vw;
    height: 100%;
    border-radius: 1vw;
    background-color: var(--linkColor);
    position: absolute;
}

/*
.footer {
    width: 100vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    !*background-color: gray;*!
    position: absolute;
    bottom: 4vw;
}

.img-rotate {
    width: 20vw;
    !*background-color: red;*!
    display: flex;
    gap: 2.6vw;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    !*background-color: #181818;*!
}
.point {
    width: 0.5vw;
    height: 0.5vw;
    background-color: #293e4f;
    border-radius: 2vw;
}
.point-active {
    background-color: #fa6400;
}*/
</style>