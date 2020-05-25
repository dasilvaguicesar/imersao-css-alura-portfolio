function type(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 150 * i)
  });
}

const siteSubtitle = document.querySelector('.site-subtitle');

type(siteSubtitle);