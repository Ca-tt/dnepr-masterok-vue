import Vue from 'vue';
import App from './App.vue';
import VueTheMask from 'vue-the-mask'
import SweetModal from 'sweet-modal-vue/src/plugin.js'

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

Vue.use(SweetModal)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTheMask)

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')