import { fetchUser } from "../utils/fetchLocalStoreData";

const userInfo = fetchUser();

export const initalState = {
  user: userInfo,
};
