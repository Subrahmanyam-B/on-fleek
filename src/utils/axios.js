import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const client = axios.create({ baseURL: URL });
