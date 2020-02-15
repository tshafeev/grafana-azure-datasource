export const AzureResourceGraph = 'Azure Resource Graph';
export const AzureApplicationInsights = `Azure Application Insights`;
export const AzureLogAnalytics = `Azure Log Analytics`;
export const supportedServices: any[] = [
  { value: AzureResourceGraph, label: AzureResourceGraph },
  { value: AzureApplicationInsights, label: AzureApplicationInsights },
  { value: AzureLogAnalytics, label: AzureLogAnalytics },
];

export const CloudNameAzurePublic = 'azuremonitor';
export const CloudNameAzureGov = 'govazuremonitor';
export const CloudNameAzureGermany = 'germanyazuremonitor';
export const CloudNameAzureChina = 'chinaazuremonitor';
export const supportedCloudnames: any[] = [
  { value: CloudNameAzurePublic, label: 'Azure' },
  { value: CloudNameAzureGov, label: 'Azure US Government' },
  { value: CloudNameAzureGermany, label: 'Azure Germany' },
  { value: CloudNameAzureChina, label: 'Azure China' },
];
