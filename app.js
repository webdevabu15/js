// let y = 10;
// let x = {
//     age:16,
//     isName:"abu",
//         school:{
//         num:59,
//         class10:true,
//     },
// };

// console.log(x);

// let firstname = ["John", "Smith", "Bob", "Mike", "Nancy", "Alex", "Nicole"];

// let f = prompt("ismingizni kiriting");
// let l = prompt("familiyangizni kiriting");
// let a = prompt("yoshingizni kiriting");

// let user = {
//     firstname: f,
//     lastname: l,
//     age: a,
// };

// console.log(user);

// let today = prompt("enter the day of the week");

// if (today == "monday") {
//     alert("dushanba");
// } else if (today == "tuesday") {
//     alert("seshanba");
// } else if (today == "wednesday") {
//     alert("chorshanba");
// } else if (today == "thursday") {
//     alert("payshanba");
// } else if (today == "saturday") {
//     alert("shanba");
// } else if (today == "sunday") {
//     alert("yakshanba");
// } else {
//     alert("bunday kun yo'q");
// }

let today = +prompt("enter the day of the week");

switch (true) {
    case today == 1:
        alert("dushanba");
        break;

    case today == 2:
        alert("seshanba");
        break;

    case today == 3:
        alert("chorshanba");
        break;

    case today == 4:
        alert("payshanba");
        break;

    case today == 5:
        alert("juma");
        break;

    case today == 6:
        alert("shanba");
        break;

    case today == 7:
        alert("yakshanba");
        break;

    default:
        alert("aniqlanmadi");
}
