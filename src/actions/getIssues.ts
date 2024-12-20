import { githubApi } from "../api/github.api";
import { sleep } from "../helpers/sleep";
import { IssuesInterfaces } from "../interfaces/issues.interfaces";

export const getIssues = async () => {
    await sleep(2000)
    const { data } = await githubApi.get<IssuesInterfaces[]>("issues");
    return data;
}