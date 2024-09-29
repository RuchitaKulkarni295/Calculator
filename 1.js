const box=document.getElementById("box");

        function myfunc(input){
            box.value+= input;
        }
        function clearDisplay(){
            box.value= "";
        }
        function crossDisplay(){
            // box.value-="";
                   box.value = box.value.slice(0, -1);
        }
        function cal(){
            try{
            box.value=eval(box.value);
            }
            catch(error){
                box.value="Error";
            }
        }