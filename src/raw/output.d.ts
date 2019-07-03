export interface AdditionalInfo {
    Key?: string;
    Value?: string;
}
export interface AdditionalProperty {
    id?: string;
    key?: string;
    value?: string;
    iconName?: string;
    iconColor?: string;
    severity?: "Warning" | "Minor" | "Major" | "Critical";
}
export interface AggregatedEventSettings {
    interval?: "OneSecond" | "OneMinute" | "FiveMinutes" | "TenMinutes";
    eventName?: string;
    eventTypeCode?: number; // int32
    aggregationMethod?: "Sum" | "Avg" | "Min" | "Max" | "Count" | "Custom";
    customAggregationName?: string;
}
export interface AlarmInstance {
    deviceId?: string;
    typeCode?: number; // int32
    value?: string;
    readingDateTime?: string; // date-time
    readingDateTimeOffset?: string; // date-time
    ruleId?: string;
    eventName?: string;
    severity?: "Warning" | "Minor" | "Major" | "Critical";
    status?: "Open" | "Closed";
    snoozeExpirationDate?: string; // date-time
    message?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface AlarmInstanceNode {
    id?: string;
    name?: string;
}
export interface AncestorNode {
    id?: string;
    name?: string;
}
export interface Application {
    name?: string;
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
    passwordPolicy?: PasswordPolicy;
    diagram?: string;
    retention?: number; // int32
    deletionStatus?: "None" | "Pending" | "Done" | "Retried_Once" | "Failed";
    timezone?: string;
    settings?: ApplicationSettings;
    templateId?: string;
    additionalProperties?: ServiceProperty[];
    enableMultiFactorAuthentication?: boolean;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface ApplicationSettings {
    appLogo?: string;
    appDarkLogo?: string;
    cultureInfo?: string;
    timezone?: string;
    phoneCountryCode?: string;
    passwordPolicy?: PasswordPolicy;
    retention?: number; // int32
    format?: string;
    mapLayout?: string;
    mapOverlay?: MapOverlay;
    viewMode?: string;
    defaultLocation?: MapLocation;
    featureSetId?: string;
}
export interface ApplicationTemplate {
    name?: string;
    settings?: ApplicationSettings;
    additionalProperties?: ServiceProperty[];
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface Audit {
    entityName?: string;
    entityId?: string;
    action?: string;
    category?: string;
    userEmail?: string;
    userId?: string;
    requestDateTime?: string; // date-time
    responseDateTime?: string; // date-time
    application?: string;
    tenant?: string;
    /**
     * example:
     * 00000000-0000-0000-0000-000000000000
     */
    correlationId?: string; // uuid
    ip?: string;
    result?: string;
    requestDurationMs?: number; // double
    additionalInfo?: AdditionalInfo[];
    requestUrl?: string;
    actionDisplay?: string;
    categoryDisplay?: string;
    userName?: string;
    roles?: string[];
    roleId?: string;
    sourceName?: string;
    isSucceeded?: boolean;
    sourceType?: "Unknown" | "Portal" | "RulesEngine" | "XStream" | "Gateways";
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface AuthDetails {
    clientId?: string;
    connection?: string;
}
export interface AxonizeRestResponse {
    ContentType?: string;
    ContentLength?: number; // int64
    ContentEncoding?: string;
    Content?: string;
    StatusCode?: "Continue" | "SwitchingProtocols" | "OK" | "Created" | "Accepted" | "NonAuthoritativeInformation" | "NoContent" | "ResetContent" | "PartialContent" | "MultipleChoices" | "Ambiguous" | "MovedPermanently" | "Moved" | "Found" | "Redirect" | "SeeOther" | "RedirectMethod" | "NotModified" | "UseProxy" | "Unused" | "TemporaryRedirect" | "RedirectKeepVerb" | "BadRequest" | "Unauthorized" | "PaymentRequired" | "Forbidden" | "NotFound" | "MethodNotAllowed" | "NotAcceptable" | "ProxyAuthenticationRequired" | "RequestTimeout" | "Conflict" | "Gone" | "LengthRequired" | "PreconditionFailed" | "RequestEntityTooLarge" | "RequestUriTooLong" | "UnsupportedMediaType" | "RequestedRangeNotSatisfiable" | "ExpectationFailed" | "UpgradeRequired" | "InternalServerError" | "NotImplemented" | "BadGateway" | "ServiceUnavailable" | "GatewayTimeout" | "HttpVersionNotSupported";
    StatusDescription?: string;
    RawBytes?: string; // byte
    ResponseUri?: string;
    Server?: string;
    Headers?: Parameter[];
    ResponseStatus?: "None" | "Completed" | "Error" | "TimedOut" | "Aborted";
    ErrorMessage?: string;
    ErrorException?: {
    };
}
export interface BulkOptions {
    propertyName?: string;
    isEnabled?: boolean;
}
export interface CaptchaSettings {
    enabled?: boolean;
    authenticationAttemptsAllowed?: number; // int32
}
export interface ChangePasswordResponse {
    token?: string;
    uniqueIdentifier?: string;
}
export interface Chart {
    startDate?: string; // date-time
    endDate?: string; // date-time
    interval?: "Minutes" | "Hours" | "Days" | "Weeks" | "Months" | "Quarters" | "Semesters" | "Years" | "WeekDays" | "DayInYear";
    series?: ChartSeries[];
    period?: "OneDay" | "FiveDays" | "OneMonth" | "ThreeMonths" | "SixMonths" | "OneYear" | "All";
    timezone?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface ChartSeries {
    id?: number; // int32
    name?: string;
    aggregation?: "Sum" | "Average" | "Count" | "Min" | "Max" | "List" | "Accelerometer" | "Gps" | "Raw";
    inputId?: string;
    inputType?: "DeviceId" | "ProductId" | "AppId" | "WebService" | "CustomInput" | "ComplexSeries" | "DurationDeviceId" | "GroupId";
    eventType?: number; // int32
    eventName?: string;
    groupBy?: string;
    startDate?: string; // date-time
    endDate?: string; // date-time
    interval?: "Minutes" | "Hours" | "Days" | "Weeks" | "Months" | "Quarters" | "Semesters" | "Years" | "WeekDays" | "DayInYear";
    period?: "OneDay" | "FiveDays" | "OneMonth" | "ThreeMonths" | "SixMonths" | "OneYear" | "All";
    timezone?: string;
    machineLearningMethod?: "AnomalyDetection" | "LinearForecast" | "QuadraticForecast";
    methodAggregations?: string[];
}
export interface CommandArgument {
    direction?: string;
    name?: string;
    value?: string;
    displayName?: string;
    serviceProperty?: CommandServiceProperty;
}
export interface CommandRequest {
    message?: string;
    commandId?: string;
    commandArgument?: CommandArgument;
    deviceIds?: string[];
    value?: string;
}
export interface CommandResponse {
    successful?: boolean;
    information?: {
    };
}
export interface CommandServiceProperty {
    currentStatus?: string;
    currentStatusFromReading?: string;
    displayName?: string;
    name?: string;
    extra?: string;
    datatype?: "Text" | "Integer" | "Decimal" | "Date" | "Boolean" | "Gps";
    allowedValueRange?: ValueRange;
    defaultValue?: string;
    unit?: string;
    uiType?: "Undefined" | "Button" | "RadioButton" | "TextOneLine" | "TextMultiLine" | "IpV4" | "Number" | "OID" | "Toggle" | "Slider" | "Select";
    required?: boolean;
    icon?: string;
    groupName?: string;
    servicePropertyType?: "Property" | "Setting";
}
export interface ConvertInfo {
    functionType?: "customFunction" | "multiply" | "decToHex" | "hexToDec" | "epochToDateTime" | "subString";
    parameters?: string[];
    customFunction?: string;
}
export interface Coords {
    x?: number; // int32
    y?: number; // int32
}
export interface CustomProperties {
    endpoint?: string;
    name?: string;
    devices?: string[];
    products?: string[];
    readings?: EventDesc[];
    dateRange?: DateRange;
    properties?: {
        [name: string]: {
        };
    };
}
export interface DailySchedule {
    active?: boolean;
    timeRange?: ScheduleTimePair;
}
export interface Dashboard {
    widgets?: Widget[];
    name?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface DataStream {
    name?: string;
    type?: number; // int32
}
export interface DateRange {
    startDate?: string; // date-time
    endDate?: string; // date-time
    keyword?: string;
}
export interface Device {
    productId?: string;
    productName?: string;
    serialNumber?: string;
    topic?: string;
    groupId?: string;
    additionalProperties?: AdditionalProperty[];
    active?: boolean;
    firstTimeRegistrationDate?: string; // date-time
    activationDate?: string; // date-time
    token?: string;
    commandsProtocol?: "Undefined" | "Http" | "Amqp" | "Modbus" | "SNMP" | "OPCUA" | "HubJsonSender" | "Test";
    lastReadingTime?: string; // date-time
    isConnected?: boolean;
    hubId?: string;
    hubPrimaryKey?: string;
    hubSecondaryKey?: string;
    userDefinedLocation?: Location;
    currentLocation?: Location;
    customId?: string;
    keepAliveThreshold?: number; // int32
    alarmInstances?: AlarmInstanceNode[];
    isAlarmed?: boolean;
    virtualDeviceStatus?: "NotAvailable" | "Started" | "Stopped";
    virtualDeviceEvents?: string;
    coords?: Coords;
    redisKey?: string;
    diagram?: string;
    streamUrl?: string;
    profileIds?: string[];
    ancestors?: AncestorNode[];
    parentId?: string;
    name?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface DeviceNode {
    id?: string;
    name?: string;
}
/**
 * Device Readings Report Request struct
 */
export interface DeviceReadingsReportRequest {
    /**
     * Device ids collection
     */
    DeviceIds?: string[];
    /**
     * Events collection
     */
    Events?: EventDesc[];
    /**
     * Report start date
     */
    StartDate?: string; // date-time
    /**
     * Report end date
     */
    EndDate?: string; // date-time
    /**
     * Report end date
     */
    Timezone?: string;
}
export interface DockerImage {
    tag?: string;
    repository?: string;
    imagepullsecret?: string;
}
export interface DurationMonitoringSettings {
    devices?: DeviceNode[];
    appIdForDuration?: string;
    productId?: string;
    eventName?: string;
    typeCode?: number; // int32
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface DynamicPropertyDescriptor {
    name?: string;
    entity?: "Application" | "Device";
    type?: "String" | "Number" | "Datetime";
    labelKey?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface EmailTemplate {
    emailBody?: string;
    emailSubject?: string;
}
export interface Endpoint {
    id?: string;
    name?: string;
    type?: number; // int32
    uiPermissionType?: "enabled" | "disabled" | "hide";
    taskToEndpoints?: TaskToEndpoint[];
}
export interface EventDesc {
    name?: string;
    type?: number; // int32
}
export interface EventLogEntry {
    group?: GroupNode;
    product?: ProductNode;
    deviceName?: string;
    eventLogMessage?: string;
    eventDateTime?: string; // date-time
    source?: string;
    alarmInstanceId?: string;
    ruleId?: string;
    deviceId?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface EventLoggingSettings {
    shouldLog?: boolean;
    logFormat?: string;
}
export interface Feature {
    Id?: string;
    Name?: string;
    DisplayName?: string;
    Type?: "Ui" | "Backend" | "Shared";
    IsAllowed?: boolean;
    Locked?: boolean;
}
export interface FeatureSet {
    name?: string;
    features?: Feature[];
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface FirmwareFile {
    id?: string;
    version?: string;
    url?: string;
    hash?: string;
    name?: string;
    creationDate?: string; // date-time
}
export interface GPSHistoryRequest {
    deviceId?: string;
    startDate?: string; // date-time
    endDate?: string; // date-time
    distance?: number; // double
}
export interface GPSReadingDTO {
    deviceId?: string;
    lat?: number; // double
    lng?: number; // double
    alt?: number; // double
    readingTimestamp?: string; // date-time
    productId?: string;
    unit?: string;
    typeCode?: string;
}
export interface Gateway {
    type?: "HttpGateway" | "Datastructure" | "Deployment" | "PortAllocation" | "Ingress" | "PollingGatway" | "QueueGateway" | "HttpGatewayProducer";
    namespace?: string;
    name?: string;
    datastructureEndpoint?: string;
    authKey?: string;
    iothubUrl?: string;
    gatewayDeviceId?: string;
    productId?: string;
    image?: DockerImage;
    port?: number; // int32
    ip?: string;
    status?: "Installed" | "Deleted";
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface GetDurationWindowRequest {
    deviceId?: string;
    eventName?: string;
    typeCode?: number; // int32
    state?: string;
}
export interface Group {
    info?: string;
    users?: UserNode[];
    devices?: DeviceNode[];
    active?: boolean;
    diagram?: string;
    defaultLocation?: Location;
    profileIds?: string[];
    ancestors?: AncestorNode[];
    parentId?: string;
    name?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface GroupNode {
    id?: string;
    name?: string;
}
export interface HelpCenter {
    Label?: string;
    Icon?: string;
    Url?: string;
}
export interface LastReading {
    type?: number; // int32
    datetime?: string; // date-time
    name?: string;
    value?: string;
    cultureInvariantValue?: string;
    unit?: string;
    deviceId?: string;
}
export interface Location {
    address?: string;
    lat?: number; // double
    lng?: number; // double
    updateDate?: string; // date-time
}
export interface LocationConditionSettings {
    longitude?: string;
    latitude?: string;
    radius?: number; // double
    shouldBeInside?: boolean;
    propertyName?: string;
}
export interface LoggedDevice {
    deviceId?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface LoginResponse {
    name?: string;
    token?: string;
    redirectUrl?: string;
}
export interface MapLocation {
    Lat?: number; // double
    Lng?: number; // double
}
export interface MapOverlay {
    Image?: string;
    Positions?: MapLocation[];
}
export interface MediaSettings {
    mediaProtocol?: "None" | "RTMP";
    mediaType?: "Unknown" | "Video" | "Audio" | "Image";
    aspectRatio?: string;
}
/**
 * Device Readings Report Request struct
 */
export interface NewDevicesPerMonthReportRequest {
    /**
     * Report start date
     */
    StartDate?: string; // date-time
    /**
     * Report end date
     */
    EndDate?: string; // date-time
}
export interface Notification {
    address: string;
    message: string;
    type?: number; // int32
    messageTime?: string; // date-time
    tenantId?: string;
    userId?: string;
    id?: string;
    appId?: string;
    creationDate?: string; // date-time
}
export interface ODataResponseListAlarmInstance_ {
    "@odata.context"?: string;
    value?: AlarmInstance[];
}
export interface ODataResponseListApplicationTemplate_ {
    "@odata.context"?: string;
    value?: ApplicationTemplate[];
}
export interface ODataResponseListApplication_ {
    "@odata.context"?: string;
    value?: Application[];
}
export interface ODataResponseListAudit_ {
    "@odata.context"?: string;
    value?: Audit[];
}
export interface ODataResponseListDevice_ {
    "@odata.context"?: string;
    value?: Device[];
}
export interface ODataResponseListDurationMonitoringSettings_ {
    "@odata.context"?: string;
    value?: DurationMonitoringSettings[];
}
export interface ODataResponseListDynamicPropertyDescriptor_ {
    "@odata.context"?: string;
    value?: DynamicPropertyDescriptor[];
}
export interface ODataResponseListEndpoint_ {
    "@odata.context"?: string;
    value?: Endpoint[];
}
export interface ODataResponseListEventLogEntry_ {
    "@odata.context"?: string;
    value?: EventLogEntry[];
}
export interface ODataResponseListGateway_ {
    "@odata.context"?: string;
    value?: Gateway[];
}
export interface ODataResponseListGroup_ {
    "@odata.context"?: string;
    value?: Group[];
}
export interface ODataResponseListLoggedDevice_ {
    "@odata.context"?: string;
    value?: LoggedDevice[];
}
export interface ODataResponseListNotification_ {
    "@odata.context"?: string;
    value?: Notification[];
}
export interface ODataResponseListProduct_ {
    "@odata.context"?: string;
    value?: Product[];
}
export interface ODataResponseListProfile_ {
    "@odata.context"?: string;
    value?: Profile[];
}
export interface ODataResponseListReport_ {
    "@odata.context"?: string;
    value?: Report[];
}
export interface ODataResponseListRole_ {
    "@odata.context"?: string;
    value?: Role[];
}
export interface ODataResponseListRule_ {
    "@odata.context"?: string;
    value?: Rule[];
}
export interface ODataResponseListSchemaDefinitions_ {
    "@odata.context"?: string;
    value?: SchemaDefinitions[];
}
export interface ODataResponseListString_ {
    "@odata.context"?: string;
    value?: string[];
}
export interface ODataResponseListTask_ {
    "@odata.context"?: string;
    value?: Task[];
}
export interface ODataResponseListTenantTemplate_ {
    "@odata.context"?: string;
    value?: TenantTemplate[];
}
export interface ODataResponseListTenant_ {
    "@odata.context"?: string;
    value?: Tenant[];
}
export interface ODataResponseListUserEntity_ {
    "@odata.context"?: string;
    value?: UserEntity[];
}
export interface OverallWidgetRequest {
    groupIds?: string[];
    products?: ProductAndDataStream[];
}
export interface Parameter {
    Name?: string;
    Value?: {
    };
    ContentType?: string;
}
export interface PasswordPolicy {
    maxPasswordLength?: number; // int32
    minPasswordLength?: number; // int32
    numberOfDifferentCharTypes?: number; // int32
    mustBeDifferentFromUserName?: boolean;
}
export interface Product {
    urn?: string;
    name?: string;
    description?: string;
    icon?: string;
    commands?: ServiceCommand[];
    firmwareFiles?: FirmwareFile[];
    events?: ServiceEvent[];
    additionalProperties?: ServiceProperty[];
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
    commandsProtocol?: "Undefined" | "Http" | "Amqp" | "Modbus" | "SNMP" | "OPCUA" | "HubJsonSender" | "Test";
    mediaSettings?: MediaSettings;
    commandsAddress?: string;
    commandsUrl?: string;
    autoDiscoveryCommand?: string;
    displayCommandsTab?: boolean;
    onDeleteCommands?: string[];
    onPatchCommands?: string[];
    displayDeviceSDKDetails?: boolean;
    tooltip?: TooltipElement[];
    enableSDKFeatures?: boolean;
    schemaDefinitionsId?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface ProductAndDataStream {
    id?: string;
    readings?: DataStream[];
}
export interface ProductNode {
    id?: string;
    name?: string;
}
export interface Profile {
    name?: string;
    allowedGroups?: string[];
    notAllowedGroups?: string[];
    deviceBlackList?: string[];
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface Range {
    id?: string;
    minimum?: number; // double
    maximum?: number; // double
    name?: string;
    iconName?: string;
    iconColor?: string;
    severity?: "Warning" | "Minor" | "Major" | "Critical";
}
export interface RegisterRequest {
    tenant?: Tenant;
    user?: UserEntity;
    password?: string;
}
export interface Report {
    name?: string;
    subscribers?: Subscriber[];
    shared?: ShareEntities;
    createdByDisplayName?: string;
    isDefault?: boolean;
    columns?: string[];
    type?: "OData" | "Custom";
    entity?: string;
    query?: string;
    filters?: string;
    customProperties?: CustomProperties;
    description?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface ReportParameters {
    ids?: string[];
    startDate?: string; // date-time
    endDate?: string; // date-time
    reportId?: string;
}
export interface ResendMultifactorBindingRequest {
    token?: string;
    authenticator?: "Default" | "SMS" | "Email";
    email?: string;
    url?: string;
}
export interface Role {
    name?: string;
    displayName?: string;
    isShared?: number; // int32
    linkedTasks?: Task[];
    readonly taskIds?: string[];
    description?: string;
    createdBy?: string;
    modifiedBy?: string;
    modifiedDate?: string; // date-time
    id?: string;
    appId?: string;
    creationDate?: string; // date-time
}
export interface Rule {
    name?: string;
    description?: string;
    active?: boolean;
    severity?: "Warning" | "Minor" | "Major" | "Critical";
    actions?: RuleAction[];
    restoreActions?: RuleAction[];
    schedule?: Schedule;
    weeklySchedule?: WeeklySchedule;
    cronSchedule?: string;
    cronSchedules?: string[];
    type?: "Conditional" | "TimeBased";
    timezone?: string;
    booleanExpression?: string;
    conditions?: RuleCondition[];
    category?: string;
    level?: "ByApp" | "ByProduct" | "ByDevice";
    automaticallyDismiss?: boolean;
    notifyOnRestore?: boolean;
    ruleRecurrenceSettings?: RuleRecurrenceSettings;
    tenantId?: string;
    partialAccess?: boolean;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface RuleAction {
    id?: string;
    type?: "SMS" | "Email" | "AlarmInstance" | "EventLogEntry" | "Command" | "WebService" | "PhoneCall" | "AdditionalProperty";
    emailProperties?: RuleActionEmail;
    smsProperties?: RuleActionSms;
    phoneCallProperties?: RuleActionPhoneCall;
    alarmInstanceProperties?: RuleActionAlarmInstance;
    eventLogEntryProperties?: RuleActionEventLogEntry;
    commandProperties?: RuleActionCommand;
    webServiceProperties?: RuleActionWebService;
    ruleRecurrenceSettings?: RuleRecurrenceSettings;
    additionalPropertyProperties?: RuleAdditionalProperty;
}
export interface RuleActionAlarmInstance {
    message?: string;
}
export interface RuleActionCommand {
    commandId?: string;
    message?: string;
    commandArguments?: RuleActionCommandArgument[];
    deviceIds?: string[];
    value?: string;
    shouldExecuteOnTriggeringDevice?: boolean;
}
export interface RuleActionCommandArgument {
    name?: string;
    value?: string;
}
export interface RuleActionEmail {
    userDetails?: UserDetails[];
    message?: string;
    subject?: string;
    userIds?: string[];
}
export interface RuleActionEventLogEntry {
    message?: string;
}
export interface RuleActionPhoneCall {
    userDetails?: UserDetails[];
    message?: string;
    userIds?: string[];
}
export interface RuleActionSms {
    userDetails?: UserDetails[];
    message?: string;
    userIds?: string[];
}
export interface RuleActionWebService {
    url?: string;
    method?: string;
    headers?: AdditionalProperty[];
    body?: string;
    contentType?: string;
}
export interface RuleAdditionalProperty {
    name?: string;
    value?: string;
    deviceId?: string;
}
export interface RuleCondition {
    id?: string;
    appIdForRule?: string;
    productId?: string;
    devices?: DeviceNode[];
    eventName?: string;
    typeCode?: number; // int32
    threshold?: string;
    operator?: string;
    durationInMinutes?: number; // int32
    conditionCount?: number; // int32
    isRelative?: boolean;
    locationConditionSettings?: LocationConditionSettings;
    type?: "Threshold" | "Location" | "Property" | "PropertyAndStatic" | "Instantaneous";
    name?: string;
    ruleTarget?: string;
    targetId?: string;
    eventProductId?: string;
}
export interface RuleRecurrenceSettings {
    repeatFrequency?: number; // int32
    maxNumberOfOccurrences?: number; // int32
}
export interface Schedule {
    sun?: boolean;
    mon?: boolean;
    tue?: boolean;
    wed?: boolean;
    thu?: boolean;
    fri?: boolean;
    sat?: boolean;
    timeRange?: ScheduleTimePair;
}
export interface ScheduleTimePair {
    startTime?: string;
    endTime?: string;
}
export interface SchemaDefinitions {
    name?: string;
    schema?: SchemaObject[];
    parserType?: "JsonParser" | "StringParser" | "LorawanParser";
    options?: SchemaOptions;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface SchemaObject {
    attributePath?: string;
    convertInfo?: ConvertInfo;
    actionType?: "Event" | "Patch" | "CustomId" | "Datetime" | "DeviceName";
    properties?: {
        [name: string]: {
        };
    };
}
export interface SchemaOptions {
    bulk?: BulkOptions;
    properties?: {
        [name: string]: {
        };
    };
}
export interface ServiceCommand {
    id?: string;
    name?: string;
    arguments?: CommandArgument[];
    payload?: string;
    commandResponseType?: "Undefined" | "String" | "Json";
    commandKind?: "Undefined" | "IotHubMethod";
}
export interface ServiceEvent {
    typeCode?: number; // int32
    description?: string;
    name?: string;
    nameResourceKey?: string;
    datatype?: string;
    logicalType?: string;
    displayType?: string;
    valueRange?: ValueRange;
    unit?: string;
    retention?: number; // int32
    iconName?: string;
    iconColor?: string;
    isAccumulated?: boolean;
    subject?: string;
    fieldsCount?: number; // int32
    precision?: number; // int32
    calculationId?: string;
    defaultRollupMethod?: "Sum" | "Avg" | "Min" | "Max" | "Count";
    loggingSettings?: EventLoggingSettings;
    aggregatedEventSettings?: AggregatedEventSettings;
}
export interface ServiceProperty {
    displayName?: string;
    name?: string;
    extra?: string;
    datatype?: "Text" | "Integer" | "Decimal" | "Date" | "Boolean" | "Gps";
    allowedValueRange?: ValueRange;
    defaultValue?: string;
    unit?: string;
    uiType?: "Undefined" | "Button" | "RadioButton" | "TextOneLine" | "TextMultiLine" | "IpV4" | "Number" | "OID" | "Toggle" | "Slider" | "Select";
    required?: boolean;
    icon?: string;
    groupName?: string;
    servicePropertyType?: "Property" | "Setting";
}
export interface Setting {
    name?: string;
    desired?: TwinProperty;
    reported?: TwinProperty;
    lastSync?: string; // date-time
    version?: number; // int32
}
export interface ShareEntities {
    applications?: string[];
    tenants?: string[];
}
export interface Subscriber {
    userId?: string;
    cron?: string;
    appId?: string;
    tenantId?: string;
    timezone?: string;
    lastRunDate?: string; // date-time
    fileType?: string;
    lastResultCount?: number; // int32
    nextRunDate?: string; // date-time
}
export interface Task {
    name: string;
    displayName?: string;
    entity?: string;
    taskToEndpoints?: TaskToEndpoint[];
    roles?: Role[];
    childTasks?: Task[];
    parentTasks?: Task[];
    id?: string;
    appId?: string;
    creationDate?: string; // date-time
}
export interface TaskToEndpoint {
    taskId?: string;
    endpointId?: string;
    uiPermissionType?: number; // int32
    endpoint?: Endpoint;
    task?: Task;
}
export interface Tenant {
    region?: string;
    active?: boolean;
    appId?: string;
    subdomain?: string;
    applications?: Application[];
    logo?: string;
    darkLogo?: string;
    color?: string;
    cultureInfo?: string;
    passwordPolicy?: PasswordPolicy;
    reportPrefix?: string;
    reportColor?: string;
    timezone?: string;
    security?: TenantSecurity;
    additionalProperties?: ServiceProperty[];
    urls?: string[];
    colorDark?: string;
    templateId?: string;
    settings?: TenantSettings;
    ancestors?: AncestorNode[];
    parentId?: string;
    name?: string;
    id?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface TenantSecurity {
    captcha?: CaptchaSettings;
}
export interface TenantSettings {
    tenantLogo?: string;
    tenantDarkLogo?: string;
    color?: string;
    cultureInfo?: string;
    passwordPolicy?: PasswordPolicy;
    reportPrefix?: string;
    reportColor?: string;
    timezone?: string;
    security?: TenantSecurity;
    colorDark?: string;
    favicon?: string;
    loginLogo?: string;
    title?: string;
    cssExternalFile?: string;
    azureADConnect?: boolean;
    inviteEmail?: EmailTemplate;
    resetPasswordEmail?: EmailTemplate;
    forgotPasswordEmail?: EmailTemplate;
    reportEmail?: EmailTemplate;
    splashLogo?: string;
    defaultAppLogo?: string;
    defaultColors?: string[];
    helpCenter?: HelpCenter[];
}
export interface TenantStatisticsRequest {
    FromDatetime?: string; // date-time
    ToDatetime?: string; // date-time
}
export interface TenantStatisticsResponse {
    totalApplications?: number; // int64
    newApplications?: number; // int64
    totalDevices?: number; // int64
    newDevices?: number; // int64
    totalEvents?: number; // int64
    newEvents?: number; // int64
    newData?: number; // int64
    totalData?: number; // int64
    totalUsers?: number; // int64
    newUsers?: number; // int64
    totalSms?: number; // int64
    newSms?: number; // int64
    totalEmails?: number; // int64
    newEmails?: number; // int64
}
export interface TenantTemplate {
    name?: string;
    settings?: TenantSettings;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface TokenRequest {
    token?: string;
}
export interface TooltipElement {
    type?: string;
    value?: string;
}
export interface TreeNode {
    id?: string;
    text?: string;
    type?: "Group" | "Hub" | "Device" | "User" | "Application";
    itemsIds?: string[];
    nodes?: TreeNode[];
    count?: number; // int32
    icon?: string;
}
export interface TwinProperty {
    value?: string;
    properties?: {
        [name: string]: {
        };
    };
}
export interface UserDetails {
    name?: string;
    phoneNumber?: string;
    email?: string;
}
export interface UserEntity {
    email?: string;
    username?: string;
    tenantId?: string;
    role?: string;
    roleId?: string;
    mobilePhone?: string;
    cultureInfo?: string;
    favouriteReports?: string[];
    status?: "Pending" | "Activated" | "Blocked";
    failedLogins?: number; // int32
    isScrubbed?: boolean;
    tokenId?: string;
    profileId?: string;
    externalId?: string;
    id?: string;
    appId?: string;
    createDate?: string; // date-time
    createUser?: string;
    updateDate?: string; // date-time
    updateUser?: string;
}
export interface UserLogin {
    Email?: string;
    Password?: string;
    Url?: string;
}
export interface UserNode {
    id?: string;
    name?: string;
}
export interface ValidateMFALoginTicketRequest {
    ticketId?: string;
    userId?: string;
}
export interface ValueRange {
    minimum?: string;
    maximum?: string;
    precision?: number; // int32
    numericType?: "Int" | "Decimal";
    step?: string;
    allowedValues?: AdditionalProperty[];
    isAllowedValuesNull?: boolean;
    ranges?: Range[];
}
export interface VerifyMultifactorBindingRequest {
    token?: string;
    authenticatorCode?: string;
    bindingCode?: string;
}
export interface VirtualDeviceDTO {
    properties?: VirtualDeviceProperties;
    events?: string;
    productName?: string;
    productId?: string;
    serialNumber?: string;
    location?: Location;
    parentId?: string;
}
export interface VirtualDeviceProperties {
    ConnectionString?: string;
    VendorId?: string;
    VendorName?: string;
    ProductName?: string;
    DeviceId?: string;
}
export interface WeeklySchedule {
    sun?: DailySchedule;
    mon?: DailySchedule;
    tue?: DailySchedule;
    wed?: DailySchedule;
    thu?: DailySchedule;
    fri?: DailySchedule;
    sat?: DailySchedule;
}
export interface Widget {
    layout?: WidgetLayout;
    widget?: string;
    id?: string;
    settings?: {
        [name: string]: {
        };
    };
    style?: {
        [name: string]: {
        };
    };
    profileAccess?: "FullAccess" | "PartialAccess" | "NoAccess";
}
export interface WidgetLayout {
    x?: number; // int32
    y?: number; // int32
    w?: number; // int32
    h?: number; // int32
}
