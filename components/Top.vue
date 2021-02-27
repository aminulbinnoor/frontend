
<template>
    <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
      <button @click="$store.commit('sidebar',true)" class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
        <svg class="c-icon c-icon-lg">
          <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-menu"></use>
        </svg>
        show
      </button>
      <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
        <svg class="c-icon c-icon-lg">
          <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-menu"></use>
        </svg>
      </button>
      <ul class="c-header-nav d-md-down-none">
        <li class="c-header-nav-item px-3"><router-link class="c-header-nav-link" to="/">Dashboard</router-link></li>
        <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Users</a></li>
        <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Settings</a></li>
        <li> | <strong>{{$store.state.admin.first_name}}</strong> | </li>
      </ul>
      <ul class="c-header-nav ml-auto mr-4">
        <!-- <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
            a</a></li>
        <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
            b</a></li> -->
        <li class="c-header-nav-item d-md-down-none mx-2" style="cursor:pointer" >
            <a class="c-header-nav-link" @click="openUserMenuNow = !openUserMenuNow">
                {{$store.state.admin.first_name}}
            </a>
        </li>
        <li class="c-header-nav-item dropdown"><a class="c-header-nav-link" @click="openUserMenuNow = !openUserMenuNow" role="button" aria-haspopup="true" aria-expanded="false">
            <div class="c-avatar"><img class="c-avatar-img" src="/assets/img/avatars/6.jpg" alt="user@email.com"></div>
          </a>
          <div class="dropdown-menu dropdown-menu-right pt-0" :class="openUserMenuNow ? 'show' : ''" style="width: 200px !important">

            <div class="dropdown-divider"></div><a class="dropdown-item" href="#">
              <svg class="c-icon mr-2">
                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>
              </svg> Lock Account</a>
              <a class="dropdown-item" href="javascript:void(0)" @click="logout()">
                  <svg class="c-icon mr-2" >
                    <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-account-logout"></use>
                  </svg>
                   Logout
                </a>
          </div>
        </li>
      </ul>
      <div class="c-subheader px-3">

        <ol class="breadcrumb border-0 m-0">

          <!-- <li class="breadcrumb-item" >Home</li> -->
          <li class="breadcrumb-item" v-for="(bc,index) in $store.state.breadcrumbs" :class="$store.state.breadcrumbs.length ? 'active' : ''">
              <router-link v-if="bc.link" :to="bc.link">{{bc.name}}</router-link>
              <p v-else>{{bc.name}}</p>
          </li>
          <!-- <li class="breadcrumb-item active">Dashboard</li> -->

        </ol>
      </div>
    </header>

</template>

<script>

export default {
    data () {
      return {
        bb: '',
        openUserMenuNow: false
      }
  },
    methods: {
      logout () {
          this.$store.commit('logout','')
          this.$router.push('/login')
          this.$router.push('/login')
          this.$router.push('/login')
      },

  },
  created(){
      // let path = this.$route.path.split('/')
      // let a = path;
      // if(Object.values(this.$route.params).length){
      //     Object.values(this.$route.params).forEach((item, i) => {
      //         a = _.without(path, item);
      //     });
      // }
      // this.bb = _.without(a,"");
  }

}
</script>

<style lang="css" scoped >

</style>
