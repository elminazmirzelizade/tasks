// 1: Funksiya run olundan 5 saniyə sonra konsolda bes saniye bitdi yazan bir funksiya hazırlayın
// function endFun(){
//     console.log("5 saniye bitdi")
// }
// setTimeout(endFun,5000)



// 2: Konsolda 100-dən aşağı geri sayım edən və 0-a çatanda geri sayım bitdi yazan bir funksiya hazırlayın
// let count=100
// let interval=setInterval(function(){
//     if(count==0){
//         clearInterval(interval)
//         console.log('Geri sayim bitdi')
//     }
//     console.log(count)
//     count--
// },1000)




// 3: 65.4345 ədədini yuvarlaqlaşdırın
// console.log(Math.round(65.4345))




// 4: 0 və 10 arasında random ədəd verən bir funksiya hazırlayın
// function RandomFun(){
//     Math.floor(Math.random()*11)
// }




// 5: İndiki tarixə görə İl, ay, gün göstərən funksiya hazırlayın
// 5a
// function dateNow1(){
//     let date1=new Date()
//     let time1=date1.toLocaleDateString()
//     console.log(time1)
// }
// dateNow1()
// 5b
// function dateNow2(){
//     let date2=new Date()
//     console.log(date2.getFullYear()+"/"+date2.getMonth()+"/"+date2.getDate())
// }
// dateNow2()




// 6: İndiki tarixə görə saat, dəqiqə, saniyə göstərən funksiya hazırlayın
// 6a: 
// function timeNow1(){
//     let dateTime1=new Date()
//     let time2=dateTime1.toLocaleTimeString()
//     console.log(time2)
// }
// timeNow1()
// 6b
// function timeNow2(){
//     let dateTime2=new Date()
//     console.log(dateTime2.getHours()+"/"+dateTime2.getMinutes()+"/"+dateTime2.getSeconds())
// }
// timeNow2()

// 7: Gələn ilin bu günündə həftənin neçənci günü olacağını göstərən bir funksya hazırlayın
// function f(){
//     let date=new Date()
//     let year=date.getFullYear()
//     let nextYear=date.setFullYear(year+1)
//     console.log(date.getDay())
// }
// f()