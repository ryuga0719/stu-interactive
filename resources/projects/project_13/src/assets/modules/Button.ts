import guideMp3 from '../media/guide.mp3?url';
export class Mp3Player {
  private button: HTMLElement;
  private audio: HTMLAudioElement;
  private isPlay: boolean;

  constructor() {
    this.audio = new Audio();
    this.button = document.getElementById('button') as HTMLElement;
    this.bind();
    this.isPlay = false;
  }

  private playMp3File() {
    const filePath = guideMp3;
    this.audio.src = filePath;
    if (!this.isPlay) {
      this.audio.play();
      this.isPlay = true;
    } else {
      this.audio.pause();
      this.isPlay = false;
    }
  }

  private bind() {
    this.button.addEventListener('click', () => {
      this.playMp3File();
    });
  }
}
