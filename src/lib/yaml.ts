import YAML from 'yaml';
import fs from 'fs';
import slugify from 'slugify';

export class Yaml {
    constructor() {}

    static write(document, filPath: string) {
        const slugifyPath = slugify(filPath.toLowerCase());
        fs.writeFileSync(`${slugifyPath}.yml`, document.toString());
       
    }

    static generate (pipeline) {
        const doc = new YAML.Document();
        doc.contents = pipeline;
        return Yaml.write(doc, pipeline.name)
    }
}