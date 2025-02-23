const express = require('express');
const app = express();  
const cors = require('cors');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 9000;



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
},error=>{console.log(error.message);
})