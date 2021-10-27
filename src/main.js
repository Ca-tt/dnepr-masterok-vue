import Vue from 'vue';
import App from './App.vue';

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
    faEnvelope
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
