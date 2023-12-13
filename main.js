var na=prompt("Enter the word");
document.write(`given word = ${na}<br>`)
// var position=parseInt(prompt("Enter the position"))
var a=0;
var b=(na.length-1)
var arr1=[]
var arr2=[]
var arr3=[]
var arr4=[]

// document.write(`given pposition = ${position} <br>`)
for (let i=0;i<na.length;i++){
   if(na.length>=1){
        if(a===i){
            arr1.push(na[i])
      
        }
        else if(b===i){
            arr2.push(na[i])
        }
        else{
            arr3.push(na[i])
        }
   }
}
var ans =arr4.concat(arr2,arr3,arr1)
// document.write(arr4)
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(ans);
document.write("Answer for change first and last position of the string = ")
for(let i=0;i<ans.length;i++){
    document.write(ans[i])
}
