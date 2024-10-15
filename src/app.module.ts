import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { InventoryModule } from './modules/inventory/inventory.module';
import { InventoryController } from './modules/inventory/inventory.controller';
import { InventoryService } from './modules/inventory/inventory.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig), // Pastikan databaseConfig sudah benar
    InventoryModule, // Pastikan InventoryModule sudah dimuat
  ],
})
export class AppModule {}
