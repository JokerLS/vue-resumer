<template>
  <div>
    <h2>个人信息</h2>
    <el-form style="width:450px">
      <el-form-item label="姓 名 ">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="城 市 ">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="出 生 年 月 ">
        <el-input v-model="profile.birth"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['profile']
  }
</script>