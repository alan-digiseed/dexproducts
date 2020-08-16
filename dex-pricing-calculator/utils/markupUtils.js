export const combineDecorationsArrays = (currentDecorationServices, userDecorations) => {
    var newArray = [];
    for(var i = 0, l = currentDecorationServices.length, m = userDecorations.length; i < l; i++) {
      for(var j = 0; j < m; j++) {
        if (currentDecorationServices[i].service === userDecorations[j].service) {
            newArray.push( {...currentDecorationServices[i], ...userDecorations[j] });          
        }
      }
    }
  
    return newArray;
  };
  
