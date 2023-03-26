console.log("please pass the paramenter in function(arraySignChange)")
console.log("fist parameter passes the array and second is bool")
function arraySignChange(arr ,bool){
console.log(arr)
var sum=0;
for (var i=0;i<arr.length-1;i++){
if (bool == true){
  arr[i]= Math.abs(arr[i]);
}
var sub=arr[i]-arr[i+1];
sum=sum+sub;
console.log(arr[i],"=>",arr[i],"-",arr[i+1],"=",sub)
}
console.log("sum after substraction is = ",sum)
}