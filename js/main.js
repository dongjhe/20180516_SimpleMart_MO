$(function(){

	// 點擊登入先將第一個li加入login class
	$(".nav_area .member").click(function(){
		$(this).find('li').eq(0).addClass("login")
	})
	// 登入後點擊名子ul加入act class
	$(".login").click(function(){
		$(".member ul").toggleClass('act')
	})
	// 點擊漢堡線打開nav_area
	$("#menuBtn").click(function(){
		$(".nav_area").stop().slideToggle(300)
		$(".bak").toggleClass('act');
	})
	$(".bak").click(function(){
		$(".nav_area").stop().slideToggle(300)
		$(this).toggleClass('act');
	})


	//各館頁籤切換樣式
	$(".shelfblock nav ul li a").click(function(){
		$(this).addClass("act").parents("li").siblings().children('a').removeClass("act")
	})



	// 加入購物車
	$("#addshop").click(function(){
		$(".Success_added").addClass('act')
		setTimeout(function(){ $(".Success_added").removeClass('act') },1200);
	})

	// 選擇美廉社卡號
	$(".cardnumber ul li").click(function(){
		$(this).addClass("number_act").siblings().removeClass("number_act")
	})

	// 捲軸捲到product_specifications高度將加入購物車按鈕css改變
	$(window).scroll(function() {
		if ($(window).scrollTop() > $(".product_specifications").outerHeight(true) ){
			$(".monybotton").css('position', 'absolute')
			
		}else {
			$(".monybotton").css('position', '')
		}
	});

	// 退貨申請原因開關
	$(".returninput p").click(function(){
		$(this).parents(".returninput").siblings(".returnitem").stop(true,true).slideToggle()
	})
	$(".returnitem li").click(function(){
		$(this).parents(".returnitem").find("li").removeClass("add")
		$(this).addClass("add").parents(".returnitem").stop(true,true).slideUp()
		
		
		$(this).parents(".returnitem").siblings(".returninput").find("p").html($(this).html())

		if ($(this).html() == "其他") {
			$(this).parents(".returnitem").siblings(".returninput").find("textarea").delay(200).fadeIn()
		}else {
			$(this).parents(".returnitem").siblings(".returninput").find("textarea").css('display', 'none');
		}
	})
	$(".count button").click(function(){
		$(this).parents(".left").siblings(".right").css('display', 'block');
	})

	// 取消訂單按扭區塊
	$(".status_button .nono").click(function(){
		$(".blackblack1").css('display', 'flex')
		return false
	})
	$(".black").click(function() {
		$(".blackblack1").fadeOut()
	});
	$(".contentbox .yes button").eq(0).click(function(){
		$(".blackblack1").fadeOut()
	})
	$(".contentbox .yes button").eq(1).click(function(){
		$(".blackblack1").fadeOut()
	})

	// 退貨訂單按扭區塊
	$(".status_button .return").click(function(){
		$(".blackblack2").css('display', 'flex')
		return false
	})
	$(".black").click(function() {
		$(".blackblack2").fadeOut()
	});
	$(".blackblack2 .contentbox .yes button").eq(0).click(function(){
		$(".blackblack2").fadeOut()
	})
	$(".blackblack2 .contentbox .yes button").eq(1).click(function(){
		$(".blackblack2").fadeOut()
	})

	// 完成訂單[訂單明細開關功能]
	$(".totalist .xx").click(function(){
		$(this).toggleClass("active")
		$(this).parents(".orderlist").find('.listcont').stop(true,true).fadeToggle()
	})

	// 我的訂單箭頭開關
	$(".listitle a").click(function(){
		$(this).toggleClass('act');
		$(this).parents(".myorderlist").find('.total_list_cont').stop(true,true).fadeToggle()
		$(this).parents(".myorderlist").find('.recipient_information').stop(true,true).fadeToggle()
	})

	// 我的訂單訂單詳情開關

	$(".contbox .order_button ul li").click(function(){
		$(this).toggleClass('act')
		$(this).siblings().removeClass('act')
	})
	$(".contbox .order_button ul li").click(function(){
		var self   = $(this)
      	var	index  = self.index()
		if (index == 0) {
			// alert("要先關閉訂單進度再開訂單詳情")
			$(this).parents(".order_button").siblings(".order_progress").css('display', 'none');
			$(this).parents(".order_button").siblings(".order_details").stop(true,true).fadeToggle()
			
		}else {
			// alert("要先關閉訂單詳情再開訂單進度")
			$(this).parents(".order_button").siblings(".order_details").css('display', 'none');
			$(this).parents(".order_button").siblings(".order_progress").stop(true,true).fadeToggle()

		}
	})

	// 我的訂單單一商品退貨進度功能
	$(".returnstep").click(function(){
		$(this).toggleClass('act')
		$(this).parents(".cont").find(".status").stop(true,true).fadeToggle()
	})


	// 訂購服務條款
	$(".agreebox label a").click(function(event) {
		$(".alertbox").css('display', 'flex');
	});

	$(".closeclose").click(function(event) {
		$(".alertbox").css('display', 'none');
	});

	// 打開加入會員浮層
	$(".member_Login h1 a , .buyhelp h2 a").click(function(event) {
		$(".alertbox").css('display', 'flex');
	});



	// 會員步驟介紹下一步
	$(".step .finger a").click(NEXT)

	var N = 0 , step_li_length = $(".step ul li").length

	function NEXT(){

		if (N < step_li_length - 1) {
		    N += 1;
		    console.log(N)
		}else{
			N = 1;
			console.log(N)
		} 

		$(".step > ul").stop().animate({ left: N * 250 * -1 })

	}

	$(".step span").click(function(event) {
		$(".step > ul").stop().animate({ left: 0 * 250 * -1 })
	});


    // 查詢物流進度按扭區塊
    $(".recipient_information #Goto").click(function(even){
    	var textArea = document.createElement("textarea");
    	var waybillnumber =$(this).parents(".recipient_information").siblings(".total_list_cont").find(".waybillnumber")
        textArea.value = waybillnumber.text();
        textArea.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        document.execCommand("Copy")

        $(this).parents(".shopbox3").siblings(".alertbox").css('display', 'flex');
		return false
    })

	$(".recipient_information .closeclose").click(function(event) {
		$(".recipient_information .alertbox").css('display', 'none');
	});

	$(".recipient_information .contentbox .nono").click(function(event){
		$(".recipient_information .alertbox").css('display', 'none');
	})

	$(".recipient_information .contentbox .gogo").click(function(event){
	   
	   $(".recipient_information .alertbox").css('display', 'none');

	   var logistics = $(this).parents(".recipient_information").find(".logistics").text()

       switch (logistics) {
            case "順風速運":
                window.open('http://www.sf-express.com/tw/tc/dynamic_functions/waybill/')
                break;
            case "宅配通":
                window.open('https://www.e-can.com.tw/search_Goods.aspx')
                break;
            case "黑貓宅急便":
                window.open('https://www.t-cat.com.tw/inquire/trace.aspx')
                break;
            case "新竹物流":
                window.open('https://www.hct.com.tw/Default.aspx')
                break;
            case "嘉里大榮":
                window.open('http://www.kerrytj.com/zh/')
                break;
            case "中華郵政":
                window.open('http://postserv.post.gov.tw/pstmail/main_mail.html')
                break;
            case "便利帶":
                window.open('http://www.4128777.tw/Search.php')
                break;
            case "全速配":
                window.open('http://www.fsdex.com.tw/Default.aspx')
                break;
            case "錸乾物流":
                window.open('http://ec.qtrans.com.tw/')
                break;
            case "超峰快遞":
                window.open('http://www.express.com.tw/tools/positchecking.aspx')
                break;
            case "晉越快遞":
                window.open('http://www.byondex.com/')
                break;
            case "好運袋":
                window.open('http://www.luckyexpress.com.tw/')
                break;
            case "DHL":
                window.open('http://www.dhl.com.tw/zt/express/tracking/tracking_tools.html')
                break;
            case "UPS":
                window.open('https://www.ups.com/WebTracking/track?loc=zh_TW')
                break;
            default:
            	alert("查無此物流公司")
            	break;
        }		
	})	

    // 退貨流程按鈕切換
    $('.return_process_bt a,.buyhelp_bt a').on('click',function(){
        
        $(this).addClass('active').siblings('a').removeClass('active');

        let index_of = $(this).index();

        if (index_of === 0) {
           
           $('.area1').css('display', 'block');
           $('.area2').css('display', 'none');

        }else{

           $('.area1').css('display', 'none');
           $('.area2').css('display', 'block');

        }

    })









})