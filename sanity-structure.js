import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiHelpCircle,
  FiEdit,
  FiCalendar,
  FiSmile,
  FiZap,
  FiUsers,
  FiPhone,
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Preview Mode')
        .options({ previewURL, isMobile: false, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('About Us').child(S.editor().id('about').schemaType('about').documentId('singleton-about').views(getPreview('about'))).icon(FiSmile),
      S.divider(),
      S.listItem().title('Team').child(S.documentTypeList('team').title('Team')).icon(FiUsers),
      S.divider(),
      S.listItem().title('VITA Training').child(S.editor().id('training').schemaType('training').documentId('singleton-training').views(getPreview('training'))).icon(FiHelpCircle),
      S.divider(),
      S.listItem()
        .title('Resources')
        .child(
          S.list()
            .title('Resources')
            .items([
              S.listItem().title('Blog Articles').child(S.documentTypeList('blog').title('Blog Articles')).icon(FiEdit),
              S.divider(),
              S.listItem().title('Educational Resources').child(S.documentTypeList('educationalResources').title('Educational Resources')).icon(FiZap),
              S.divider(),
              S.listItem().title('Events').child(S.documentTypeList('events').title('Events')).icon(FiCalendar)
            ])),
      S.divider(),
      S.listItem().title('Company Details').child(S.editor().id('company').schemaType('company').documentId('singleton-company').views(getPreview('company'))).icon(FiPhone),
    ]);