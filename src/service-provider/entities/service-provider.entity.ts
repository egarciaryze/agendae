import { Schedulle } from "../../client/entities/schedulle.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "../../users/users.entity";

@Entity('service_providers')
export class ServiceProvider extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToOne(() => User, (user) => user.client)
    @JoinColumn()
    user: User;

    @OneToMany(() => Schedulle, (schedulle) => schedulle.client)
    schedulle: Schedulle
}
