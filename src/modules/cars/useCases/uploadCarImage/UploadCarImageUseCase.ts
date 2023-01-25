import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
    constructor(){
      @inject("CarsImageRepository")
  }
  async execute({ car_id, images_name }: IRequest) {}
}

export { UploadCarImageUseCase };
