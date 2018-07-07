function LoadJson(file,callback) {
 var a=new XMLHttpRequest();
 a.overrideMimeType("application/json");
 a.open("GET",file,true);
 a.onreadystatechange=function(){
   if (a.readyState===4 && a.status=="200") {
     callback(a.responseText);
    }
 }
 a.send(null);
}
LoadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
careerObject(data.basics);
education(data.educationalQualifications);
technicalskills(data.Tech);
achiv(data.Achive);
});
var right=document.getElementById('right');
//career :
function careerObject(career) {
var careerObj=document.createElement("h4");
careerObj.textContent="Career Object:";
right.appendChild(careerObj);
var hr=document.createElement("HR");
right.appendChild(hr);
var para=document.createElement("p");
para.textContent=career.content;
right.appendChild(para);
}
//Education Qualifications:
function education(edu) {
var Educational=document.createElement("h4");
Educational.textContent="Educational Qualifications :";
Educational.appendChild(document.createElement("hr"));
right.appendChild(Educational);
var para1=document.createElement("p");
var li="";
for (i in edu){
li+="<strong>"+edu[i].name+"</strong>"+ edu[i].inst + edu[i].per+"<br>";
}
para1.innerHTML=li;
right.appendChild(para1);
}
//Technical Qualifications:
function technicalskills(tec){
  var technical=document.createElement("h4");
  technical.textContent="Technical Qualifications :";
  technical.appendChild(document.createElement("hr"));
  right.appendChild(technical);
   var para2=document.createElement("p");
  var l2="";
  for(j in tec){
    l2+="<strong>"+tec[j].name+"</strong>"+ tec[j].value+ "<br>";
  }
  para2.innerHTML=l2;
  right.appendChild(para2);

}
//Achivements:
function achiv(ach) {
  var abc=document.createElement("h4");
  abc.textContent="Achivements :";
  abc.appendChild(document.createElement("hr"));
right.appendChild(abc);
var para3=document.createElement("p");
para3.textContent=ach.details;
right.appendChild(para3);
}
