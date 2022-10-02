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
> Вывести тип и имя животного
5 - показать 3 самых старых животных в зоопарке
6 - показать сколько клеток еще свободно
7 - показать информацию об конкретном животном по имени
> Имя
8 - выйти

ООП + Инкапсуляция Наследование и Полиморфизм
*/






function checkFieldAndAbility(name, age, kind){
    if(name == '' || age == '' || isNaN(Number(age)) == true || kind == ''|| kind.length != 1 || kind > 4 || kind < 1 || isNaN(Number(kind)) == true) return false
    if(kind == 1){  //птица
        let ability1 = +prompt('Введите максимальную скорость полета км/ч')
        let ability2 = +prompt('Введите дальность зрения в m')
        if(ability1 == '' || ability2 == '' || isNaN(Number(ability1)) == true || isNaN(Number(ability2)) == true) return false
        return `Максимальная скорость полета: ${ability1}, а дальность зрения ${ability2} метра`

    }
    else if(kind == 2){  //Волк
        let ability1 = +prompt('Статус:\n 1 - Вожак\n 1 - Не вожак')
        let ability2 = +prompt(' 1 - Надресирован\n 2 - Не надресирован')
        if(ability1 == 1) ability1 = `Вожак`
        else if(ability1 == 2) ability1 = `не вожак`
        else return false

        if(ability2 == 1) ability2 = `надресирован`
        else if(ability2 == 2) ability2 = `не надресирован` 
        else return false
        
        return `Этот Волк ${ability1}, и он *${ability2}`
    }
    else if(kind == 3){  //Медведь
        let ability1 = prompt('Обитает в:')
        let ability2 = +prompt('Статус": \n 1 - В спячке \n 2 - Не в спячке')

        if(ability1 == '') return false

        else if(ability2 == 1) ability2 = `в спячке`
        else if(ability2 == 2) ability2 = `не в спячке`
        else return false
        return `Этот медведь обитает в ${ability1}, и сейчас он ${ability2}`
    }
    else if(kind == 4){  //Дельфин
        let ability1 = +prompt('Введите скорость плавания')
        let ability2 = +prompt('Введите дальность слуха')
        
        if(ability1 == '' || ability2 == '' || isNaN(Number(ability1)) == true || isNaN(Number(ability2)) == true) return false

        return `Этот дельфин плавает со скоростью ${ability1}, а радиус слуха у него ${ability2} метра`
    }
    else return false

}



function Zoopark(){
    this.__case = []
    this.getLengthCase = function(){
        return this.__case.length
    }
    this.setAddAnimal = function(animal){
        console.log(animal)
        if(this.__case.length <= 4){
            console.log(animal)
            console.log('yes')
            this.__case.push(animal)
            console.log(this.__case[0])
        }
    }
}

function Animal(name, age, kind, ability, zoopark){
    this.__kind = kind
    this.__name = name
    this.__age = age
    this.__ability = ability
    zoopark.setAddAnimal(this)
}

let zoopark = new Zoopark()
let menu

do{
    menu = +prompt('Зоопарк\n 1 - добавить животное\n 2 - удалить животное\n 3 - посмотреть всех животных по определенному типу\n 4 - посмотреть вообще всех животных\n 5 - показать 3 самых старых животных в зоопарке\n 6 - показать сколько клеток еще свободно\n 7 - показать информацию об конкретном животном по имени\n 8 - выйти\n')
    switch(menu){
        case 1:{
            if(zoopark.getLengthCase() >= 5) break
            let name = prompt('Кличка')
            let age = +prompt('Возраст')
            let kind = prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 5 - Дельфин')
            let ability = checkFieldAndAbility(name, age, kind)
            if(ability == false){
                console.log('Ошибка ability')
                break
            }
            const newAnimal = new Animal(name, age, kind, ability, zoopark)
            break
        }
        case 2:{
            break
        }
        case 3:{
            break
        }
        case 4:{
            break
        }
        case 5:{
            break
        }
        case 6:{
            break
        }
        case 7:{
            break
        }
        case 8:{
            break
        }
    }
}while(menu != 8)