import { User } from "../../users/users.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Schedulle } from "./schedulle.entity";

@Entity('clients')
export class Client extends BaseEntity {
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
