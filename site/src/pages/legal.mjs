/**
 * Impressum / legal notice and Datenschutz / privacy for the website.
 * Provider data from https://heidrich-digital.de/impressum/ (18.10.2026), see config.mjs.
 * [offen] Kleinunternehmer status once the app is sold through Apple (wiki "Website fieravend.de", Impressum).
 * [offen] Legal review of the privacy text; the app gets its own privacy statement before release.
 * Hosting: GitHub Pages (GitHub, Inc.). DNS at Cloudflare without proxy ("DNS only"), so Cloudflare sees no page requests.
 */
import { PROVIDER as P, MAIL } from '../config.mjs';
import { stand, href } from '../layout.mjs';

const addr = (lang) => `${P.name}<br>${P.street}<br>${P.city}<br>${P.country[lang]}`;

export function impressum(lang) {
  const de = lang === 'de';
  const body = de ? `
<section class="page-head page-head-tight"><div class="wrap"><h1>Impressum</h1><p class="small muted">${stand(lang)}</p></div></section>
<section class="band band-tight"><div class="wrap prose">
<h2>Angaben nach § 5 DDG</h2>
<p>Fieravend ist ein Angebot von<br>${addr(lang)}</p>
<p>Geschäftsbezeichnung: ${P.trade}<br>Auftritt unter der Marke „${P.brand}“</p>
<h2>Kontakt</h2>
<p>Telefon: <a href="tel:${P.phoneIntl.replace(/&nbsp;/g, '')}">${P.phone}</a><br>E-Mail: <a href="mailto:${P.mail}">${P.mail}</a></p>
<h2>Umsatzsteuer</h2>
<p>Ich bin Kleinunternehmer nach § 19 UStG und weise keine Umsatzsteuer aus.</p>
<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>${P.name}, ${P.street}, ${P.city}</p>
<h2>Verbraucherstreitbeilegung</h2>
<p>Ich nehme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht teil und bin dazu nicht verpflichtet.</p>
<h2>Hinweis</h2>
<p>Fieravend gibt Hinweise zur Arbeitszeit und ersetzt keine Rechts- oder Steuerberatung. Gesetzesangaben auf dieser Website haben ein Datum und eine Quelle. Sie können sich ändern.</p>
</div></section>` : `
<section class="page-head page-head-tight"><div class="wrap"><h1>Legal notice</h1><p class="small muted">${stand(lang)}</p></div></section>
<section class="band band-tight"><div class="wrap prose">
<p class="small muted">The German version (<a href="${href('impressum', 'de')}" hreflang="de" lang="de">Impressum</a>) is the binding one.</p>
<h2>Information under § 5 DDG (Germany)</h2>
<p>Fieravend is provided by<br>${addr(lang)}</p>
<p>Trading name: ${P.trade}<br>Appearing under the brand “${P.brand}”</p>
<h2>Contact</h2>
<p>Phone: <a href="tel:${P.phoneIntl.replace(/&nbsp;/g, '')}">${P.phoneIntl}</a><br>Email: <a href="mailto:${P.mail}">${P.mail}</a></p>
<h2>VAT</h2>
<p>I am a small business under § 19 of the German VAT Act (UStG) and do not charge VAT.</p>
<h2>Responsible for content under § 18 (2) MStV</h2>
<p>${P.name}, ${P.street}, ${P.city}, ${P.country.en}</p>
<h2>Consumer dispute resolution</h2>
<p>I do not take part in dispute resolution proceedings before a consumer arbitration board and am not obliged to.</p>
<h2>Note</h2>
<p>Fieravend gives hints about working time and is not legal or tax advice. Legal information on this website has a date and a source. It can change.</p>
</div></section>`;
  return {
    title: de ? 'Impressum · Fieravend' : 'Legal notice · Fieravend',
    desc: de ? 'Impressum von Fieravend, einem Werkzeug von Heidrich Digital (Till Heidrich, Tostedt).' : 'Legal notice for Fieravend, a tool by Heidrich Digital (Till Heidrich, Tostedt, Germany).',
    body,
  };
}

