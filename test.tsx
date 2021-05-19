import React from 'react'
import { View } from 'react-native'

const BaseController = (props, ref) => {
  const [visible, setVisible] = React.useState(false)
  
  React.useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }))
  
  if (!visible) return null
  return (
    <View style={{backgroundColor: 'yellow', width: 50, height: 50}}/>
  )
}

const Controller = React.forwardRef(BaseController)

Controller.setRef = ref => Controller.instance = ref
Controller.show = () => Controller.instance.show()
Controller.hide = () => Controller.instance.hide()
