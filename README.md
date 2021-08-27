# Cloudflare Workers project

This project uses a cloudflare worker and implements gitflow + github actions to define a development workflow for teams.

## Development workflow (Gitflow)

* Clone this repository
* Create a feature branch and update the code base
* Push your feature branch to origin and create a pull request
* Check your changes at the [develop url|https://dev-workflow-dev.cvences-bespoke.workers.dev]
* Once your PR has been approved and merged into main branch your new feature will be deployed to [staging|https://dev-workflow-staging.cvences-bespoke.workers.dev]
* Once staging is ready for production create a new release following the pattern v1.* and check [staging|https://dev-workflow-production.cvences-bespoke.workers.dev]

## Development workflow (Fork)

* Fork this repository
* You can check dev environment every time you push your feature branch to origin
* You can check staging environment every time you merge your changes into main|master branch
* Update your code and create a pull request
* Once your PR has been approved and merged into main branch your new feature will be deployed to upstream's staging environment
* Once upstream maintainers create a new release the code will be deployed to production.

## Why

We want to avoid doing `wrangler publish` to production manually, instead we will let every developer to manage its own cloudlfare account and we will provide the github actions to automate the deployment.

By adding wrangler.toml to gitignore developers can set their own variables and secrets, deploying to their free CF workers account which will mimic production environment, while protecting upstream produuction environment.

## Setup

You will need a cloudflare API token, if you don't have one yet please follow the next steps.

* Go to your [Cloudflare's dashboard|https://dash.cloudflare.com/]
* Click on My Profile icon / My Profile
* Click on API Tokens tab
* Click Create Token button
* Under Custom token click Get started
* Complete the form and copy the resulting token
* From Github, go to Settings / Secrets and create a new repository secret called CF_API_TOKEN, paste the token you copied from the previous step.
* Add a second repository secret for CF_ACCOUNT_ID and set the value for the Account ID you want to use. Run `wrangler whoami` to list the available account ids.

By default the Publish action will deploy your worker to your production environment on every push to the main branch

## Requirements

You need to sign up for a [Cloudflare Workers account|https://dash.cloudflare.com/sign-up/workers]. Setup a free custom subdomain. You can use flast-org for your free plan.

Once your workers account is active run the following commands:

```
npm install -g @cloudflare/wrangler
wrangler login
cp wrangler.toml.example wrangler.toml
wrangler whoami
# update wrangler.toml account_id
wrangler dev
```

The deploy action requires an existing application in Cloudflare. You can do that from the Cloudflare dashboard or by running `wrangler publish`.

## Test

After running `wrangler publish` you worker will be available under [webpage|https://dev-workflow.cvences-bespoke.workers.dev].

After deploying this project via github actions you should get something similar to this [webpage|https://dev-workflow-production.cvences-bespoke.workers.dev].