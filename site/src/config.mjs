/**
 * Site-wide constants. Change them here, never in the page files.
 */
export const SITE = 'https://fieravend.heidrich-digital.de';

/**
 * Mail address for the waiting list and questions (mailto only, no form backend).
 * [offen] Till wants "hallo@…". The mailbox hallo@fieravend.de does not exist yet (domain not registered,
 * see wiki "Marke & Rechtliches"). Until it does, mails go to the address from the Heidrich Digital imprint.
 */
export const MAIL = 'mail@tillheidrich.de';

/** Provider data, copied from https://heidrich-digital.de/impressum/ on 18 Oct 2026. */
export const PROVIDER = {
  name: 'Till Heidrich',
  trade: 'Till Heidrich – Content Creation',
  brand: 'Heidrich Digital',
  street: 'Rotdornweg 17',
  city: '21255 Tostedt',
  country: { de: 'Deutschland', en: 'Germany' },
  phone: '0157&nbsp;73953819',
  phoneIntl: '+49&nbsp;157&nbsp;73953819',
  mail: 'mail@tillheidrich.de',
  web: 'https://heidrich-digital.de',
};

/** Date shown as "Stand" on legal values, prices and legal pages. */
export const STAND = { de: '18.10.2026', en: '18 October 2026', iso: '2026-10-18' };

/**
 * Every page: key -> published path per language. The build writes <path>index.html (or the file name itself).
 * hreflang pairs and the language switch come from this table.
 */
export const ROUTES = {
  start:        { de: '/',                       en: '/en/' },
  kleinbetrieb: { de: '/fuer/kleinbetrieb/',     en: '/en/for/small-business/' },
  zweijobs:     { de: '/fuer/zwei-jobs/',        en: '/en/for/two-jobs/' },
  mytime:       { de: '/umzug/mytime/',          en: '/en/switch/mytime/' },
  preise:       { de: '/preise/',                en: '/en/pricing/' },
  fragen:       { de: '/fragen/',                en: '/en/faq/' },
  rechner:      { de: '/rechner/ueberstunden/',  en: '/en/calculator/overtime/' },
  datenschutz:  { de: '/datenschutz/',           en: '/en/privacy/' },
  impressum:    { de: '/impressum/',             en: '/en/legal-notice/' },
};
