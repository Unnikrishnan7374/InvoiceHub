import { useEffect } from 'react';

const SITE_NAME = 'INVOICE HUB 360';

/**
 * Sets the document title for the current page.
 * Format: "Page Title | INVOICE HUB 360"
 * If no title is provided, defaults to just the site name.
 */
export default function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    return () => {
      document.title = SITE_NAME;
    };
  }, [title]);
}
