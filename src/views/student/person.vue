<template>
  <div class="person">
    <!--图片-->
    <div class="demo-image__preview">
      <el-image
          style="width: 300px;height: 300px;border-radius: 50% 50%"
          :src="$store.state.img"
          fit="cover"
          :preview-src-list="$store.state.imgView"
      />
    </div>
    <div class="content">
      <person-content></person-content>
    </div>
  </div>
</template>

<script>
import PersonContent from "@/components/slot_2/personContent";
export default {
  name: "person",
  components: {PersonContent}
}
</script>

<style scoped>
.person{
  height: 100%;
  background-image: linear-gradient(#87add9,#dcb1b6);
}
.person .demo-image__preview{
  display: flex;
  justify-content: center;
}
.content{
  margin-top: 10%;
}
</style>