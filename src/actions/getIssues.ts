import { githubApi } from "../api/github.api";
import { sleep } from "../helpers/sleep";
import { IssuesInterfaces } from "../interfaces/issues.interfaces";
import { State } from "../interfaces/labes.interfaces";

export const getIssues = async (state: State) => {
    await sleep(2000)
    const params = new URLSearchParams();
    if (state !== State.All) {
        params.append('state', state)
    }
    const { data } = await githubApi.get<IssuesInterfaces[]>("issues", {
        params
    });
    return data;
}