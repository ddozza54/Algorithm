function solution(num_list) {
   let count = 0;
    num_list.forEach(n=>{
        while(n !== 1){
       n= n%2==0? n/2 : (n-1)/2
        count++
        }
    })
    return count
}