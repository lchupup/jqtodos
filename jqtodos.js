$(document).ready(function(){
	var addtxt = $("#addtxt");
	var addcontent = $(".addcontent");
	var bottom = $("#bottom");
	/*************************项目输入**************************************************************/
	addtxt.keypress(function(e){
		 if (e.keyCode == 13) {
		 	if ($(this).val() != "") {
		 	 	addcontent.css("display","block");
		 	 	bottom.css("display","block");
		 	 	$("#item_list").append("<li><div class='item_manage'><input type='checkbox' class='itemdone' /><label class='item_name'> </label><span class='del'><img src='./image/transparent.png' /></span></div><input type='text' class='item_edit' value=' ' /></li>");
		 	 	$(".item_name").last().html(this.value);
		 	 	$(".item_edit").last().val(this.value);
		 	 	$("#item_list li").last().css("border","none");
		 	 	$("#item_list li").last().prevAll().css("border-bottom","1px solid #ccc");
		 	 	$("#item_left").html("还有"+$("#item_list li").length+"个未完成项目");
		 	 	$(this).val("");
		 	 };
		};
	});
	/***************************项目修改和删除*************************************************/
	$("#item_list").on("mouseover","li",function(){
		 $(this).find(".del").css("display","block");
	}).on("dblclick","li",function(){
		$(this).find(".item_manage").css("display","none");
		$(this).find(".item_edit").css("display","block").select().on("blur",function(){
			if ($(this).val() != ""){
				$(this).css("display","none");
				$(this).prev().css("display","block").find(".item_name").html($(this).val());	
			}else{
				$(this).parents("li").remove();
				$("#item_list li").last().css("border","none");
				var i = $("#item_list li").length-$('input:checked').length;
				$("#item_left").html("还有"+i+"个未完成项目");
				$("#bottom_right").children().html("清除"+$('input:checked').length+"个已完成项目");
				if ($('input:checked').length==0) {
					$("#bottom_right").css("display","none");
				};
				if ($("#item_list li").length == 0) {
					addcontent.css("display","none");
				 	bottom.css("display","none");
				};
			}
		}).keypress(function(e){
			if (e.keyCode == 13){
				if ($(this).val() != ""){
					$(this).css("display","none");
					$(this).prev().css("display","block").find(".item_name").html($(this).val());	
				}else{
					$(this).parents("li").remove();
					$("#item_list li").last().css("border","none");
					var i = $("#item_list li").length-$('input:checked').length;
					$("#item_left").html("还有"+i+"个未完成项目");
					$("#bottom_right").children().html("清除"+$('input:checked').length+"个已完成项目");
					if ($('input:checked').length==0) {
						$("#bottom_right").css("display","none");
					};
					if ($("#item_list li").length == 0) {
						addcontent.css("display","none");
					 	bottom.css("display","none");
					};
				}
			};
		});
	});
	$("#item_list").on("mouseout","li",function() {
		 $(this).find(".del").css("display","none");
	});
	$("#item_list").on("mouseover",".del",function() {
		$(this).css("background","url(./image/destroy.png)0 -20px");
	}).on("click",".del",function(){
		$(this).parents("li").remove();
		$("#item_list li").last().css("border","none");
		var i = $("#item_list li").length-$('input:checked').length;
		$("#item_left").html("还有"+i+"个未完成项目");
		$("#bottom_right").children().html("清除"+$('input:checked').length+"个已完成项目");
		if ($('input:checked').length==0) {
			$("#bottom_right").css("display","none");
		};
		if ($("#item_list li").length == 0) {
			addcontent.css("display","none");
		 	bottom.css("display","none");
		};
	});
	$("#item_list").on("mouseout",".del",function() {
		$(this).css("background","url(./image/destroy.png)");
	});
	/*******************************项目完成情况记录*******************************************************/
	$("#alldone").click(function(){
		if ($(this).prop("checked") == true){
			$(".itemdone").prop("checked",true).next().css({"color": "#777","text-decoration": "line-through"});
			$("#item_left").html("还有0个未完成项目");
			$("#bottom_right").css("display","block").children().html("清除"+$("#item_list li").length+"个已完成项目").click(function(){
				if ($('input:checked').length > $("#item_list li").length) {
					$("#item_list li").remove();
					addcontent.css("display","none");
					bottom.css("display","none");
					$("#alldone").prop("checked",false);
				};
			});
		}
		else{
			$(".itemdone").prop("checked",false).next().css({"color": "#000","text-decoration": "none"});
			$("#item_left").html("还有"+$("#item_list li").length+"个未完成项目");
			$("#bottom_right").css("display","none");
		}
	});
	$("#item_list").on("click",".itemdone",function(){
		if ($(this).prop("checked") == true) 
			$(this).next().css({"color": "#777","text-decoration": "line-through"});
		else
			$(this).next().css({"color": "#000","text-decoration": "none"});
		var i = $("#item_list li").length-$('input:checked').length;
		$("#item_left").html("还有"+i+"个未完成项目");		 
		if ($('input:checked').length==0) 
			$("#bottom_right").css("display","none");
		else
			$("#bottom_right").css("display","block").children().html("清除"+$('input:checked').length+"个已完成项目").click(function(){
				if ($('input:checked').length == $("#item_list li").length){
					$("input:checked").parents("li").remove();
					addcontent.css("display","none");
				 	bottom.css("display","none");
				 }
				else{
					$("input:checked").parents("li").remove();
					$("#item_list li").last().css("border","none");
					$("#bottom_right").css("display","none");
				}
			});
	});
});
