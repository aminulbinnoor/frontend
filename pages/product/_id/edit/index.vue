<template>
    <div class="row">
       <div class="col-lg">
         <div class="tab-content">
           <div class="tab-pane d-block">
             <div class="card" style="min-height:250px">
               <div class="card-header" style="background-color:rgba(0,0,0,.03)">
                 <div class="float-left">
                   <p>Product Update</p>
                 </div>

               </div>
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
                         <div class="form-group col-md-4">
                           <label>Price <span class="text-danger">*</span> </label>
                           <input type="number" class="form-control" placeholder="price" v-model="price">
                         </div>
                     </div>

                     <div class="form-row">
                       <div class="col-md-12 mt-2">
                           <div class="">
                               <label>Product Images </label><span class="text-danger"> *</span>
                           </div>
                           <div class="image-size preview-image"  v-for="(pimage,index) in product_images">
                             <div class="delete-image remove-image" @click="deleteImage(index,'pimage')">
                               X
                             </div>
                             <img  alt="">
                             <img style="width:100px;height:100px;object-fit: contain;" :key="" :src="'http://localhost:8000/storage/'+pimage.path+'hdpi/'+pimage.file" alt="">
                           </div>
                           <ImageUpload :title="``" :perpose="'product_image'"  :limit="2" @image="storeImage" ></ImageUpload>
                       </div>
                     </div>
               </div>
               <div class="card-footer" style="background-color:rgba(0,0,0,.03)">
                   <button :disabled="name == '' ? true : false" type="button" class="btn btn-success float-right" @click="submit()">Update</button>
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
  data () {
    return {
      breadcrumb: [
          {name: 'Home', link: '/'},
          {name: 'Product', link: '/product'},
          {name: 'Product Update', link: ''},
      ],
      name: '',
      price: '',
      description: '',
      product_images: [],
      images: [],
      deletedProductImages: []
    }
  },
  methods: {
    submit() {
      if (this.name == '') {
          this.$toast.error('Product name is required',{duration:3000})
          return
      }else if (this.price == '') {
          this.$toast.error('Price is required',{duration:3000})
          return
      }else if (this.images.length + this.product_images.length < 1) {
          this.$toast.error('Product image is required',{duration:3000})
          return
      }

      let formData = new FormData()
      formData.append('id', this.$route.params.id)
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('deleted_product_images', JSON.stringify(this.deletedProductImages))
      formData.append('deleted_after_product_images', JSON.stringify(this.product_images))


      this.images.forEach((item, i) => {
          formData.append(`images[${i}]`, item)
      });

      http1.post('/product/update',formData).then((response)=>{
        if(response.data.msg.success){
          this.$toast.success(response.data.msg.message,{duration: 3000})
          this.$router.push('/product')
        }else{
          this.$toast.error(response.data.msg.message,{duration: 3000})
        }
      })

  },
      deleteImage (index,type) {
          if (type == 'pimage') {
              this.deletedProductImages.push(this.product_images[index])
              this.product_images.splice(index, 1)
          }
      },
      storeImage(data) {
          this.images = data.images
      }


  },


  created () {
      this.$store.commit('setBreadcrumbs',this.breadcrumb)
  },
  mounted: function () {
    http1.get('product/get',{
      params:{
        id: this.$route.params.id
      }
    }).then((response)=>{
      this.name = response.data.data.name
      this.description = response.data.data.description
      this.price = response.data.data.price
      this.product_images = response.data.data.images
    })
  }
}
</script>

<style lang="scss" scoped >
.preview-image {
  margin-right: 20px;
  display: inline-block;
  margin-top: 16px;
  border: 1px dashed;
  position: relative;
  height: 100px;
}
.preview-image .remove-image {
  cursor: pointer;
  position: absolute;
  right: -8px;
  background: #00A4CF;
  height: 18px;
  width: 18px;
  font-size: 11px;
  text-align: center;
  border-radius: 50%;
  top: -10px;
  color: #fff;
  padding-top: 1px;
}

// tab active background-color
  .nav-pills {
    .nav-link{
      &.active{
        background: #be926f;
        color: #fff;
      }

      &:focus{
        outline: 0;
        box-shadow: none;
      }
    }
  }
</style>
