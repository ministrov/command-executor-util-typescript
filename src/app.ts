import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor.js';
// import { PromptService } from './core/prompt/prompt.service.js';
import { ConsoleLogger } from './out/console-logger/console-logger.js';

export class App {
  async run() {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
    // const res = await (new PromptService()).input<number>('Число', 'number');
    // console.log(res);
  }
}

const app = new App();
app.run();