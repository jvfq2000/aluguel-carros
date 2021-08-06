import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCse } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCse();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
