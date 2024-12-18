import { githubApi } from "../api/github.api";
import { sleep } from "../helpers/sleep";
import { GithubLabel } from "../interfaces/labes.interfaces";

export const getLabels = async (): Promise<GithubLabel[]> => {
    await sleep(1500);
    // const resp = await fetch(
    //   "https://api.github.com/repos/facebook/react/labels"
    // ).then((r) => r.json());
    // console.log(resp);
    // return resp;

    const { data } = await githubApi.get<GithubLabel[]>("labels");
    console.log(data);
    return data;
};
