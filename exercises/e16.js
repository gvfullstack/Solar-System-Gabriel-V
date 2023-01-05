// see e16.md

export function find(array, callback) {
    let result 
    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            return result = array[i]
        }
    }

    return result
}
