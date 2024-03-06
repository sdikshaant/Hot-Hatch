
 $(document).ready(()=>{
function animateImages() {
        $("#imgs").animate({
            width: "800px"
        });
        $("h1").animate({
            bottom: "5px"
        });
        $("#pars").animate({
            bottom:"-500vh"
        })


        $("#image1").animate({
            width: "800px"
        });
        $("h1").animate({
            bottom: "30px"
        });
        $("#par1").animate({
            bottom:"0px"
        })


        setTimeout(() => {
            $("#par1").animate({
                bottom:"-500vh"
            })
            $("#image1").css("opacity", "0%");
            $("#image2").animate({
                width: "800px",
                 });
            setTimeout(()=>{ $("h1").animate({
                bottom: "105px"
                });
            },500)
            setTimeout(()=>{
                $("#par2").animate({
                    bottom:"0px"
                })
            },100)
        }, 3000);


        setTimeout(() => {
            $("#par2").animate({
                bottom:"-500vh"
            })
            $("#image2").css("opacity", "0%");
            $("#image3").animate({
                width: "800px",
            });
            setTimeout(()=>{
                $("h1").animate({
                    bottom: "180px"
                });
            },700)

            setTimeout(()=>{
                $("#par3").animate({
                    bottom:"0px"
                })
            },100)
            
        }, 6000);
       
    }
  
    animateImages();

    
    setInterval(() => {
        
        $("#image1, #image2, #image3").css({
            "width": "",
            "opacity": "100%",
            "left": "initial", 
            "top": "initial", 
        });
        
        $("#par1, #par2, #par3").css({
            "bottom": "-500vh",
        });
        
        
        animateImages();
    }, 9000); 
})
