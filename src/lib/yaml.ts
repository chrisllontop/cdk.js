import YAML from 'yaml';
import fs from 'fs';
import slugify from 'slugify';
import type { GitHubActionsWorkflow } from '../providers/github/types';

export class Yaml {
    constructor() {}

    static write(document: YAML.Document<YAML.Node, true>, filPath: string) {
        const slugifyPath = slugify(filPath.toLowerCase());
        fs.writeFileSync(`${slugifyPath}.yml`, document.toString());
       
    }

    static generate (pipeline: GitHubActionsWorkflow) {
        const doc = new YAML.Document();
        doc.contents = doc.createNode(pipeline);
        return Yaml.write(doc, pipeline.name as string)
    }
}