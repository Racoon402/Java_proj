function greet(params) {
    console.log('안녕 내 이름은', params, '야');
    return params
}

function meetAt(param1,param2,param3) {
    if(param1&&param2&&param3){
        console.log(`${param1}/${param2}/${param3}`)
    }
    else if(param1&&param2){
        console.log(`${param1}년 ${param2}월`)

    }
    else if(param1){
        console.log(`${param1}년`);
    }
    
}

function findSmallestElement(arr) {
    let temp = Infinity;
    for(let i of arr){
        if(temp>i){
            temp = i
        }
    }
    return temp
}

function my(amount) {
    let answer=0;
    if(Math.floor(amount / 50000)>=1){
        answer += Math.floor(amount / 50000);
        amount -= Math.floor(amount / 50000) * 50000;
    }
    if(Math.floor(amount / 10000)>=1){
        answer += Math.floor(amount / 10000);
        amount -= Math.floor(amount / 10000) * 10000;
    }
    if(Math.floor(amount / 5000)>=1){
        answer += Math.floor(amount / 5000);
        amount -= Math.floor(amount / 5000) * 5000;
    }
    if(Math.floor(amount / 1000)>=1){
        answer += Math.floor(amount / 1000);
        amount -= Math.floor(amount / 1000) * 1000;
    }
    if(Math.floor(amount / 500)>=1){
        answer += Math.floor(amount / 500);
        amount -= Math.floor(amount / 500) * 500;
    }
    if(Math.floor(amount / 100)>=1){
        answer += Math.floor(amount / 100);
        amount -= Math.floor(amount / 100) * 100;
    }

    return answer
}

console.log(my(12300))