import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCse } from "./ImportCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const importCategoryUseCase = new ImportCategoryUseCse(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
