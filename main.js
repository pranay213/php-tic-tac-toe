$(document).ready(function()
{
    var a;
    $('.col-4').on('click',function()
    { if($(this).html()=="")
    {
        if(a=='X')
        {
            a='O';

        }
        else{
            a='X';
        }
        $(this).css({"background-color":"red"});
      
        $(this).html(a);
        
    }
    
        logic();})
    function logic()
    {
        var one=$('.1').html();
        var two=$('.2').html();
        var three=$('.3').html();
        var four=$('.4').html();
        var five=$('.5').html();
        var six=$('.6').html();
        var seven=$('.7').html();
        var eight=$('.8').html();
        var nine=$('.9').html();
        if(one=='X' &&two=='X' &&three=='X')
        {
            alert( `X is winner`);
            location.reload();
            
        }
        else if(one=='O' &&two=='O' &&three=='O')
        {
            alert( `O is winner`);
            location.reload();
        }
        else if(four=='X' &&five=='X' &&six=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        else if(four=='O' &&five=='O' &&six=='O')
        {
            alert( `O is winner`);
            location.reload();
        }

        else if(seven=='X' &&eight=='X' &&nine=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        else if(seven=='O' &&eight=='O' &&nine=='O')
        {
            alert( `O is winner`);
            location.reload();
        }
        else if(one=='X' &&five=='X' &&nine=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        else if(one=='O' &&five=='O' &&nine=='O')
        {
            alert( `O is winner`);
            location.reload();
        }
        else if(one=='X' &&four=='X' &&seven=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        
        else if(one=='O' &&four=='O' &&seven=='O')
        {
            alert( `O is winner`);
            location.reload();
        }
        else if(two=='X' &&five=='X' &&eight=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        else if(two=='O' &&five=='O' &&eight=='O')
        {
            alert( `O is winner`);
            location.reload();
        }
        else if(three=='X' &&six=='X' &&nine=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        else if(three=='O' &&six=='O' &&nine=='O')
        {
            alert( `O is winner`);
            location.reload();
        }
        else if(three=='X' &&five=='X' &&seven=='X')
        {
            alert( `X is winner`);
            location.reload();
        }
        else if(three=='O' &&five=='O' &&seven=='O')
        {
            alert( `O is winner`);
            location.reload();
        }

    }
})