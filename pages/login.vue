<template>
	<div class="container">
	   <div class="row justify-content-center">
	      <div class="col-md-6">
	         <div class="card-group">
	            <div class="card p-4">
	               <div class="card-body">
	                  <h1 class="text-center" style="padding-bottom:20px; color:teal">Admin Panel</h1>
	                  <p class="text-muted">Sign In to your account</p>
	                  <div class="input-group mb-3">
	                     <div class="input-group-prepend">
	                        <span class="input-group-text">
	                           <svg class="c-icon">
	                              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
	                           </svg>
	                        </span>
	                     </div>
	                     <input class="form-control" type="text" placeholder="Username" v-model="username">
	                  </div>
	                  <div class="input-group mb-4">
	                     <div class="input-group-prepend">
	                        <span class="input-group-text">
	                           <svg class="c-icon">
	                              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
	                           </svg>
	                        </span>
	                     </div>
	                     <input class="form-control" type="password" placeholder="Password" v-model="password">
	                  </div>
	                  <div class="row">
											<div class="col-6">
												 <button class="btn btn-link px-0" type="button">Forgot password?</button>
											</div>
											 <div class="col-6 text-right">
	                        <button class="btn btn-success px-4" type="button" @click="login()">Login</button>
	                     </div>
	                  </div>
	               </div>
	            </div>
	         </div>
	      </div>
	   </div>
	</div>
</template>




<script>
import {http1} from '@/api/axios'
export default {

  name: 'login',
  layout: 'empty',
	middleware: ['isLoggedIn'],

  data () {
    return {
			username: '',
			password: ''
    }
  },
	methods: {
	  login () {
			if (this.username == '') {
				this.$toast.error('Username is required',{duration:3000})
				return

			}else if (this.password == '') {
				this.$toast.error('Password is required',{duration:3000})
				return
			}

			http1.post('/login',{
				username: this.username,
				password: this.password
			}).then((response)=>{
				if(response.data.msg.success) {
					localStorage.setItem('jwt_token',response.data.data.jwt_token)
					localStorage.setItem('admin',JSON.stringify(response.data.data.admin))
					this.$cookies.set('jwt_token', response.data.data.jwt_token, {
				        path: '/',
				        maxAge: 60 * 60 * 24 * 90
				    })

					this.$toast.success(response.data.msg.message,{duration:3000})
					this.$store.commit('login',response.data.data.admin)

					this.$router.go('/')
				}else {
					this.$toast.error(response.data.msg.message,{duration:3000})
				}
			})
		}
	}
}
</script>

<style lang="css" scoped>
.container{
	padding-top:200px;
}

</style>
