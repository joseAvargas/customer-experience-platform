$(document).on("click",".dialog",function(e){
      $.dialog({
          title: 'Text content!',
          content: '<img src="images/map.png" />',
      });
      e.preventDefault();
});
