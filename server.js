const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 3000;
const app = require('./src/app');

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
