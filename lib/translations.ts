export type Locale = 'en' | 'fr';

type PageKey =
  | 'home'
  | 'catalog'
  | 'product'
  | 'custom'
  | 'clubs'
  | 'teams'
  | 'about'
  | 'contact'
  | 'reviews'
  | 'blog'
  | 'faq'
  | 'policies'
  | 'notFound'
  | 'error';

type Translation = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: string[];
  };
  highlights: { title: string; description: string; icon: string }[];
  seo: {
    keywords: string[];
    faq: { question: string; answer: string }[];
    breadcrumbs: { label: string; href: string }[];
  };
};

export const translations: Record<PageKey, Record<Locale, Translation>> = {
  home: {
    fr: {
      locale: 'fr',
      path: '/fr',
      title: 'Bows de cheerleading premium pour l’Europe',
      description:
        'My Cheer Bowtique conçoit des bows custom, tenues supporters et accessoires de cheerleading livrés en 72h partout en Europe.',
      hero: {
        title: 'Des bows qui font gagner des points et des fans',
        subtitle:
          'Créations sur-mesure pour clubs, fédérations et supporters. Haute tenue, strass résistants, couleurs fidèles aux équipes européennes.',
        ctaPrimary: 'Découvrir le catalogue',
        ctaSecondary: 'Personnaliser un bow',
        badges: ['Livraison Europe 72h', 'Production éthique', 'Expertise cheer & twirling']
      },
      highlights: [
        {
          title: 'SEO leader Europe',
          description: 'Contenu multilingue FR/EN pour performer sur chaque moteur de recherche européen.',
          icon: '🌍'
        },
        {
          title: 'Conversion maximisée',
          description: 'CTA visibles, preuves sociales, urgences stock et upsell intelligents.',
          icon: '⚡'
        },
        {
          title: 'Qualité compétition',
          description: 'Matériaux pro, confort gym et normes des fédérations européennes.',
          icon: '🏆'
        }
      ],
      seo: {
        keywords: [
          'cheerleading europe',
          'bows cheer personnalisés',
          'pompom girl accessoires',
          'twirling baton boutique'
        ],
        faq: [
          {
            question: 'Peut-on personnaliser les bows aux couleurs du club ?',
            answer: 'Oui, nous matchons vos pantones et ajoutons noms, numéros ou drapeaux pour toutes les équipes européennes.'
          },
          {
            question: 'Livrez-vous rapidement dans l’Union européenne ?',
            answer: 'Production prioritaire et livraison express 72h dans l’UE avec suivi en temps réel.'
          }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en',
      title: 'Premium cheer bows for Europe',
      description:
        'My Cheer Bowtique crafts custom bows, supporter wear and accessories delivered in 72h across Europe.',
      hero: {
        title: 'Bows that win judges and fans',
        subtitle:
          'Tailored for clubs, federations and superfans. Competition-grade materials, EU-ready logistics and bold colors.',
        ctaPrimary: 'Browse catalog',
        ctaSecondary: 'Design your bow',
        badges: ['72h EU delivery', 'Ethical production', 'Cheer & twirling experts']
      },
      highlights: [
        {
          title: 'EU SEO dominance',
          description: 'Localized FR/EN content to rank in every European market.',
          icon: '🌍'
        },
        {
          title: 'Conversion-first',
          description: 'High-contrast CTAs, social proof, urgency and smart upsells.',
          icon: '⚡'
        },
        {
          title: 'Competition quality',
          description: 'Pro materials, gym-safe comfort and federation-compliant finishes.',
          icon: '🏆'
        }
      ],
      seo: {
        keywords: [
          'europe cheerleading shop',
          'custom cheer bows',
          'pompom accessories',
          'twirling baton gear'
        ],
        faq: [
          {
            question: 'Can we match team colors and names?',
            answer: 'Yes. We color-match your palette and add names, numbers or flags for every EU program.'
          },
          {
            question: 'Do you ship fast across Europe?',
            answer: 'Priority production with tracked 72h delivery across the EU and UK.'
          }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' }
        ]
      }
    }
  },
  catalog: {
    fr: {
      locale: 'fr',
      path: '/fr/catalogue',
      title: 'Catalogue bows, tenues et accessoires cheer',
      description: 'Sélection prête à expédier et personnalisable pour clubs, supporters et événements.',
      hero: {
        title: 'Catalogue cheer complet',
        subtitle: 'Bows premium, strass haute tenue, vêtements supporters, sacs et accessoires training.',
        ctaPrimary: 'Voir les best-sellers',
        ctaSecondary: 'Demander un devis équipe',
        badges: ['Plus que 3 en stock sur nos best-sellers', 'Remises clubs jusqu’à -20%']
      },
      highlights: [],
      seo: {
        keywords: ['catalogue cheer', 'bows strass', 'vetements supporters'],
        faq: [
          {
            question: 'Quelles tailles et options proposez-vous ?',
            answer: 'Tailles mini à XL, bandeaux antidérapants, strass AB, paillettes holographiques et clips sécurisés.'
          }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Catalogue', href: '/fr/catalogue' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/catalog',
      title: 'Cheer catalog bows, apparel & accessories',
      description: 'Ready-to-ship and customizable picks for clubs, fans and events across Europe.',
      hero: {
        title: 'Full cheer catalog',
        subtitle: 'Premium bows, resilient rhinestones, supporter wear, bags and training gear.',
        ctaPrimary: 'View best-sellers',
        ctaSecondary: 'Request team quote',
        badges: ['Only 3 left on our top bows', 'Club pricing up to -20%']
      },
      highlights: [],
      seo: {
        keywords: ['cheer catalog', 'rhinestone bows', 'supporter apparel'],
        faq: [
          {
            question: 'What sizes and options are available?',
            answer: 'Mini to XL, anti-slip bands, AB rhinestones, holographic glitter and secure clips.'
          }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Catalog', href: '/en/catalog' }
        ]
      }
    }
  },
  product: {
    fr: {
      locale: 'fr',
      path: '/fr/produit/bow-elite',
      title: 'Bow Elite holographique',
      description: 'Bow compétition strass AB, finition holographique et attache sécurisée. Idéal équipes élite.',
      hero: {
        title: 'Bow Elite holographique',
        subtitle: 'Strass AB, double couture et ruban anti-dérapant. Garantie tenue sur acrobaties.',
        ctaPrimary: 'Ajouter au panier',
        ctaSecondary: 'Personnaliser ce modèle',
        badges: ['Plus que 3 en stock', 'Note 4.9/5 par 180 clubs']
      },
      highlights: [],
      seo: {
        keywords: ['bow elite', 'bow holographique cheer'],
        faq: [
          { question: 'Peut-on ajouter le nom de l’équipe ?', answer: 'Oui, broderie ou vinyle découpé en 48h.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Catalogue', href: '/fr/catalogue' },
          { label: 'Bow Elite', href: '/fr/produit/bow-elite' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/product/bow-elite',
      title: 'Elite holographic bow',
      description: 'Competition bow with AB rhinestones, holographic finish and secure grip for elite teams.',
      hero: {
        title: 'Elite holographic bow',
        subtitle: 'AB rhinestones, double stitching and anti-slip band. Guaranteed hold for tumbling.',
        ctaPrimary: 'Add to cart',
        ctaSecondary: 'Customize this design',
        badges: ['Only 3 left', 'Rated 4.9/5 by 180 clubs']
      },
      highlights: [],
      seo: {
        keywords: ['elite bow', 'holographic cheer bow'],
        faq: [
          { question: 'Can we add our team name?', answer: 'Yes, embroidery or cut vinyl in 48h.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Catalog', href: '/en/catalog' },
          { label: 'Elite Bow', href: '/en/product/bow-elite' }
        ]
      }
    }
  },
  custom: {
    fr: {
      locale: 'fr',
      path: '/fr/personnalisation',
      title: 'Atelier de personnalisation cheer',
      description: 'Designer en ligne pour créer bows, tenues et packs supporters aux couleurs de votre équipe.',
      hero: {
        title: 'Designer vos bows en direct',
        subtitle: 'Palette illimitée, strass premium, import de logo et rendu 3D léger pour mobile.',
        ctaPrimary: 'Lancer le designer',
        ctaSecondary: 'Parler à un expert',
        badges: ['Mockup 3D instantané', 'Assistance clubs 7/7']
      },
      highlights: [],
      seo: {
        keywords: ['personnalisation bow', 'designer cheer'],
        faq: [
          { question: 'Offrez-vous des tarifs dégressifs ?', answer: 'Oui dès 10 unités avec contrôle qualité dédié.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Personnalisation', href: '/fr/personnalisation' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/custom',
      title: 'Custom cheer design studio',
      description: 'Online designer to create bows, apparel and supporter packs in your team colors.',
      hero: {
        title: 'Design bows live',
        subtitle: 'Unlimited palette, premium rhinestones, logo upload and lightweight 3D preview.',
        ctaPrimary: 'Open designer',
        ctaSecondary: 'Chat with an expert',
        badges: ['Instant 3D mockup', '7/7 club support']
      },
      highlights: [],
      seo: {
        keywords: ['custom bow designer', 'cheer customization'],
        faq: [
          { question: 'Do you offer volume pricing?', answer: 'Yes from 10 units with dedicated QC.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Customization', href: '/en/custom' }
        ]
      }
    }
  },
  clubs: {
    fr: {
      locale: 'fr',
      path: '/fr/clubs-federations',
      title: 'Offre clubs & fédérations',
      description: 'Packs logotés, stocks tampon, SAV prioritaire et conditions B2B pour l’Europe.',
      hero: {
        title: 'Accords B2B Europe',
        subtitle: 'Stock sécurisé, personnalisation rapide, facturation UE/UK et support onboarding équipes.',
        ctaPrimary: 'Prendre rendez-vous',
        ctaSecondary: 'Recevoir la grille tarifaire',
        badges: ['Logistique multi-pays', 'SAV prioritaire']
      },
      highlights: [],
      seo: {
        keywords: ['cheer b2b', 'federation cheer europe'],
        faq: [
          { question: 'Proposez-vous un portail équipe ?', answer: 'Oui avec réassort rapide et accès restreint par équipe.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Clubs & Fédérations', href: '/fr/clubs-federations' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/clubs-federations',
      title: 'Clubs & federations offer',
      description: 'Logoed packs, buffer stock, priority support and B2B terms across Europe.',
      hero: {
        title: 'EU B2B agreements',
        subtitle: 'Secured stock, fast customization, EU/UK invoicing and onboarding support.',
        ctaPrimary: 'Book a call',
        ctaSecondary: 'Get pricing sheet',
        badges: ['Multi-country logistics', 'Priority support']
      },
      highlights: [],
      seo: {
        keywords: ['cheer b2b europe', 'federation cheer'],
        faq: [
          { question: 'Do you offer a team portal?', answer: 'Yes with fast restock and restricted access per team.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Clubs & Federations', href: '/en/clubs-federations' }
        ]
      }
    }
  },
  teams: {
    fr: {
      locale: 'fr',
      path: '/fr/equipes',
      title: 'Templates SEO pour équipes',
      description: 'Pages dédiées par équipe pour booster le référencement local et les ventes supporters.',
      hero: {
        title: 'Pages équipes prêtes à publier',
        subtitle: 'Templates SEO local, témoignages, boutique fans et livraison européenne.',
        ctaPrimary: 'Créer une page équipe',
        ctaSecondary: 'Parler à un coach SEO',
        badges: ['Optimisé People Also Ask', 'Conversion mobile-first']
      },
      highlights: [],
      seo: {
        keywords: ['page equipe cheer', 'seo local cheer'],
        faq: [
          { question: 'Intégrez-vous les réseaux sociaux ?', answer: 'Oui flux Instagram, vidéos et liens billetterie.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Équipes', href: '/fr/equipes' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/teams',
      title: 'SEO templates for teams',
      description: 'Dedicated team pages to win local search and convert fans into buyers.',
      hero: {
        title: 'Ready-to-publish team pages',
        subtitle: 'Local SEO templates, testimonials, fan shop and EU delivery.',
        ctaPrimary: 'Launch team page',
        ctaSecondary: 'Talk to an SEO coach',
        badges: ['Built for People Also Ask', 'Mobile-first conversions']
      },
      highlights: [],
      seo: {
        keywords: ['team page cheer', 'local seo cheer'],
        faq: [
          { question: 'Can you embed social feeds?', answer: 'Yes Instagram feeds, video and ticketing links.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Teams', href: '/en/teams' }
        ]
      }
    }
  },
  about: {
    fr: {
      locale: 'fr',
      path: '/fr/a-propos',
      title: 'À propos de My Cheer Bowtique',
      description: 'Studio européen spécialisé cheer, fondé par des coaches et gymnastes.',
      hero: {
        title: 'Une équipe d’athlètes pour les athlètes',
        subtitle: 'Fabrication éthique, contrôle qualité renforcé et laboratoire couleur interne.',
        ctaPrimary: 'Rencontrer la fondatrice',
        ctaSecondary: 'Découvrir l’atelier',
        badges: ['Basé en Europe', 'Garantie satisfaction']
      },
      highlights: [],
      seo: {
        keywords: ['a propos cheer', 'atelier bow europe'],
        faq: [
          { question: 'Où produisez-vous ?', answer: 'Dans notre atelier européen avec fournisseurs certifiés.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'À propos', href: '/fr/a-propos' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/about',
      title: 'About My Cheer Bowtique',
      description: 'European cheer studio founded by coaches and athletes.',
      hero: {
        title: 'Athletes crafting for athletes',
        subtitle: 'Ethical manufacturing, strict QC and in-house color lab.',
        ctaPrimary: 'Meet the founder',
        ctaSecondary: 'See the workshop',
        badges: ['Based in Europe', 'Satisfaction guarantee']
      },
      highlights: [],
      seo: {
        keywords: ['about cheer bow', 'europe bow studio'],
        faq: [
          { question: 'Where do you produce?', answer: 'In our European workshop with certified suppliers.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'About', href: '/en/about' }
        ]
      }
    }
  },
  contact: {
    fr: {
      locale: 'fr',
      path: '/fr/contact',
      title: 'Contact & devis express',
      description: 'Parlez à un expert cheer, obtenez un devis en 24h et un plan SXO adapté.',
      hero: {
        title: 'Parlons de vos besoins',
        subtitle: 'Support dédié clubs/fédérations, devis packagé et audit CRO offert.',
        ctaPrimary: 'Demander un devis',
        ctaSecondary: 'Appeler maintenant',
        badges: ['Réponse < 24h', 'Coach dédié']
      },
      highlights: [],
      seo: {
        keywords: ['contact cheer', 'devis bow'],
        faq: [
          { question: 'Pouvez-vous aider sur le sizing ?', answer: 'Oui, guide morpho et tableau tailles pour chaque produit.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Contact', href: '/fr/contact' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/contact',
      title: 'Contact & fast quote',
      description: 'Speak with a cheer specialist, get a quote in 24h and a tailored SXO plan.',
      hero: {
        title: 'Tell us about your needs',
        subtitle: 'Dedicated club/federation support, bundled quotes and free CRO audit.',
        ctaPrimary: 'Request a quote',
        ctaSecondary: 'Call now',
        badges: ['Reply < 24h', 'Dedicated coach']
      },
      highlights: [],
      seo: {
        keywords: ['contact cheer', 'bow quote'],
        faq: [
          { question: 'Can you help with sizing?', answer: 'Yes, morphology guide and sizing tables per product.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Contact', href: '/en/contact' }
        ]
      }
    }
  },
  reviews: {
    fr: {
      locale: 'fr',
      path: '/fr/avis-clients',
      title: 'Avis clients et fédérations',
      description: 'Notes vérifiées, témoignages vidéo et scores Trustpilot pour rassurer vos achats.',
      hero: {
        title: 'Preuves sociales béton',
        subtitle: 'Clubs champions, fédérations nationales et supporters notent 4.9/5 nos bows.',
        ctaPrimary: 'Voir les notes',
        ctaSecondary: 'Laisser un avis',
        badges: ['Trustpilot 4.9/5', 'Garantie qualité']
      },
      highlights: [],
      seo: {
        keywords: ['avis cheer', 'trustpilot cheer'],
        faq: [
          { question: 'Comment vérifiez-vous les avis ?', answer: 'Collecte via Trustpilot, Yotpo et factures clients.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Avis clients', href: '/fr/avis-clients' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/reviews',
      title: 'Customer & federation reviews',
      description: 'Verified ratings, video testimonials and Trustpilot scores to drive confidence.',
      hero: {
        title: 'Rock-solid social proof',
        subtitle: 'Champion clubs, national federations and fans rate our bows 4.9/5.',
        ctaPrimary: 'See ratings',
        ctaSecondary: 'Leave a review',
        badges: ['Trustpilot 4.9/5', 'Quality guarantee']
      },
      highlights: [],
      seo: {
        keywords: ['cheer reviews', 'trustpilot cheer'],
        faq: [
          { question: 'How do you verify reviews?', answer: 'Collection via Trustpilot, Yotpo and paid invoices.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Reviews', href: '/en/reviews' }
        ]
      }
    }
  },
  blog: {
    fr: {
      locale: 'fr',
      path: '/fr/blog',
      title: 'Blog cheerleading Europe',
      description: 'Conseils SXO, tendances bows, guides compétition et stories équipes.',
      hero: {
        title: 'Stories et guides cheer',
        subtitle: 'Contenus optimisés Google Top Stories, FAQ et People Also Ask.',
        ctaPrimary: 'Lire les articles',
        ctaSecondary: 'S’abonner aux nouveautés',
        badges: ['Mises à jour hebdo', 'Rédaction E-E-A-T']
      },
      highlights: [],
      seo: {
        keywords: ['blog cheer', 'actus cheer europe'],
        faq: [
          { question: 'Publiez-vous des templates d’entraînement ?', answer: 'Oui, dossiers téléchargeables et checklists competition.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Blog', href: '/fr/blog' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/blog',
      title: 'Europe cheerleading blog',
      description: 'SXO tips, bow trends, competition guides and team stories.',
      hero: {
        title: 'Cheer stories & guides',
        subtitle: 'Content optimized for Google Top Stories, FAQ and People Also Ask.',
        ctaPrimary: 'Read articles',
        ctaSecondary: 'Subscribe for updates',
        badges: ['Weekly updates', 'E-E-A-T writing']
      },
      highlights: [],
      seo: {
        keywords: ['cheer blog', 'europe cheer news'],
        faq: [
          { question: 'Do you share training templates?', answer: 'Yes, downloadable playbooks and comp checklists.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Blog', href: '/en/blog' }
        ]
      }
    }
  },
  faq: {
    fr: {
      locale: 'fr',
      path: '/fr/faq',
      title: 'FAQ cheer, livraison et personnalisation',
      description: 'Réponses rapides sur tailles, production, retours et délais Europe.',
      hero: {
        title: 'Toutes vos réponses',
        subtitle: 'FAQ structurée pour Featured Snippets et rassurer vos achats.',
        ctaPrimary: 'Poser une question',
        ctaSecondary: 'Télécharger la fiche délais',
        badges: ['FAQ SEO', 'Mise à jour continue']
      },
      highlights: [],
      seo: {
        keywords: ['faq cheer', 'livraison cheer'],
        faq: [
          { question: 'Comment gérer les retours ?', answer: 'Retours sous 30 jours, étiquette prépayée disponible.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'FAQ', href: '/fr/faq' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/faq',
      title: 'FAQ cheer, shipping and customization',
      description: 'Quick answers on sizing, production, returns and EU timelines.',
      hero: {
        title: 'All your answers',
        subtitle: 'SEO-friendly FAQ to win Featured Snippets and drive trust.',
        ctaPrimary: 'Ask a question',
        ctaSecondary: 'Download lead time sheet',
        badges: ['SEO FAQ', 'Continuous updates']
      },
      highlights: [],
      seo: {
        keywords: ['faq cheer', 'shipping cheer'],
        faq: [
          { question: 'How do returns work?', answer: '30-day returns with prepaid label options.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'FAQ', href: '/en/faq' }
        ]
      }
    }
  },
  policies: {
    fr: {
      locale: 'fr',
      path: '/fr/politiques',
      title: 'Conditions, livraison, retours & RGPD',
      description: 'Politiques transparentes sur la confidentialité, les délais et la satisfaction client.',
      hero: {
        title: 'Conditions claires',
        subtitle: 'Mentions légales, RGPD, livraison, retours et remboursement détaillés.',
        ctaPrimary: 'Consulter les conditions',
        ctaSecondary: 'Contacter le DPO',
        badges: ['RGPD ready', 'Processus transparent']
      },
      highlights: [],
      seo: {
        keywords: ['conditions cheer', 'rgpd cheer'],
        faq: [
          { question: 'Comment protégez-vous les données ?', answer: 'Chiffrement, stockage UE et politique cookies conforme.' }
        ],
        breadcrumbs: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Politiques', href: '/fr/politiques' }
        ]
      }
    },
    en: {
      locale: 'en',
      path: '/en/policies',
      title: 'Terms, shipping, returns & privacy',
      description: 'Transparent policies on privacy, delivery times and customer satisfaction.',
      hero: {
        title: 'Clear policies',
        subtitle: 'Legal mentions, GDPR, shipping, returns and refunds explained.',
        ctaPrimary: 'Read the terms',
        ctaSecondary: 'Contact the DPO',
        badges: ['GDPR ready', 'Transparent process']
      },
      highlights: [],
      seo: {
        keywords: ['cheer terms', 'gdpr cheer'],
        faq: [
          { question: 'How do you secure data?', answer: 'Encryption, EU storage and compliant cookie policy.' }
        ],
        breadcrumbs: [
          { label: 'Home', href: '/en' },
          { label: 'Policies', href: '/en/policies' }
        ]
      }
    }
  },
  notFound: {
    fr: {
      locale: 'fr',
      path: '/fr/404',
      title: 'Page introuvable',
      description: 'La page demandée n’existe plus. Retour au shop cheer.',
      hero: {
        title: 'On dirait un salto raté',
        subtitle: 'La page est introuvable. Revenez vers le catalogue ou contactez-nous.',
        ctaPrimary: 'Retour accueil',
        ctaSecondary: 'Contacter le support',
        badges: []
      },
      highlights: [],
      seo: { keywords: [], faq: [], breadcrumbs: [] }
    },
    en: {
      locale: 'en',
      path: '/en/404',
      title: 'Page not found',
      description: 'This page does not exist. Back to the cheer shop.',
      hero: {
        title: 'Looks like a missed stunt',
        subtitle: 'Page not found. Return to catalog or contact us.',
        ctaPrimary: 'Back home',
        ctaSecondary: 'Contact support',
        badges: []
      },
      highlights: [],
      seo: { keywords: [], faq: [], breadcrumbs: [] }
    }
  },
  error: {
    fr: {
      locale: 'fr',
      path: '/fr/500',
      title: 'Erreur serveur',
      description: 'Nous avons manqué un beat. Essayez à nouveau.',
      hero: {
        title: 'Un backflip à corriger',
        subtitle: 'Nos équipes réparent. Rechargez ou contactez-nous.',
        ctaPrimary: 'Recharger',
        ctaSecondary: 'Écrire au support',
        badges: []
      },
      highlights: [],
      seo: { keywords: [], faq: [], breadcrumbs: [] }
    },
    en: {
      locale: 'en',
      path: '/en/500',
      title: 'Server error',
      description: 'We missed a beat. Please try again.',
      hero: {
        title: 'Fixing this stunt',
        subtitle: 'Our squads are on it. Refresh or contact us.',
        ctaPrimary: 'Refresh',
        ctaSecondary: 'Email support',
        badges: []
      },
      highlights: [],
      seo: { keywords: [], faq: [], breadcrumbs: [] }
    }
  }
};

export const itemListPages = ['home','catalog','product','custom','clubs','teams','about','contact','reviews','blog','faq','policies'] as const;
