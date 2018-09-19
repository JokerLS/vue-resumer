<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label> 
        <input type="text" placeholder="请输入用户名" v-model="formData.username" required>
      </div>
      <div class="row">
        <label >密码</label>
        <input type="password" placeholder="请输入密码" v-model="formData.password" required>
      </div>
      <div class="submits">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default {
    name:'SignInForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods:{
      signIn(){
        let {username, password} = this.formData
        var user = new AV.User();
        AV.User.logIn(username, password).then(()=> {
          this.$emit('success', getAVUser())
        }, (error)=> {
          this.errorMessage = getErrorMessage(error)
        });
      }
    }
  }
</script>

<style lang="scss">
  .row {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    > label {
      margin-right: 8px;
      width: 60px;
    }
  }
  .submits {
    padding: 8px;
    text-align: center;
  }
</style>