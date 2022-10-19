import { ServiceProvider } from "../../service-provider/entities/service-provider.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity('schedulles')
export class Schedulle extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @OneToOne(() => Client, (client) => client.schedulle)
    @JoinColumn()
    client: Client;

    @OneToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.schedulle)
    @JoinColumn()
    serviceProvider: ServiceProvider;

    @Column()
    date: string;
}