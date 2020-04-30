
hmbgrSwitch.onclick=function(s){
  
  if(typeof(s) == "") {
    return
  } else { 
    switch(s) {
  case "Hole":
    ChangeForm(holeInfo)
    break
  case "Calender":
    ChangeForm(clndrTeeTimes)
    break
  case "Temp":
    ChangeForm(tempAPI)
    break
    }
  }
}

pgNext.onclick=function(){
  ChangeForm(holeInfo)
}

