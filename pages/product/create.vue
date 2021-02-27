<template>
  <div class="row">
  <div class="col-lg-12">
      <div class="card" style="min-height:250px">
        <div class="card-header" style="background-color:rgba(0,0,0,.03)">Product Entry</div>
        <div class="card-body">
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="name">Title</label><span class="text-danger"> *</span>
                <input type="text" class="form-control" id="name" placeholder="name" v-model="name">
              </div>
            </div>
            <div class="form-row">

              <div class="form-group col-md-12">
                <label for="description">Description</label>
                <textarea class="form-control" v-model="description" rows="5"></textarea>
              </div>
            </div>
              <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="price">Price <span class="text-danger" >*</span> </label>
                    <input type="number" class="form-control" placeholder="price" v-model="price">
                  </div>
              </div>
                <div class="col-md-12 mt-2">
                    <label>Product Images </label><span class="text-danger"> *</span>
                    <ImageUpload :title="``" :perpose="'product_image'"  :limit="2" @image="storeImage"></ImageUpload>
                </div>
              </div>
        </div>
        <div class="card-footer" style="background-color:rgba(0,0,0,.03)">
            <button type="button" class="btn btn-success float-right" @click="submit()">Create</button>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import {http1} from '@/api/axios'
import ImageUpload from '@/components/ImageUpload'

export default {
  components:{ImageUpload},
  data () {
    return {
      breadcrumb: [
          {name: 'Home',link: '/'},
          {name: 'Product',link: '/product'},
          {name: 'Product Entry',link: ''},
      ],
      name: '',
      price: '',
      description: '',
      feature_image: [],
      images: []
    }
  },
  methods: {
    submit() {
        if (this.name === '') {
            this.$toast.error('Product name is required',{duration:3000})
            return
        }
        else if (this.price === '') {
            this.$toast.error('Price is required',{duration:3000})
            return
        }
        else if (this.images === '') {
            this.$toast.error('Images is required',{duration:3000})
            return
        }


      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('description', this.description)
      this.images.forEach((item, i) => {
          formData.append(`images[${i}]`, item)
      });


      http1.post('/product/create',formData).then((response)=>{
        if(response.data.msg.success){
          this.$toast.success(response.data.msg.message,{duration: 3000})
          this.$router.push('/product')
        }else{
          this.$toast.error(response.data.msg.message,{duration: 3000})
        }
      })
   },
   storeImage(data) {
      this.images = data.images
   },
  cropImageActionProductImages(d){
     this.images.push(d.image)
   },

},

  created () {
      this.$store.commit('setBreadcrumbs',this.breadcrumb)
  },

}
</script>

<style lang="scss" scoped >

</style>
