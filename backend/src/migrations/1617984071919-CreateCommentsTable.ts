import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCommentsTable1617984071919 implements MigrationInterface {
  name = 'CreateCommentsTable1617984071919';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "comment" ("id" SERIAL NOT NULL, "body" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "authorId" integer, "blogId" integer, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_276779da446413a0d79598d4fbd" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_5dec255234c5b7418f3d1e88ce4" FOREIGN KEY ("blogId") REFERENCES "blog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_5dec255234c5b7418f3d1e88ce4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_276779da446413a0d79598d4fbd"`,
    );
    await queryRunner.query(`DROP TABLE "comment"`);
  }
}
