import { ServiceProvider } from "../../service-provider/entities/service-provider.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity('schedulles')
export class Schedulle extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Client, (client) => client.schedulle)
    @JoinColumn()
    client: Client;

    @ManyToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.schedulle)
    @JoinColumn()
    serviceProvider: ServiceProvider;

    @Column()
    date: string;

    @Column()
    hour: string;
}