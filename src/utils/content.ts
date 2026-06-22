type DatedEntry = {
  id: string;
  data: {
    publishedAt: Date;
    featured?: boolean;
  };
};

type GroupedYear = {
  year: string;
  entries: string[];
};

function sortNewestFirst<T extends DatedEntry>(entries: T[]) {
  return [...entries].sort(
    (left, right) =>
      right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  );
}

function pickFeaturedEntry<T extends DatedEntry>(entries: T[]) {
  const featured = entries.find((entry) => entry.data.featured);
  if (featured) {
    return featured;
  }

  return sortNewestFirst(entries)[0];
}

export function pickFeaturedEssay<T extends DatedEntry>(entries: T[]) {
  return pickFeaturedEntry(entries);
}

export function pickFeaturedPhotoStory<T extends DatedEntry>(entries: T[]) {
  return pickFeaturedEntry(entries);
}

export function pickFeaturedWork<T extends DatedEntry>(entries: T[]) {
  return pickFeaturedEntry(entries);
}

export function groupNotesByYear<T extends DatedEntry>(
  entries: T[],
): GroupedYear[] {
  const groups = new Map<string, string[]>();

  for (const entry of sortNewestFirst(entries)) {
    const year = String(entry.data.publishedAt.getUTCFullYear());
    const yearEntries = groups.get(year) ?? [];
    yearEntries.push(entry.id);
    groups.set(year, yearEntries);
  }

  return [...groups.entries()]
    .sort((left, right) => Number(right[0]) - Number(left[0]))
    .map(([year, ids]) => ({
      year,
      entries: ids,
    }));
}

export function formatDisplayDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function entryPermalink(
  section: "writing" | "photography" | "work",
  id: string,
) {
  const slug = id.replace(/\.(md|mdx)$/, "");
  return `/${section}/${slug}/`;
}

export function notePermalink(id: string) {
  const slug = id.replace(/\.(md|mdx)$/, "");
  return `/writing/notes/${slug}/`;
}
