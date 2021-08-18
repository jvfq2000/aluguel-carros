import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCse } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCse = container.resolve(ImportCategoryUseCse);

    await importCategoryUseCse.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
