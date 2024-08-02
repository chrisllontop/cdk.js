import {Cdk} from "../src/cdk";
import {GithubProvider} from "../src/providers/github";


const provider = new GithubProvider();
provider
  .name('Github Pipeline')

const github = new Cdk(provider);
github.build();