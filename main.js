/*
Реализовать зоопарк
У каждого животного есть своя кличка, cвоя клетка, свой возраст
В зоопарке могут быть птицы, волки, медведи, дельфины
У птиц так же есть скорость полета и дальность зрения
у волков есть статус вожак стаи или нет у волков есть надресирован он или нет
у медведей есть старана обитания и статус в спячке он или нет
у дельфинов скорость плавания и дальность слуха
Максимально может быть 5 клеток

реализовать меню
1 - добавить животное
//
> Вид
> Имя
> Возраст
> Способность
2 - удалить животное
> Вид
> Имя
3 - посмотреть всех животных по определенному типу
> Вид
4 - посмотреть вообще всех животных
5 - показать 3 самых старых животных в зоопарке

6 - показать сколько клеток еще свободно
7 - показать информацию об конкретном животном по имени
> Имя
>> Медведь Сергей Место обитания  Сейчас находится в спячке
8 - выйти

ООП + Инкапсуляция Наследование и Полиморфизм
*/
/*
Object.prototype.chekNum = function(){
    return isNaN(Number(this))
}

function checkFieldAndAbility(name, age, kind){
    if(name == '' || age == '' || age.chekNum() == true || kind == ''|| kind.length != 1 || kind > 4 || kind < 1 || kind.chekNum() == true) return false
    if(kind == 1){  //птица
        let ability1 = +prompt('Введите максимальную скорость полета км/ч')
        let ability2 = +prompt('Введите дальность зрения в m')

        if(ability1 == '' || ability2 == '' || ability1.chekNum() == true || ability2.chekNum() == true) return false

        return `максимальная скорость полета достигает ${ability1} км ч, а дальность зрения достигает ${ability2} метров`
    }
    else if(kind == 2){  //Волк
        let ability1 = +prompt('Статус:\n 1 - Вожак\n 1 - Не вожак')
        let ability2 = +prompt(' 1 - Надресирован\n 2 - Не надресирован')

        if(ability1 == 1) ability1 = `вожак`
        else if(ability1 == 2) ability1 = `не вожак`
        else return false

        if(ability2 == 1) ability2 = `дресирован`
        else if(ability2 == 2) ability2 = `не дресирован`
        else return false

        return `этот волк ${ability1}, и он ${ability2}`

        
    }
    else if(kind == 3){  //Медведь
        let ability1 = prompt('Обитает в:')
        let ability2 = +prompt('Статус": \n 1 - В спячке \n 2 - Не в спячке')

        if(ability1 == '') return false

        if(ability2 == 1) ability1 = `в спячке`
        else if(ability2 == 2) ability2 = `в спячке`
        else return false
        return `этот вид медведей обитает в ${ability1} сейчас медведь ${ability2}`
    }
    else if(kind == 4){  //Дельфин
        let ability1 = +prompt('Введите скорость плавания')
        let ability2 = +prompt('Введите дальность слуха')
        
        if(ability1 == '' || ability2 == '' || ability1.chekNum() == true || ability2.chekNum() == true) return false

        return `максимальная скорость ${ability1}, а услышать своих сверстников он может на расстоянии ${ability2} метров`
    }
    else return false

}

function Zoopark(){
    this.__case = []
    this.getLengthCase = function(){
        return this.__case.length
    }
    this.setAddAnimal = function(animal){
        if(this.__case.length <= 4){
            this.__case.push(animal)
        }
    }
    this.setRemoveAnimal = function(name, kind){
        if(name == '' || kind == '') return false
        let chek = false
        this.__case.forEach((sortAnimal, idx)=>{
            if(sortAnimal.getName() == name && sortAnimal.getKind() == kind){
                this.__case.splice(idx, 1)
                chek = true
            }
        })
        return chek
    }
    this.getTitle = function(kind){
        if(kind == 1) return `птица`
        else if(kind == 2) return `волк`
        else if(kind == 3) return `медведь`
        else if(kind == 4) return `дельфин`
    }
    this.getShowSpecialKind = function(kind){
        let title = this.getTitle(kind)
        let result = `${title}\n`
        let chek = false
        this.__case.forEach(sortKind=>{
            if(sortKind.getKind() == kind){
                result += `${sortKind.getName()} - возраст: ${sortKind.getAge()}\n`
                chek = true
            }
        })
        if(chek == false) return `Не найдено`
        return result
    }
    this.getShowAllAnimal = function(){
        this.__case.forEach(showAnimal=>{
            console.log(`Вид - ${this.getTitle(showAnimal.getKind())}. Имя ${showAnimal.getName()} возраст ${showAnimal.getAge()} ${showAnimal.getAbility()}`)
        })
    }
    this.getThreeOldAnimals = function(){
        this.__case.sort((age1, age2)=>age2.getAge() - age1.getAge())
        console.log(`${this.getTitle(this.__case[0].getKind())} - ${this.__case[0].getName()} ${this.__case[0].getAge()}`)
        console.log(`${this.getTitle(this.__case[1].getKind())} - ${this.__case[1].getName()} ${this.__case[1].getAge()}`)
        console.log(`${this.getTitle(this.__case[2].getKind())} - ${this.__case[2].getName()} ${this.__case[2].getAge()}`)
    }
    this.getInfoAnimal = function(name){
        searchAnimal = this.__case.find(sortAnimal => sortAnimal.getName() == name)
            console.log(`${searchAnimal.getName()} ${this.getTitle(searchAnimal.getKind())} возраст ${searchAnimal.getAge()}, ${searchAnimal.getAbility()}`)
    }
}

function Animal(name, age, kind, ability, zoopark){
    this.__kind = kind
    this.__name = name
    this.__age = age
    Ability.call(ability)
    this.__ability = ability
    this.getName = function(){return this.__name}
    this.getKind = function(){return this.__kind}
    this.getAge = function(){return this.__age}
    this.getAbility = function(){return this.__ability}
    zoopark.setAddAnimal(this)
}
// Наследование
function Ability(ability){
    this.__ability = ability
}

let zoopark = new Zoopark()

//test
let swist = new Animal('Bird1', 8, 1, `максимальная скорость полета достигает  40  км ч, а дальность зрения достигает 1000 метров`, zoopark)
let shebet = new Animal('Bird2', 6, 1, `максимальная скорость полета достигает  40  км ч, а дальность зрения достигает 1000 метров`, zoopark)
let misha = new Animal('Миша', 3, 3, `этот вид медведей обитает в Финляндии сейчас медведь не в спячке`, zoopark)

let menu

do{
    menu = +prompt('Зоопарк\n 1 - добавить животное\n 2 - удалить животное\n 3 - посмотреть всех животных по определенному типу\n 4 - посмотреть вообще всех животных\n 5 - показать 3 самых старых животных в зоопарке\n 6 - показать сколько клеток еще свободно\n 7 - показать информацию об конкретном животном по имени\n 8 - выйти\n')
    switch(menu){
        case 1:{    //add Animal
            if(zoopark.getLengthCase() >= 5) break
            let name = prompt('Кличка')
            let age = +prompt('Возраст')
            let kind = prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 4 - Дельфин')
            let ability = checkFieldAndAbility(name, age, kind)
            if(ability == false){
                console.log('Ошибка ability')
                break
            }
            const newAnimal = new Animal(name, age, kind, ability, zoopark)
            break
        }
        case 2:{    //remove Animal
            if(zoopark.getLengthCase() == 0) break
            let name = prompt('Имя животного')
            let kind = prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 5 - Дельфин')
            zoopark.setRemoveAnimal(name, kind) ? console.log('Увезен') : console.log('Не найден')
            break
        }
        case 3:{    //show Type Animal
            let kind = +prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 5 - Дельфин')
            if(kind == 1 || kind == 2 || kind == 3 || kind == 4) console.log(zoopark.getShowSpecialKind(kind))
            break
        }
        case 4:{
            if(zoopark.getLengthCase() != 0) zoopark.getShowAllAnimal()
            break
        }
        case 5:{
            if(zoopark.getLengthCase() != 0) zoopark.getThreeOldAnimals()
            break
        }
        case 6:{
            console.log(`клеток свободно ${5 - zoopark.getLengthCase()}`)
            break
        }
        case 7:{
            if(zoopark.getLengthCase == 0) break
            let name = prompt('Имя животного')
            zoopark.getInfoAnimal(name)
            break
        }
    }
}while(menu != 8)
*/





