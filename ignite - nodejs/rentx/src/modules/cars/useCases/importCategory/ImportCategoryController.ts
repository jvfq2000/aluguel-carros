import { Request, Response } from "express";

import { ImportCategoryUseCse } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCse: ImportCategoryUseCse) {}

  handler(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoryUseCse.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
