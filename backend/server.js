require('dotenv').config()
const app = require('./src/app')


app.listen(3000, () => {
    console.log('Server is running on https://ai-powerd-code-reviewer-backend-kkwc.onrender.com')
})
