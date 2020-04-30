//I need three items under the dropdown menu (Hole 1, Hole 2, Hole 3) to relay information from a table in ormond's server.
//after the Hole is picked from the dropdown the user needs to hit submit and there needs to be either a message box or label that
//shows the correct information from the hole that was picked. 
//https://ormond.creighton.edu/ 

var query = ""
var req = ""
var results = ""
var holes = ""

drpdownhole.onclick=function(s){
   query = "SELECT * FROM holes"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lmj61738&pass=Apple310#&database=lmj61738&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        //console.log(results)
    }
    
if (typeof(s) == "object") {
    return
  } else {
    drpdownhole.value = s
    NSB.MsgBox(`${s}. The club to use is ${results[0][4]} and the par is ${results[0][3]} and the yardage is ${results[0][2]}.`)
  }
}

//click submit button first for data to arrive in log
btnSubmit.onclick=function(){
  query = "SELECT * FROM holes"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lmj61738&pass=Apple310#&database=lmj61738&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        //console.log(results)
    
    let resultLength = results.length;
      for(let i = 0 ; i < resultLength; i++) {    
      let val = results[i];
      }
    }
    if (results.length == 0)
        NSB.MsgBox("")
}


btnBackToTemp.onclick=function(){
  ChangeForm(homePage)
}

btnToCalender.onclick=function(){
  ChangeForm(clndrTeeTimes)
}
