module.exports = function reverse (n) {
    if(n < 0) n = -n;
    let res = "";
    let strN = String(n);
    let i = strN.length;
    while(i > 0) {
        res += strN[i - 1];
        i--;
    };
    return Number(res);
}
