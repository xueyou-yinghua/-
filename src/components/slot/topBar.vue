<template>
    <div class="bottomBar" @click="Click">
        <div :style="activeStyle">
            <slot name="icon" v-if="!isViable"></slot>
            <slot name="icon-active" v-if="isViable"></slot>
            <slot name="name"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottomBar",
        props:{
            url:{
                type:String,
            },
            colors:{
                type: String,
                default:"#ff8d99",
            }
        },
        methods:{
            Click(){
                //如果是当前路由,那就不跳转
                if(!this.$route.path.toString().includes(this.url)){
                    this.$router.push(this.url);
                }
            }
        },
        computed:{
            //判断一下目前是谁
            isViable(){
                /**
                 * this.$route  获取当前活跃路由
                 * 判断是否是当前路由
                 */
                return this.$route.path.includes(this.url)
            },
            activeStyle(){
                return this.isViable?{color:this.colors}:{}
            }
        }
    }
</script>

<style scoped>
     .bottomBar{
        /*均等分*/
        flex: 1;
        text-align: center;
         cursor: pointer;
    }
    .bottomBar img{
        width: 24px;
        height: 24px;
        font-size: 15px;
        vertical-align: middle;
    }
</style>