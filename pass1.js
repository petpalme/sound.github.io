// checkcred must be needed. Only code that would work for me here
function velma()
 {
     // varible for the first name
  var first = document.getElementById("first").value;
  // varible for the last name
  var last = document.getElementById("last").value;
  // the ID for the badge number. very important
  var badgenumber = document.getElementById("badge").value;
  // adds the first name and last name lines together for charater count. Too few, it won't work, too many it will ot work.
  var pass = first + " " + last;
  if (pass.length >20 || pass.length <9) 
   {
        document.getElementById("loginStatus").innerHTML = "Name is incorrect";
   } 
  else if (badgenumber > 999 || badgenumber < 100) 
  {
      document.getElementById("loginStatus").innerHTML = "Badge number incorrect";
  }
  else {
      alert("Access Granted, Welcome " + pass + "!");
      // I changed the html file name to pint because I thought I thought it was causing a conflict with other files of same name.
      location.replace("sound.html");
       }
    }
 