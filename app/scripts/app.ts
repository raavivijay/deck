import * as angular from 'angular';

import {NETFLIX_MODULE} from './modules/netflix/netflix.module';
import {APPENGINE_MODULE} from './modules/appengine/appengine.module';

module.exports = angular.module('netflix.spinnaker', [
  NETFLIX_MODULE,
  require('./modules/core/src/core.module.js'),
  require('./modules/amazon/aws.module.js'),
  require('./modules/google/gce.module.js'),
  require('./modules/cloudfoundry/cf.module.js'),
  require('./modules/titus/titus.module.js'),
  require('./modules/azure/azure.module.js'),
  require('./modules/kubernetes/kubernetes.module.js'),
  require('./modules/openstack/openstack.module.js'),
  require('./modules/docker/docker.module.js'),
  require('./modules/oracle/oraclebmcs.module.js'),
  APPENGINE_MODULE,
]);
