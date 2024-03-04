import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1709554301090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.city (
                id integer NOT NULL,
                state_id integer NOT NULL,
                name character varying NOT NULL,
                create_at timestamp without time zone DEFAULT now() NOT NULL,
                update_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (state_id) references public.state(id)
            );
        
            CREATE SEQUENCE public.city_seq_id
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.city_seq_id OWNED BY public.city.id;

            ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_seq_id'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.city;
        `);
    }

}
