$(function(){
	//页面加载时调用公共函数
	common_price();
	
	//全选及反选效果
	//1.绑定点击事件
	//2.获取checked的值（布尔值），设置checkAll的值=checkOne
	$(".checkAll").click(function(){
		//获取checked的值（布尔值）
		var check_val= $(this).prop("checked");
		//设置checkAll的值=checkOne
		$(".checkOne").prop("checked",check_val);
		$(".checkAll").prop("checked",check_val);
		
		//全选时调用公共函数
	    common_price();
	})
	
	
	//购物车点击按钮加减    实现数量的加减
    //加
	$(".plus").click(function(){
		//1.获取下一个兄弟数量 的value值（字符串类型需要转为数字类型）
		var old_val=parseInt($(this).next().val());
		
		//2.old_val自身加一
		    old_val++;
		    
		//3.设置下一个兄弟数量 的value值
		$(this).next().val(old_val);
		
		//4.新的值=重新获取下一个兄弟数量 的value值
		var new_val=parseInt($(this).next().val());
		
		//5.获取当前 行 单价的text值  (可以为小数)
		
		var price=parseFloat($(this).parent().prev().text());
		//6.计算小计的值=新的值*单价（）
		var total_price=new_val*price;
		
		//7.设置小计的值（保留小数点后两位  toFixed(2)）
		$(this).parent().next().text(total_price.toFixed(2));
		
		//点击“+”时时调用公共函数
	     common_price();
		
	})
	
	//减
	$(".reduce").click(function(){
		//1.获取上一个兄弟数量 的value值（字符串类型需要转为数字类型）
		var old_val=parseInt($(this).prev().val());
		
		//2.判断 当上一个兄弟数量 的value值>1时old_val自身减一
		if(old_val>1){
			old_val--;
		}
		    
		//3.设置上一个兄弟数量 的value值
		$(this).prev().val(old_val);
		
		//4.新的值=重新获取上一个兄弟数量 的value值
		var new_val=parseInt($(this).prev().val());
		
		//5.获取当前 行 单价的text值  (可以为小数)
		
		var price=parseFloat($(this).closest("li").prev().text());
		//6.计算小计的值=新的值*单价（）
		var total_price=new_val*price;
		
		//7.设置小计的值（保留小数点后两位  toFixed(2)）
		$(this).closest("li").next().text(total_price.toFixed(2));
		
		//点击“-”时时调用公共函数
	     common_price();
		
	})
	
	//输入数量的计算
	//当失去焦点时
	//获取数量 的value值
	//获取单价的text值
	//计算小计的值
	$(".number").keyup(function(){
		//获取数量 的value值
		var oldNum =parseInt($(this).val());
		
		//获取单价的text值
		var price =parseFloat($(this).closest("li").prev().text());
		
		if(oldNum>1){
			//计算小计的值
			var total_price=oldNum*price;
			
			//设置小计的值
			$(this).closest("li").next().text(total_price);
			
		}else{
			//设置当前的val()值为1  并回复小计的值为单价 同时失去焦点
    		$(this).val(1);
    		$(this).closest("li").next().text(price.toFixed(2));
            $(this).blur();
		}
		
		//输入框键盘提起时调用公共函数
	     common_price();
		
		
	})
	//复选框点击事件
	$(".checkOne").click(function(){
		//点击复选框时调用公共函数
		 common_price();
	})
	
	
	//封装一个函数,多处调用
	function common_price(){
		//计算总价  改变商品的数量   改变选中商品的数量  
	    var num=0;//商品的数量
	    var product_num=0;//改变选中商品的数量
	    var total=0;//总价
	    
	    //获取checkOne的个数
	    var chsub=$(".checkOne").length;
	    //获取被选中的checkOne的个数
	    var checkedsub=$(".checkOne:checked").length;
	    
	    if(chsub==checkedsub){
	    	$(".checkAll").prop("checked",true);
	    }else{
	    	$(".checkAll").prop("checked",false);
	    }
	 
	    
	    
	    
        //用each爬楼梯遍历
        $(".information_con").each(function(){
        	num++;//商品每遍历一次,就自身加1
        	//获取遍历中的checked值
        	var Ischecked=$(this).find(".checkOne").prop("checked");
        	//判定cheked是否为checked 如果为checked 运行if
        	if(Ischecked){
        		//获取商品数量的值
	        	var number=parseInt($(this).find(".number").val());
	        	product_num	+=number;
        		//获取当前单价的值
        		var price=$(this).find(".number").parent().prev().text();
        		//计算小计的值
        		total += number*price;
        	}
        })
        //设置商品的数量
		$(".num").text(num);
		//设置选中商品的数量
		$(".product_num").text(product_num);
		//设置总价的值
		$(".total").text(total.toFixed(2));
		
		
		
		//得到有多少个input
	    //获取input的checked值
    	//判断   如果所有值相等为true 则全选为true
    	//如果不等，则全选为false
    	
		
	    
	}
	//猜你喜欢
	$(".guess_like ul li").mouseover(function(){
		//当前li添加高亮样式，它的兄弟移除高亮样式
		$(this).addClass("guess_like_current").siblings().removeClass("guess_like_current");
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
	
	
	
	
	
	
})
