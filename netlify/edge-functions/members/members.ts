// Gate for /members/*: only signed-in Salvage Health members get the page.
// The browser keeps a short-lived "sh-at" cookie (Supabase access token, set by /assets/auth.js).
// We confirm it with Supabase on every members page request. No valid token -> login page.
import { SB_URL, SB_KEY } from "./config.ts";

export default async (req: Request, context: { next: () => Promise<Response> }) => {
  const url = new URL(req.url);
  const login = new URL("/members/login/", url);
  if (url.pathname !== "/members/" && url.pathname !== "/members") login.searchParams.set("next", url.pathname);

  const m = (req.headers.get("cookie") || "").match(/(?:^|;\s*)sh-at=([^;]+)/);
  if (!SB_URL || !SB_KEY || !m) return Response.redirect(login.toString(), 302);

  try {
    const r = await fetch(`${SB_URL}/auth/v1/user`, { headers: { apikey: SB_KEY, Authorization: `Bearer ${m[1]}` } });
    if (!r.ok) return Response.redirect(login.toString(), 302);
  } catch {
    return Response.redirect(login.toString(), 302);
  }

  const res = await context.next();
  const out = new Response(res.body, res);
  out.headers.set("Cache-Control", "private, no-store");
  out.headers.set("X-Robots-Tag", "noindex, nofollow");
  return out;
};

export const config = { path: ["/members", "/members/*"], excludedPath: ["/members/login", "/members/login/*"] };
