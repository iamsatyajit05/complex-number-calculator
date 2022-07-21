let getAns = document.getElementById("getAns")
let ans = document.getElementById("ans")
let operation, x1, x2, y1, y2, x3, y3, complex1opt, complex2opt, finalAns

let operationMain = document.getElementById("operation")


getAns.addEventListener("click", () => {
    currentOpt = operationMain.value
    x1 = parseInt(document.getElementById("x1").value)
    x2 = parseInt(document.getElementById("x2").value)
    y1 = parseInt(document.getElementById("y1").value)
    y2 = parseInt(document.getElementById("y2").value)

    if (document.getElementById("x1").value == 0 || document.getElementById("x1").value == 0 || document.getElementById("x1").value == 0 || document.getElementById("x1").value == 0) {
        alert("Please Fill The All Blocks")
        return;
    }

    complex1opt = document.getElementById("complex1opt").value
    complex2opt = document.getElementById("complex2opt").value

    if (complex1opt == "sub") {
        y1 = 0 - y1
    }

    if (complex2opt == "sub") {
        y2 = 0 - y2
    }

    switch (currentOpt) {
        case "add":
                add()
            break;

        case "sub":
                sub()
            break;

        case "div":
                div()
            break;

        case "mul":
                mul()
            break;

        case "con":
                con()
            break;

        case "sqrt":
            sqrt()
            break;
            
        case "inv":
            inv()
            break;
    
        default:
            break;
    }

    console.log(finalAns)
    ans.value = finalAns
})

function add() {
    x3 = x1 + x2
    y3 = y1 + y2

    x3 = formatter.format(x3)
    y3 = formatter.format(y3)

    finalAns = x3 + " + " + y3 + "i"
}

function sub() {
    x3 = x1 - x2
    y3 = y1 - y2

    x3 = formatter.format(x3)
    y3 = formatter.format(y3)

    finalAns = x3 + " - " + y3 + "i"
}

function mul() {
    x3 = (x1*x2) + (y1*y2*(-1))
    y3 = (x1*y2) + (x2*y1)

    x3 = formatter.format(x3)
    y3 = formatter.format(y3)

    finalAns = x3 + " + " + y3 + "i"
}

function div() {
    x3 = ((x1*x2) + (y1*y2))/(Math.pow(x2, 2) + Math.pow(y2, 2))
    y3 = ((y1*x2) - (x1*y2))/(Math.pow(x2, 2) + Math.pow(y2, 2))

    x3 = formatter.format(x3)
    y3 = formatter.format(y3)

    finalAns = x3 + " + " + y3 + "i"
}

function con() {
    if (complex1opt == "add") {
        finalAns = x1 + " - " + y1 + "i"
    }
    
    else {
        finalAns = x1 + " + " + y1 + "i"
    }
}

function sqrt() {
    let zmod = Math.sqrt((x1*x1) + (y1*y1))
    x3 = Math.sqrt((zmod+x1)/2)
    y3 = Math.sqrt((zmod-x1)/2)

    x3 = formatter.format(x3)
    y3 = formatter.format(y3)
    
    if(y1 < 0){
        finalAns = "± (" + x3 + " - " + y3 + "i)"
    }
    else if(y1 > 0){
        finalAns = "± (" + x3 + " - " + y3 + "i)"
    }
}

function inv() {
    x3 = (x1/ ( (x1*x1) + (y1*y1) ))
    y3 = (y1/ ( (x1*x1) + (y1*y1) ))

    x3 = formatter.format(x3)
    y3 = formatter.format(y3)

    finalAns = x3 + " - " + y3 + "i"
}

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });