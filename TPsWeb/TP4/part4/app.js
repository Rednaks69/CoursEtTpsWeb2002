window.onscroll= function() {scrollFunc()};


function scrollFunc(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop> 80 ) {
        document.getElementById("navbar").style.padding ="30px 10px"
        document.getElementById("logo").style.fontSize ="20px"
    }else{
           document.getElementById("navbar").style.padding ="80px 10px"
        document.getElementById("logo").style.fontSize ="35px"
    }
}