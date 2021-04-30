/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2021 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Events from '../Events'
import Metrics from '../Metrics'
import Transport from '../Transport'

Events.listen('Lifecycle', event => {
  store._current = event
})

export const store = {
  _current: 'initializing',
  get current() {
    return this._current
  },
}

// public API
export default {
  state() {
    return store.current
  },
  ready() {
    Metrics.app.ready()
    return Transport.send('lifecycle', 'ready')
  },
  close(reason) {
    return Transport.send('lifecycle', 'close', { reason: reason })
  },
  finished() {
    if (store.current === 'unloading') {
      Metrics.app.close()
    } else throw 'Cannot call finished() except when in the unloading transition'

    return Transport.send('lifecycle', 'finished')
  },
}
