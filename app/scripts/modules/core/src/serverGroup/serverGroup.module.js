'use strict';

const angular = require('angular');

import { SERVER_GROUP_STATES } from './serverGroup.states';
import './ServerGroupSearchResultFormatter';

module.exports = angular
  .module('spinnaker.core.serverGroup', [
    require('./serverGroup.transformer'),
    require('./configure/common/serverGroupConfiguration.service'),
    require('./configure/common/v2instanceArchetypeSelector.directive'),
    require('./configure/common/v2InstanceTypeSelector.directive'),
    require('./pod/runningTasksTag.directive'),
    require('./details/multipleServerGroups.controller'),
    require('./serverGroup.dataSource'),
    require('./configure/common/basicSettingsMixin.controller'),
    SERVER_GROUP_STATES,
  ]);
