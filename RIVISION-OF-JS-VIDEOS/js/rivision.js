// var a = 1
// a = 11
// var a = 111
// document.write(a)

// let a = 1
// a = 11
// // let a = 111
// console.log(a)

// const a =[1]
// // a = 11
// a[0]
// // const a = 1
// console.log(a)


// var a = 100

// if(a >= 99 && a <=111 ){
//     document.write("true")
// }else{
//     document.write("false")
// }
// this can show you when all two statement is write

// var a = 100

// if(a >= 111 || a <= 111 ){
//     document.write("true")
// }else{
//     document.write("false")
// }
// this can show when one of them is true


// var a = 100

// if(!a >= 99){
//     document.write("true")
// }else{
//     document.write("false")
// } 
// this will always show you opposit of them (true -> false) (false -> true);


// var a = 100
// var b;
// b = (a == 100)? "true" : "false";
// document.write(b)

var a = ['Danish','fayyaz','salim','raju']
a.forEach(function(value , index){
    document.write("( "+ value + " : " + index + " )" + "<br>")
})