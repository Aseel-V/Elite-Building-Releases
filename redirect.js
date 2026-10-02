// Old address → the new website, in the visitor's language (?lang= from old links, then the browser language).
(function () {
  var q = null;
  try { q = new URLSearchParams(location.search).get('lang'); } catch (e) { /* old browser */ }
  var n = (navigator.language || 'he').slice(0, 2);
  var lang = ['he', 'ar', 'en'].indexOf(q) >= 0 ? q : (n === 'ar' ? 'ar' : n === 'en' ? 'en' : 'he');
  location.replace('https://elitebuilding.web.app/' + lang + '/' + (location.hash || ''));
})();
