module.exports = function(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[A-Za-z]/)){
            result += str[i].toLowerCase();
        } else if ((str[i] === '_' || str[i] === ' ' || || str[i] === '-') && result[result.length - 1] !== '_'){
            result += '_';
        }
    }
    if(result[result.length - 1] === '_'){
        result = result.slice(0, result.length - 1);
    }
    if(result[0] === '_'){
        result = result.slice(1, result.length);
    }

    return result;
};
