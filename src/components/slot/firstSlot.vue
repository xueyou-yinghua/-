<template>
  <div class="slot">
    <div class="left">
      <div :class="{le1:num==='1'}" class="le" @click="btnClick">
        <slot name="left_one"></slot>
        <slot name="img_one"></slot>
      </div>

      <div class="le2" v-if="num!=='1'">
        <slot name="left-two"></slot>
        <slot name="img_two"></slot>
      </div>

      <div class="le3" v-if="num!=='1'">
        <slot name="left-three"></slot>
        <slot name="img_three"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstSlot",
  props:{
    num:{
      type:String,
      default:'1',
    },
    url:String,
  },
  data(){
    return{
      height:'',
    }
  },
  methods:{
    btnClick(){
      this.$router.push(this.url)
    }
  }
}
</script>

<style scoped>
.left{
  width: 100%;
  height: 100%;
}
.le,.le1,.le2,.le3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.le{
  width: 100%;
  height: 33%;
}
.le1{
  width: 100%;
  height: 100%;
}
.le2{
  width: 100%;
  height: 34%;
}
.le3{
  width: 100%;
  height: 33%;
}
</style>