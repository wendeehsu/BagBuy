
let prev_js = "";
let prev_css = "";

function loadPage(page)
{
	script_name = "js/"+ page + ".js";
	css_name = "css/" + page + ".css";
	
	if(script_name != prev_js && css_name != prev_css)
	{
		$('script[src="' + prev_js + '"]').remove();
		$('link[href="' + prev_css + '"]').remove();
		$(".container .main-content").empty();

		$("div.container.main-content").load(page+".html #mainContext", function()
		{
			// load page.js
			$.getScript(script_name)
				.done(function(script, textStatus){
					$(window).scrollTop(0);
				})
				.fail(function(jqkhr, settings, exception){
					//alert("fail load script");
				});
		});

		prev_css = css_name;
		prev_js = script_name;
	}
}