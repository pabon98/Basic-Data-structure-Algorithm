const numbers=[45,12,8,100,20,52,2,70,81,99]
function buuble_sort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if(array[j]> array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
            
        }
        
    }
    return array
}
const sorted = buuble_sort(numbers)
console.log(sorted)