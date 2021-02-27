export const state = () => ({
  name: 'p2p',
  admin: {},
  auth: false,
  sidebarMobile: false,
  acl: [],
  breadcrumbs: [
      {name: 'Home',link: '/'},
      {name: 'Role',link: '/role'}
  ]
})


export const mutations = {
  login(state,data){
    state.admin = data
    state.auth = true

    this.$cookies.set('auth', state.auth, {
        path: '/',
        maxAge: 60 * 60 * 24 * 90
      })

  },

  logout (state,data) {
     this.$cookies.set('auth',false)
  },

  sidebar (state,data){
      state.sidebarMobile = data
  },

  initAdminData (state,data) {
    state.admin = data
  },

  setBreadcrumbs (state,data){
      state.breadcrumbs = data
  },

  acl (state,data){
      state.acl = data
  },
}
