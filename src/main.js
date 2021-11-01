import Vue from 'vue';
import App from './App.vue';
import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import VueTheMask from 'vue-the-mask'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

// import necessary icons from font-awesome
import {
    faLock,
    faLockOpen,
    faClock,
    faTruck,
    faCheckCircle,
    faUserCircle,
    faMobile,
    faSortNumericDown,
    faIdCard,
    faMoneyBillAlt,
    faMapMarkerAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
// add them to the library
library.add(
    faLock,
    faLockOpen,
    faClock,
    faTruck,
    faCheckCircle,
    faUserCircle,
    faMobile,
    faSortNumericDown,
    faIdCard,
    faMoneyBillAlt,
    faMapMarkerAlt,
    faEnvelope,
)


Vue.component('Modal', VueModal)

Vue.use(VueTheMask)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')