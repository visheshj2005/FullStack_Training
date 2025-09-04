const draw_square = (side)=>{
    let temp = "";
    let temp1 = "*";
    for(let i=0;i<side;i++){
        temp += "*";
    }
    console.log(temp);
    // temp1 = temp;
    for(let i=0;i<side-2;i++){
        temp1 += " ";
    }
    temp1 += "*";
    for(let i=0;i<side-2;i++){
        console.log(temp1);
    }
    console.log(temp);
}
draw_square(10);