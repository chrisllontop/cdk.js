import { Yaml } from '../lib/yaml';

export class IntegrationProvider {
  constructor() {
    console.log('IntegrationProviders module');
  }

  build() {
    Yaml.generate(this.pipeline);
  }
}