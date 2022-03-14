// 1.  ['cup', 'plate', 'spoon', 'knife', 'fork'] array’inin bütün elementlərini while ilə konsolda göstərin
const array1=['cup', 'plate', 'spoon', 'knife', 'fork']
let a=0
while(a<array1.length){
    console.log(array1[a])
    a++
}
// 2. ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'] bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə konsolda göstərin
const array2=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'] 

let b=0
while(b<array2.length){
    if(array2[b].slice(0,1)==="s"){
        console.log(array2[b])
    }
    b++
}

// 3.  1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
let c=0
let sum=0
while(c<=100){
    sum=sum+c
    c++
}
console.log(sum)

// 4. ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq'] arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini while ilə göstərin. 5 hərfli olmayanları continue deyərək keçin.
const array3=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
let d=0
while(d<array3.length){
    if(array3[d].length===5){

    console.log(array3[d][array3[d].length-1])
    }

    d++

}
// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
let e=100000
while(e>=9999){
if(e%9999===0){
    console.log(e);
    break;
}
e--;
}
//???  6. 'Men her gun Javascript oyrenirem’ bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.

let text='Men her gun Javascript oyrenirem'





