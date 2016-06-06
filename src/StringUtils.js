export const parseToCammelCase = (string) => {
    let lastIsUnderline = false;
    
    return string.toLowerCase().split("").map(l => {
        if (l == "_") {
            lastIsUnderline = true;
            return "";
        }
        
        if (lastIsUnderline) {
            lastIsUnderline = false;
            return l.toUpperCase();
        }
        
        return l;
    }).join("");
}

export const turnToDispatchName = (string) => {
    return string.split("").map(l => {
        if (l == l.toUpperCase()) return `_${l}`;
        return l;
    }).join("").toUpperCase();
}
