import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany } from 'typeorm';

import { Article } from './Article';
import { Levels } from './enums';
import { User } from './User';

@Entity()
export class Author extends User {

    @Column()
    @IsNotEmpty()
    public school: string;

    @Column()
    @IsNotEmpty()
    public biography: string;

    @Column()
    @IsDefined()
    @IsString()
    public country: string;

    @Column({
        nullable: true,
    })
    public teacher: string;

    @Column({
        nullable: true,
    })
    public profile: string;

    @ManyToMany(type => Article, article => article.authors)
    public articles: Article[];

    constructor() {
        super();
        this.level = Levels.AUTHOR;
    }
}
