import { User } from "../../users/users.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Schedulle } from "./schedulle.entity";

@Entity('clients')
export class Client extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    taxId: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToOne(() => User, (user) => user.client) // specify inverse side as a second parameter
    @JoinColumn()
    user: User;

    @OneToOne(() => Schedulle, (schedulle) => schedulle.client)
    schedulle: Schedulle
}
