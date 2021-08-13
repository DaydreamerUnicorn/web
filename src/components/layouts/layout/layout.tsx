import cn from 'classnames'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'
import React from 'react'

import * as footer from '../../../page-content/navigation/navigation-footer'
import * as nav from '../../../page-content/navigation/navigation-header'
import Footer from '../footer/footer'
import Navigation from '../navigation/navigation'

import * as styles from './layout.module.css'

import logoOryFooter from '../../../images/logo/logo-ory-footer.svg'
import oryLogoPrimary from '../../../images/logo/logo-ory-primary.svg'

interface PropTypes {
  theme?: string
  children?: React.ReactNode
}

const Layout = ({ children, theme }: PropTypes) => (
  <div className={cn(styles.layout)}>
    <Navigation
      logo={oryLogoPrimary}
      {...nav.sideNav}
      {...nav.dropdownMenu}
      {...nav.mobileMenu}
    />
    <main className={theme ? `theme-${theme}` : ''}>{children}</main>
    <Footer
      logo={
        <img
          width={'100%'}
          height={'100%'}
          loading="lazy"
          alt="Ory logo footer"
          src={logoOryFooter}
        />
      }
      {...footer.copyright}
      {...footer.contact}
      {...footer.social}
      {...footer.legal}
      {...footer.links}
    />
  </div>
)

export default Layout
