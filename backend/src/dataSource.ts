import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { Tradesperson } from './tradesperson/tradesperson.entity';
import { Resident } from './resident/resident.entity';
//import { FaultReport } from './faultReport/faultReport.entity';
import { Booking } from './booking/booking.entity';
//import { Notification } from './notification/notification.entity';
//import { MaintenanceEngineer } from './maintenanceEngineer/maintenanceEngineer.entity';
// Add additional entities here if needed

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',  // replace with your actual host
  port: 5432,         // replace with your actual port if different
  username: 'postgres', // replace with your actual username
  password: '', // replace with your actual password
  database: 'keys_db', // replace with your actual database name
  synchronize: false,
  logging: true,
  entities: [
    User,
    Tradesperson,
    Resident,
    //FaultReport,
    Booking,
    Notification,
    //MaintenanceEngineer,
    // Add additional entities here
  ],
  migrations: ['./src/migrations/*.ts'], // Point to your migrations directory
  subscribers: [],
});

export default AppDataSource;
