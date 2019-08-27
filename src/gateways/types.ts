export interface IGateway {
    "@odata.context":      string;
    type:                  'HttpGatewayProducer' | string;
    namespace:             string | null;
    name:                  string;
    datastructureEndpoint: string | null;
    authKey:               string | null;
    iothubUrl:             string | null;
    gatewayDeviceId:       string;
    productId:             string | null;
    port:                  number;
    ip:                    string | null;
    status:                string;
    manufacturer:          string;
    id:                    string;
    appId:                 string;
    createDate:            string;
    createUser:            string | null;
    updateDate:            string;
    updateUser:            string | null;
    image:                 string | null;
}

export interface IGatewayResponse {
    "@odata.context"?: string;
    value?:            IGatewayValue[];
}

export interface IGatewayValue {
    type?:                  string;
    namespace?:             string;
    name?:                  string;
    datastructureEndpoint?: null;
    authKey?:               string;
    iothubUrl?:           string | null;
    gatewayDeviceId?:       string;
    productId?:             string;
    port?:                  number;
    ip?:                  string | null;
    status?:                string;
    manufacturer?:          string;
    id?:                    string;
    appId?:               string | null;
    createDate?:            Date;
    createUser?:          string | null;
    updateDate?:            Date;
    updateUser?:          string | null;
    image?:               string | null;
}