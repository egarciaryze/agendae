import { Schedulle } from "../../client/entities/schedulle.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "../../users/users.entity";

@Entity('service_providers')
export class ServiceProvider extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    companyName: string;

    @Column()
    taxId: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToOne(() => User, (user) => user.client)
    @JoinColumn()
    user: User;

    @OneToOne(() => Schedulle, (schedulle) => schedulle.client)
    schedulle: Schedulle
}
