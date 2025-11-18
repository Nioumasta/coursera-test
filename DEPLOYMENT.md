# Déploiement Vercel

1. **Installer les dépendances** : `npm install`.
2. **Variables** : configurer les IDs de suivi dans `lib/config.ts` et `VERCEL_URL` pour le domaine final.
3. **Build** : `npm run build` déclenche la génération hybride SSG/SSR, la sitemap et robots sont automatiques.
4. **Images** : stocker les assets dans `public/images` (WebP/AVIF). Activer le cache CDN Vercel.
5. **Environnements** : activer `EDGE` ou `CDN caching` pour les routes statiques, précharger les polices via Next/font si besoin.
6. **Sécurité** : forcer HTTPS, en-têtes `Content-Security-Policy`, `X-Frame-Options`, et activer la protection Vercel DDoS.
7. **Monitoring** : connecter Google Search Console et vérifier les hreflang, Web Vitals et Index Coverage.
