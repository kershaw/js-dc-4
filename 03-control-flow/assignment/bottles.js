var bottles;
for (i = 99; i >= 1; i = i - 1)
{
    if (i == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(i+" "+bottles+" of beer on the wall.");
    if (i < 99) {
        console.log("");
        console.log(i+" "+bottles+" of beer on the wall.");
    }
    console.log(i+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (i == 1) {
        console.log("No more bottles of beer on the wall.");
    }
}
