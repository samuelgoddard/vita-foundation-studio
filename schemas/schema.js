import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonAbout from './singletonAbout'
import singletonCompany from './singletonCompany'
import singletonHome from './singletonHome'
import singletonTraining from './singletonTraining'
import singletonNetwork from './singletonNetwork'

// Documents
import blog from './blog'
import educationalResources from './educationalResources'
import events from './events'
import team from './team'
import author from './author'

// Common
import seo from './common/seo'
import contentBlocks from './common/contentBlocks'
import contentSimple from './common/contentSimple'
import contentMinimal from './common/contentMinimal'
import contentRich from './common/contentRich'
import defaultImage from './common/defaultImage'
import hero from './common/hero'
import stats from './common/stats'
import blockquote from './common/blockquote'
import values from './common/values'
import list from './common/list'
import teamSection from './common/team'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    // Singletons
    singletonAbout,
    singletonCompany,
    singletonHome,
    singletonTraining,
    singletonNetwork,
    // Documents
    blog,
    team,
    author,
    educationalResources,
    events,
    // Common
    contentBlocks,
    contentSimple,
    contentRich,
    contentMinimal,
    defaultImage,
    hero,
    list,
    stats,
    blockquote,
    values,
    teamSection,
    seo
  ]),
})
