export interface IAlarmInstance {
  deviceId?: string;
  typeCode?: number; // int32
  value?: string;
  readingDateTime?: string; // date-time
  readingDateTimeOffset?: string; // date-time
  ruleId?: string;
  eventName?: string;
  severity?: 'Warning' | 'Minor' | 'Major' | 'Critical';
  status?: 'Open' | 'Closed';
  snoozeExpirationDate?: string; // date-time
  message?: string;
  id?: string;
  appId?: string;
  createDate?: string; // date-time
  createUser?: string;
  updateDate?: string; // date-time
  updateUser?: string;
}

export interface IAlarmInstanceNode {
  id?: string;
  name?: string;
}
