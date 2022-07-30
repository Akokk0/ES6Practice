function Phone(brand, price) {

    this.brand = brand
    this.price = price

}

Phone.prototype.call = function () {

    console.log('我可以打电话')

}

function SmartPhone(brand, price, color, size) {

    Phone.call(this, brand, price)
    this.color = color
    this.size = size

}

//继承
SmartPhone.prototype = new Phone
SmartPhone.prototype.constructor = SmartPhone

SmartPhone.prototype.call = function () {

    console.log('我可以视频通话')

}

SmartPhone.prototype.photo = function () {

    console.log('我可以拍照')

}

SmartPhone.prototype.playGame = function () {

    console.log('我可以玩游戏')

}

const chuizi = new SmartPhone('锤子', '1999', '粉色', '5.5inch')

chuizi.call()
chuizi.photo()
chuizi.playGame()

console.log(chuizi)