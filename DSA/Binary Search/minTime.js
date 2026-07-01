/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let l = 1, r = 10**7, ans = -1;
    let n = dist.length;

    if(hour <= n-1){
        return -1;
    }


    while(l <= r){
        let mid = Math.floor((l + r) / 2);

        console.log("mid :: ", mid);

        let time = 0;

        for(let i = 0; i < n-1; i++){
            time += Math.ceil(dist[i] / mid);
        }

        time += dist[n-1] / mid;
        if(time <= hour){
            ans = mid;
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return ans;
};


let arr = [1,3,2], h = 6;

console.log(minSpeedOnTime(arr, h))