// *** Task1 : Istifadəçi bir ədəd girməlidir ancaq bu ədəd 1000 - 100.000 arasında 3-ə bölünən bir ədəd omalıdır. Həmin şərtlərə uyğun olaraq istifadəçiyə məlumat verin.
let n=3333;
if(n>=1000&&n<=100000){
    console.log('ededin 3-e bolunub-bolunmediyi yoxlanilir...')
    if(n%3===0){
        console.log("eded 3-e bolunur")
    }
    else{
        console.log('eded 3-e bolunmur')
    }
}
else{
    console.log('gosterilen araliqda eded daxil edin')
}

// *** Task 2: 
// Aşağıdakı kodda
const user = {
    name: 'Elnur',
    height: 179,
    phone: {
        model: 'Iphone',
    },
    orders: ['book', 'mouse', 'mousepad']
}
// a: İstifadəçinin boyunu auto increment yoluyla bir artırın

let boy=user.height;
boy++;
user.height=boy;
console.log(user)


// b: telefonun markasını dəyişərək Samsung edin
user.phone.model="Samsung"
console.log(user)

// c: Telefonun galaxy s22 markası olduğunu bildirən məlumat girin
user.phone.model="galaxy s22"
console.log(user)

// d: İstifadəçinin adını silin
delete user.name
console.log(user)

// e İstifadəçin ilk sifarişini silin
delete user.orders.shift()
console.log(user)

// f: İstifadəçinin son sifarişini silin
delete user.orders.pop()
console.log(user)

// g: İstifadəçinin sifarişlərinin başına ball əlavə edin
user.orders.unshift('ball')
console.log(user)

// h: İstifadəçinin sifarişlərinin sonuna headphones əlavə edin
user.orders.push('headphones')

// *** Task 3:

const info = ["Resul", "Serifov", 35]
// 1. Yuxarıdakı arrayı dinamik olaraq ["Resul Serifov", 25] vəziyyətinə gətirin

let nameSurname=info[0].concat(" ",info[1])
let age=info[2]-10;
info.splice(0,3);
info.unshift(nameSurname)
info.push(age)
console.log(info)


