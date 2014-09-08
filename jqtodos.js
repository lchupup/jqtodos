$(document).ready(function(){
	var addtxt = $("#addtxt");
	var addcontent = $(".addcontent");
	var bottom = $("#bottom");
	addtxt.keypress(function(e){
		 if (e.keyCode == 13) {
		 	if (this.value != "") {
		 	 	addcontent.css("display","block");
		 	 	bottom.css("display","block");
		 	 	$("#item_list").append("<li><div class='item_manage'><input type='checkbox' class='itemdone' /><label class='item_name'> </label><span class='del'><img src='./image/transparent.png' /></span></div><input type='text' class='item_edit' value=' ' /></li>");
		 	 	$(".item_name").last().html(this.value);
		 	 	$(".item_edit").last().val(this.value);
		 	 	$("#item_list li").last().css("border","none");
		 	 	$("#item_list li").last().prevAll().css("border-bottom","1px solid #ccc");
		 	 	this.value = "";
		 	 };
		};
	});
	$("#item_list").on("mouseover","li",function(){
		 $(this).find(".del").css("display","block");
	}).on("dblclick","li",function(){
		$(this).find(".item_manage").css("display","none");
		$(this).find(".item_edit").css("display","block").select();
	});
	$("#item_list").on("mouseout","li",function() {
		 $(this).find(".del").css("display","none");
	});
	$("#item_list").on("mouseover",".del",function() {
		$(this).css("background","url(./image/destroy.png)0 -20px");
	}).on("click",".del",function(){
		$(this).parents("li").remove();
		if ($("#item_list li").length == 0) {
			addcontent.css("display","none");
		 	bottom.css("display","none");
		};
	});
	$("#item_list").on("mouseout",".del",function() {
		$(this).css("background","url(./image/destroy.png)");
	});
});
