import { AbstractIntlMessages } from "next-intl";
import { Prospectus, ProspectusLabels } from "@/types/prospectus.types";

function extractProspectusFromMessages(messages: any): {
  items: Prospectus[];
  labels: ProspectusLabels;
} {
  const labelsMsg = (messages?.prospectus?.labels ?? {}) as ProspectusLabels;
  const uniArr = messages?.hero?.universities ?? [];
  if (!Array.isArray(uniArr))
    throw new Error("messages.hero.universities is not an array");

  const items: Prospectus[] = [];
  let titleFromGroup: string | undefined;
  let subtitleFromGroup: string | undefined;
  const slugSet = new Set<string>();
  const abbrSet = new Set<string>();

  for (const entry of uniArr) {
    const p = entry?.prospectus;
    if (!p) continue;

    // GROUP schema: keys like tierA, tierB ...
    const keys = Object.keys(p);
    const tierKeys = keys.filter((k) => /^tier[A-Z]$/i.test(k));
    if (tierKeys.length) {
      titleFromGroup = titleFromGroup ?? p.title;
      subtitleFromGroup = subtitleFromGroup ?? p.subtitle;
      for (const tierKey of tierKeys) {
        const arr = p[tierKey];
        if (!Array.isArray(arr)) continue;
        const tier = tierKey.replace(/^tier/i, "");
        for (const r of arr) {
          if (!r?.slug || !r?.name || !r?.city || !r?.abbr) continue;
          const itm: Prospectus = { tier, ...r } as Prospectus;
          if (slugSet.has(itm.slug)) console.warn("Duplicate slug:", itm.slug);
          if (abbrSet.has(itm.abbr)) console.warn("Duplicate abbr:", itm.abbr);
          slugSet.add(itm.slug);
          abbrSet.add(itm.abbr);
          items.push(itm);
        }
      }
      continue;
    }

    // FLAT fallback
    if (p.slug && p.name && p.city && p.abbr && p.tier) {
      const itm = p as Prospectus;
      if (slugSet.has(itm.slug)) console.warn("Duplicate slug:", itm.slug);
      if (abbrSet.has(itm.abbr)) console.warn("Duplicate abbr:", itm.abbr);
      slugSet.add(itm.slug);
      abbrSet.add(itm.abbr);
      items.push(itm);
    }
  }

  if (!items.length)
    throw new Error("No prospectus entries found (grouped or flat)");

  const labels: ProspectusLabels = {
    title: titleFromGroup ?? labelsMsg.title ?? "Prospectus",
    subtitle: subtitleFromGroup ?? labelsMsg.subtitle ?? "",
    sections: labelsMsg.sections,
  };

  return { items, labels };
}
