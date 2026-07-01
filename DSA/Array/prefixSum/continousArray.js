const continuousArray = (arr) => {

   let res = 0; let sum = 0; let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            Arr[i] = -1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        Sum += arr[i];
        if (map.has(sum)) {
            Res = Math.max(res, (i - map.get(sum)));
        }
        map.set(sum, i);
    }

    return sum;

}

