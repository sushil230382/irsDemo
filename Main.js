Sys.WebForms.PageRequestManager.getInstance().add_initializeRequest 
( 
    function() { 
        if (document.getElementById) { 
            var progress = document.getElementById('progress'); 
            var blur = document.getElementById('blur'); 
            blur.style.height = BrowserHeight() + "px"; 
            progress.style.top = document.documentElement.clientHeight / 3 - progress.style.height.replace('px', '') / 2 + 'px'; 
            progress.style.left = document.body.offsetWidth / 2 - progress.style.width.replace('px', '') / 2 + 'px'; 
        } 
    } 
) 
function BrowserHeight() { 
    var theHeight; 
    
    if (document.documentElement.clientHeight > document.body.clientHeight) { 
        theHeight = document.documentElement.clientHeight; 
    } 
    else { 
        theHeight = document.body.clientHeight; 
    } 
    return theHeight; 
} 

