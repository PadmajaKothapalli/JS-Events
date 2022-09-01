//100,90,80,70,60,50
// initialization i=100
//condition i>=50
// inc/decr i=i-10

for(let i=100;i>=50;i=i-10)
{
    console.log(i);
}

//or//

let i=100;
for(;;){
    if(i>=50){
        console.log(i);
    }
    i=i-10;

}