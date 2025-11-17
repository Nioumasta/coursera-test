const messages = {
  fr: 'Offre de lancement : -15% sur les bows personnalisés avec le code CHEER15',
  en: 'Launch offer: 15% off custom bows with code CHEER15',
};

export default function PromoBar({ locale }: { locale: 'fr' | 'en' }) {
  return (
    <div className="bg-midnight text-white text-center text-xs py-2 px-4">
      {messages[locale]}
    </div>
  );
}
