<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>        
      </ol>
    </nav>
    <ol class="panels">
      <li v-bind:class="{active: currentTab === 0}">
        <ProfileEditor v-bind:profile="resume.profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ItemsEditor v-bind:items="resume.workExperience" title="工 作 经 历 " v-bind:labels="{company:'公 司 ', content:'工 作 内 容 '}"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ItemsEditor v-bind:items="resume.studyExperience" title="学 习 经 历 " v-bind:labels="{school:'学 校 ', duration:'时 间 ', degree:'学 历 '}"/>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ItemsEditor v-bind:items="resume.projectsExperience" title="项 目 经 历 " v-bind:labels="{projectname:'项 目 名 称 ', content:'项 目 内 容 ', degree:'学 历 '}"/>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ItemsEditor v-bind:items="resume.awards" title="获 奖 情 况 " v-bind:labels="{name:'获 奖 名 称 '}"/>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <ContactEditor v-bind:contacts="resume.contacts"/>
      </li>
    </ol>
  </div>
</template>

<script>
  import ProfileEditor from "./ProfileEditor";
  import ItemsEditor from "./ItemsEditor";
  import ContactEditor from "./ContactEditor";
  export default {
    components: { ProfileEditor, ItemsEditor, ContactEditor },
    // props: ['resume'],
    data() {
      return {
        currentTab: 0,
        icons: ['shenfenzheng', 'work', 'education', 'project', 'award', 'contact']
      }
    },
    computed: {
      resume () {
        return this.$store.state.resume
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  #editor {
    min-height: 150px;
    display: flex;
    > nav {
      background: black;
      width: 80px;
      > ol > li {
        // border: 1px solid red;
        padding: 18px 0;
        text-align: center;
        > .icon {
          width: 32px;
          height: 32px;
          fill: white;
        }
        &.active {
          background: white;
          > .icon {
            fill: black;
          }
        }
      }      
    }
    > .panels {
      flex: 1;
      .container {
        position: relative;
        .el-icon-circle-close {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .addContent {
        margin-top: 8px;
      }
      > li {
        display: none;
        padding: 32px;
        height: 100%;
        overflow: auto;
        &.active {
          display: block;
        }
      }
    }
  }
</style>