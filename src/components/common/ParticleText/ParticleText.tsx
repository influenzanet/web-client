import React from 'react';

interface ParticleTextProps {
  text: string;
  fontSize: string;
  fontFillStyle: string;
}

class ParticleText extends React.Component<ParticleTextProps> {
  private pixelStep = 7;
  private alphaThreshold = 127;

  private canvasRef = React.createRef<HTMLCanvasElement>();
  private canvasContext: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private mousePosition = new Vector2(-999999, -999999);

  public componentDidMount() {
    if (this.canvasRef.current) {
      let canvas = this.canvasRef.current;
      this.canvasContext = canvas.getContext("2d");
      let canvasWidth = canvas.clientWidth * window.devicePixelRatio;
      let canvasHeight = canvas.clientHeight * window.devicePixelRatio;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      window.addEventListener("resize", this.onResize);
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("touchstart", this.onTouch);
      window.addEventListener("touchmove", this.onTouch);
      window.addEventListener("touchend", this.onTouchEnd);

      if (this.canvasContext) {
        this.canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

        this.canvasContext.font = "bold " + this.props.fontSize + " sans-serif";
        this.canvasContext.textAlign = "center";
        this.canvasContext.fillStyle = this.props.fontFillStyle;
        this.canvasContext.fillText(this.props.text, canvasWidth / 2, canvasHeight / 2);

        let imageData = this.canvasContext.getImageData(0, 0, canvasWidth, canvasHeight).data;
        this.canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        this.canvasContext.globalCompositeOperation = "source-over";

        for (var x = 0; x < canvasWidth; x += this.pixelStep) {
          for (var y = 0; y < canvasHeight; y += this.pixelStep) {
            let pixelStartIndex = ((x + y * canvasWidth) * 4);
            if (imageData[pixelStartIndex + 3] > this.alphaThreshold) {
              let color = `rgb(${imageData[pixelStartIndex]}, ${imageData[pixelStartIndex + 1]}, ${imageData[pixelStartIndex + 2]})`;
              this.particles.push(new Particle(x, y, color, canvasWidth, canvasHeight, this.canvasContext));
            }
          }
        }

        this.renderFrame();
      }
    }
  }

  private renderFrame = () => {
    if (this.canvasRef && this.canvasRef.current && this.canvasContext) {
      this.canvasContext.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
      this.particles.forEach((particle) => particle.renderFrame(this.mousePosition));
    }

    requestAnimationFrame(this.renderFrame);
  }

  private onResize = () => {
    if (this.canvasContext) {
      let canvas = this.canvasContext.canvas;
      let oldWidth = canvas.width;
      let oldHeight = canvas.height;
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;

      let deltaX = (canvas.width - oldWidth) / 2;
      let deltaY = (canvas.height - oldHeight) / 2;

      this.particles.forEach((particle) => particle.teleport(deltaX, deltaY));
    }
  }

  private onMouseMove = (ev: MouseEvent) => {
    if (this.canvasContext) {
      let rect = this.canvasContext.canvas.getBoundingClientRect();
      this.mousePosition.x = (ev.clientX - rect.left) * window.devicePixelRatio;
      this.mousePosition.y = (ev.clientY - rect.top) * window.devicePixelRatio;
    }
  }

  private onTouch = (ev: TouchEvent) => {
    if (ev.touches.length > 0 && this.canvasContext) {
      let rect = this.canvasContext.canvas.getBoundingClientRect();
      this.mousePosition.x = (ev.touches[0].clientX - rect.left) * window.devicePixelRatio;
      this.mousePosition.y = (ev.touches[0].clientY - rect.top) * window.devicePixelRatio;
      ev.preventDefault();
    }
  }

  private onTouchEnd = (ev: TouchEvent) => {
    this.mousePosition.x = -999999;
    this.mousePosition.y = -999999;
  }

  render() {
    return (
      <canvas ref={this.canvasRef} style={{
        width: "100%",
        height: "100%",
        userSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
      }} />
    );
  }
}

class Particle {
  private radiusVariable = 1;
  private radiusConstant = 3;
  private initialVelocityFactor = 10;
  private frictionFactorVariable = 0.035;
  private frictionFactorConstant = 0.94;
  private accelerationFactor = 1 / 1000;
  private mouseAccelerationFactor = 1 / 300;
  private mouseDistanceThreshold = 40 * window.devicePixelRatio;
  private minimumSpeedThreshold = 0.03;

  private position: Vector2;
  private destination: Vector2;
  private velocity = new Vector2(this.getInitialVelocity(), this.getInitialVelocity());
  private acceleration = new Vector2(0, 0);
  private radius = Math.random() * this.radiusVariable + this.radiusConstant;
  private frictionFactor = Math.random() * this.frictionFactorVariable + this.frictionFactorConstant;
  private color = "rgb(0, 0, 0";

  private canvasContext: CanvasRenderingContext2D;

  constructor(x: number, y: number, color: string, canvasWidth: number, canvasHeight: number, canvasContext: CanvasRenderingContext2D) {
    this.canvasContext = canvasContext;
    this.position = new Vector2(Math.random() * canvasWidth, Math.random() * canvasHeight);
    this.destination = new Vector2(x, y);
    this.color = color;
  }

  public renderFrame(mousePosition: Vector2) {
    this.acceleration.x = (this.destination.x - this.position.x) * this.accelerationFactor;
    this.acceleration.y = (this.destination.y - this.position.y) * this.accelerationFactor;

    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;

    if (this.velocity.x > this.minimumSpeedThreshold) this.velocity.x *= this.frictionFactor;
    if (this.velocity.y > this.minimumSpeedThreshold) this.velocity.y *= this.frictionFactor;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.canvasContext.fillStyle = this.color;
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.position.x, this.position.y, this.radius, Math.PI * 2, 0, false);
    this.canvasContext.fill();

    let a = this.position.x - mousePosition.x;
    let b = this.position.y - mousePosition.y;

    let mouseDistance = Math.sqrt(a * a + b * b);
    if (mouseDistance < this.mouseDistanceThreshold) {
      this.acceleration.x = (this.position.x - mousePosition.x) * this.mouseAccelerationFactor;
      this.acceleration.y = (this.position.y - mousePosition.y) * this.mouseAccelerationFactor;
      this.velocity.x += this.acceleration.x;
      this.velocity.y += this.acceleration.y;
    }
  }

  public teleport(x: number, y: number) {
    this.position.x += x;
    this.position.y += y;
    this.destination.x += x;
    this.destination.y += y;
  }

  private getInitialVelocity(): number {
    return (Math.random() - 0.5) * 2 * this.initialVelocityFactor;
  }
}

class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default ParticleText;
