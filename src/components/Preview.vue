<template>
  <div id="preview">
    <h1>{{resume.profile.name || '请填写姓名'}}</h1>
    <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月'}}</p>
    <hr>
    <section v-if="filter(resume.workExperience).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workExperience)">
          <dt>公司：{{work.company}}</dt>
          <dd>工作内容：{{work.content}}</dd>
        </li>
      </ul>
      <hr>
    </section>
    <section v-if="filter(resume.studyExperience).length > 0">
      <h2>学习经历</h2>
      <ul>
        <li v-for="study in filter(resume.studyExperience)">
          <dd>学校：{{study.school}}</dd>
          <dd>时间：{{study.duration}}</dd>
          <dd>学历：{{study.degree}}</dd>
        </li>
      </ul>
      <hr>
    </section>
    <section v-if="filter(resume.projectsExperience).length > 0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.projectsExperience)">
          <dt>项目名称：{{project.projectname}}</dt>
          <dd>项目内容：{{project.content}}</dd>
        </li>
      </ul>
      <hr>
    </section>
    <section v-if="filter(resume.awards).length > 0">
      <h2>获奖情况</h2>
      <ul>
        <li v-for="award in filter(resume.awards)">
          <dd>奖项名称：{{award.name}}</dd>
        </li>
      </ul>
      <hr>
    </section>
    <section>
      <h2>联系方式</h2>
      <ul>
        <li>
          <dd>QQ：{{resume.contacts.qq}}</dd>
          <dd>微信：{{resume.contacts.wechat}}</dd>
          <dd>邮箱：{{resume.contacts.email}}</dd>
          <dd>手机：{{resume.contacts.phone}}</dd>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    // props: ['resume'],
    computed: {
      resume() {
        return this.$store.state.resume
      }
    },
    methods: {
      filter(array) {
        return array.filter(item => !this.isEmpty(item))
      },
      isEmpty(object) {
        let empty = true
        for(let key in object) {
          if(object[key]) {
            empty = false
            break
          }
        }
        return empty
      }
    }
  }
</script>

<style lang="scss">
  #preview {
    min-height: 150px;
    // border: 1px solid yellow;
    padding: 16px;
  }
  h1, p {
    margin-left: 16px;
  }
  section {
    margin-top: 16px;
    margin-left: 16px;
  }
  hr, ul {
    margin-top: 8px;
  }
  dt, dd{
    margin-left: 64px;
  }
  dt {
    margin-top: 16px;
  }
  dd {
    margin-top: 8px;
  }
</style>