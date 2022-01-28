import cn from 'classnames'
import * as styles from '../../src/components/layouts/layout/layout.module.css'

export default function withLayout(Story) {
  return (
    <div className={cn(styles.layout, 'storybook-layout')}>
      <main data-storybook-layout-decorator>
        <Story />
      </main>
    </div>
  )
}
