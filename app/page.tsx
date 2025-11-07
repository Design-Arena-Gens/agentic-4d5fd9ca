import { NewsCard } from "./components/news-card";
import { getTodayNews } from "@/lib/news";

export default async function Page() {
  const news = await getTodayNews();
  const refreshedAt = new Date();

  return (
    <main>
      <h1>Today&apos;s Headlines</h1>
      <p className="lede">
        A live mix of global reporting pulled from trusted publishers every time you load the page.
      </p>
      <section className="news-grid">
        {news.length === 0 && <p>No fresh stories right now. Try again shortly.</p>}
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </section>
      <p style={{ marginTop: "2.5rem", opacity: 0.6, fontSize: "0.85rem" }}>
        Updated {refreshedAt.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}
      </p>
    </main>
  );
}
