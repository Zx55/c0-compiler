import * as fs from 'fs';
import HashSet from './hashset';


export const readCodefromFile = (fileName: string): string => {
    if (fs.existsSync(fileName)) {
        fs.readFile(fileName, { encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return err.message;
            } else {
                return data;
            }
        })
    } else {
        return 'file not exist';
    }
};

export { HashSet };
