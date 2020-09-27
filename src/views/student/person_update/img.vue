<template>
  <div class="img">
    <top-nav text="切换头像" url="/sMain/person"></top-nav>
    <!--上传图片-->
    <el-upload
        class="avatar-uploader"
        action="http://localhost:8088/PostUpdate"
        :data="$store.state.information"
        :on-success="success"
        with-credentials
        :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import TopNav from "@/components/slot_2/topNav";
export default {
  name: "img_ui",
  components: {TopNav},
  data(){
    return{
      imageUrl:'',
    }
  },
  methods:{
    success(res,file){
      this.$notify.success({
        title:'成功',
        message:'切换头像成功',
      })
    }
  },
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  *{
    font-size: 2rem;
  }
  .avatar-uploader{
    margin-top: 10%;
    display: flex;
    justify-content: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px solid black;
    font-size: 28px;
    color: #8c939d;
    width: 600px;
    height: 600px;
    line-height: 600px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>