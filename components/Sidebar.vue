<template>
  <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" :class="$store.state.sidebarMobile ? 'c-sidebar-show' : ''" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none" style="background:white !important; border-bottom:1px solid black;">
        <router-link to="/"><img style="width:118px;height:46px" class="c-sidebar-brand-full" :src="'/p-2-p-logo.png'" alt=""></router-link>
      <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
        <use xlink:href="assets/brand/coreui.svg#signet"></use>
      </svg>
    </div>
    <ul class="c-sidebar-nav">
      <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" to="/">
          <svg class="c-sidebar-nav-icon">
            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"></use>
        </svg> Dashboard<span class="badge badge-info">NEW</span></router-link>
      </li>
      <template>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown" :class="activeNav == 'product' ? 'c-show' : ''">
          <a @click="nav('product')" class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="javascript:void(0)">
            <svg class="c-sidebar-nav-icon">
              <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-cursor"></use>
          </svg> Product </a>
          <ul class="c-sidebar-nav-dropdown-items">
            <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" to="/product"><span class="c-sidebar-nav-icon"></span> Lists</router-link></li>
            <li class="c-sidebar-nav-item"><router-link class="c-sidebar-nav-link" to="/product/create"><span class="c-sidebar-nav-icon"></span> Create Product</router-link></li>
          </ul>
        </li>
      </template>
    </ul>
    <button type="button" name="button" class="btn btn-info" v-if="$store.state.sidebarMobile" @click="sidebarMobile(false)">Hide</button>
    <button class="c-sidebar-minimizer c-class-toggler"  type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
  </div>
</template>

<script>
export default {
    data () {
      return {
        activeNav: ''
      }
  },
  methods: {
    sidebarMobile(status){
        this.$store.commit('sidebar',status)
    },
    nav: function (name) {
        if (this.activeNav == name) {
            this.activeNav = ''
        }else{
            this.activeNav = name
        }

    }
  }

}
</script>

<style lang="css" scoped >

</style>
