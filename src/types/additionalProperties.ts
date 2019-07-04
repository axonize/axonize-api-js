export interface IAdditionalProperty {
  id?: string;
  key?: string;
  value?: string;
  iconName?: string;
  iconColor?: string;
  severity?: 'Warning' | 'Minor' | 'Major' | 'Critical';
}
