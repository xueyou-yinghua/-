<template>
  <div class="score">
    <top-nav text="成绩面板"></top-nav>
    <el-table
        border
        :data="list"
        style="width: 100%;">
      <el-table-column
          align="center"
          label="课程名称"
          prop="ClassName">
      </el-table-column>
      <el-table-column
          align="center"
          label="评分老师"
          prop="TeacherName">
      </el-table-column>
      <el-table-column
          align="center"
          label="分数"
          prop="Score">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TopNav from "@/components/slot_2/topNav";
export default {
  name: "score",
  components: {TopNav},
  data(){
    return{
      list:[]
    }
  },
  created() {
    this.axios.get('http://localhost:8088/SetAllAScore').then(res=>{
      const data=res.data
      for(let i=0;i<res.data[0].length;i++){
        const d={ClassName:data[0][i],TeacherName:data[1][i],Score:data[2][i]}
        this.list.push(d)
      }
    })
  }
}
</script>

<style scoped>
</style>