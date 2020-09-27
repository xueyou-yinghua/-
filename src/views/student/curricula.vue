<template>
  <div class="curricula">
    <div class="text">
      可选课程
    </div>
    <el-table
        @selection-change="handleSelectionChange"
        stripe
        :data="$store.getters.ClassView"
        style="width: 100%;">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item label="教师姓名" label-width="100px">
              <span>
                {{ props.row.teacher.name}}
              </span>
            </el-form-item>
            <el-form-item label="毕业学校" label-width="100px">
              <span>
                {{ props.row.teacher.school}}
              </span>
            </el-form-item>
            <el-form-item label="性别" label-width="100px">
              <span>
                {{ props.row.teacher.sex}}
              </span>
            </el-form-item>
            <el-form-item label="所属学院" label-width="100px">
              <span>
                {{ props.row.teacher.collage}}
              </span>
            </el-form-item>
            <el-form-item label="所属专业" label-width="100px">
              <span>
                {{ props.row.teacher.specialty}}
              </span>
            </el-form-item>
            <el-form-item label="职位" label-width="100px">
              <span>
                {{ props.row.teacher.type}}
              </span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          align="center"
          width="200"
          label="课程名称"
          prop="ClassName">
      </el-table-column>
      <el-table-column
          align="center"
          label="上课时间"
          prop="ClassTime">
      </el-table-column>
      <el-table-column
          align="center"
          width="130"
          label="上课地址"
          prop="Address">
      </el-table-column>
      <el-table-column
          align="center"
          width="130"
          label="开设学期"
          prop="time">
      </el-table-column>
      <el-table-column
          align="center"
          width="116"
          label="剩余人数"
          prop="num">
      </el-table-column>
    </el-table>
    <div class="btn">
      <el-button
          :disabled="multipleSelection.length===0"
          type="danger"
          @click="OKClick">
        确认
      </el-button>
    </div>
    <div class="text">
      已选课程
    </div>
    <el-table
        @selection-change="handleSelectionChangeT"
        stripe
        :data="$store.getters.EndClassView"
        style="width: 100%;">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item label="教师姓名" label-width="100px">
              <span>
                {{ props.row.teacher.name}}
              </span>
            </el-form-item>
            <el-form-item label="毕业学校" label-width="100px">
              <span>
                {{ props.row.teacher.school}}
              </span>
            </el-form-item>
            <el-form-item label="性别" label-width="100px">
              <span>
                {{ props.row.teacher.sex}}
              </span>
            </el-form-item>
            <el-form-item label="所属学院" label-width="100px">
              <span>
                {{ props.row.teacher.collage}}
              </span>
            </el-form-item>
            <el-form-item label="所属专业" label-width="100px">
              <span>
                {{ props.row.teacher.specialty}}
              </span>
            </el-form-item>
            <el-form-item label="职位" label-width="100px">
              <span>
                {{ props.row.teacher.type}}
              </span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          align="center"
          width="200"
          label="课程名称"
          prop="ClassName">
      </el-table-column>
      <el-table-column
          align="center"
          label="上课时间"
          prop="ClassTime">
      </el-table-column>
      <el-table-column
          align="center"
          width="130"
          label="上课地址"
          prop="Address">
      </el-table-column>
      <el-table-column
          align="center"
          width="130"
          label="开设学期"
          prop="time">
      </el-table-column>
      <el-table-column
          align="center"
          width="116"
          label="剩余人数"
          prop="num">
      </el-table-column>
    </el-table>
    <div class="btn">
      <el-button
          :disabled="multipleSelectionT.length===0"
          type="danger"
          @click="NOClick">
        确认
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "curricula",
  data(){
    return{
      multipleSelection: [],
      multipleSelectionT: [],
    }
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSelectionChangeT(val){
      this.multipleSelectionT=val;
    },
    OKClick(){
      this.$confirm('确定选择这些课程吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => //添加操作
      {
        const a=this.multipleSelection
        let b=[]
        for(let i=0;i<a.length;i++){
          let j=0
          this.$store.getters.ClassView.filter(item=>{
            if(item.Address===a[i].Address&&item.ClassName===a[i].ClassName&&item.ClassTime===a[i].ClassTime){
              b.push(this.$store.state.ClassList[0][j])//this.$store.state.ClassList[0]  课程信息
            }
            j++
          })
        }
        //这个时候值都比对结束了
        let list=[]
        b.filter(item=>{
          let data1={account:sessionStorage.getItem('Account'),id:item.id,scored:0.0}
          list.push(data1)
        })
        this.axios.post('http://localhost:8088/ScorePost',{list}).then(res=>{
          if(res.data===1){
            const datas={specialty:sessionStorage.getItem('Specialty'),account:sessionStorage.getItem('Account')}
            this.$store.dispatch('getList',datas)
            this.$message({
              type: 'success',
              message: '选课成功!'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消选课'
        });
      });
    },
    NOClick(){
      this.$confirm('确定删除这些课程吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => //添加操作
      {
        const a=this.multipleSelectionT
        let b=[]
        for(let i=0;i<a.length;i++){
          let j=0
          this.$store.getters.EndClassView.filter(item=>{
            if(item.Address===a[i].Address&&item.ClassName===a[i].ClassName&&item.ClassTime===a[i].ClassTime){
              b.push(this.$store.state.ClassList[3][j])//this.$store.state.ClassList[3]  已经选择的课程信息
            }
            j++
          })
        }
        //这个时候值都比对结束了
        let list=[]
        b.filter(item=>{
          let data1={account:sessionStorage.getItem('Account'),id:item.id,scored:0.0}
          list.push(data1)
        })
        this.axios.post('http://localhost:8088/ScoreDEL',{list}).then(res=>{
          if(res.data===1){
            const datas={specialty:sessionStorage.getItem('Specialty'),account:sessionStorage.getItem('Account')}
            this.$store.dispatch('getList',datas)
            this.$message({
              type: 'success',
              message: '删除选课成功!'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除选课'
        });
      });
    }
  },
}
</script>

<style scoped>
.curricula{
    overflow-y: scroll;
}
.text{
  font-size: 1.6rem;
  background-color: #ff8d99;
  color: white;
  text-align: center;
  letter-spacing: 30px;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 10%;
  width: 40%;
}
.btn{
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 4% auto 4%;
}
.btn .el-button{
  width: 200px;
}
</style>