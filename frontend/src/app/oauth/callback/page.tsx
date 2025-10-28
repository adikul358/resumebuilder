"use client"

import { useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

export default function OAuthCallback() {
  const searchParams = useSearchParams()

  useEffect(() => {
    (async function () {
        const code = searchParams.get('code')
        if (!code) return;
    
        // const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
        if (window.opener) {
          window.opener.postMessage(
            { type: "google_oauth_success", code },
            window.location.origin
          );
          window.close();
        } else {
          document.body.textContent = "No opener found — can't send data.";
        }
      })()
  }, []);

  return <div>Redirecting...</div>;
}
