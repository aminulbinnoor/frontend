<template>
  <div class="image-uploader-valid">
    <div class="upload-design" @click="clickInputFile()">
      <!-- <img
        src="~/assets/images/photo-camera.png"
        alt=""> -->
       <p> Add Photo </p>
    </div>
    <div class="image-size preview-image" v-for="(src,index) in uploadImageSrcs">
      <div class="delete-image remove-image" @click="deleteImage(index)">
        X
      </div>
      <img style="width:100px;height:100px;object-fit: contain;" :key="" :src="src" alt="">
    </div>
    <input type="file" ref="myFiles" @change="previewFiles" hidden multiple>
  </div>
</template>

<script>
export default {
  props: ['limit', 'perpose','theIndex'],
  data () {
    return {
      uploadImageSrcs: [],
      images: []
    }
  },
  methods: {
    clickInputFile(){
          this.$refs.myFiles.value = ''
          this.$refs.myFiles.click()
    },
    deleteImage (index) {
      this.uploadImageSrcs.splice(index, 1)
      this.images.splice(index, 1)
      let allData = {
        perpose: this.perpose,
        images: this.images,
        theIndex: this.theIndex
      }
      this.$emit('image', allData)
    },
    previewFiles () {
      let ImageAllFiles = this.$refs.myFiles.files
      for (var i = 0; i < ImageAllFiles.length; i++) {
          let type = this.$refs.myFiles.files[i].name.split('.')[1]
        if (true) {
          this.images.push(this.$refs.myFiles.files[i])
          this.uploadImageSrcs.push(URL.createObjectURL(this.$refs.myFiles.files[i]))
        } else {
          this.$toast.error('You can uplaod ' + this.limit + ' images max.',{ duration: 1000 })
        }
      }
      let allData = {
        perpose: this.perpose,
        images: this.images,
        theIndex: this.theIndex
      }
      this.$emit('image', allData)
    }
  }
}
</script>

<style scoped>
.upload-design {
  cursor: pointer;
  border: 1px dashed #707070;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 22px 22px 10px;
  margin-top: 15px;
  margin-right: 20px;
  height: 100px;
  width: auto;
}
.upload-design img {
  width: auto;
  height: auto;
  object-fit: contain;
  text-align: center;
}
.upload-design p{
  margin-top: 8px;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #242424;
}
.image-uploader-valid{
  display: flex;
  flex-wrap: wrap;
}
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
</style>
