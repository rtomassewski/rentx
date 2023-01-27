import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private spececificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.spececificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new AppError("Specification Already Exists!");
    }
    await this.spececificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
