export default function clId(value) {
    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
        return false;
    }
    let v = value.replace(/\-/g, '');
    while (v.length < 9) {
        v = `0${v}`;
    }
    const weight = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - sum % 11;
    let cd = `${sum}`;
    if (sum === 11) {
        cd = '0';
    }
    else if (sum === 10) {
        cd = 'K';
    }
    return cd === v.charAt(8).toUpperCase();
}