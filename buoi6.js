bài 1
let array = [{name:"giang", age: 22},
             {name:"lan", age: 14},
             {name:"sơn", age: 13},
             {name:"khoa", age: 13},
             {name:"khôi", age: 16},
             {name:"huy", age: 17},
             {name:"hoàng", age: 17},
             {name:"nam anh", age: 16},
             {name:"vinh", age: 16},
             {name:"đức trung", age: 16},
             {name:"ngọc", age: 16},
             {name:"đăng", age: 17}
]
console.log(array)

bài 2
let array = [{name:"giang", age: 22},
             {name:"lan", age: 14},
             {name:"sơn", age: 13},
             {name:"khoa", age: 13},
             {name:"khôi", age: 16},
             {name:"huy", age: 17},
             {name:"hoàng", age: 17},
             {name:"nam anh", age: 16},
             {name:"vinh", age: 16},
             {name:"đức trung", age: 16},
             {name:"ngọc", age: 16},
             {name:"đăng", age: 17}
]
let total = 0;
for(let i = 0; i < array.length; i++) {
total +=array[i].age
}
console.log(total)

bài 3
for ( let i = 1000; i >=0; i--){
if ( i % 3 == 0 ) {
console.log(i)
}
}
