import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

await db.migrate()

//const result = await db.all(`select * from greetings`);
//console.log(result);

//create a function that returns all the gfreeting from the db
 export async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}


const result = await getGreetings()

console.log(result)

// method of add.
  export async function addGreetings(language, greetings){
    //sql statement type -insert
    //
// insert into greetings{language, greeting} values{?, ?}
const sql = `insert into greetings(language, greeting) values (?,?)`
await db.run(sql, [language, greetings]);
}


//delete function 
       /// async function deleteGreetings(id){
            //
            // const sql =`delete from greetings where id = ?`;
            // await db.run(sql, [id]);
        // }
        // await deleteGreeting();
// delete ends here

                const result1 = await getGreetings()
                console.log(result1);


                console.log('=============================')
                //await addGreetings('Sepedi', 'Thobela');
                //await addGreetings('English', 'Hello');
                //await addGreetings('Afrikaans', 'Halo');
                //await addGreetings('Swati', 'Sawubon');
                //await addGreetings('Arabic', 'Morhaba');
                //await addGreetings('Japanese', 'Konnichwa');
                //await addGreetings('Venda', 'Ndaa!');
                //await addGreetings('Xitsonga', 'Avuxeni');

 export async function updateGreeting(language, greeting, id){
    const sql = `update greetings set language = ?, greetings where id = ?`;
    await db.run(sql, [language, greetings, id])

}



console.log('=============================')

const result2 = await getGreetings()
console.log(result2);
                //getGreeting().them(result => console.log)

                //db
                //  .all(`select * from greetings`)
                    //.then(result =>{
                    //  console.log(result)
                //})

                //const countResult = await db.get(`select count(*) as count from greetings`);
                //console.log(countResult.count)

