import Vue from 'vue'
import Cookie from 'cookie-universal'
import {http1} from '~/api/axios'
const cookies = Cookie()

let store
if (process.browser) {
  window.onNuxtReady(({$store}) => {
    store = $store
  })
}

Vue.mixin({
    data () {
        return {
            authorized: true,
            bdPhoneInvalid:  'artc',
            authUserData: cookies.get('user'),
            isAuth: cookies.get('auth') ? cookies.get('auth') : false,
            apilink: 'http://127.0.0.1:8000/api/v1/admin',
            cdn: false ? 'http://d2jfnlwoj1rll7.cloudfront.net' : 'https://dev-p2p.s3-ap-southeast-1.amazonaws.com',
            loderi: {
                container: true,
                table: false
            },
        }
    },
    computed: {
      permission(){
          return (data) => {
              let permission = this.$store.state.acl
              if(permission.includes(data) || this.$store.state.admin.is_super_admin) {
                  return true
              }else{
                  return false
              }
          }
      }
  },
})
