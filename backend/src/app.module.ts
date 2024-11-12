import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TradespersonModule } from './tradesperson/tradesperson.module';
import { SharedOrmModule } from './sharedOrm/sharedOrm.module'; // Change this to match your filename exactly

@Module({
  imports: [UserModule, TradespersonModule, SharedOrmModule], // Import the SharedModule to use TypeORM
})
export class AppModule {}
