import { IDeviceNode } from '../devices/types';

export interface IGroup {
  info?: string;
  devices?: IDeviceNode[];
  active?: boolean;
  diagram?: string;
  defaultLocation?: Location;
  profileIds?: string[];
  parentId?: string;
  name: string;
  id: string;
  appId: string;
  createDate?: string; // date-time
  createUser?: string;
  updateDate?: string; // date-time
  updateUser?: string;
}
export interface IGroupNode {
  id: string;
  name: string;
}
