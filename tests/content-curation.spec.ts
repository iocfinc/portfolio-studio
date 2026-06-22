import { describe, expect, it } from "vitest";

import {
  groupNotesByYear,
  pickFeaturedEssay,
  pickFeaturedPhotoStory,
  pickFeaturedWork,
} from "../src/utils/content";

const essays = [
  {
    id: "systems-observation",
    data: {
      title: "Systems Need Better Witnesses",
      publishedAt: new Date("2026-05-01"),
      featured: false,
    },
  },
  {
    id: "field-notes",
    data: {
      title: "Field Notes for Product Discovery",
      publishedAt: new Date("2026-05-20"),
      featured: true,
    },
  },
];

const photoStories = [
  {
    id: "bangkok-night-walk",
    data: {
      title: "Bangkok Night Walk",
      publishedAt: new Date("2026-05-10"),
      featured: true,
    },
  },
  {
    id: "commuter-light",
    data: {
      title: "Commuter Light",
      publishedAt: new Date("2026-05-18"),
      featured: false,
    },
  },
];

const work = [
  {
    id: "portfolio-studio",
    data: {
      title: "Portfolio Studio",
      publishedAt: new Date("2026-05-15"),
      featured: false,
    },
  },
  {
    id: "tradingagents-packets",
    data: {
      title: "TradingAgents Packets",
      publishedAt: new Date("2026-05-21"),
      featured: true,
    },
  },
];

const notes = [
  {
    id: "cities-001",
    data: {
      title: "Cities sharpen product taste",
      publishedAt: new Date("2026-04-11"),
    },
  },
  {
    id: "systems-001",
    data: {
      title: "Observation should leave evidence",
      publishedAt: new Date("2026-05-03"),
    },
  },
  {
    id: "systems-002",
    data: {
      title: "Editorial systems reduce friction",
      publishedAt: new Date("2025-12-31"),
    },
  },
];

describe("content curation", () => {
  it("prefers explicitly featured items for the homepage callouts", () => {
    expect(pickFeaturedEssay(essays)?.id).toBe("field-notes");
    expect(pickFeaturedPhotoStory(photoStories)?.id).toBe("bangkok-night-walk");
    expect(pickFeaturedWork(work)?.id).toBe("tradingagents-packets");
  });

  it("falls back to the newest item when no featured flag exists", () => {
    const fallback = pickFeaturedEssay(
      essays.map((entry) => ({
        ...entry,
        data: {
          ...entry.data,
          featured: false,
        },
      })),
    );

    expect(fallback?.id).toBe("field-notes");
  });

  it("groups notes by year in reverse chronological order", () => {
    expect(groupNotesByYear(notes)).toEqual([
      {
        year: "2026",
        entries: ["systems-001", "cities-001"],
      },
      {
        year: "2025",
        entries: ["systems-002"],
      },
    ]);
  });
});
