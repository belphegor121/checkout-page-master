const $total = document.getElementById('total');
const $amountBackbag = document.querySelector('.amount-backbag');
const $removeBackbag = document.querySelector('.remove-backbag');
const $addBackbag = document.querySelector('.add-backbag');
const $priceBackbag = document.querySelector('.price-backbag')
const $priceBeforeBackbag = document.querySelector('.price-before-backbag')
let priceBackbag = 54.99;
let priceBeforeBackbag = 94.99;
let amountBackbag = 1;

const $amountShoes = document.querySelector('.amount-shoes');
const $removeShoes = document.querySelector('.remove-shoes');
const $addShoes = document.querySelector('.add-shoes');
const $priceShoes = document.querySelector('.price-shoes');
const $priceBeforeShoes = document.querySelector('.price-before-shoes');
let priceShoes = 74.99;
let priceBeforeShoes = 124.99;
let amountShoes = 1;


const removeAdd = () => {
    $removeBackbag.addEventListener('click',  e => {
        if(amountBackbag > 1){  
            amountBackbag--;
            let priceBefore = priceBeforeBackbag * amountBackbag;
        
            $amountBackbag.textContent = amountBackbag;
            $priceBackbag.textContent = '$' + priceBackbag * amountBackbag;
            $priceBeforeBackbag.textContent = '$' + priceBefore.toFixed(2);
            total()
        }
    }) 

    $addBackbag.addEventListener('click', e => {
        amountBackbag++;
        let priceBefore = priceBeforeBackbag * amountBackbag;

        $amountBackbag.textContent = amountBackbag;
        $priceBackbag.textContent = '$' + priceBackbag * amountBackbag;
        $priceBeforeBackbag.textContent = '$' + priceBefore.toFixed(2);
        total()
    })

    $removeShoes.addEventListener('click', e => {
        if(amountShoes > 1){
            amountShoes--;
            let priceBefore = priceBeforeShoes * amountShoes;
            let priceNow = priceShoes * amountShoes;

            $amountShoes.textContent = amountShoes;
            $priceShoes.textContent = '$' + priceNow.toFixed(2);
            $priceBeforeShoes.textContent = '$' + priceBefore.toFixed(2)
            total()
        }
    })

    $addShoes.addEventListener('click', e => {
        amountShoes++;
        let priceBefore = priceBeforeShoes * amountShoes;
        let priceNow = priceShoes * amountShoes;

        $amountShoes.textContent = amountShoes;
        $priceShoes.textContent = '$' + priceNow.toFixed(2);
        $priceBeforeShoes.textContent = '$' + priceBefore.toFixed(2);
        total()
    })

}

const total = () => {
    let num = parseFloat($priceBackbag.textContent.slice(1))
    let num2 = parseFloat($priceShoes.textContent.slice(1))
    
    $total.textContent = '$' + (num + num2).toFixed(2);
}

removeAdd()

document.addEventListener('change', e => {
})