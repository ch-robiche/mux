/**
 * Default model utilities for use across contexts (browser, CLI, etc.)
 */

import { defaultModel } from "@/common/utils/ai/models";

/**
 * Get the default model for CLI and non-browser contexts
 * This is a simplified version that doesn't access browser localStorage
 */
export function getDefaultModel(): string {
  return defaultModel;
}
