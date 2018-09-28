var findSmallest = (arr) => {
    let smallest = arr[0];
    let smallest_index = 0;

    for (let i = 1;i < arr.length;i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
};


var selectionSort = (arr) => {
    let newArr = [];
    //因每次arr.splice后会切割并保存为新数组，所以要指定源数组长度；
    let length = arr.length;
    for(let i = 0;i < length;i++){
        smallest = findSmallest(arr);
        
        newArr.push(arr.splice(smallest, 1)[0]);
        console.log("len: " + arr.length);
        console.log("arr: " + arr);
        console.log("newArr: " + newArr);
    }
    return newArr;
};

console.log(selectionSort([5, 3, 6, 2, 10, 58, 35, 24]));