
//4. 드랍다운 리스트에서 아이템 선택시 아이템 바뀜
//5. 금액을 입력하면 환전이 된다.
//6. 드랍다운 리스트에서 아이템을 선택하면 그 단위 기준으로 바뀜
//7. 숫자를 한국어로 읽는법
//8. 반대로 밑 박스에서 적용 가능

let currencyRatio = {
    USD: {
        KRW: 1293.29,
        USD: 1,
        JPY: 140.76,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00077,
        JPY: 0.11,
        unit: "원"
    },
    JPY: {
        KRW: 9.19,
        USD: 0.0071,
        JPY: 1,
        unit: "엔"
    }
};
let fromCurrency = 'USD'
let toCurrency = 'USD'


document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function(){
        document.getElementById("from-butten").textContent = this.textContent
        document.getElementById("from-text").textContent = currencyRatio[this.textContent].unit;
        fromCurrency = this.textContent;
        
        convert();
    }));

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function(){
        document.getElementById("to-butten").textContent = this.textContent
        document.getElementById("to-text").textContent = currencyRatio[this.textContent].unit;
        toCurrency = this.textContent;
        convert();
    }));

function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    document.getElementById("to-input").value = convertedAmount;
}

function reverseConvert(){
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];

    document.getElementById("from-input").value = convertedAmount;
}