import { Client } from "../client/entities/client.entity";
import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { ServiceProvider } from "../service-provider/entities/service-provider.entity";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(() => Client, (client) => client.user)
    client: Client

    @OneToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.user)
    serviceProvider: ServiceProvider
}