'use strict';

// =========== map ====================================================>

// const user = {
//     name: "Andrii",
//     age: 25,
//     status: "teacher"
// }

// // console.log('user :', Object.entries(user)); // [["name", "Andrii"], ["age", "25"], ["isActive", "true"], ["status", "teacher"]];

// const entries = [["name", "Andrii"], ["age", "25"], ["status", "teacher"]];

// // console.log(Object.fromEntries(entries));

// const map = new Map(entries);

// console.log('map :', map);

// console.log('map.get("status") :', map.get("status"));

// map.set("isActive", true);
// console.log('map :', map);

// // map.set(user, 'something').set("some", 25);
// console.log('map :', map);

// map.delete("status");
// console.log(map.has("status"));

// console.log(map.size);

// map.clear()
// console.log(map.size);
// console.log('map :', map);


// ===== forEach map ======================================================>

// const user = {
//     name: "Andrii",
//     age: 25,
//     status: "teacher"
// }


// const entry = new Map(Object.entries(user)); //[[],[]]
// console.log(entry);

// entry.forEach((value, key, arr) => console.log(value, key));

// // const mapa = Object.fromEntries([...entry]);
// // console.log('mapa :', mapa);

// // const map = new Map(entries);
// const newMapa = Array.from(entry);
// console.log('newMapa :', newMapa);

// ========= new Set ===============================================================>

// const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 3, 2]
// const set = new Set(arr); //{}
// console.log('set :', set);

// set.add(10).add(20).add('fhgfh');
// console.log('set :', set);
// console.log('set.entries() :', set.entries()); //[["1", "1"]]

// let newArr = []
// set.forEach(value => newArr.push(value));
// console.log('newArr :', newArr);

// const unique = Array.from(new Set(arr));
// console.log('unique :', unique);
// // ----- OR ----------------->
// const unique2 = [...new Set(arr)]; //new Set(arr) ====> {1, 2, 3, 4, 5, 6} ===> [1, 2, 3, 4, 5, 6]
// console.log('unique2 :', unique2);

// ============ weakMap ==========================================================>

// let obj = { name: "Nastya" }

// const arr = [obj]

// obj = null;
// console.log('obj :', obj);
// console.log('arr :', arr);

//  ------------->

// let newObj = { name: "Nastya" }

// const map = new WeakMap([[newObj, "Nastya"]])
// console.log('map :', map);

// newObj = null;

// console.log('map :', map);

// -- WeekMap methods ---- get set delete has --------->
















