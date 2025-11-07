import type { NewsItem } from "@/lib/news";

function formatRelative(date: Date) {
  const now = new Date();
  const delta = Math.max(0, now.getTime() - date.getTime());

  const minutes = Math.floor(delta / (60 * 1000));
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  });
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a className="news-card" href={item.link} target="_blank" rel="noopener noreferrer">
      <header>
        <span className="news-meta">
          <span>{item.source}</span>
        </span>
      </header>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <footer>
        <span>{formatRelative(item.publishedAt)}</span>
        <span>Read →</span>
      </footer>
    </a>
  );
}
