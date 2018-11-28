function toh(disk,source,dest,aux){
    if(disk == 1){
        console.log("Move" + disk + "from" + source + "to" + dest);
    }
    else{
        toh(disk-1,source,aux,dest);
        console.log(disk + "from" + source + "to" + dest);
        toh(disk-1,aux,dest,source);
    }
}
toh(3,"A","B","C");