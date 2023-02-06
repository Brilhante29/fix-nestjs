import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    context: ({ req }: any) => ({ req }),
    autoSchemaFile: true,

  }),

  UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
