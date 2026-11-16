export const AGE_COOKIE = "age_verified";
export const REGION_COOKIE = "ship_region"; // value: "GB:England"

export type Country = { code: string; name: string; regions: string[] };

// Placeholder list: replace with data from your shipping zones.
export const countries: Country[] = [
  {
    code: "GB",
    name: "United Kingdom",
    regions: ["England", "Scotland", "Wales", "Northern Ireland"],
  },
  {
    code: "IE",
    name: "Ireland",
    regions: ["Leinster", "Munster", "Connacht", "Ulster"],
  },
  {
    code: "US",
    name: "United States",
    regions: ["California", "Florida", "New York", "Texas"],
  },
  {
    code: "CA",
    name: "Canada",
    regions: ["Alberta", "British Columbia", "Ontario", "Quebec"],
  },
];

// Placeholder: regions you cannot ship to. Keep in sync with admin Restrictions.
const blocked = new Set<string>(["US:California"]);

export function isBlocked(country: string, region: string) {
  return blocked.has(`${country}:${region}`);
}

export function setCookie(name: string, value: string, days = 30) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${days * 86400}; samesite=lax`;
}
