# Cloudflare Workers project

This project uses a cloudflare worker and implements gitflow + github actions to define a development workflow for teams.

## Why

We want to avoid doing `wrangler publish` to production manually, instead we will let every developer to manage its own cloudlfare account and we will provide the github actions to automate the deployment.

## Setup

You will need a cloudflare API token, if you don't have one yet please follow the next steps.

* Go to your [Cloudflare's dashboard|https://dash.cloudflare.com/]
* Click on My Profile icon / My Profile
* Click on API Tokens tab
* Click Create Token button
* Under Custom token click Get started
* Complete the form and copy the resulting token
* From Github, go to Settings / Secrets and create a new repository secret called CF_API_TOKEN, paste the token you copied from the previous step.
