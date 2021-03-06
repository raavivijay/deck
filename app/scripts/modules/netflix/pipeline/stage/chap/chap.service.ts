import { module } from 'angular';

import { Api, API_SERVICE } from '@spinnaker/core';

export interface IChapTestCase {
  id: string;
  name: string;
}

export class ChapService {
  public constructor(private API: Api) { 'ngInject'; }

  public listTestCases(): ng.IPromise<IChapTestCase[]> {
    return this.API.all('chap').all('testcases').getList();
  }
}

export const CHAP_SERVICE = 'spinnaker.netflix.pipeline.stage.chap.service';
module(CHAP_SERVICE, [API_SERVICE])
  .service('chapService', ChapService);
