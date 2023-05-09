import {Entity, PrimaryGeneratedColumn,PrimaryColumn, Column} from 'typeorm'



@Entity() 
export class users {
    @PrimaryGeneratedColumn('increment')
    userid: number;

    @Column({ nullable: true })
    name: string ;

    @Column({ nullable: true })
    email: string ;

    @Column({ nullable: true })
    password: string ;

    @Column({default: false})
    role: boolean ;
}