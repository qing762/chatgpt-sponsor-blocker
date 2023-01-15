const observer = new MutationObserver((mutations) => {
  for (let i = 0; i < mutations.length; i++) {
      for (let j = 0; j < mutations[i].addedNodes.length; j++) {
          const element = mutations[i].addedNodes[j];
          if (element.tagName === 'A' && element.getAttribute('href') === 'https://wfh.team') {
              element.remove();
          }
          if (element.tagName === 'DIV' && element.getAttribute('id') === 'sponsor') {
              element.remove();
          }
      }
  }
});

const config = { childList: true, subtree: true };

observer.observe(document.body, config);
