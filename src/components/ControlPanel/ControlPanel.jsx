import { classNameJoin } from '@/utils'
import scss from './ControlPanel.module.scss'

const ControlPanel = ({className}) => {
  return (
    <div className={classNameJoin(scss.controlPanel, className)}>ControlPanel</div>
  )
}

export default ControlPanel