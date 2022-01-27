import axios from "axios";
import { getWinesUrl } from "./base_urls";

export const fetchAllWines = async () => {
    const response = await axios.get(getWinesUrl)
    const wines = response.data
    return wines
}
