// Page availability configuration
const PAGE_AVAILABILITY = {
  '/': true, // Should always true. Do not change!
  '/about': false,
  '/sportsbook': false,
  // Add more pages here as needed
} as const;

export type AvailablePages = keyof typeof PAGE_AVAILABILITY;

/**
 * Check if a page is available for navigation
 * @param path - The page path to check
 * @returns boolean - true if page is available, false if disabled
 */
export const isPageAvailable = (path: string): boolean => {
  return PAGE_AVAILABILITY[path as AvailablePages] ?? false;
};

/**
 * Get all available pages
 * @returns Array of available page paths
 */
export const getAvailablePages = (): string[] => {
  return Object.entries(PAGE_AVAILABILITY)
    .filter(([, isAvailable]) => isAvailable)
    .map(([path]) => path);
};

/**
 * Get all disabled pages
 * @returns Array of disabled page paths
 */
export const getDisabledPages = (): string[] => {
  return Object.entries(PAGE_AVAILABILITY)
    .filter(([, isAvailable]) => !isAvailable)
    .map(([path]) => path);
};