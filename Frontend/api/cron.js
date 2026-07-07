export default async function handler(_req, res) {
  const target = process.env.BACKEND_HEALTH_URL || "https://aivaluation-oo5i.onrender.com/health";
  try {
    const r = await fetch(target, { method: "HEAD", cache: "no-store" });
    console.log("Daily ping status:", r.status);
    res.status(200).send("ok");
  } catch (e) {
    console.error("Cron ping failed:", e);
    res.status(500).send("error");
  }
}
