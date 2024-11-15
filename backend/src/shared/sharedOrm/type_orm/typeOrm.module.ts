import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../user/user.entity'; // Importing User entity
import { Tradesperson } from '../../../tradesperson/tradesperson.entity'; // Importing Tradesperson entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'nestjs',
      entities: [User, Tradesperson], // Define your entities here
      synchronize: false, // Automatically sync the DB (do not use in production)
    }),
    TypeOrmModule.forFeature([User, Tradesperson]), // Makes entities available for injection in the module
  ],
  exports: [TypeOrmModule], // Export TypeOrmModule for use in other modules
})
export class TypeOrmSharedModule {}
