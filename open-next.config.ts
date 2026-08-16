import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// This site is fully statically generated (no ISR/revalidate, no dynamic
// routes, no API routes), so the default "dummy" incremental cache/tag
// cache/queue are correct — there's nothing to cache or invalidate at
// runtime. No R2 bucket or other resource needs to be provisioned.
export default defineCloudflareConfig();
