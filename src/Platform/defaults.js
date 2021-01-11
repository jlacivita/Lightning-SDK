/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
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

import { getLocale, getLanguage, getCountryCode, getLatLon } from './helpers'

export const defaultPlatform = {
  localization: {
    city: 'New York',
    zipCode: '27505',
    countryCode: () => getCountryCode('US'),
    language: () => getLanguage('en'),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale('en-US'),
  },
  user: {
    ageRating: 'adult',
  },
  device: {
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    mac: '00:00:00:00:00:00',
    operator: 'Metrological',
    platform: 'Metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    type: 'STB',
    model: 'Metrological',
    hdcp: {
      enabled: true,
      negotiatedVersion: 'HDCP2.2',
      maxVersion: 'HDCP2.3'
    },
    hdr: {
      hdr10: true,
      hdr10plus: false,
      dolbyVision: true,
      hlg: true
    },
    audio: {
      stereo: true,
      dolbyDigital: true,
      dolbyDigitalPlus: true,
      dolbyAtmos: true
    },
    resolution: [1920, 1080], // maybe make this dynamically from the browser window?
    name: 'Living Room',
    network: {
      state: 'Connected',
      type: 'WIFI',
    },
  },
  accesibility: {
    closedCaptions: {
      enabled: true,
      styles: '?', // what kind of values could we have here?
    },
    voiceGuidance: {
      enabled: true,
      speed: 5,
    },
  }
}
