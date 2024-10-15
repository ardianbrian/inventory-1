import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Item } from 'src/modules/inventory/entities/item.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'inventory_db',
  entities: [Item],
  synchronize: true,
};
