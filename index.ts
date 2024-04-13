#! /usr/bin/env node

import inquirer from "inquirer";

const ans = await inquirer.prompt([
{message:"Enter first nnumber", type:"number", name:"one" },
{message:"Enter second nnumber", type:"number", name:"two" },
{message:"Select any one operator", type:"list", name:"opert",
choices:["+","-","*","/","%"], },

])
console.log("number 1 is "+ans.one);
console.log("number 2 is "+ans.two);
console.log("Your selected opertaor is "+ans.opert);
if(ans.opert === "+"){
    console.log(ans.one + ans.two);
}
else if(ans.opert === "-"){
    console.log( ans.one - ans.two);
}
else if (ans.opert === "*"){
    console.log(ans.one * ans.two);
}
else if (ans.opert === "/"){
    console.log(ans.one / ans.two);

}
else if (ans.opert === "%"){
    console.log(ans.one % ans.two);

}
else
{
    console.log("Select a valid operator");
}
