'use client';

import Script from 'next/script';
import { marketingScripts } from '@lib/config';

export function MarketingScripts() {
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${marketingScripts.gtmId}');`}
      </Script>
      <Script
        id="ga"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${marketingScripts.gaId}`}
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${marketingScripts.gaId}');`}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${marketingScripts.metaPixel}');fbq('track', 'PageView');`}
      </Script>
      <Script id="pinterest" strategy="afterInteractive">
        {`!function(e){if(!window.pintrk){window.pintrk = function () {window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
        n=window.pintrk;n.queue=[];n.version="3.0";var t=document.createElement("script");t.async=!0;t.src=e;var
        r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}('https://s.pinimg.com/ct/core.js');pintrk('load', '${marketingScripts.pinterestId}', {em: ''});pintrk('page');`}
      </Script>
      <Script id="hotjar" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${marketingScripts.hotjarId},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');
        r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);})(window, document, 'clarity', 'script', '${marketingScripts.clarity}');`}
      </Script>
      <Script id="onesignal" strategy="afterInteractive">
        {`window.OneSignal = window.OneSignal || []; OneSignal.push(function() { OneSignal.init({ appId: '${marketingScripts.onesignal}' }); });`}
      </Script>
      <Script id="mailchimp" strategy="afterInteractive">
        {`(function(c,h,i,m,p){m=c.createElement(h);m.async=1;m.src=i;p=c.getElementsByTagName(h)[0];p.parentNode.insertBefore(m,p);
        })(document,'script','https://chimpstatic.com/mcjs-connected/js/users/placeholder/${marketingScripts.mailchimp.split('id=')[1] || 'id'}.js');`}
      </Script>
    </>
  );
}
