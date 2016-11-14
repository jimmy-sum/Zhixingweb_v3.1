window.onload=function(){
	   var obtn= document.getElementById("btn");
	    //文档高度
	    var clientHeight=document.documentElement.clientHeight;
	    var time=null;
	    var isTop=true,
	        cancelScroll = false;

	    window.onscroll = function(){

	        var osTop=document.documentElement.scrollTop||document.body.scrollTop;
	        if(osTop>=clientHeight){
	            obtn.style.display='block';
	        }else{
	            obtn.style.display='none';
	        }
	        if(!isTop){
	            clearInterval(time);
	        }
	        isTop=false;
	    }

	    obtn.onclick=function(){
	        //点击事件
	        if(cancelScroll == false) {
	            time=setInterval(function(){
	                var osTop=document.documentElement.scrollTop||document.body.scrollTop;
	                var ispeed=Math.floor(-osTop/10);
	                document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
	                isTop=true;
	                if(osTop==0){
	                    clearInterval(time);
	                }
	            },30);
	        }else {
	            clearInterval(time);
	            cancelScroll = true;
	        }
	    }
	}
	 /*

	       * Open the drawer when the menu ison is clicked.
	       */
	      var menu = document.querySelector('#menu');
	      var container = document.querySelector('.container');
	          var drawer = document.querySelector('.nav');

	      var drawer1 = document.querySelector('.nav  li:nth-child(2)');
	      var drawer2= document.querySelectorAll('.nav_list li');
	      var navList = document.getElementById('nav_list');
	      var numberOfNav = navList.childNodes;
	      var subnav1 = document.querySelector('#sub-nav-1');
	      var subnav2 = document.querySelector('#sub-nav-2');
	      var subnav3 = document.querySelector('#sub-nav-3');

	      var searchBtn = document.querySelectorAll('.toggle_search_bar');
	      var toggleSearchBar =  document.querySelector('#search');
	      var searchBar = document.querySelector('.search_bar');

	       toggleSearchBar.addEventListener('click', function(e) {
	       	toggleSearchBar.classList.toggle('toggleBtn');
	       	searchBar.classList.toggle('showSearch');
	           subnav1.classList.remove('show');
	           subnav2.classList.remove('show');
	           subnav3.classList.remove('show');
	           drawer.classList.remove('open');
	        e.stopPropagation();
	      });



	      var navList = document.querySelector('.nav_list');

	      menu.addEventListener('click', function(e) {
	        drawer.classList.toggle('open');
	           subnav1.classList.remove('show');
	           subnav2.classList.remove('show');
	           subnav3.classList.remove('show');
           	toggleSearchBar.classList.remove('toggleBtn');
	       	searchBar.classList.remove('showSearch');

	        e.stopPropagation();
	      });
	    
	      navList.addEventListener('click', function(e) {
	      	  subnav1.classList.remove('show');
	      	  subnav2.classList.remove('show');
	      	  subnav3.classList.remove('show');

	      });
	      // subnav.addEventListener('click', function(e) {
	      // 	  subnav.classList.remove('show');
	      // });

	        drawer1.addEventListener('click', function(e) {
	        		 subnav2.classList.remove('show');
	         		  subnav3.classList.remove('show');
	        	var isShow = subnav1.classList.contains('show');
	        	if( isShow ){
	        		setTimeout(func,"500");
			function func()
			{
			 subnav1.classList.toggle('show');
	                	drawer.classList.remove('open');

			}
	        	}else{
	        		  subnav1.classList.toggle('show');
	        	}
	        e.stopPropagation();

	      });

	         drawer2[16].addEventListener('click', function(e) {
	         		 subnav1.classList.remove('show');
	         		  subnav2.classList.remove('show');
	        	var isShow = subnav3.classList.contains('show');
	        	if( isShow ){
	        		setTimeout(func,"500");
			function func()
			{
			 subnav3.classList.toggle('show');
	               	 drawer.classList.remove('open');

			}
	        	}else{
	        		  subnav3.classList.toggle('show');
	        	}
	        e.stopPropagation();

	      });

	         drawer2[7].addEventListener('click', function(e) {
	         		 subnav1.classList.remove('show');
	         		  subnav3.classList.remove('show');
	        	var isShow = subnav2.classList.contains('show');
	        	if( isShow ){
	        		setTimeout(func,"500");
			function func()
			{
			 subnav2.classList.toggle('show');
	                	drawer.classList.remove('open');

			}
	        	}else{
	        		  subnav2.classList.toggle('show');
	        	}
	        e.stopPropagation();

	      });

	      container.addEventListener('click', function() {
		       subnav1.classList.remove('show');
		       subnav2.classList.remove('show');
		       subnav3.classList.remove('show');
		       toggleSearchBar.classList.remove('toggleBtn');
	       	       searchBar.classList.remove('showSearch');

	      });

	      container.addEventListener('click', function() {
	                drawer.classList.remove('open');
	      });

	      // search-bar toggle