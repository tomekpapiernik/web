import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import Banner from '../components/layouts/banner/banner'
import Coding from '../components/layouts/coding/coding'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-index'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import { sharedBannerSlack } from '../page-content/shared/content-banner'
import { sharedQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'

const IndexPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <Banner {...sharedBannerSlack} />
    <Adopters {...sharedAdopters} />
    <FeatureContent {...content.featureContentLogin} />
    <FeatureContent {...content.featureContentCloud} />
    <Coding {...content.coding} />
    <FeatureContent {...content.featureContentUX} />
    <Quotes {...sharedQuotes} />
    <Stats {...sharedStats} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default IndexPage
