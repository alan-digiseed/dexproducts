# Welcome to the RegistrationPortal CDK script!

In order to install the RegistrationPortal stack the following steps need to be undertaken:
1. Create a certificate in AWS Certificate Manager for the following hosts:
  * Dev - subscribe-dev.mydna.life
  * Staging - subscribe-staging.mydna.life
  * Prod - subscribe.mydna.life (or alternately use the wildcard cert)
   
2. Update the Hostname and CertificateArn variables in Octopus
3. Run the deployment via Octopus
4. Execute the changeset
5. Create a DNS entry using the Cloud Formation hostname which will be output by the deployment script 



## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

