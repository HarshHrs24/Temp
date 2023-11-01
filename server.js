const express = require('express');
const app = express();

console.log("Hello World!");
const LeetCode = require("leetcode-query");

const leetcode = new LeetCode.LeetCode();

async function func(){
    for(let i=0 ;i<5000;i++){
        console.log(i);
        console.log("-----------------------------------------------------------------------------------------x-------------------------------------------------------------------------------------");
        const user = await leetcode.user("kshatriyas");
        console.log(user);
    }

}

func();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
