var selectedClass = 'class-selected' ;

function jumpPage(event) {
    if (event.keyCode==37 || event.keyCode=="KEY_LEFT" || event.keyCode==40 || event.keyCode=="KEY_DOWN"){
    	    checkSelected(selectedClass,-1);   
    }
    if (event.keyCode==38 || event.keyCode=="KEY_UP" || event.keyCode==39 || event.keyCode=="KEY_RIGHT" ){
    	    checkSelected(selectedClass,+1);   
    }
    
    if (event.keyCode==13 || event.keyCode=="KEY_ENTER"){
    	fun_enter();   
    	fun_enter2();   
    }
    
}  
 
var urlList = {
   	 1: 'nowdati.html',
    };
 function fun_enter(){  
 	
      var oldObject = getElementObject(selectedClass);
	 if(!oldObject){
	 	return false; 
	 }
	 var classNameList = oldObject[0].className;
	 var  _class =  classNameList.match(/\w{5}\-\d{1}\-\d{1}/);
	 if(!_class){
	 	return false;  
	 }
	 var classFiledList = parseClassName(_class[0]);
	 if(!classFiledList || !classFiledList[1]){
	 	return false; 
	 }
	 if(classFiledList[1]==1){
	 		 var url = urlList[classFiledList[1]];  
	 	 	 window.location.href = url + '?action=' + classFiledList[1];	
	 	 	 return;
	 }
	 		 
		 
	 	   
}   

document.onkeydown=jumpPage;  
 
 	 
function checkSelected(checkClassName,num){
	 var oldObject = getElementObject(checkClassName);
	 if(!oldObject){
	 	return false; 
	 }
	  
	 var classNameList = oldObject[0].className;
	 var  _class =  classNameList.match(/\w{5}\-\d{1}\-\d{1}/);
	 if(!_class){
	 	return false;  
	 }  
 
	 display(oldObject[0],'none');
	 
	 resettClass(oldObject[0],_class[0]);

	 var parseClassNameList = parseClassName(_class[0]);

	 var oldNewClass = parseClassNameList[0] + '-'+parseClassNameList[1]+'-' + (parseInt(parseClassNameList[2]) -1);
	 
	
	 display(getElementObject(oldNewClass)[0],'inline-block');
	 
	 var ll = parseInt(parseClassNameList[1]) + num;
	 ll = ll > 3 ? 1 :(ll < 1 ? 3 : ll)

	 
	var newSelectClassNone = parseClassNameList[0] + '-'+ ll + '-1';
	display(getElementObject(newSelectClassNone)[0],'none');
 
	var newSelectClass =  parseClassNameList[0] + '-'+ ll  + '-2';
	 
	var newSelectClassObj = getElementObject(newSelectClass)[0];
	display(newSelectClassObj,'inline-block');
	resettClass(newSelectClassObj,newSelectClass + ' ' + checkClassName);	
}
 
function getElementObject(ClassName){
		return document.getElementsByClassName(ClassName)
}

function display(classObject,_style){
		classObject.style.display = _style; 
}
 
function resettClass(classObject,_className){
	classObject.className = _className;
}
 
function parseClassName(_className){
	return  _className.split('-');
}


 




//弹出层逻辑yizhandaodi.html右上角
var idlList = {
   	 2:'ran-now-shophide',
   	 3:'ran-now-shophide',
    
   };
 function fun_enter2(){  
 	
      var oldObject = getElementObject(selectedClass);
	 if(!oldObject){
	 	return false;//className not exists
	 }
	 var classNameList = oldObject[0].className;
	 var  _class =  classNameList.match(/\w{5}\-\d{1}\-\d{1}/);
	 if(!_class){
	 	return false; //逻辑设计错误class不存在
	 }
	 var classFiledList = parseClassName(_class[0]);
	 if(!classFiledList || !classFiledList[1]){
	 	return false; //class格式错误
	 }
	      var ranJQnumId=classFiledList[1];
	      if(ranJQnumId==2){
	      	 $("#ran-now-shophide").show();
	      	  
	      }
	      if(ranJQnumId==3){
	      	 $("#ran-now-shophide").show();
	      	 
	      }
//	 	  display(document.getElementById(idlList[n]),'block');//调用的封装函数方法
	 	   
}   











