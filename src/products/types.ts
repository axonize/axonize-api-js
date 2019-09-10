import { IAdditionalProperty, IServiceProperty } from '../types/additionalProperties';

export interface IProduct {
  urn?: string;
  name: string;
  description?: string;
  icon?: string;
  commands?: IServiceCommand[];
  firmwareFiles?: IFirmwareFile[];
  events?: IServiceEvent[];
  additionalProperties?: IServiceProperty[];
  customIdFormat?: string;
  customIdDisplay?: boolean;
  customIdRequired?: boolean;
  serialNumberFormat?: string;
  serialNumberDisplay?: boolean;
  serialNumberRequired?: boolean;
  active?: boolean;
  keepAliveThreshold?: number; // int32
  defaultVirtualDeviceEvents?: string;
  disconnectChildDevicesOnDisconnect?: boolean;
  connectChildDevicesOnConnect?: boolean;
  disconnectGroupDeviceOnAllChildrenDisconnect?: boolean;
  connectGroupDeviceOnAnyChildrenConnect?: boolean;
  onConnectCommandIds?: string[];
  manufacturer?: string;
  commandsProtocol?: 'Undefined' | 'Http' | 'Amqp' | 'Modbus' | 'SNMP' | 'OPCUA' | 'HubJsonSender' | 'Test';
  mediaSettings?: IMediaSettings;
  commandsAddress?: string;
  commandsUrl?: string;
  autoDiscoveryCommand?: string;
  displayCommandsTab?: boolean;
  onDeleteCommands?: string[];
  onPatchCommands?: string[];
  displayDeviceSDKDetails?: boolean;
  tooltip?: ITooltipElement[];
  enableSDKFeatures?: boolean;
  schemaDefinitionsId?: string;
  id: string;
  appId: string;
  createDate?: string;
  createUser?: string;
  updateDate?: string;
  updateUser?: string;
  [key: string]: any;
}

export interface IServiceCommand {
  id?: string;
  name?: string;
  arguments?: ICommandArgument[];
  payload?: string;
  commandResponseType?: 'Undefined' | 'String' | 'Json';
  commandKind?: 'Undefined' | 'IotHubMethod';
}

export interface ICommandArgument {
  direction?: string;
  name?: string;
  value?: string;
  displayName?: string;
  serviceProperty?: ICommandServiceProperty;
}

export interface ICommandServiceProperty {
  currentStatus?: string;
  currentStatusFromReading?: string;
  displayName?: string;
  name?: string;
  extra?: string;
  datatype?: 'Text' | 'Integer' | 'Decimal' | 'Date' | 'Boolean' | 'Gps';
  allowedValueRange?: IValueRange;
  defaultValue?: string;
  unit?: string;
  uiType?:
    | 'Undefined'
    | 'Button'
    | 'RadioButton'
    | 'TextOneLine'
    | 'TextMultiLine'
    | 'IpV4'
    | 'Number'
    | 'OID'
    | 'Toggle'
    | 'Slider'
    | 'Select';
  required?: boolean;
  icon?: string;
  groupName?: string;
  servicePropertyType?: 'Property' | 'Setting';
}

export interface IValueRange {
  minimum?: string;
  maximum?: string;
  precision?: number; // int32
  numericType?: 'Int' | 'Decimal';
  step?: string;
  allowedValues?: IAdditionalProperty[];
  isAllowedValuesNull?: boolean;
  ranges?: Range[];
}

export interface IMediaSettings {
  mediaProtocol?: 'None' | 'RTMP';
  mediaType?: 'Unknown' | 'Video' | 'Audio' | 'Image';
  aspectRatio?: string;
}

export interface ITooltipElement {
  type: string;
  value: string;
}

export interface IFirmwareFile {
  id?: string;
  version?: string;
  url?: string;
  hash?: string;
  name?: string;
  creationDate?: string; // date-time
}

export interface IServiceEvent {
  typeCode?: number; // int32
  description?: string;
  name?: string;
  nameResourceKey?: string;
  datatype?: string;
  logicalType?: string;
  displayType?: string;
  valueRange?: IValueRange;
  unit?: string;
  retention?: number; // int32
  iconName?: string;
  iconColor?: string;
  isAccumulated?: boolean;
  subject?: string;
  fieldsCount?: number; // int32
  precision?: number; // int32
  calculationId?: string;
  defaultRollupMethod?: 'Sum' | 'Avg' | 'Min' | 'Max' | 'Count';
  loggingSettings?: IEventLoggingSettings;
  aggregatedEventSettings?: IAggregatedEventSettings;
}

export interface IAggregatedEventSettings {
  interval?: 'OneSecond' | 'OneMinute' | 'FiveMinutes' | 'TenMinutes';
  eventName?: string;
  eventTypeCode?: number; // int32
  aggregationMethod?: 'Sum' | 'Avg' | 'Min' | 'Max' | 'Count' | 'Custom';
  customAggregationName?: string;
}

export interface IEventLoggingSettings {
  shouldLog?: boolean;
  logFormat?: string;
}
