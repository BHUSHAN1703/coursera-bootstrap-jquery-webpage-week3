$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 1000 });
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
    });

    $(document).ready(function(){
        $("#myBtn").click(function(){
            $("#myModal").modal();
        });
    });
    
    $(document).ready(function(){
        $("#myBtnlg").click(function(){
            $("#loginModal").modal();
        });
    });

    $(document).ready(function(){
        $('body').on('click', '#btn-color-targets > .btn', function(){
            var color = $(this).data('target-color');
            $('#modalColor').attr('data-modal-color', color);
        });
    }); 


