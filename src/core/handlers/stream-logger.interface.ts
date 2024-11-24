export interface IStreamLogger {
  log(...args: any[]): any;
  error(...args: any[]): any;
  end(): void;
}