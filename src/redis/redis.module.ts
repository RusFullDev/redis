import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import { redisClientFactory } from './redis-client.factory';

@Module({
  imports:[],
  controllers: [RedisController],
  providers: [RedisService,redisClientFactory],
})
export class RedisModule {}
