import { RepoProperties } from "../interface/interface";
import axios from "axios";

export async function loadRepo() {
    const { data } = await axios.get<RepoProperties[]>("https://api.github.com/users/mpotane/repos?sort=updated");
    return data;
};