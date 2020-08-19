import * as cdk from '@aws-cdk/core';
import { SPADeploy } from 'cdk-spa-deploy';
import { GetAwsResourceName, SanitizeEnvironmentKey } from './utils/awsResourceNameFactory';
import * as appsettings from './appsettingsCdk.json';

export class DexWebsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    var envKey = SanitizeEnvironmentKey(app.node.tryGetContext('environment'));    

    super(scope, GetAwsResourceName(envKey, id), props);

    new SPADeploy(this, 'DexWebsiteDeploy')
      .createSiteWithCloudfront({
        indexDoc: 'index.html',
        websiteFolder: '..\\public',
        cfAliases: [ appsettings.Hostname ],
        certificateARN: appsettings.CertificateArn
      })
  }
}

const app = new cdk.App();
new DexWebsiteStack(app, appsettings.StackName);
