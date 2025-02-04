import { redirect } from "react-router-dom";

export default async function requireAuth(verify) {
  const isLoggedIn = verify ? verify : false;

  if (!isLoggedIn) {
    const response = redirect("/login?message=You Have to Login First.");
    response.body = true; // It's silly, but it works
    return response;
  }
  return null;
}
