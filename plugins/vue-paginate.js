import Vue from 'vue'
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

Vue.mixin({

    mounted () {
      this.$store.commit('sidebar',false)
    }
})
