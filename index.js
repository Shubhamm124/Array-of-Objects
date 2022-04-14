console.log("working");
//Prblem :-1
let studentRecords = [{name:"John",id:123,marks:98},
    {name:"Baba",id:101,marks:23},
    {name:"yaga",id:200,marks:45},
    {name:"Baba",id:115,marks:75}
];

let arr = studentRecords.map(x => x.name.toUpperCase());
console.log(arr);


//Prblem :-2

let array1 = studentRecords.filter(x => x.marks > 50);
console.log(array1);

//Prblem :-3
let array2 = studentRecords.filter((x) =>x.marks > 50&&x.id>120);
console.log(array2);

//Prblem :-4

let array3 = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(array3);

//Prblem :-6
let array5 = studentRecords.filter(x => x.id > 120);
let array6 = array5.reduce((accu, curr) => accu + curr.marks,0);
console.log(array6);

//Prblem :-7

for(let x of studentRecords){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}

let array7 = studentRecords.filter(x => x.marks > 50);
let array8 = array7.reduce((accu, curr) => accu + curr.marks,0);
console.log(array8);