/*
1 - Открыть счет в банке
    - генерируется номер карты (на разобраться самому) 
    - запрошивается пинкод
2 - Пополнить счет в банке
    - запрашивается сумма пополнения
    - запрашивается номер карты
3 - Снять деньги с карты
    - запрашивается сумма снятия
    - пин код
    - номер карты
    - с карты снимается 1 % комиссии. 
4 - переслать деньги на другую карту
    - запрашивается карта кому
    - запрашивается карта твоя
    - запрашивается пин код
    - запрашивается сумма
    - 3% снимается доп за пересылку
5 - Посмотреть счет в банке
    - карта 
    - пинкод
6 - Выйти


предусмотреть снятия со счета больше чем есть
пополнения на отрицательное число
учитывать коммисссию
проверять реальность карт
проверять авторизацию
и т.д
*/

Object.prototype.chekNum = function(){
    return isNaN(Number(this))
}
Object.prototype.percent = function(sum, percent){
    return sum + Math.floor(sum / 100 * percent)
}




function Bank(){
    this.__clients = []
    this.setAddClient = function(client){
        this.__clients.push(client)
    }
    this.setAddMoney = function(numCardUser, money){
        this.__clients.forEach(client =>{
            if(client.getNumCard() == numCardUser) client.setAddMoney(money)
        })
    }
    this.setRemoveMoney = function(money, numCard, pin){
        this.__clients.forEach(client =>{
                if(client.getNumCard() == numCard && client.getPin() == pin && client.getMoney() > (money + percent(money, 1)) ) {
                client.setRemoveMoney(percent(money, 1))
            }
        })
    }
    this.getClientsLength = function(){
        return this.__clients.length
    }
    this.setSendMoney = function(userNumCard, sendNumCard, pin, money){
        let userCard = this.__clients.findIndex(client => client.getNumCard() == userNumCard)
        let sendCard = this.__clients.findIndex(client => client.getNumCard() == sendNumCard)
        if(this.__clients[userCard].getPin() == pin && this.__clients[userCard].getMoney() > percent(money, 3)){
            this.__clients[userCard].setRemoveMoney(percent(money, 3))
            this.__clients[sendCard].setAddMoney(money)
        }
    }
    this.setShowMoney = function(numCard, pin){
        this.__clients.forEach(client => {
            if(client.getNumCard() == numCard && client.getPin() == pin){
                console.log(`На карте ${numCard} - ${client.getMoney()}`)
            }
        })
    }
}

