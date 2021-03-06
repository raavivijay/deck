import { ISCEService, module } from 'angular';

import { AUTHENTICATION_SERVICE, AuthenticationService } from '@spinnaker/core';

import { NetflixSettings } from 'netflix/netflix.settings';

import '../tableau.less';

class SummaryTableauController {

  public srcUrl: string;

  constructor(private $sce: ISCEService,
              private authenticationService: AuthenticationService) {
    'ngInject';
    const user: string[] = this.authenticationService.getAuthenticatedUser().name.split('@');
    const url: string = NetflixSettings.tableau.summarySourceUrl.replace('${user}', user[0]);
    this.srcUrl = this.$sce.trustAsResourceUrl(url);
  }
}

export const SUMMARY_TABLEAU_CONTROLLER = 'spinnaker.netflix.summary.tableau.controller';
module(SUMMARY_TABLEAU_CONTROLLER, [AUTHENTICATION_SERVICE])
  .controller('SummaryTableauCtrl', SummaryTableauController);
