function bark(name, weight) {
    if (weight > 20) {
        console.log(name + ' says WOOF WOOF');
    } else {
        console.log(name + ' says woof woof');
    }
}

bark ("Rover", 23);
bark ("Penny", 10);
bark ('Justice', 53);
bark ("Keith", 17);
bark("Jeff", 20);     // what happens when equal to not > <
bark("Scottie", -1);  // what happens with a negative number?
bark("dino", 0, 0);   // what happens with two numbers?
bark("fido", "20");   // what happens with a string?
bark("Lady", 10);
bark("bruno", 21);

// learning how JavaScript passes information
// what do you think the output will be?
    function doIt(param) {
        param = 2;
    }

    var test = 1;
    doIt(test);
    console.log(test);

// how many of the 4 parameters of makeTea will show?
function makeTea(cups, tea) {
    console.log("brewing " + cups + " cups of " + tea)
}
makeTea(3, "Earl Grey", 5, "will this show");

function barkAtTheMoon() {
    console.log("Wooooooooooooo!")
}

barkAtTheMoon();
