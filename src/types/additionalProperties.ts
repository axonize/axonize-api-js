import { IValueRange } from '../products/types';

export interface IAdditionalProperty {
  id?: string;
  key?: string;
  value?: string;
  iconName?: string;
  iconColor?: string;
  severity?: 'Warning' | 'Minor' | 'Major' | 'Critical';
}

export interface IServiceProperty {
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
