/* 
 * This script contains the interaction logic of the Task: Leseverständnis
 */

var currentTask = 1;


// to show demo start page
function goToDemo(){
    
  try
    {
        $.mobile.changePage('#leseverstaendnisDemo1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
    
}

// to switch to specific page (given as arg)
function switchToPage(pageId){
    
  try
    {
        $.mobile.changePage('#'+pageId, {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
    
}


// to switch to next task
function switchToNextTask(clickedImage){
    
    try
    {
        var clickedImageId = clickedImage.id;
        // highlight selected image
            $("#" + clickedImageId).attr('class', 'selectedImage');
        // number of next task
       currentTask++;
       // build task name
       var taskName = "task"+currentTask+"Word";
       
       // switch to end page if last task is completed
       if (currentTask > 37)
       {
           setTimeout(function () {
                                                               
       $.mobile.changePage('#endPage', {transition: "flip"});
                                  }, 200);
                                  
                                  return;
       }
        // switch to next task
       setTimeout(function () {
                                                               
       $.mobile.changePage('#'+taskName, {transition: "flip"});
                                  }, 200);
       
       
    }
    
    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


