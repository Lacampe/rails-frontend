import Typed from 'typed.js'

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Hello", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText }
