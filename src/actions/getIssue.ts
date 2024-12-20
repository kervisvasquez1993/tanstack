import { githubApi } from "../api/github.api";
import { sleep } from "../helpers/sleep";
import { IssuesInterfaces } from "../interfaces/issues.interfaces";

export const getIssue = async (issueNumber: number) => {
    await sleep(2000)
    const { data } = await githubApi.get<IssuesInterfaces>(`issues/${issueNumber}`);
    return data;
}