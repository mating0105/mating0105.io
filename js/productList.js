$(function(){
	//配置轮播banner1的参数
	$("#boxAnimate_pro").tyslide({
			boxh:432,//盒子的高度
			w:1000,//盒子的宽度
			h:404,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:6,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:20,//控制按钮宽度
			controlsH:20,//控制按钮高度
			radius:10,//控制按钮圆角度数
			controlsColor:"#dcdcdc",//普通控制按钮的颜色
			controlsCurrentColor:"#FC6701",//当前控制按钮的颜色
			isNumber:true //是否需要数字
	});
	//热卖畅销
	$(".hotSale ul li").mouseover(function(){
		$(".hotSale ul li").find("div").hide();
		$(".hotSale ul li").find(".hotSale_title").show();
		$(this).find(".hotSale_title").hide();
		$(this).find(".hotSale_con").show();
	})
	//乐购图书折扣区
	$(".discount ul li").mouseover(function(){
		//当前li添加高亮样式，它的兄弟移除高亮样式
		$(this).addClass("discount_current").siblings().removeClass("discount_current");
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
	//新书畅销榜 滑动效果
	//绑定事件
	$("#hot_sale li").mouseover(function(){
		//隐藏所有畅销榜的内容
		$("#hot_sale li").find(".listCon").hide();
		//显示所有畅销榜的标题
		$("#hot_sale li").find(".list").show();
		//隐藏当前列表的标题
		$(this).find(".list").hide();
		//显示当前列表的内容
		$(this).find(".listCon").show();
	})
	
	//独家提供
	//绑定事件
	$(".exclusive_provision_list li").mouseover(function(){
		//当前添加current样式，兄弟节点移除current样式
		$(this).addClass("current").siblings().removeClass("current");
		//显示相应的内容
		var index1=$(this).index();
		$(".all_exclusive_provisionCon .exclusive_provisionCon").hide();
		$(".all_exclusive_provisionCon .exclusive_provisionCon").eq(index1).show();
		
		
	})
	//猜你喜欢
	$(".like .huanpi").click(function(){
		//获取索引
		var index2=$(this).index();
        
		$(".all_likeCon .likeCon").hide();
		
	    $(".all_likeCon .likeCon").eq(index2).show();
	
		
	})
	
	
	
	
	
	
})
