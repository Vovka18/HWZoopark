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
>> Медведь Сергей Место обитания  Сейчас ноходится в спячке
8 - выйти

ООП + Инкапсуляция Наследование и Полиморфизм
*/


function checkFieldAndAbility(name, age, kind){
    if(name == '' || age == '' || isNaN(Number(age)) == true || kind == ''|| kind.length != 1 || kind > 4 || kind < 1 || isNaN(Number(kind)) == true) return false
    if(kind == 1){  //птица
        let ability1 = +prompt('Введите максимальную скорость полета км/ч')
        let ability2 = +prompt('Введите дальность зрения в m')

        if(ability1 == '' || ability2 == '' || isNaN(Number(ability1)) == true || isNaN(Number(ability2)) == true) return false

        return `${ability1} ${ability2}`
    }
    else if(kind == 2){  //Волк
        let ability1 = +prompt('Статус:\n 1 - Вожак\n 1 - Не вожак')
        let ability2 = +prompt(' 1 - Надресирован\n 2 - Не надресирован')

        if(ability1 == 1 || ability1 == 2 && ability2 == 1 || ability2 == 2){
            return `${ability1} ${ability2}`
        }
        else return false
    }
    else if(kind == 3){  //Медведь
        let ability1 = prompt('Обитает в:')
        let ability2 = +prompt('Статус": \n 1 - В спячке \n 2 - Не в спячке')

        if(ability2 == 1 || ability2 == 2 && ability1 != '') return `${ability1} ${ability2}`
        else return false
    }
    else if(kind == 4){  //Дельфин
        let ability1 = +prompt('Введите скорость плавания')
        let ability2 = +prompt('Введите дальность слуха')
        
        if(ability1 == '' || ability2 == '' || isNaN(Number(ability1)) == true || isNaN(Number(ability2)) == true) return false

        return `${ability1} ${ability2}`
    }
    else return false

}

function Zoopark(){
    this.__case = [
        
    ]
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
        if(kind == 2) return `волк`
        if(kind == 3) return `медведь`
        if(kind == 4) return `дельфин`
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
}

function Animal(name, age, kind, ability, zoopark){
    this.__kind = kind
    this.__name = name
    this.__age = age
    this.__ability = ability
    this.getName = function(){return this.__name}
    this.getKind = function(){return this.__kind}
    this.getAge = function(){return this.__age}
    zoopark.setAddAnimal(this)
}

let zoopark = new Zoopark()

let swist = new Animal('Свист', 30, 1, `160 5000`, zoopark)
let shebet = new Animal('Щебет', 2, 1, `60 1000`, zoopark)
let misha = new Animal('Миша', 3, 3, `России 2`, zoopark)

let menu

do{
    menu = +prompt('Зоопарк\n 1 - добавить животное\n 2 - удалить животное\n 3 - посмотреть всех животных по определенному типу\n 4 - посмотреть вообще всех животных\n 5 - показать 3 самых старых животных в зоопарке\n 6 - показать сколько клеток еще свободно\n 7 - показать информацию об конкретном животном по имени\n 8 - выйти\n')
    switch(menu){
        case 1:{    //add Animal
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