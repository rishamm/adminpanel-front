import { getLocalStore } from "../../../utils/index"

export const auth = () => {
    const token = getLocalStore('accessToken');
    return token ? true : false;
}
