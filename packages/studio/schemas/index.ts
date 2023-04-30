import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import review from './review'
import siteSettings from './siteSettings'
import colors from './colors'
import navigation from './navigation'
import article from './article'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
  review,
  siteSettings,
  colors,
  navigation,
  article
]
