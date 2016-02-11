 var progressbar = new Ractive({
      el: '#progressBarContainer',
      template: "#ractiveprogressBar",
      data: {
        selectedBar: 'firstProgressBarInitialWidth',
        firstProgressBarInitialWidth: '25',
        secondProgressBarInitialWidth: '50',
        thirdProgressBarInitialWidth: '75',
        firstProgressBarFinalWidth: '25',
        secondProgressBarFinalWidth: '50',
        thirdProgressBarFinalWidth: '75'
      }
    });
	/* Function handles the logic to identify calculated width based on the selected value.  */
    progressbar.on('progress', function(e, changedWidth) {
      var finalWidth;
      /* Identify the initial width from the selected bar */
      var initialWidth = progressbar.get('selectedBar');
      if (initialWidth == "firstProgressBarInitialWidth") {
        finalWidth = "firstProgressBarFinalWidth";
      } else if (initialWidth == "secondProgressBarInitialWidth") {
        finalWidth = "secondProgressBarFinalWidth";
      } else if (initialWidth == "thirdProgressBarInitialWidth") {
        finalWidth = "thirdProgressBarFinalWidth";
      }
      //Sets the final width and initial width on Ractive object
      progressbar.set(finalWidth, progressbar.get(initialWidth));
      if ((progressbar.get(initialWidth) - changedWidth) < 0)
    	  /* If the calculated change of width is less than zero, then directly 
    	  set the Ractive object with initial and final values */
        progressbar.set(initialWidth, progressbar.get(finalWidth));
      else
    	  /* If the calculated width is greater than zero, set the final width as 
    	  the difference between initial and chnaged width */
        progressbar.set(initialWidth, progressbar.get(initialWidth) - changedWidth);
    });