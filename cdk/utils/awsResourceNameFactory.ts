const delimiter = '-';

export function SanitizeEnvironmentKey(environmentKey: string) {
  var envKey = 'EnvKey'
  
  if (environmentKey)
    envKey = environmentKey[0].toUpperCase() + environmentKey.slice(1);

  return envKey;
}

export function GetAwsResourceName(environmentKey: string, resourceName: string) : string {
  return  SanitizeEnvironmentKey(environmentKey) + delimiter + resourceName;
}