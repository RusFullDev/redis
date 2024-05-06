import { FactoryProvider } from "@nestjs/common";
import { REDIS_CLIENT, RedisClient } from "./redis-client.type";

import { createClient } from "redis";

export const redisClientFactory:FactoryProvider<Promise<RedisClient>>={
    provide:REDIS_CLIENT,
    useFactory:async()=>{
        const client = createClient({
            url:process.env.REDIS_DB
        })
        await client.connect()
        return client
    }
}