import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { Item } from './entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])], // Menghubungkan entitas Item
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
