

function LeftRotation(a, b) {

    if (b <= 0)
        return a;

    const array = [...a];
    const i = b < array.length ? b : parseInt(b % array.length);

    const array2 = array.filter(x => array.indexOf(x) < i);

    array.splice(0, i);

    return array.concat(array2);
}

