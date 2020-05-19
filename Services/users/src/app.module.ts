import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
	  DatabaseModule,
	  AuthModule,
	  UsersModule,
	  RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
