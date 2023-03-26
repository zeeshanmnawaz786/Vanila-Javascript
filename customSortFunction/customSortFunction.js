//Create a custom sort function

function swap(arr ,bool){
    console.log(arr)
    if (bool == true){
        for (i=0; i<=arr.length; i++){
            for (j=0; j<arr.length;j++){
                if(arr[j]>arr[j+1]){
                    var x=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=x;}
                }
            }
    }
    console.log(arr)
}