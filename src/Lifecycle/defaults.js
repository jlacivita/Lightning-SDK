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

import { store } from './index'
import { mock_event } from '../Transport'

let finished = function() {
  if (store.current === 'unloading') {
    location.href = 'about:blank'
  }
}

export default {
  ready: function() {
    mock_event('lifecycle', 'inactive', { state: 'inactive', previous: store.current })
    setTimeout(
      () => mock_event('lifecycle', 'foreground', { state: 'foreground', previous: store.current }),
      100
    )
  },
  close: function(params) {
    let reason = params.reason
    if (reason === 'REMOTE_BUTTON') {
      setTimeout(
        () => mock_event('lifecycle', 'inactive', { state: 'inactive', previous: store.current }),
        500
      )
      setTimeout(
        () =>
          mock_event('lifecycle', 'foreground', { state: 'foreground', previous: store.current }),
        5000
      )
    } else {
      mock_event('lifecycle', 'inactive', { state: 'inactive', previous: store.current })
      setTimeout(
        () => mock_event('lifecycle', 'unloading', { state: 'unloading', previous: store.current }),
        500
      )
      setTimeout(() => finished(), 2500)
    }
  },
  finished: finished,
}
