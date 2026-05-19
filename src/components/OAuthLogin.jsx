import React, { useState } from "react";

/** OAuth Login Component */
export default function OAuthLogin() {
    const [open, setOpen] = useState(false);
    const rootRef = React.useRef(null);

    const oauthProviders = [
        {
            name: "Google",
            icon: "https://www.google.com/favicon.ico",
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
            authUrl: "https://accounts.google.com/o/oauth2/v2/auth"
        },
        {
            name: "GitHub",
            icon: "https://github.com/favicon.ico",
            clientId: import.meta.env.VITE_GITHUB_CLIENT_ID || "",
            authUrl: "https://github.com/login/oauth/authorize"
        },
        {
            name: "Bit Bucket",
            icon: "https://bitbucket.org/favicon.ico",
            clientId: import.meta.env.VITE_BITBUCKET_CLIENT_ID || "",
            authUrl: "https://bitbucket.org/site/oauth2/authorize"
        },
        {
            name: "Microsoft Live",
            icon: "https://www.microsoft.com/favicon.ico",
            clientId: import.meta.env.VITE_MICROSOFT_CLIENT_ID || "",
            authUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
        }
    ];

    const handleOAuthLogin = (provider) => {
        const redirectUri = `${window.location.origin}/oauth-callback`;
        const params = new URLSearchParams({
            client_id: provider.clientId,
            redirect_uri: redirectUri,
            response_type: "code",
            scope: "openid profile email"
        });

        if (provider.name === "GitHub") {
            params.set("scope", "user:email");
        } else if (provider.name === "Bit Bucket") {
            params.set("scope", "account team");
        } else if (provider.name === "Microsoft Live") {
            params.set("scope", "openid profile email");
        }

        window.location.href = `${provider.authUrl}?${params.toString()}`;
    };

    React.useEffect(() => {
        const onDoc = (e) => {
            if (!open) return;
            if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
        };
        const onEsc = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDoc);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDoc);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open]);

    return (
        <div className="nav-settings" ref={rootRef}>
            <button
                className="nav-login-btn"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
            >
                {/* login icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                <span className="nav-login-label">Login</span>
            </button>

            {open && (
                <div className="nav-pop" role="menu" aria-label="Login">
                    <div className="nav-pop-title">Sign in via OAuth</div>
                    {oauthProviders.map((provider) => (
                        <button
                            key={provider.name}
                            role="menuitem"
                            className="nav-pop-item oauth-provider-btn"
                            onClick={() => handleOAuthLogin(provider)}
                        >
                            <span className="oauth-provider-icon">{provider.name[0]}</span>
                            {provider.name}
                        </button>
                    ))}
                    <div className="nav-pop-divider" style={{ margin: "8px 0", height: "1px", background: "currentColor", opacity: 0.2 }} />
                    <div className="nav-pop-subtitle" style={{ fontSize: "0.75rem", padding: "8px 12px", opacity: 0.6 }}>
                        Access: Backoffice, metallink.online, CMS, Database Management
                    </div>
                </div>
            )}
        </div>
    );
}
