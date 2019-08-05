obj={
    x:"hello"
}
y=Object.assign({},obj);
y.x="deep"

objCopy=Object.assign({},obj);
console.log(y);
