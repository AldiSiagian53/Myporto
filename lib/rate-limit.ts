const requests = new Map<string, number[]>();

const WINDOW_MS = 60 * 60 * 1000; // 1 jam
const MAX_REQUESTS = 10;

export function rateLimit(key: string) {
  const now = Date.now();

  const timestamps = requests.get(key) ?? [];

  const recentRequests = timestamps.filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    requests.set(key, recentRequests);

    return {
      success: false,
      remaining: 0,
    };
  }

  recentRequests.push(now);

  requests.set(key, recentRequests);

  return {
    success: true,
    remaining: MAX_REQUESTS - recentRequests.length,
  };
}