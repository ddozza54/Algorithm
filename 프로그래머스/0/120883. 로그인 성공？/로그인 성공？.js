function solution(id_pw, db) {
    let idExist = false;
    for(i=0; i<db.length; i++){
        if(db[i][0] == id_pw[0]){
          idExist = !idExist;
           if(db[i][1] == id_pw[1]){
               return "login"
           }
       }
    }
       return idExist? "wrong pw" : "fail"
}