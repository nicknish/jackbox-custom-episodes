import { LinkType } from '../components/common/Link'

export const INTERNAL_URLS = {
    HOME: '/',
    ABOUT: '/about',
}

export const EXTERNAL_URLS = {
    GOOGLE_SPREADSHEET:
        'https://docs.google.com/forms/d/1qSk093JnIt6uqKAWmNhlZtqaRy1uW_-I3nNKoaphvI4',
    GITHUB: 'https://github.com/nicknish/jackbox-custom-episodes',
    FEEDBACK: 'https://github.com/nicknish/jackbox-custom-episodes/issues',
    AUTHOR: 'https://www.makerscreate.studio',
}

export const MENU = [
    { label: 'Home', to: INTERNAL_URLS.HOME, type: LinkType.Link },
    { label: 'About', to: INTERNAL_URLS.ABOUT, type: LinkType.Link },
    { label: 'Feedback', href: EXTERNAL_URLS.FEEDBACK, type: LinkType.External, target: '_blank' },
    { label: 'Contribute', href: EXTERNAL_URLS.GITHUB, type: LinkType.External, target: '_blank' },
]
