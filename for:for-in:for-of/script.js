// 1.  ['cup', 'plate', 'spoon', 'knife', 'fork'] array’inin bütün elementlərini while ilə konsolda göstərin
console.log("**** adi for: ****")

const array1=['cup', 'plate', 'spoon', 'knife', 'fork']
for(let a1=0;a1<array1.length;a1++){
    console.log(array1[a1]);
}
console.log("**** for-in: ****")

for(let a2 in array1){
    console.log(array1[a2])
}
console.log("**** for-of: ****")
for(let a3 of array1){
    console.log(a3)
}

console.log('#####################')


// 2. ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'] bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə konsolda göstərin
console.log("**** adi for: ****")

const array2=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']
for(let b1=0;b1<array2.length;b1++){
    if(array2[b1].slice(0,1)==="s"){
    console.log(array2[b1])
    }
}
console.log("**** for-in: ****")

for(let b2 in array2){
    if(array2[b2].slice(0,1)==="s"){
    console.log(array2[b2])
    }
}
console.log("**** for-of: ****")
for(let b3 of array2){
    if(b3.slice(0,1)==="s"){
    console.log(b3)
    }
}

console.log('#####################')

// 3.  1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
console.log("**** adi for: ****")

let sum=0;
for(let c=1;c<=100;c++){
sum=sum+c;
}
console.log(sum)


console.log('#####################')

// 4. ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq'] arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini for ilə göstərin. 5 hərfli olmayanları continue deyərək keçin.
console.log("**** adi for: ****")

const array3=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq'] 
for(let d1=0;d1<array3.length;d1++){
    if(array3[d1].length!==5){
    continue;
    }
    console.log(array3[d1][array3[d1].length-1])
}

console.log("**** for-in: ****")
for(let d2 in array3){
    if(array3[d2].length!==5){
    continue;
    }
    console.log(array3[d2][array3[d2].length-1])
}

console.log("**** for-of: ****")
for(let d3 of array3){
    if(d3.length!==5){
    continue;
    }
    console.log(d3[d3.length-1])
}

console.log('#####################')


// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
console.log("**** adi for: ****")

for(let e=100000;e>=9999;e--){
    if(e%9999===0){
        console.log(e);
        break;
    }
}

console.log('#####################')


//???  6. 'Men her gun Javascript oyrenirem’ bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.
console.log("**** adi for: ****")

let text='Men her gun Javascript oyrenirem'
let vowels='aioue'
let result=""
for(let f1=0;f1<text.length;f1++){
if(!vowels.includes(text[f1])){
    result+=text[f1];
}
}
console.log(result)


console.log("**** for-in: ****")
let result2=""
for(let f2 in text){
  if(!vowels.includes(text[f2]))
    {
        result2+=text[f2];
    }
}
console.log(result2)


console.log("**** for-of: ****")
let result3=""

for(let f3 of text){
  if(!vowels.includes(f3))
  {
    result3+=f3;
  }
}
console.log(result3)