export function datenschutz(lang) {
  const de = lang === 'de';
  const body = de ? `
<section class="page-head page-head-tight"><div class="wrap head-grid"><div><h1>Datenschutz</h1><p class="lede">Diese Website setzt keine Cookies, misst nichts und lädt nichts von fremden Servern. Die Schrift liegt auf demselben Server wie die Seite.</p><p class="small muted">${stand(lang)}</p></div></div></section>
<section class="band band-tight"><div class="wrap prose">
<h2>Wer verantwortlich ist</h2>
<p>${addr(lang)}<br>E-Mail: <a href="mailto:${P.mail}">${P.mail}</a></p>
<p>Einen Datenschutzbeauftragten gibt es nicht, weil das Gesetz keinen verlangt.</p>

<h2>Beim Aufruf dieser Website</h2>
<p>Die Website liegt bei GitHub Pages, einem Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Wenn du eine Seite aufrufst, verarbeitet GitHub technisch notwendige Daten, vor allem deine IP-Adresse, Datum und Uhrzeit, die aufgerufene Adresse und deinen Browser. Das ist nötig, damit die Seite ausgeliefert werden kann und sicher bleibt. Rechtsgrundlage ist unser berechtigtes Interesse an einer funktionierenden Website (Art. 6 Abs. 1 lit. f DSGVO).</p>
<p>GitHub kann dabei Daten in die USA übertragen. GitHub ist nach dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO). Mehr dazu in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">Datenschutzerklärung von GitHub</a>.</p>
<p>Die Adresse fieravend.heidrich-digital.de wird bei Cloudflare nur als Namenseintrag (DNS) geführt. Deine Seitenaufrufe laufen nicht über Cloudflare.</p>

<h2>Keine Cookies, keine Analyse</h2>
<p>Wir setzen keine Cookies, nutzen keine Analyse- oder Werbedienste und binden keine Inhalte von anderen Servern ein. Deshalb gibt es auch kein Cookie-Banner.</p>

<h2>Der Überstunden-Rechner</h2>
<p>Der Rechner läuft vollständig in deinem Browser. Was du einträgst, wird nicht gespeichert und nicht verschickt. Wenn du die Seite schließt, ist es weg.</p>

<h2>Wenn du uns eine Mail schreibst</h2>
<p>Schreibst du uns, zum Beispiel um Bescheid zu bekommen, wenn Fieravend im App Store ist, verarbeiten wir deine Adresse und deine Nachricht, um dir zu antworten (Art. 6 Abs. 1 lit. b und f DSGVO). Deine Adresse für die Benachrichtigung nutzen wir nur dafür und löschen sie, sobald wir dir Bescheid gesagt haben. Andere Mails löschen wir, wenn sie erledigt sind und keine gesetzliche Aufbewahrungspflicht besteht. Das Postfach liegt bei unserem Mail-Anbieter, der die Daten in unserem Auftrag verarbeitet.</p>

<h2>Die App</h2>
<p>Die Fieravend-App hat kein Konto und keinen Server. Deine Einträge liegen auf deinem Gerät und, wenn du es einschaltest, in deiner eigenen iCloud bei Apple. Wir sehen sie nicht. Zur App gibt es vor dem Start eine eigene Datenschutzerklärung.</p>

<h2>Deine Rechte</h2>
<p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Schreib dafür an <a href="mailto:${P.mail}">${P.mail}</a>.</p>
<p>Du kannst dich auch bei einer Aufsichtsbehörde beschweren. Für uns zuständig ist <a href="https://www.lfd.niedersachsen.de">die Landesbeauftragte für den Datenschutz Niedersachsen</a>, Prinzenstraße 5, 30159 Hannover.</p>
</div></section>` : `
<section class="page-head page-head-tight"><div class="wrap head-grid"><div><h1>Privacy</h1><p class="lede">This website sets no cookies, measures nothing and loads nothing from other servers. The font lives on the same server as the page.</p><p class="small muted">${stand(lang)}</p></div></div></section>
<section class="band band-tight"><div class="wrap prose">
<p class="small muted">The German version (<a href="${href('datenschutz', 'de')}" hreflang="de" lang="de">Datenschutz</a>) is the binding one.</p>
<h2>Who is responsible</h2>
<p>${addr(lang)}<br>Email: <a href="mailto:${P.mail}">${P.mail}</a></p>
<p>There is no data protection officer, because the law does not require one.</p>

<h2>When you visit this website</h2>
<p>The website is hosted on GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you open a page, GitHub processes technically necessary data, mainly your IP address, date and time, the address you opened and your browser. This is needed to deliver the page and keep it secure. The legal basis is our legitimate interest in a working website (Art. 6(1)(f) GDPR).</p>
<p>GitHub may transfer data to the USA. GitHub is certified under the EU-US Data Privacy Framework (Art. 45 GDPR). More in <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub’s privacy statement</a>.</p>
<p>The address fieravend.heidrich-digital.de is only listed at Cloudflare as a name record (DNS). Your page visits do not go through Cloudflare.</p>

<h2>No cookies, no analytics</h2>
<p>We set no cookies, use no analytics or advertising services and embed no content from other servers. That is why there is no cookie banner.</p>

<h2>The overtime calculator</h2>
<p>The calculator runs entirely in your browser. What you enter is not stored and not sent anywhere. When you close the page, it is gone.</p>

<h2>When you email us</h2>
<p>If you write to us, for example to hear when Fieravend is in the App Store, we process your address and your message to reply (Art. 6(1)(b) and (f) GDPR). We use your address for the notification only for that and delete it once we have told you. Other emails are deleted when they are dealt with and no legal retention period applies. The mailbox is hosted by our email provider, who processes the data on our behalf.</p>

<h2>The app</h2>
<p>The Fieravend app has no account and no server. Your entries live on your device and, if you switch it on, in your own iCloud at Apple. We do not see them. The app will get its own privacy statement before launch.</p>

<h2>Your rights</h2>
<p>You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object (Art. 21). Write to <a href="mailto:${P.mail}">${P.mail}</a>.</p>
<p>You can also complain to a supervisory authority. Ours is <a href="https://www.lfd.niedersachsen.de">the Data Protection Commissioner of Lower Saxony</a> (Die Landesbeauftragte für den Datenschutz Niedersachsen), Prinzenstraße 5, 30159 Hannover, Germany.</p>
</div></section>`;
  return {
    title: de ? 'Datenschutz · Fieravend' : 'Privacy · Fieravend',
    desc: de ? 'Datenschutz auf der Website von Fieravend: keine Cookies, keine Analyse, keine fremden Server. Der Rechner läuft nur im Browser.' : 'Privacy on the Fieravend website: no cookies, no analytics, no third-party servers. The calculator runs only in your browser.',
    body,
  };
}

/** 404 page, both languages on one page (GitHub Pages serves one 404.html). */
export function notFound() {
  return {
    title: 'Seite nicht gefunden · Fieravend',
    desc: 'Diese Seite gibt es nicht.',
    body: `
<section class="page-head"><div class="wrap head-grid"><div>
<h1>Diese Seite gibt es nicht.</h1>
<p class="lede">Vielleicht hat sich die Adresse geändert. <a href="${href('start', 'de')}">Zur Startseite</a></p>
<p class="lede" lang="en">This page does not exist. <a href="${href('start', 'en')}">Go to the English home page</a></p>
</div></div></section>`,
  };
}

export { MAIL };
