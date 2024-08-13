import {Cdk} from "../src/cdk";
import {GithubProvider} from "../src/providers/github";


const provider = new GithubProvider();
provider
  .name('Github Pipeline')  
  .on('push')
  .on("branch_protection_rule", {
    types: ["created", "deleted"]
  });

const github = new Cdk(provider);
github.build();