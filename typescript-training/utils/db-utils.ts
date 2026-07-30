import queries from '../config/data.json' with {type:"json"}
import config from '../config/config.json' with {type:"json"}
import { Client } from 'pg';

export class DBUtils{


    async getData(query:string):Promise<any>{

        const dbClient=new Client({
                host: config.db.host,
                port: config.db.port,
                user: config.db.username,
                password: config.db.password,
                database: config.db.database

        })

        await dbClient.connect();

      const data=dbClient.query(query);

      await dbClient.end();

        return (await data).rows;

    }


    }