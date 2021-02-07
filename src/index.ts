import { spawn } from 'child_process';

export async function playAudio(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const ls = spawn('ffplay', ['-nodisp', '-autoexit', path]);

    ls.on('error', () => {
      reject();
    });

    ls.on('close', () => {
      resolve();
    });
  });
}
