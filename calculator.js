var v=document.getElementById("val");
v.value=0;

v.addEventListener("click",()=>{
  if(v.value==0)
     v.value="";
});
 v.addEventListener("change",()=>{
    var a=document.getElementById("val"); 
    try{
    var result=eval(a.value)
    a.value=result;
    }
    catch(e){
     alert("enter valid expression")
    }  
});
var btn=document.getElementsByClassName("btn_a");
var f=0;
for(let i =0;i<btn.length;i++){
  btn[i].addEventListener("click",()=>{
       var val=document.getElementsByClassName("btn_a")[i];
       var r=val.innerHTML;
       if(f===0){
          v.value="";     //to change the initial value 0 to empty
          f=1; 
      }
       if(r==="AC" || r==="q"){
           v.value="";
       }
      else if(r==="=" && r!==""){
          try{
              var result=eval(v.value)
              
              v.value=result;
            }
            catch(e){
                console.log(e)
                 alert("enter valid expression")
            }
        //   v.value=eval(v.value)
       }
       else if(r=="&lt;="){
        v.value=v.value.substring(0,(v.value).length-1)
       }
       else if(r=="X"){
        v.value+="*"
       }
       else
        v.value+=r;
  })
}