class Phone {

    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }

    call() {
        console.log('我可以打电话')
    }

}

class SmartPhone extends Phone {

    constructor(brand, price, color, size) {
        super(brand, price);
        this.color = color
        this.size = size
    }

    /*call() {
        console.log('我可以视频通话')
    }*/

    photo() {
        console.log('我可以拍照')
    }

    playGame() {
        console.log('我可以玩游戏')
    }

}

const xiaomi = new SmartPhone('小米', 799, '黑色', '4.7inch')

console.log(xiaomi)

xiaomi.call()
xiaomi.photo()
xiaomi.playGame()