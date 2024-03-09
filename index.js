// 获取canvas元素和上下文
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设置canvas尺寸为全屏
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义心形曲线函数
function heartCurve(x) {
  return Math.sin(x);
}

// 渲染爱心特效
function render() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 设置心形曲线的放大倍数
  const scale = 10;

  // 设置心形曲线的颜色
  ctx.fillStyle = '#FF0000';

  // 开始绘制爱心
  ctx.beginPath();

  for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
    const x = scale * (16 * Math.pow(Math.sin(angle), 3));
    const y = -scale * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

    // 根据心形曲线的函数来绘制点
    ctx.lineTo(x + canvas.width / 2, y + canvas.height / 2);
  }

  // 填充心形曲线
  ctx.fill();

  // 结束绘制
  ctx.closePath();

  // 循环渲染
  requestAnimationFrame(render);
}

// 开始渲染
render();
