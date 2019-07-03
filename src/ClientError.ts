interface IErrorMessage {
  message: string,
  url: string,
  statusCode: number;
}

export default class ClientError extends Error {
  public url: string;
  public statusCode: number;

  constructor(data: IErrorMessage) {
      super(data.message);

      this.message = data.message;
      this.url = data.url;
      this.statusCode = data.statusCode;

      // Ensure message is treated as a property of this class when object spreading. Without this,
      // copying the object by using `{...error}` would not include the message.
      Object.defineProperty(this, 'message', {enumerable: true});
  }
}