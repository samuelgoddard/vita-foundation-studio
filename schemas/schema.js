import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonAbout from './singletonAbout'
import singletonCompany from './singletonCompany'
import singletonHome from './singletonHome'
import singletonTraining from './singletonTraining'

// Documents
import blog from './blog'
import educationalResources from './educationalResources'
import events from './events'
import team from './team'

// Common
import seo from './common/seo'
import contentBlocks from './common/contentBlocks'
import contentSimple from './common/contentSimple'
import contentMinimal from './common/contentMinimal'
import defaultImage from './common/defaultImage'
import hero from './common/hero'
import stats from './common/stats'
import values from './common/values'
import list from './common/list'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    // Singletons
    singletonAbout,
    singletonCompany,
    singletonHome,
    singletonTraining,
    // Documents
    blog,
    team,
    educationalResources,
    events,
    // Common
    contentBlocks,
    contentSimple,
    contentMinimal,
    defaultImage,
    hero,
    list,
    stats,
    values,
    seo
  ]),
})
