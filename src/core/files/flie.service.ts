import { promises } from "fs";
import { dirname, isAbsolute, join } from "path";

export class FileService {
    private async isExist(path: string) {
        try {
            await promises.stat(path);
            return true;
        } catch {
            return false;
        }
    }
    public getFilePath(path: string, name: string, ext: string) {
        if (!isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + name + '.' + ext);
    }

    async deleteFileIfExist(path: string) {
        const isExist = await this.isExist(path);
        if (isExist) {
            await promises.unlink(path);
        }
    }
}