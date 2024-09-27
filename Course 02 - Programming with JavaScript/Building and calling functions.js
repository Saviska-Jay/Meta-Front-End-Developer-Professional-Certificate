function ListArrayItems(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(i+1, ".", arr[i]);
    }
}

var colors = ["Red", "Green", "Blue", "Yellow", "Black", "White"]
ListArrayItems(colors);