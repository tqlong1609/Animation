import React, { useContext, useEffect } from 'react'
import createSagaMiddleware from 'redux-saga'
import { View } from 'react-native'

interface BaseControllerHandle {
  hide(): void;
  show(): void;
}

class Service {
  instance = React.createRef<BaseControllerHandle>();
  public hide() { };
}

// chu y:
// mn => mutable => khong dung de luu gia tri.

const service = new Service();

createSagaMiddleware({
  context: {
    service
  }
})


yield * getContext('service');





const BaseController = (props, ref) => {
  const mn = useContext(ServiceContext)

  const [visible, setVisible] = React.useState(false)

  const hide = React.useCallback(() => {

  }, []);

  useEffect(() => {
    mn.hide = hide;
  })
  React.useImperativeHandle(ref, () => ({
    presentDialog: () => setVisible(true),
    hide: () => setVisible(false),
  }))

  if (!visible) return null
  return (
    <View style={{ backgroundColor: 'yellow', width: 50, height: 50 }} />
  )
}

const Controller = React.forwardRef(BaseController)



Controller.setRef = ref => Controller.instance = ref
Controller.show = () => Controller.instance.show()
Controller.hide = () => Controller.instance.hide()
