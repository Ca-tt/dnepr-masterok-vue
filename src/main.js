import Vue from 'vue';
import App from './App.vue';
import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import VueTheMask from 'vue-the-mask'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

//bootstrap
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

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
    faEnvelope
)
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(VueTheMask)

Vue.component('Modal', VueModal)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')