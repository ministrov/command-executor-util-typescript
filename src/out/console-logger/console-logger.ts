import { Console } from "console";
import { IStreamLogger } from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
  // To create a Singleton on this realization we need to create:
  private static logger: ConsoleLogger;
  public static getInstance() {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }

    return ConsoleLogger.logger;
  }
  log(...args: any[]) {
    console.log(...args);
  }
  error(...args: any[]) {
    console.log(...args);
  }
  end(): void {
    console.log('Готово!!!');
  }

}