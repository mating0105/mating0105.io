$(document).ready(function(){
	  var showproduct = {
		  "boxid":"showbox",
		  "sumid":"showsum",
		  "boxw":330,//宽度,该版本中请把宽高填写成一样
		  "boxh":330,//高度,该版本中请把宽高填写成一样
		  "sumw":58,//列表每个宽度,该版本中请把宽高填写成一样
		  "sumh":58,//列表每个高度,该版本中请把宽高填写成一样
		  "sumi":4,//列表间隔
		  "sums":3,//列表显示个数
		  "sumsel":"sel",
		  "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
		  "lastid":"showlast",
		  "nextid":"shownext"
		  };//参数定义	  
	 $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
  
    //种类选择
    $(".type button").click(function(){
    //点击时添加current样式
    	$(this).addClass("current").siblings().removeClass("current");
    	$(this).find("span").show();
      $(this).siblings().find("span").hide();
    })
    //购物车点击按钮加减    实现数量的加减
    //加
	$(".btn_plus").click(function(){
		//1.获取amount_text 的value值（字符串类型需要转为数字类型）
		var old_val=parseInt($(this).prev().val());
		
		//2.old_val自身加一
		    old_val++;
		    
		//3.设置amount_text 的value值
		$(this).prev().val(old_val);

	})
	
	//减
	$(".btn_reduce").click(function(){
		//1.获取amount_text的value值（字符串类型需要转为数字类型）
		var old_val=parseInt($(this).prev().prev().val());
		
		//2.判断 当amount_text 的value值>1时old_val自身减一
		if(old_val>1){
			old_val--;
		}
		    
		//3.设置amount_text 的value值
		$(this).prev().prev().val(old_val);
		
	})
  //人气单品
	//绑定事件
	
		$(".Mono ul li").mouseover(function(){
				//当前li添加高亮样式，它的兄弟移除高亮样式
				$(this).addClass("Mono_current").siblings().removeClass("Mono_current");
				//三角符号更换背景颜色
				$(this).find(".rebate_sanjiao").addClass("current");
				$(this).siblings().find(".rebate_sanjiao").removeClass("current");
				//星星更换图片
				$(this).find(".xingxing_pic img:first").show();
				$(this).find(".xingxing_pic img:first").siblings().hide();
				//兄弟  下面星星更换图片
				$(this).siblings().find(".xingxing_pic img:first").hide();
				$(this).siblings().find(".xingxing_pic img:first").siblings().show();
			})
  
    //评价点击事件
    $(".evaluate_con_title li").click(function(){
    	//点击时，当前添加高亮显示，其他兄弟移除高亮样式
    	$(this).addClass("current").siblings().removeClass("current");
    	//获取索引值
    	var index1=$(this).index();
    	//显示对应的内容
    	$(".evaluateCon").hide();
    	$(".evaluateCon").eq(index1).show();
    	
    })
    //评价数量点击事件
    $(".evaluate_con_num li").click(function(){
    	//点击时，当前添加高亮显示，其他兄弟移除高亮样式
    	$(this).addClass("current").siblings().removeClass("current");
    	//获取索引值
    	var index2=$(this).index();
    	//显示对应的内容
    	$(".evaluate_con_details").hide();
    	$(".evaluate_con_details").eq(index2).show();
    	
    })
  
  
  
  
  
  
  
});