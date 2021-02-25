var x=[10,40,30,20,40,10]
var y=[]
x=x.sort();
console.log(x);

for(var num=0;num<x.length;num++){
    if(x[num-1]!==x[num]){
        y.push(x[num])
    }
}
console.log(y);