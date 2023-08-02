
import express from 'express'
import {getGreetings, addGreetings} from './db.js';


const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3008

// get all the greetings
app.get('/api/greetings', async function (req, res) {
    const greetings = await getGreetings();
    console.log(greetings);
    res.json({
        greetings
    })

});

//create a route to add a greeting

app.post('/api/greetings', async (req, res) => {

    const greeting = req.body.greeting;
    const language = req.body.language;

    await addGreetings(language, greeting)


    res.json({
        greeting: "success",
        language: `Added a greeting for ${language}.`
    });
});

app.listen(PORT, () => console.log(`started on port: ${PORT}`))

//end here

