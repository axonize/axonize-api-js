import { IAlarmInstanceNode } from '../alarms/types';
import { IAdditionalProperty } from '../types/additionalProperties';

export interface ICoords {
  x: number;
  y: number;
}

export interface IDevice {
  productId: string;
  productName?: string;
  serialNumber?: string;
  topic?: string;
  groupId?: string;
  additionalProperties?: IAdditionalProperty[];
  active?: boolean;
  firstTimeRegistrationDate?: string;
  activationDate?: string;
  token?: string;
  commandsProtocol?: 'Undefined' | 'Http' | 'Amqp' | 'Modbus' | 'SNMP' | 'OPCUA' | 'HubJsonSender' | 'Test';
  lastReadingTime?: string;
  isConnected?: boolean;
  hubId?: string;
  hubPrimaryKey?: string;
  hubSecondaryKey?: string;
  userDefinedLocation?: Location;
  currentLocation?: Location;
  customId?: string;
  keepAliveThreshold?: number;
  alarmInstances?: IAlarmInstanceNode[];
  isAlarmed?: boolean;
  virtualDeviceStatus?: 'NotAvailable' | 'Started' | 'Stopped';
  virtualDeviceEvents?: string;
  coords?: ICoords;
  redisKey?: string;
  diagram?: string;
  streamUrl?: string;
  profileIds?: string[];
  parentId?: string;
  name: string;
  id: string;
  appId?: string;
  createDate?: string;
  createUser?: string;
  updateDate?: string;
  updateUser?: string;
  [key: string]: any;
}
