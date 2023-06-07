class App {
  parentContainer = document.getElementsByClassName('container')[0];
  container = document.createElement('div');
  numbers: number[] = [];
  constructor() {
    this.container.className = 'spiral-container';
    this.parentContainer.appendChild(this.container);
    this.generateArray();
    this.displaySpiralNumbers(this.numbers);
    this.animate();
  }

  /**
   * 表示用配列の生成
   * @memberof App
   */
  generateArray(): void {
    for (let i = 1; i <= 300; i++) {
      this.numbers.push(i);
    }
  }

  /**
   * 配列に入れた数字を螺旋状に配列
   * @param {number[]} numbers
   * @memberof App
   */
  displaySpiralNumbers(numbers: number[]): void {
    let x = 0;
    let y = 0;
    let xStep = 1;
    let yStep = 0;
    let stepsCount = 1;
    let stepPosition = 0;

    // 数字を螺旋状に表示するループ
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];

      // 数字を表示するHTML要素を作成
      const element = document.createElement('div');
      element.className = 'spiral-number';
      element.textContent = String(number);

      // HTML要素の位置を設定
      element.style.left = x * 70 + 'px';
      element.style.top = y * 70 + 'px';

      // HTML要素をコンテナに追加
      this.container.appendChild(element);

      // 次の座標を計算
      x += xStep;
      y += yStep;

      // 歩数を進める
      stepPosition++;

      // 歩数が進んだ回数が現在の歩数と一致した場合、方向転換する
      if (stepPosition === stepsCount) {
        stepPosition = 0;

        // 方向転換
        const temp = xStep;
        xStep = -yStep;
        yStep = temp;

        // 歩数を増やす（偶数回の方向転換ごとに増える）
        if (yStep === 0) {
          stepsCount++;
        }
      }
    }
  }

  /**
   * アニメーション
   * @memberof App
   */
  animate(): void {
    const elem = document.getElementsByClassName('spiral-number');
    let cnt = 0;
    const speed = 50;
    setInterval(() => {
      if (cnt === elem.length) {
        cnt = 0;
      }
      for (let i = 0; i < elem.length; i++) {
        if (i === cnt) {
          elem[i].classList.add('active');
        } else {
          elem[i].classList.remove('active');
        }
      }
      this.setRandomColor();
      cnt++;
    }, speed);
  }

  setRandomColor() {
    const colors = [
      '#ff0000',
      '#ff007f',
      '#ff00ff',
      '#7f00ff',
      '#0000ff',
      '#007fff',
      '#00ffff',
      '#00ff7f',
      '#00ff00',
      '#7fff00',
      '#ffff00',
      '#ff7f00'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);

    const element = document.querySelector(
      '.spiral-number.active'
    ) as HTMLElement;
    if (element) {
      element.style.setProperty('--color', colors[randomIndex]);
    }
  }
}

const app = new App();
