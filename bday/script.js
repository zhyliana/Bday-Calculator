function myFunction() { 
  var today = new Date(),
      one_day=1000*60*60*24,
      one_year=one_day*365,
      bday=new Date(today.getFullYear(), 1, 4),
      nextbday=new Date(today.getFullYear()+1, bday.getMonth(), bday.getDate()),
      footnote,
      IsIt;
  
  if ((today.getMonth()& today.getDate())== (bday.getMonth()& bday.getDate())) 
     {IsIt="Yes!"; footnote= "Party on.";}
  else if (Math.ceil((bday-today)/one_day>0))
           {IsIt= "Not Yet!"; footnote= Math.ceil((bday-today)/one_day)+" days until your birthday!";}
        else { IsIt= "Not Yet!"; footnote= Math.ceil((nextbday-today)/one_day)+" days until your birthday!";             
  document.getElementById("footnote").innerHTML = footnote;
  document.getElementById("answer").innerHTML = IsIt;}
var button = document.getElementById('button');
    button.addEventListener('click', myFunction);