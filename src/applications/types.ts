import { IServiceProperty } from "../types/additionalProperties";

export interface IApplication {
  name: string;
  tenantId?: string;
  allowedOrigins?: string[];
  active?: boolean;
  logo?: string;
  darkLogo?: string;
  cultureInfo?: string;
  uniqueIdentifier?: string;
  parentId?: string;
  allowedApplications?: string[];
  usersContainerDatabase?: string;
  phoneCountryCode?: string;
  passwordPolicy?: IPasswordPolicy;
  diagram?: string;
  retention?: number; // int32
  deletionStatus?: 'None' | 'Pending' | 'Done' | 'Retried_Once' | 'Failed';
  timezone?: string;
  settings?: IApplicationSettings;
  templateId?: string;
  additionalProperties?: IServiceProperty[];
  enableMultiFactorAuthentication?: boolean;
  id: string;
  appId?: string;
  createDate?: string; // date-time
  createUser?: string;
  updateDate?: string; // date-time
  updateUser?: string;
  [key: string]: any;
}

export interface IPasswordPolicy {
  maxPasswordLength?: number; // int32
  minPasswordLength?: number; // int32
  numberOfDifferentCharTypes?: number; // int32
  mustBeDifferentFromUserName?: boolean;
}

export interface IMapLocation {
  Lat?: number; // double
  Lng?: number; // double
}
export interface IMapOverlay {
  Image?: string;
  Positions?: IMapLocation[];
}

export interface IApplicationSettings {
  appLogo?: string;
  appDarkLogo?: string;
  cultureInfo?: string;
  timezone?: string;
  phoneCountryCode?: string;
  passwordPolicy?: IPasswordPolicy;
  retention?: number; // int32
  format?: string;
  mapLayout?: string;
  mapOverlay?: IMapOverlay;
  viewMode?: string;
  defaultLocation?: IMapLocation;
  featureSetId?: string;
}