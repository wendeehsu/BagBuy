var needLists = new Vue({
	el:"#Needs",
	data:{
		needs: []
	}
});

function SetupNeeds()
{
	for(var i = 0; i < 3; i++)
	{
		var need1 = {
			name:"鳳梨酥",
			imgSrc:"pineAppleCake.jpg",
			price:"40.00"
		}
		var need2 = {
			name:"奶凍捲",
			imgSrc:"cakeRoll.jpg",
			price:"150.00"
		}
		var need3 = {
			name:"月餅",
			imgSrc:"mooncake.jpg",
			price:"35.00"
		}
		needLists.needs.push(need1);
		needLists.needs.push(need2);
		needLists.needs.push(need3);
	}
}
SetupNeeds()