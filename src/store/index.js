import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      username: ''
    },
    resume: {
      profile: { name: '', city: '', birth: '' },
      workExperience: [ {company: '', content: ''} ],
      studyExperience: [ {school: '', duration: '', degree: ''} ],
      projectsExperience: [ {projectname: '', content: ''} ],
      awards: [ {name: ''} ],
      contacts: { qq: '', wechat: '', email: '', phone: '' }
    }
  },
  mutations: {
    // initState(state, payload) {
    //   Object.assign(state, payload)
    // },
    setUser(state, payload) {
      Object.assign(state.user, payload)
    },
    removeUser(state) {
      state.user.id = ''
    }
  }
})