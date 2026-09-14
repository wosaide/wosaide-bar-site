# wosaide.com deployment

Production layout on `72.62.255.34`:

- Traefik remains the public edge on ports 80/443 and owns Let's Encrypt certificates.
- `wosaide-web` is an internal Nginx container behind Traefik.
- `/srv/wosaide/bar` -> `https://wosaide.com/bar/`
- `/srv/wosaide/download` -> `https://wosaide.com/download/`
- `/srv/wosaide/update` -> `https://wosaide.com/update/`
- `/api/` is reserved and intentionally returns 503 until a backend is attached.

Build the static site for the `/bar` base path:

```bash
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/bar npm run build:pages
```

Deploy the contents of `out/` into `/srv/wosaide/bar/`, then run the compose stack from `/docker/wosaide-web`.

## Recommended next DNS layer

After adding A records to `72.62.255.34`, promote the service surfaces to dedicated hostnames:

- `api.wosaide.com`
- `download.wosaide.com`
- `update.wosaide.com`

Keep the path endpoints during migration for compatibility, then add Traefik host routers for the new names. Do not replace the current Traefik edge with host Nginx while other Docker services depend on Traefik.
