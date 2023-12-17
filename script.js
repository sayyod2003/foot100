const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 400,
        amount: 0,
        get totalPrice() {
            return this.price * this.amount
        },
        get totalKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 500,
        amount: 0,
        get totalPrice() {
            return this.price * this.amount
        },
        get totalKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 900,
        amount: 0,
        get totalPrice() {
            return this.price * this.amount
        },
        get totalKcall() {
            return this.kcall * this.amount
        }
    },
}

const btns = document.querySelectorAll('.main__product-btn'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out'),
    receiptWindowBtn = document.querySelector('.receipt__window-btn');

btns.forEach((el) => {
    el.addEventListener('click', function () {
        plusOrMinus(this)
    })
})

function plusOrMinus(btn) {
    const parent = btn.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num')
    price = parent.querySelector('.main__product-price span')
    kcall = parent.querySelector('.main__product-kcall span')
    elementData = btn.getAttribute('data-symbol');
    if (elementData == '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    } else if (elementData == '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].totalPrice
    kcall.innerHTML = products[parentId].totalKcall
}
let arrayProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0

addCart.addEventListener('click', function () {
    arrayProduct = []
    for (const key in products) {
        if (products[key].amount > 0) {
            arrayProduct.push(products[key])
        }
    }
    arrayProduct.forEach(el => {
        totalName += `\n${el.name} - ${el.amount}\n`
        totalPrice += el.totalPrice
        totalKcall += el.totalKcall
    })
    receiptWindowOut.innerHTML = `Sizni buyurtmangiz: ${totalName}\nUmumiy kaloriya:${totalKcall}\nUmumiy summa: ${totalPrice}`
    setTimeout(() => {
        receipt.style.display = 'flex'
    }, 10)
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '15%'
    }, 15)
})
receiptWindowBtn.addEventListener('click', function () {
    location.reload()
})

class HUMAN {
    constructor(obj) {
        this.name = obj.ism
        this.age = obj.yosh
        
    }
}

const human = new HUMAN({
    ism: 'Sanjar',
    yosh: 28
})
class MAN extends HUMAN {
    constructor(obj) {
        super(obj)
        this.gendor = 'M'
    }
}
const man = new MAN({
    ism: 'Sayyod',
    yosh: 20
})
console.log(man);
console.log(human);
class WOMAN extends HUMAN {
    constructor(obj) {
        super(obj)
        this.gendor = 'F'
        this.discount = '15 %'
    }
}
const woman = new WOMAN({
    ism: 'Aziza',
    yosh: 19
})
console.log(woman);