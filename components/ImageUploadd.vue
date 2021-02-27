<template>
  <div class="image-uploader-valid">
    <div class="upload-design" @click="clickInputFile(what)">
       <p> Add Photo </p>
    </div>
    <div class="image-size preview-image"  v-for="(src,index) in cropImg">
      <div class="delete-image remove-image" @click="deleteImage(index)">
        X
      </div>
      <img style="width:100px;height:100px;object-fit: contain;" :key="" :src="src" alt="">
    </div>

    <input type="file" :ref="what" @change="previewFiles2(what)" hidden >

    <div class="modal fade show" :id="what" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">

  <!-- <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-body" style="height:auto">
          <vue-cropper
            :ref="'cropper'+what"
            :src="aa"
            :responsive="true"

          >
          </vue-cropper>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" >Close</button>
        <button type="button" class="btn btn-primary"  :data-dismiss="'modal'" @click="crop(what)">crop</button>
      </div>
    </div>
  </div> -->
</div>

<!-- <vue-cropper
  ref="cropper"
  :src="aa"
  :zoomable="false"
>
</vue-cropper> -->


  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
// import 'cropperjs/dist/cropper.css';
export default {
  props: [
      'limit', 'perpose','theIndex',
      'dbImages','what','cropImg',
      'feature_image','variation',
      'product_images'
  ],
  components: {VueCropper},
  data () {
    return {
      uploadImageSrcs: {
          name: '',
          img: ''
      },
      // cropImg: [],
      images: [],
      openCropper: 0,
      cropnowOpen: false,
      aa: '',
      t:false,
    }
  },
  methods: {
    clickInputFile(w){
          this.$refs[w].value = ''
          this.$refs[w].click()
    },
    deleteImage (index) {
      // this.uploadImageSrcs.splice(index, 1)
      this.cropImg.splice(index, 1)
      this.images.splice(index, 1)
      let allData = {
        perpose: this.perpose,
        images: this.images,
        theIndex: this.theIndex
      }
      this.$emit('image', allData)
    },
    previewFiles2 (w) {},
    previewFiles (w) {
        this.cropnowOpen = true
     //    const file = ImageAllFiles[0];
     // if (file.type.indexOf('image/') === -1) {
     //   alert('Please select an image file');
     //   return;
     // }
     // if (typeof FileReader === 'function') {
     //   const reader = new FileReader();
     //   reader.onload = (event) => {
     //     this.aa = event.target.result;
     //     // rebuild cropperjs with the updated source
     //     this.$refs.cropper.replace(event.target.result);
     //   };
     //   reader.readAsDataURL(file);
     // } else {
     //   alert('Sorry, FileReader API not supported');
     // }
        // for (var i = 0; i < ImageAllFiles.length; i++) {
        //     this.aa = URL.createObjectURL(this.$refs.myFiles.files[0])
        // }
        let ImageAllFiles = this.$refs[w].files
        // console.log(this.$refs[w].files[0])
        // return
        var myModal = new bootstrap.Modal(document.getElementById(w), {
          keyboard: false,
          backdrop: 'static',
          show: true
        })
        myModal.show()
        this.a = ''
        this.aa = (URL.createObjectURL(this.$refs[w].files[0]))
    //     imageToBase64(this.$refs[w].files[0]) // Path to the image
    // .then(
    //     (response) => {
    //         console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
    //     }
    // )
    // .catch(
    //     (error) => {
    //         console.log(error); // Logs an error if there was one
    //     }
    // )
        //this.cropImg.push(this.aa)
        console.log(this.aa)
        setTimeout(() => this.$refs['cropper'+w].replace(this.aa), 1000)
      // let allData = {
      //   perpose: this.perpose,
      //   images: this.images,
      //   theIndex: this.theIndex
      // }
      // this.$emit('image', allData)
      //console.log(this.images)
    },
    crop(w){
        let cropImg = this.$refs['cropper'+w].getCroppedCanvas().toDataURL();
        if(this.feature_image) {
            let r = {
                image: cropImg,
            }
            this.$emit('cropImage',r)
            return
        }else if (this.product_images) {
            let r = {
                image: cropImg,
            }
            this.$emit('cropImage',r)
            return
        }
        let r = {
            image: cropImg,
            variation: this.variation
        }
        this.$emit('cropImage',r)
    }
  }
}
</script>

<style>
/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:44.164Z
 */
 img {
      max-width: 100%;
    }
.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}
.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}
.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}
.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}
.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}
.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}
.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}
.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}
.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}
.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}
.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}
.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}
.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}
.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}
.cropper-line {
  background-color: #39f;
}
.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}
.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}
.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}
.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}
.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}
.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}
.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}
.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}
.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}
.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}
.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}
@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}
@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}
@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}
.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}
.cropper-invisible {
  opacity: 0;
}
.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}
.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.cropper-hidden {
  display: none !important;
}
.cropper-move {
  cursor: move;
}
.cropper-crop {
  cursor: crosshair;
}
.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
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
