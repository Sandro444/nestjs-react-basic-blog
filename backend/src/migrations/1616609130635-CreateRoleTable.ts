import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRoleTable1616609130635 implements MigrationInterface {
  name = 'CreateRoleTable1616609130635';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "role_name_enum" AS ENUM('user', 'publisher', 'administrator')`,
    );
    await queryRunner.query(
      `CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" "role_name_enum" NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TYPE "role_name_enum"`);
  }
}
