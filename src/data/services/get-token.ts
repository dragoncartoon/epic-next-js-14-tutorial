import { cookies } from "next/headers";

export async function getAuthToken() {
  const authToken = cookies().get("jwt")?.value;
  // console.log(authToken)
  return authToken;
}