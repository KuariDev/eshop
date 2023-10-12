import { Module } from '@nestjs/common';
import { ProvidersModule } from '@providers/providers.module';
import { ConfigModule } from '@config/config.module';

@Module({
  imports: [
    ProvidersModule,
    ConfigModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
