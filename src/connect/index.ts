import {Client} from 'pg'

const client=new Client({
connectionString:'postgresql://postgres:mysecretpassword@localhost/postgres'
})


async function createUsersTable(){

    await client.connect()
    const result=await client.query(
        `
        CREATE TABLE USERS(
            ID INT PRIMARY KEY NOT NULL,
            NAME VARCHAR(255) NOT NULL,
            EMAIL VARCHAR(255) UNIQUE NOT NULL,
            PASSWORD VARCHAR(255) NOT NULL,
            created_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `
    )
    console.log(result);
}
createUsersTable()