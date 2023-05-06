
import './assets/main.css'

/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronLeft, faChevronRight, faChevronUp, faBars, faPhoneFlip, faEnvelope, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faChevronLeft, faChevronRight, faChevronUp, faBars, faPhoneFlip, faEnvelope, faCircleInfo)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
