/**
 * Impressum / legal notice and Datenschutz / privacy for the website.
 * Provider data from https://heidrich-digital.de/impressum/ (18.10.2026), see config.mjs.
 * [offen] Kleinunternehmer status once the app is sold through Apple (wiki "Website fieravend.de", Impressum).
 * [offen] Legal review of the privacy text.
 * App section (21.10.2026) checked against the code: ArrivalMonitor (CLMonitor, place only in UserDefaults), RotaRecognizer
 * (VNRecognizeTextRequest, image not stored), CalendarExportView (EKEventStore, own calendar), AppLock (LAContext),
 * SwiftDataRepository (cloudKitDatabase .private), PhoneWatchLink/WatchStore (WCSession), Purchases (StoreKit). No URLSession.
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
<section class="page-head page-head-tight"><div class="wrap head-grid"><div><h1>Datenschutz</h1><p class="lede">Diese Website setzt keine Cookies, misst nichts und lädt nichts von fremden Servern. Die Schrift liegt auf demselben Server wie die Seite. Wie die App mit deinen Daten umgeht, steht <a href="#app">weiter unten</a>.</p><p class="small muted">${stand(lang)}</p></div></div></section>
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

<h2 id="app">Die App</h2>
<p>Dieser Abschnitt gilt für die Fieravend-App auf iPhone, iPad und Apple Watch. Verantwortlich ist dieselbe Person wie oben und im <a href="${href('impressum', lang)}">Impressum</a>.</p>
<p>Kurz gesagt: Die App hat kein Konto, keinen eigenen Server und keine Analyse-, Tracking- oder Werbe-Dienste. Wir bekommen von dir über die App keine Daten. Deine Einträge sehen nur du und die Geräte, die du selbst nutzt.</p>
<h3>Wo deine Daten liegen</h3>
<p>Alles, was du einträgst (Jobs, Stempelzeiten, Pausen, Urlaub, Notizen, Einstellungen), speichert die App auf deinem Gerät. Bist du auf dem Gerät mit iCloud angemeldet, legt die App eine Kopie in deiner privaten iCloud-Datenbank bei Apple ab (CloudKit), damit deine Geräte denselben Stand haben. Das schaltest du in den iCloud-Einstellungen deines iPhones für Fieravend ein oder aus. Diesen Bereich kannst nur du mit deiner Apple-ID lesen. Wir haben darauf keinen Zugriff. Für iCloud gelten die Bedingungen und die Datenschutzerklärung von Apple.</p>
<p>Widgets und die Anzeige auf dem Sperrbildschirm lesen dieselben Daten auf deinem Gerät. Es gibt keine Verbindung zu einem Server von uns.</p>
<h3>Apple Watch</h3>
<p>Deine Daten bleiben auf dem iPhone. Die Uhr bekommt vom iPhone den Stand von heute und schickt nur deinen Tipp zurück, etwa Einstempeln, Pause oder Ausstempeln. Beide sprechen direkt miteinander über die Verbindung, die Apple dafür vorsieht (WatchConnectivity), ohne Server dazwischen.</p>
<h3>Was die App nur auf deinen Wunsch nutzt</h3>
<p>Jede dieser Sachen ist aus, bis du sie einschaltest. iOS fragt dich vorher um Erlaubnis, und du kannst sie in den Einstellungen deines iPhones jederzeit wieder entziehen.</p>
<ul>
<li><b>Standort</b>, nur für die Erinnerung am Arbeitsort. Du legst einen Ort fest, und iOS meldet der App, wenn du ihn betrittst oder verlässt. Dann fragt Fieravend mit einer Mitteilung, ob du ein- oder ausstempeln willst. Die App stempelt nie von selbst. Der Ort bleibt nur auf diesem Gerät, er geht nicht in iCloud, nicht ins Backup und nicht an uns.</li>
<li><b>Kamera und Fotos</b>, nur zum Scannen eines Dienstplans. Die Texterkennung läuft auf deinem Gerät. Das Bild wird nicht gespeichert, übernommen werden nur die Dienste, die du in der Vorschau bestätigst.</li>
<li><b>Kalender</b>, nur wenn du einschaltest, dass deine Dienste in einen Kalender geschrieben werden. Fieravend legt dafür einen eigenen Kalender „Fieravend“ an und liest oder ändert nur dessen Termine. Ob dieser Kalender auf dem Gerät oder in deiner iCloud liegt, hängt von deinen Kalender-Einstellungen ab.</li>
<li><b>Face ID oder Code</b> für die App-Sperre. Die Prüfung macht iOS. Die App erfährt nur, ob sie geklappt hat, und bekommt keine Gesichts- oder Fingerabdruckdaten.</li>
<li><b>Mitteilungen</b>, etwa Erinnerungen ans Ein- und Ausstempeln. Sie werden auf deinem Gerät geplant und kommen nicht von einem Server.</li>
</ul>
<h3>Käufe</h3>
<p>Den Test, den Jahrespass und Plus kaufst du über den App Store. Bezahlung und Abrechnung laufen bei Apple. Wir bekommen keine Zahlungsdaten und keinen Namen. Die App erfährt von Apple nur, welcher Kauf auf deinem Gerät gilt.</p>
<h3>Export und Backup</h3>
<p>PDF, CSV und Backup-Dateien entstehen auf deinem Gerät. Sie verlassen es nur, wenn du sie selbst teilst, zum Beispiel per Mail oder in die Dateien-App. Wohin, entscheidest du.</p>
<h3>Kontakt</h3>
<p>Schreibst du uns eine Mail an <a href="mailto:${P.mail}">${P.mail}</a>, gilt der Abschnitt „Wenn du uns eine Mail schreibst“.</p>

<h2>Deine Rechte</h2>
<p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Schreib dafür an <a href="mailto:${P.mail}">${P.mail}</a>.</p>
<p>Du kannst dich auch bei einer Aufsichtsbehörde beschweren. Für uns zuständig ist <a href="https://www.lfd.niedersachsen.de">die Landesbeauftragte für den Datenschutz Niedersachsen</a>, Prinzenstraße 5, 30159 Hannover.</p>
</div></section>` : `
<section class="page-head page-head-tight"><div class="wrap head-grid"><div><h1>Privacy</h1><p class="lede">This website sets no cookies, measures nothing and loads nothing from other servers. The font lives on the same server as the page. How the app handles your data is <a href="#app">further down</a>.</p><p class="small muted">${stand(lang)}</p></div></div></section>
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

<h2 id="app">The app</h2>
<p>This section covers the Fieravend app on iPhone, iPad and Apple Watch. The person responsible is the same as above and in the <a href="${href('impressum', lang)}">legal notice</a>.</p>
<p>In short: the app has no account, no server of its own and no analytics, tracking or advertising services. We receive no data from you through the app. Only you and the devices you use see your entries.</p>
<h3>Where your data lives</h3>
<p>Everything you enter (jobs, clock times, breaks, leave, notes, settings) is stored by the app on your device. If you are signed in to iCloud on the device, the app keeps a copy in your private iCloud database at Apple (CloudKit), so your devices show the same state. You switch this on or off for Fieravend in your iPhone’s iCloud settings. Only you can read that area with your Apple Account. We have no access to it. Apple’s terms and privacy policy apply to iCloud.</p>
<p>Widgets and the lock screen display read the same data on your device. There is no connection to a server of ours.</p>
<h3>Apple Watch</h3>
<p>Your data stays on the iPhone. The watch gets today’s status from the iPhone and only sends back your tap, such as clock in, break or clock out. The two talk directly over the connection Apple provides for this (WatchConnectivity), with no server in between.</p>
<h3>What the app uses only if you want it</h3>
<p>Each of these is off until you switch it on. iOS asks for your permission first, and you can withdraw it at any time in your iPhone’s settings.</p>
<ul>
<li><b>Location</b>, only for the work-place reminder. You set a place, and iOS tells the app when you arrive or leave. Fieravend then asks with a notification whether you want to clock in or out. The app never clocks in or out on its own. The place stays on this device only. It does not go to iCloud, into the backup or to us.</li>
<li><b>Camera and photos</b>, only to scan a rota. Text recognition runs on your device. The image is not stored, only the shifts you confirm in the preview are taken over.</li>
<li><b>Calendar</b>, only if you switch on writing your shifts to a calendar. Fieravend creates its own calendar “Fieravend” and only reads or changes its events. Whether that calendar is on the device or in your iCloud depends on your calendar settings.</li>
<li><b>Face ID or passcode</b> for the app lock. iOS does the check. The app only learns whether it worked and gets no face or fingerprint data.</li>
<li><b>Notifications</b>, for example reminders to clock in and out. They are scheduled on your device and do not come from a server.</li>
</ul>
<h3>Purchases</h3>
<p>You get the trial, the Year Pass and Plus through the App Store. Payment and billing are handled by Apple. We receive no payment details and no name. The app only learns from Apple which purchase applies on your device.</p>
<h3>Export and backup</h3>
<p>PDF, CSV and backup files are created on your device. They only leave it if you share them yourself, for example by email or to the Files app. You decide where they go.</p>
<h3>Contact</h3>
<p>If you email us at <a href="mailto:${P.mail}">${P.mail}</a>, the section “When you email us” applies.</p>

<h2>Your rights</h2>
<p>You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object (Art. 21). Write to <a href="mailto:${P.mail}">${P.mail}</a>.</p>
<p>You can also complain to a supervisory authority. Ours is <a href="https://www.lfd.niedersachsen.de">the Data Protection Commissioner of Lower Saxony</a> (Die Landesbeauftragte für den Datenschutz Niedersachsen), Prinzenstraße 5, 30159 Hannover, Germany.</p>
</div></section>`;
  return {
    title: de ? 'Datenschutz · Fieravend' : 'Privacy · Fieravend',
    desc: de ? 'Datenschutz bei Fieravend: Website ohne Cookies und Analyse, App ohne Konto, ohne eigenen Server und ohne Tracking. Deine Daten liegen auf deinem Gerät und in deiner iCloud.' : 'Privacy at Fieravend: a website without cookies or analytics, an app without an account, own server or tracking. Your data lives on your device and in your iCloud.',
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
