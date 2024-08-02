import {Cdk} from "../src/cdk";
import {GithubProvider} from "../src/providers/github";


const provider = new GithubProvider();

const github = new Cdk(provider);
github.build();