function Client(pin, numCard, bank){
    this.__numCard = numCard
    this.__pin = pin
    this.__money = 100
    this.getNumCard = function(){
        return this.__numCard
    }
    this.getPin = function(){
        return this.__pin
    }
    this.getMoney = function(){
        return this.__money
    }
    this.setAddMoney = function(money){
        this.__money += money
    }
    this.setRemoveMoney = function(money){
        this.__money -= money
    }
    bank.setAddClient(this)
}

let bank = new Bank()

// let client = new Client(1234, 1234, bank)
// let client2 = new Client(1234, 2341, bank)

let menu

do{
    menu = +prompt('Банк \n 1 - Открыть счет в банке \n 2 - Пополнить счет в банке \n 3 - Снять деньги с карты \n 4 - переслать деньги на другую карту \n 5 - Посмотреть счет в банке \n 6 - Выйти')
    switch(menu){
        case 1:{
            let numCard = ``
            for(let i = 0; i != 4; i++) numCard += Math.round(Math.random() * 9)

            let pin = +prompt('Введите пин карты')
            if(pin != '' && pin.toString().length == 4 && pin.chekNum() == false){
                console.log(`номер карты: ${numCard}\nпин карты: ${pin}`)
                let client = new Client(pin, numCard, bank)
            }
            break
        }
        case 2:{
            let money = +prompt('Введите сумму пололнения')
            let numCard = prompt('Введите номер карты')
            if(money != '' && numCard != '' && money > 0) bank.setAddMoney(numCard, money)
            break
        }
        case 3:{
            let money = +prompt('Введите сумму снятия')
            let numCard = +prompt('Введите номер карты')
            let pin = +prompt('Введите пин карты')
            if(numCard != '' && pin != '' && money > 0) bank.setRemoveMoney(money, numCard, pin)
            break
        }
        case 4:{
            let userNumCard = +prompt('Номер вашей карты')
            let pin = +prompt('Ваш пин')
            let sendNumCard = +prompt('Номер карты кому переслать')
            let money = +prompt('Введите сумму')
            if(userNumCard != '' && sendNumCard != '' && pin != '' && money != '' && money > 0 && bank.getClientsLength() >= 2) bank.setSendMoney(userNumCard, sendNumCard, pin, money)
            break
        }
        case 5:{
            let numCard = +prompt('Введите номер карты')
            let pin = +prompt('Введите пин карты')
            if(numCard != '' && pin != '') bank.setShowMoney(numCard, pin)
            break
        }
    }
}while(menu != 6);








