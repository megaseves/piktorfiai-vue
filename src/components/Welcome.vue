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

            </div>
            <div class="card-container">
              <div class="card">
                  <div class="wrapper">
                      <img src="/welcomeImage.jpg" class="cover-image" alt="picture-cover" />
                  </div>
                  <img src="/welcomeImage2.png" class="threeD" alt="picture" />
              </div>
<!--                <div class="hover-container" @mouseover="increaseTop" @mouseleave="decreaseTop" @click="goToGallery" >
                    <div class="image-bottom-border"></div>
                    <img class="image-link" :style="{top: top + 'vw'}" src="/welcomeImage.jpg" alt="building1">
                </div>-->
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
    <div class="curved">
        <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1980 290" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(57, 72, 103, 1)" offset="0%"></stop><stop stop-color="rgba(57, 72, 103, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,29L40,62.8C80,97,160,164,240,193.3C320,222,400,213,480,174C560,135,640,68,720,67.7C800,68,880,135,960,159.5C1040,184,1120,164,1200,159.5C1280,155,1360,164,1440,159.5C1520,155,1600,135,1680,120.8C1760,106,1840,97,1920,111.2C2000,126,2080,164,2160,149.8C2240,135,2320,68,2400,62.8C2480,58,2560,116,2640,140.2C2720,164,2800,155,2880,149.8C2960,145,3040,145,3120,149.8C3200,155,3280,164,3360,140.2C3440,116,3520,58,3600,38.7C3680,19,3760,39,3840,58C3920,77,4000,97,4080,96.7C4160,97,4240,77,4320,77.3C4400,77,4480,97,4560,111.2C4640,126,4720,135,4800,140.2C4880,145,4960,145,5040,145C5120,145,5200,145,5280,159.5C5360,174,5440,203,5520,217.5C5600,232,5680,232,5720,232L5760,232L5760,290L5720,290C5680,290,5600,290,5520,290C5440,290,5360,290,5280,290C5200,290,5120,290,5040,290C4960,290,4880,290,4800,290C4720,290,4640,290,4560,290C4480,290,4400,290,4320,290C4240,290,4160,290,4080,290C4000,290,3920,290,3840,290C3760,290,3680,290,3600,290C3520,290,3440,290,3360,290C3280,290,3200,290,3120,290C3040,290,2960,290,2880,290C2800,290,2720,290,2640,290C2560,290,2480,290,2400,290C2320,290,2240,290,2160,290C2080,290,2000,290,1920,290C1840,290,1760,290,1680,290C1600,290,1520,290,1440,290C1360,290,1280,290,1200,290C1120,290,1040,290,960,290C880,290,800,290,720,290C640,290,560,290,480,290C400,290,320,290,240,290C160,290,80,290,40,290L0,290Z"></path></svg>
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
        goToGallery() {
            window.location.href = 'https://www.google.com/';
        }
    }
}
</script>

<style scoped>
.bg {
    display: none;
}

.welcome-container {
    width: 100vw;
    margin-bottom: 12vw;
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
    width: 100%;
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
    transition: all 250ms;
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
    height: 50vh;
    padding-left: 7vw;
}
/*.container-image img {
    width: 35vw;
    border-radius: 1vw;
    box-shadow: 3px 4px 22px -1px rgba(0,0,0,0.47);
    -webkit-box-shadow: 3px 4px 22px -1px rgba(0,0,0,0.47);
    -moz-box-shadow: 3px 4px 22px -1px rgba(0,0,0,0.47);
}*/

.hover-container {
    cursor: pointer;
    width: 35vw;
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

/*3D CARD*/

.card-container {
    width: 40vw;
    position: absolute;
    top: 3vw;
    right: 0;
}
.cover-image {
    width: 80%;
    z-index: 1;
    position: absolute;
    transform: perspective(30vw) translateY(-10%) translateX(-10%) rotateX(45deg) translateZ(0);
    box-shadow:  0.3vw 1vw 2vw -0.5vw rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0.3vw 1vw 2vw -0.5vw rgba(0, 0, 0, 0.75);
    -moz-box-shadow:  0.3vw 1vw 2vw -0.5vw rgba(0, 0, 0, 0.75);
}

.threeD {
    width: 95%;
    position: absolute;
    z-index: 2;
    transform: translate3d(-19%, -20%, 0);
}
.curved {
    display: none;
}


/*TABLET VIEW*/
@media screen and (max-width: 1300px) {
    .welcome-container {
        width: 100%;
        background-color: var(--bgColor);
        margin: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;

    }
    .container-image {
        display: none;
    }
    .container-header {
        width: 100%;
        //border: 1px solid red;
        z-index: 2;

        padding: 2vw;
    }
    .container-header h1 {
        font-size: 6vw;
    }
    .container-header h3 {
        font-size: 3.6vw;
    }
    .phone {
        font-size: 1.7vw;
    }
    .call-us {
        width: 50vw;
    }
    .call-us p {
        font-size: 1.6vw;
    }


    .card-container {
        display: none;
        position: absolute;
        top: 15vh;
        right: -30vw;
        width: 50vw;
        z-index: 1;
    }


    #wave {
        //border: 1px solid red;
    }
    .curved {
        display: block;
        color: black;
        text-align: center;
        position: relative;
        background-color: white;

        width: 100%;
        top: 0;
        left: 0;
    }

    .curved svg {
        display: block;
        width: 100%;
        top: -0.5vw;
    }

}


</style>