# Government of Wesbury

This project was the successor to https://github.com/Protonull/BloomGov2019, using the same template (govuk). React was chosen for its flexibility in comparison to Jekyll's Liquid templating language. Gatsby was chosen for its vast array of plugins, like templated-MDX support, making it more appealing than arguably better alternatives such as NextJS. The move to Gatsby was often regretted however, given Gatsby's obsession with GraphQL, and the dependency hell of NodeJS.

## SECURITY WARNING

**DO NOT BUILD THIS PROJECT!** It's been over a year since this project was developed in earnest and since then seemingly every dependency (and its dependencies, etc) has encountered some kind of security issue... *there's **51!** alerts in the Security tab.* Download at your own risk.

## Oddities

- Pages with frontmatter (laws and news articles) have their frontmatter printed on the pages themselves... weird. This certainly wasn't the case before, so I'm assuming the Dependabot PRs have somehow messed with this?