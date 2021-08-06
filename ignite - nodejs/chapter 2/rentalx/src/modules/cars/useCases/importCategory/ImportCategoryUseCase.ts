import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCse {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async line => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCse };
