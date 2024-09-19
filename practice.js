// function greet(params) {
//     console.log('안녕 내 이름은', params, '야');
//     return params
// }

// function meetAt(param1,param2,param3) {
//     if(param1&&param2&&param3){
//         console.log(`${param1}/${param2}/${param3}`)
//     }
//     else if(param1&&param2){
//         console.log(`${param1}년 ${param2}월`)

//     }
//     else if(param1){
//         console.log(`${param1}년`);
//     }
    
// }

// function findSmallestElement(arr) {
//     let temp = Infinity;
//     for(let i of arr){
//         if(temp>i){
//             temp = i
//         }
//     }
//     return temp
// }

// function my(amount) {
//     let answer=0;
//     if(Math.floor(amount / 50000)>=1){
//         answer += Math.floor(amount / 50000);
//         amount -= Math.floor(amount / 50000) * 50000;
//     }
//     if(Math.floor(amount / 10000)>=1){
//         answer += Math.floor(amount / 10000);
//         amount -= Math.floor(amount / 10000) * 10000;
//     }
//     if(Math.floor(amount / 5000)>=1){
//         answer += Math.floor(amount / 5000);
//         amount -= Math.floor(amount / 5000) * 5000;
//     }
//     if(Math.floor(amount / 1000)>=1){
//         answer += Math.floor(amount / 1000);
//         amount -= Math.floor(amount / 1000) * 1000;
//     }
//     if(Math.floor(amount / 500)>=1){
//         answer += Math.floor(amount / 500);
//         amount -= Math.floor(amount / 500) * 500;
//     }
//     if(Math.floor(amount / 100)>=1){
//         answer += Math.floor(amount / 100);
//         amount -= Math.floor(amount / 100) * 100;
//     }

//     return answer
// }

// console.log(my(12300))




// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"

// let store = {name, fruits, address}

// console.log(store)

// let ment = `제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address} 에 있습니다`
// console.log(ment)

// function calculate(obj){    // 함수 안을 바꾸시오
//     let {a,b,c} = obj
//     return a+b+c
// }

// console.log(calculate({a:1,b:2,c:3}))

// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// function findStore(obj){
//     let {name, address:{city}} = obj
//     return name==="noona store" && city === "Seoul"
// }
// console.log(findStore({name,fruits,address}))

// function getNumber(){
//     let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
//     let [first, ,third,forth] = array
//     return {first,third,forth}
// }
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }


// function getCalendar(first, ...rest) {
//     return (
//       first === "January" &&
//       rest[0] === "Febuary" &&
//       rest[1] === "March" &&
//       rest[2] === undefined
//     );
//   }
//   console.log(getCalendar("January","Febuary","March")); // 여기를 바꾸시오
  
// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
//     return Math.min(...a,...b) // 여기를 바꾸시오
// }
// console.log(getMinimum())


// function sumNumber() {
//     // 여기서부터 바꾸시오
//     const sum = (a, b) = a + b;
//     return sum(40, 10);
//   }

// function sumNumber() {
//     //여기를 바꾸시오
//     let addNumber = (a) => (b) => (c) => a + b + c;
//     return addNumber(1)(2)(3);
        
// }
// console.log(sumNumber());

let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];


let data = names.find((item) => {
    let split = item.split(' ')
    return split.length >= 3
})
console.log("🚀 ~ data ~ data:", data)

