<script setup>

</script>

<template>
    <div id="information" class="footer">

        <div class="footer-background"></div>
        <div class="body-background">
            <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 130" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(57, 72, 103, 1)" offset="0%"></stop><stop stop-color="rgba(57, 72, 103, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,78L34.3,69.3C68.6,61,137,43,206,47.7C274.3,52,343,78,411,82.3C480,87,549,69,617,58.5C685.7,48,754,43,823,47.7C891.4,52,960,65,1029,78C1097.1,91,1166,104,1234,93.2C1302.9,82,1371,48,1440,43.3C1508.6,39,1577,65,1646,75.8C1714.3,87,1783,82,1851,82.3C1920,82,1989,87,2057,73.7C2125.7,61,2194,30,2263,15.2C2331.4,0,2400,0,2469,19.5C2537.1,39,2606,78,2674,97.5C2742.9,117,2811,117,2880,108.3C2948.6,100,3017,82,3086,69.3C3154.3,56,3223,48,3291,39C3360,30,3429,22,3497,19.5C3565.7,17,3634,22,3703,39C3771.4,56,3840,87,3909,99.7C3977.1,113,4046,108,4114,91C4182.9,74,4251,43,4320,36.8C4388.6,30,4457,48,4526,56.3C4594.3,65,4663,65,4731,71.5C4800,78,4869,91,4903,97.5L4937.1,104L4937.1,130L4902.9,130C4868.6,130,4800,130,4731,130C4662.9,130,4594,130,4526,130C4457.1,130,4389,130,4320,130C4251.4,130,4183,130,4114,130C4045.7,130,3977,130,3909,130C3840,130,3771,130,3703,130C3634.3,130,3566,130,3497,130C3428.6,130,3360,130,3291,130C3222.9,130,3154,130,3086,130C3017.1,130,2949,130,2880,130C2811.4,130,2743,130,2674,130C2605.7,130,2537,130,2469,130C2400,130,2331,130,2263,130C2194.3,130,2126,130,2057,130C1988.6,130,1920,130,1851,130C1782.9,130,1714,130,1646,130C1577.1,130,1509,130,1440,130C1371.4,130,1303,130,1234,130C1165.7,130,1097,130,1029,130C960,130,891,130,823,130C754.3,130,686,130,617,130C548.6,130,480,130,411,130C342.9,130,274,130,206,130C137.1,130,69,130,34,130L0,130Z"></path></svg>
        </div>
        <div class="information-container">

            <a class="inf-link" href="tel:+36308823087">
                <div class="inf-content">
                    <font-awesome-icon class="inf-icon" icon="fa-solid fa-phone-flip" />
                    <span class="inf-button">30 - 882 3087</span>
                </div>
            </a>

            <a class="inf-link" href="mailto:piktorfiaibt@gmail.com">
                <div class="inf-content">
                    <font-awesome-icon class="inf-icon" icon="fa-solid fa-envelope" />
                    <span class="inf-button">piktorfiaibt@gmail.com</span>
                </div>
            </a>

            <a class="inf-link" href="https://google.com/">
                <div class="inf-content">
                    <font-awesome-icon class="inf-icon" icon="fa-solid fa-circle-info" />
                    <a class="inf-button"><span class="inf-button-street">Dr. Timaffy László u 2/A 2.em.7a.</span><span class="inf-button-city">Mosonmagyaróvár, Hungary</span></a>
                </div>
            </a>

        </div>

    </div>

</template>

<style scoped>

.inf-link {
    text-decoration: none;
    color: var(--bgColor);
}

.footer {
    position: relative;
}

#footerCurve {
    position: absolute;
    bottom: 0;
    left: 0;
    border: 1px solid red;

}

.information-container {
    margin-bottom: 5vw;
    gap: 5vw;
    width: 100%;
    //border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inf-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 24vw;
    height: 12vw;
    padding: 2vw;

    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
}
.inf-icon {
    font-size: 4.2vw;
}
.inf-button {
    font-size: 1.22vw;
    font-weight: bold;
    color: var(--bgColor);
    text-decoration: none;
    text-align: center;

    display: flex;
    flex-direction: column;
    margin-top: 0.8vw;
}
.inf-button-street {
    font-weight: bold;
}
.inf-button-city {
    font-size: 0.8vw;
    font-weight: bold;
}


.body-background svg {

    width: 100%;
    position: relative;
    top: 10vw;
    left: 0;
}

.footer-background {
    background-color: var(--bgColor);
    width: 100%;
    height: 20vh;

    position: absolute;
    top: 17vw;
    left: 0;
}



/*TABLET VIEW*/
@media screen and (max-width: 500px) {

    .body-background svg {
        top: 10vw;
    }

    .information-container {
        flex-direction: column;
        color: var(--bgColor);
        margin: 10vw 0 15vw 0;
        gap: 2vw;
    }
    .inf-content {
        margin-top: 3.5vw;
        width: 80vw;
        flex-direction: row;
        gap: 4vw;
        padding: 10vw 7vw;
        justify-content: left;
    }
    .inf-button {
        font-size: 3.2vw;
    }
    .inf-button-city {
        font-size: 2vw;
    }

    .footer-background {
        top: 18vw;
        height: 100vh;
    }

}

</style>