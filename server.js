const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

console.log("Hello World!");
const LeetCode = require("leetcode-query");

const leetcode = new LeetCode.LeetCode();

async function func(){
    const user = await leetcode.user("AadityaNayak7");
    console.log(user);
}

func();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
