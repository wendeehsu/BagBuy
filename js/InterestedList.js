var findingItems = new Vue({
  el: '#finding-section',
  data: {
    list: []
  },
  methods: {
    GetList: function () {
    	console.log("get my Interested js");
    	for(var i = 0; i < 3; i++)
		{
			var need1 = {
				name:"鳳梨酥",
				ppl:"Nel Anderson",
				interestNum:3
			}
			var need2 = {
				name:"奶凍捲",
				ppl:"Adam Smiyh",
				interestNum:0
			}
			var need3 = {
				name:"月餅",
				ppl:"Rolyn Roojer",
				interestNum:2
			}
			this.list.push(need1);
			this.list.push(need2);
			this.list.push(need3);
		}
    }
  }
});

findingItems.GetList();