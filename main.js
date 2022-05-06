

let c = 0;
function a(inputArr)
{
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
                c++;
            }
        }
    } while (checked);
    return inputArr;
}

let inputArr = [3,4,5,1,2];
console.log(a(inputArr));
console.log(c);