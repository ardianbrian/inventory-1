import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.inventoryService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inventoryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto) {
    return this.inventoryService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inventoryService.remove(id);
  }
}
