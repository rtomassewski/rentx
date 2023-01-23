import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("specifications")
class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  /* metodo constructor e chamado quando a clase eh instnaciada */

  constructor() {
    if (!this.id) {
      // se nao tiver nenhum id

      this.id = uuidV4();
    } // id recebe um valor do UUIDV4
  }
}

export { Specification };
