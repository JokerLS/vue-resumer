<template>
  <div id="topbar">
    <div class="wrapper">
      <div class="logo">
        Resumer
      </div>
      <div class="actions">
        <div v-if="logined" class="userActions" v-bind:class="{signedOutMode: signedOutMode, signedMode: signedMode}">
          <span class="welcome">你好，{{user.username}}</span>
          <el-button type="primary" id="exitBtn" v-on:click.prevent="signOut">退出</el-button>
        </div>
        <div v-else class="userActions">
          <el-button type="primary" v-on:click.prevent="signUpDialogVisible = true">注册</el-button>
          <MyDialog title="注册" v-bind:visible="signUpDialogVisible" v-on:close="signUpDialogVisible = false">
            <SignUpForm @success="signIn($event)"/>
          </MyDialog>
          <el-button type="primary" v-on:click.prevent="signInDialogVisible = true">登录</el-button>
          <MyDialog title="登录" v-bind:visible="signInDialogVisible" v-on:close="signInDialogVisible = false">
            <SignInForm @success="signIn($event)"/>
          </MyDialog>
        </div>
        <div v-bind:class="{signedOutMode: signedOutMode, signedMode: signedMode}">
          <el-button type="primary" id="saveBtn" v-on:click="saveItems">保存</el-button>
          <el-button type="primary" id="previewBtn" v-on:click="preview">预览</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  import AV from '../lib/leancloud'

  export default {
    data() {
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false,
        signedMode: false,
        signedOutMode: true
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      logined() {
        return this.user.id
      }
    },
    components: { MyDialog, SignUpForm, SignInForm, AV },
    methods: {
      preview() {
        this.$emit('preview')
      },
      signOut() {
        AV.User.logOut()
        this.$store.commit('removeUser')
        this.signedMode = false
        this.signedOutMode = true
      },
      signIn(user) {
        this.signUpDialogVisible = false
        this.signInDialogVisible = false
        this.$store.commit('setUser', user)
        this.signedOutMode = false
        this.signedMode = true
      },
      saveItems() {
        this.$emit('save')
      }
    }
  }
</script>

<style scoped lang="scss">
  #topbar {
    font-size: 30px;
    > .wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
    }
  }
  .signedOutMode {
    #saveBtn, #previewBtn {
      display: none;
    }
  }
  .signedMode {
    #saveBtn, #previewBtn {
      display: inline-flex;
    }
  }
  .actions {
    display: flex;
    align-items: center;
    .userActions{
      font-size: 18px;
      margin-right: .8em;
      .welcome {
        margin-right: .3em;
      }
    }
  }
</style>