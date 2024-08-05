import YAML from 'yaml'
import fs from 'fs';
import type { ProviderValues } from '../types/providers/provider';

export class IntegrationProvider {
  constructor() {
    console.log('IntegrationProviders module');
  }

  build(prefixPath: ProviderValues) {
    const filePath = `${prefixPath}-pipeline.yml`

    const doc = new YAML.Document();
    doc.contents = this.pipeline;

    fs.writeFileSync(filePath, doc.toString());
  }
}