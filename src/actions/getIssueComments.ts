import { githubApi } from "../api/github.api";
import { sleep } from "../helpers/sleep";
import { IssuesInterfaces } from "../interfaces/issues.interfaces";
import { IssuesCommentInterfaces } from "../interfaces/issuesComment.interfaces";

export const getIssueComment = async (issueNumber: number) => {
    await sleep(2000)
    const { data } = await githubApi.get<IssuesInterfaces[]>(`issues/${issueNumber}/comments`);
    return data;
}