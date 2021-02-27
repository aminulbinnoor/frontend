<template lang="html">
  <div class="c-appii">
    <Sidebar></Sidebar>
    <div class="c-wrapper c-fixed-components">
      <Top></Top>
      <div class="c-body">
          <client-only>
              <Content></Content>
           </client-only>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import {http1} from '@/api/axios'
import Top from '@/components/Top'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {
  components: {Top,Sidebar,Footer,Content},
  middleware: ['isAuth'],
  mounted: function () {
    if (process.client){
      let data = localStorage.getItem('admin')
      this.$store.commit('initAdminData',JSON.parse(data))
      this.$store.commit('sidebar',false)
    }

    http1.get('/employee/permissions').then((response)=>{
        this.$store.commit('acl',response.data.data)
    })

  }

}
</script>

<style lang="css" scoped >

</style>
