<template>
  <div>
    <h2>联系方式</h2>
    <el-form style="width:450px">
      <el-form-item label="Q Q ">
        <el-input v-model="contacts.qq"></el-input>
      </el-form-item>
      <el-form-item label="微 信 ">
        <el-input v-model="contacts.wechat"></el-input>
      </el-form-item>
      <el-form-item label="邮 箱 ">
        <el-input v-model="contacts.email"></el-input>
      </el-form-item>
      <el-form-item label="手 机 ">
        <el-input v-model="contacts.phone"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['contacts']
  }
</script>