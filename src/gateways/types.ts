export interface IGateway {
    "@odata.context":      string;
    type:                  string;
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