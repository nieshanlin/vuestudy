<template>
    <el-table :data="articles" >
        <el-table-column prop="id" label="序号" width="140">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="body" label="内容" width="220">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {

        data() {

            return {
               articles: []
                // 编写获取数据的方法，方便调用

            }
        },
        methods:{
            fetch(){
                this.$http.get('articles').then(res=>{
                    this.articles=res.data
                })
            },
            handleEdit(id){
this.$router.push(`/articles/${id}/edit`)
            },
            handleDelete(id){
              this.$http.delete(`articles/${id}`).then(()=>{
                  this.$message({
                      message:"文章删除成功",
                      type:"success"
                  });
                 this.fetch()

              })
            }
        },
        created() {
            //查询数据
          this.fetch()

        }
    };
</script>

<style scoped>

</style>