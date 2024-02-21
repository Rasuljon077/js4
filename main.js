let useransver1 = +prompt("brinchi qiymatni kiriting kiriting")

while (isNaN(useransver1 ) || useransver1  == "0") {
    if (useransver1  == "0") {
        useransver1  = +prompt("iltimos 0 dan boshqa son kiriting")
    }else{
        useransver1  = +prompt("iltimis son kiriting")
    }
}

if (useransver1 % 2 == '' ) {
    alert("juft son")
}else{
    alert("toq son")
}

let useransver2= +prompt("darajaga oshitmoqchi bolgan soningizni kiriting")
while (isNaN(useransver2) || useransver2 == "") {
    if (useransver2 == "") {
        useransver2 = +prompt("iltimos 0  dan boshqa son kiriting")
    } else {
        useransver2 = +prompt("iltimos son kiriting")
    }
}

let k = 1

for (let i = 1; i <= useransver2; i++) {

    // let k = 1

 k = k * useransver1
  console.log(k);
}
alert(k)

// console.log(k);



