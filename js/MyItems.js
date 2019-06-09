var main = new Vue({
  el: '#mainContext',
  data: {
    chosen: "finding-section"
  },
  methods: {

  }
})

var findingItems = new Vue({
  el: '#finding-section',
  data: {
    list: []
  },
  methods: {
    GetList: function () {
    	for(var i = 0; i < 3; i++)
		{
			var need1 = {
				name:"鳳梨酥",
				date:"2019-01-19",
				interestNum:5
			}
			var need2 = {
				name:"奶凍捲",
				date:"2019-07-10",
				interestNum:0
			}
			var need3 = {
				name:"月餅",
				date:"2019-12-30",
				interestNum:1
			}
			this.list.push(need1);
			this.list.push(need2);
			this.list.push(need3);
		}
    }
  }
})

findingItems.GetList();
main.chosen = "finding-section";