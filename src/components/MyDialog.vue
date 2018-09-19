<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
        <el-button class="el-icon-error" v-on:click="close"></el-button>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="scss">
  .dialogWrapper {
    position: fixed;
    background: hals(0, 0%,0%,0.8);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }    
  .dialog {
    background: lightgrey;
    min-height: 4em;
    min-width: 10em;
    > header {
      padding: 8px;
      display: flex;
      justify-content: space-between;
      font-size: 28px;
      border-bottom: 3px solid black;
    }
    > main {
      padding: 8px;
      background: lightgreen;
    }
  }
  .el-icon-error {
    border: none;
    background: lightgrey;
    color: black;
    vertical-align: middle;
  }
</style>