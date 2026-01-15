function pow(num, power = 0) {
    function powing(power, sum) {
        if(power == 0) {
            return sum;
        } else {
            return powing(power - 1, sum * num);
        }
    }
    return powing(power, 1);
}

// test