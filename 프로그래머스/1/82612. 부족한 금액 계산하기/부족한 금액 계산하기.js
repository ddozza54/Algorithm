function solution(price, money, count) {
   let sum = 0;
    for(i=1; i<= count; i++){
        sum += price*i
    }

    return sum-money>0?sum-money : 0 
}

