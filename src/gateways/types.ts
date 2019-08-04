export interface GatewayCreationRequest {
    gateway: GatewayCreationDetails;
}

export interface GatewayCreationDetails {
    name:         string;
    type:         string;
    manufacturer: string;
}