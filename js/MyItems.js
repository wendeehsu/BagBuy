Vue.component('tab-finding', { 
	template: '<div>finding component</div>' 
})
Vue.component('tab-found', { 
	template: '<div>found component</div>' 
})
Vue.component('tab-done', { 
	template: '<div>Archive component</div>' 
})

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'finding',
    tabs: ['finding', 'found', 'done']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})