import {type ProviderInstance, type ProviderValues} from "./types/providers/provider.ts";

export class Cdk {
  provider;
  constructor(provider: ProviderInstance) {
    this.provider = provider;
  }

  getProvider() {
    return this.provider;
  }

  build() {
    this.provider.build();
  }

}