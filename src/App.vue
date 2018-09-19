<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <header>
      <Topbar class="topbar" v-on:preview="preview"/>
    </header>
    
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
  name: 'App',
  data() {
    return {
      previewMode: false,
    }
  },
  methods: {
    exitPreview() {
      this.previewMode = false
    },
    preview() {
      this.previewMode = true
    }
  },
  store,
  components: {
    Topbar, Editor, Preview
  },
  created() {
    // let state = localStorage.getItem('state')
    // if(state) {
    //   state = JSON.parse(state)
    // }
    // this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser)
  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.topbar {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 4px hsla(0,0,0,0.5);
  background: #E6E6FA;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

main {
  height: 100%;
  display: flex;
  flex: 1;
  background: lightblue;

  > .editor {
    width: 40em;
    margin: 16px;
    margin-right: 8px;
    background: white;
    box-shadow: 0 0 4px hsla(0,0,0,0.5);
    border-radius: 4px;
    overflow: auto;
  }
  > .preview {
    flex: 1;
    margin: 16px;
    margin-left: 8px;
    background: white;
    box-shadow: 0 0 4px hsla(0,0,0,0.5);
    border-radius: 4px;
    overflow: auto;
  }
}
.previewMode #topbar {
    display: none;
}
.previewMode #editor {
  display: none;
}
.previewMode #preview {
  max-width: 800px;
  margin: 16px auto;
  overflow: auto;
}
#exitPreview {
  display: none;
}
.previewMode #exitPreview {
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}
</style>
