export const parseToCammelCase = (string) => {
    let cammelMethod = '';
    let isSnake = false;
    
    string.toLowerCase().split('').forEach(x => {
       if (x !== '_' && isSnake) {
           cammelMethod += x.toUpperCase();
           isSnake = false;
       } else if (x !== '_') {
           cammelMethod += x
       } else {
           isSnake = true;
       }
    });
    
    return cammelMethod;
}

export default parseToCammelCase;