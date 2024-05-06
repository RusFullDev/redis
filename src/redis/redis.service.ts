import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';
import { SetRedisDto } from './dto/set-redis.dto';


@Injectable()
export class RedisService implements OnModuleDestroy {
 constructor(@Inject(REDIS_CLIENT) private readonly redisClient:RedisClient){}

 onModuleDestroy() {
   this.redisClient.quit()
 }

 ping(){
  return this.redisClient.ping()
 }

async set(setRedisDto:SetRedisDto):Promise<string>{
  const{key,value}=setRedisDto

  



  await this.redisClient.set(key,value,{EX: 10})
  return `Set value to Redis:${value}`
}

async get(key:string):Promise<string>{
  console.log(await this.redisClient.keys('*')); //barche keylarni ko'rish
  
  const retrievedValue = await this.redisClient.get(key)       // keyni olish
  // const retrievedValue = await this.redisClient.getDel(key) //keyni olib o'chiradi

  // await this.redisClient.del(key)                // keyni o'chirvoradi

  return `Get value from Redis: ${retrievedValue}`
}





}
