# Government of Wesbury

This project was the successor to https://github.com/Protonull/BloomGov2019, using the same template ([govuk](https://govuk-react.github.io/govuk-react/)). [React](https://reactjs.org/) was chosen for its flexibility in comparison to [Jekyll](https://jekyllrb.com/)'s [Liquid](https://jekyllrb.com/docs/liquid/) templating language. [Gatsby](https://www.gatsbyjs.com/) was chosen for its vast array of plugins, like templated-MDX support, making it more appealing than arguably better alternatives such as [NextJS](https://nextjs.org/). The move to [Gatsby](https://www.gatsbyjs.com/) was often regretted however, given its obsession with [GraphQL](https://graphql.org/), and the dependency hell of [NodeJS](https://nodejs.org/en/).

## SECURITY WARNING

**DO NOT BUILD THIS PROJECT!** It's been over a year since this project was developed in earnest and since then seemingly every dependency (and its dependencies, etc) has encountered some kind of security issue... *there's **51!** alerts in the Security tab.* Download at your own risk.

## Oddities

- Pages with frontmatter (laws and news articles) have their frontmatter printed on the pages themselves... weird. This certainly wasn't the case before, so I'm assuming the Dependabot PRs have somehow messed with this?