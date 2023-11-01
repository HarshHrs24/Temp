const express = require('express');
const app = express();
const router= app.routes();



router.post('/data', async (req, res) => {
 
  });

app.use("/api", router)
async function func(){


}

func();
app.listen(5000, () => {
    console.log('Server is running on port 3000');
});
