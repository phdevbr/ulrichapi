import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UsersModule, ProductsModule, CompaniesModule],
})
export class AppModule {}
