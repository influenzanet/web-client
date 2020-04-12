import React, { RefObject } from 'react';

interface ParticleTextProps {
  text: string;
  fontSize: number;
  fontFillStyle: string;
  placeholderRef: RefObject<HTMLDivElement>;
}

class ParticleText extends React.Component<ParticleTextProps> {
  private pixelStep = 7 * window.devicePixelRatio;
  private alphaThreshold = 127;

  private canvasRef = React.createRef<HTMLCanvasElement>();
  private canvasContext: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private mousePosition = new Vector2(-999999, -999999);

  private canvasWidth = 0;
  private canvasHeight = 0;

  private verticalPosition = 0;

  public componentDidMount() {
    if (this.canvasRef.current) {
      let canvas = this.canvasRef.current;
      this.canvasContext = canvas.getContext("2d");
      this.udpdateCanvasDimensions(canvas);

      window.addEventListener("resize", this.onResize);
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("touchstart", this.onTouch);
      window.addEventListener("touchmove", this.onTouch);
      window.addEventListener("pointercancel", this.onTouchEnd);
      window.addEventListener("pointerup", this.onTouchEnd);
      window.addEventListener("touchend", this.onTouchEnd);
      window.addEventListener("touchcancel", this.onTouchEnd);
      window.addEventListener("scroll", this.onScroll);

      if (this.canvasContext) {
        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.canvasContext.font = `bold ${this.props.fontSize * window.devicePixelRatio}em sans-serif`;
        this.canvasContext.textAlign = "center";
        this.canvasContext.fillStyle = this.props.fontFillStyle;
        this.canvasContext.textBaseline = "middle";
        this.canvasContext.fillText(this.props.text, this.canvasWidth / 2, this.canvasHeight / 2);

        let imageData = this.canvasContext.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasContext.globalCompositeOperation = "source-over";

        for (var x = 0; x < this.canvasWidth; x += this.pixelStep) {
          for (var y = 0; y < this.canvasHeight; y += this.pixelStep) {
            let pixelStartIndex = ((x + y * this.canvasWidth) * 4);
            if (imageData[pixelStartIndex + 3] > this.alphaThreshold) {
              let color = `rgb(${imageData[pixelStartIndex]}, ${imageData[pixelStartIndex + 1]}, ${imageData[pixelStartIndex + 2]})`;
              this.particles.push(new Particle(new Vector2(x, y), color, this.canvasWidth, this.canvasHeight, this.canvasContext));
            }
          }
        }

        let canvasRect = this.canvasRef.current.getClientRects()[0];
        this.verticalPosition = canvasRect.y + canvasRect.height / 2;

        this.updateVerticalPosition();

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        this.renderFrame();
      }
    }
  }

  private renderFrame = () => {
    if (this.canvasRef && this.canvasRef.current && this.canvasContext) {
      //this.updateVerticalPosition();
      this.canvasContext.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
      this.particles.forEach((particle) => particle.renderFrame(this.mousePosition));
    }

    requestAnimationFrame(this.renderFrame);
  }

  private onResize = () => {
    if (this.canvasContext) {
      let canvas = this.canvasContext.canvas;
      let oldWidth = canvas.width;
      this.udpdateCanvasDimensions(canvas);

      let deltaX = (canvas.width - oldWidth) / 2;

      this.particles.forEach((particle) => particle.teleport(new Vector2(deltaX, 0)));
    }

    this.updateVerticalPosition();
  }

  private onScroll = () => {
    this.updateVerticalPosition();
  }

  private udpdateCanvasDimensions(canvas: HTMLCanvasElement) {
    this.canvasWidth = canvas.clientWidth * window.devicePixelRatio;
    this.canvasHeight = canvas.clientHeight * window.devicePixelRatio;
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;
  }

  private updateVerticalPosition() {
    let placeholder = this.props.placeholderRef.current;
    if (placeholder) {
      let placeholderRect = placeholder.getClientRects()[0];
      let newVerticalPosition = placeholderRect.y + placeholderRect.height / 2;
      let deltaVerticalPosition = (newVerticalPosition - this.verticalPosition) * window.devicePixelRatio;
      this.particles.forEach(particle => {
        particle.teleport(new Vector2(0, deltaVerticalPosition));
      });
      this.verticalPosition = newVerticalPosition;
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

  private onTouchEnd = (_: Event) => {
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
  private radiusVariable = 1 * window.devicePixelRatio;
  private radiusConstant = 3 * window.devicePixelRatio;
  private initialVelocityFactor = 10 * window.devicePixelRatio;
  private frictionFactorVariable = 0.035;
  private frictionFactorConstant = 0.94;
  private accelerationFactor = (1 / 1000);
  private mouseAccelerationFactor = (1 / 300);
  private mouseDistanceThreshold = 40 * window.devicePixelRatio;
  private minimumSpeedThreshold = (0.03) * window.devicePixelRatio;

  private position: Vector2;
  private destination: Vector2;
  private velocity = new Vector2(this.getInitialVelocity(), this.getInitialVelocity());
  private acceleration = new Vector2(0, 0);
  private radius = Math.random() * this.radiusVariable + this.radiusConstant;
  private frictionFactor = Math.random() * this.frictionFactorVariable + this.frictionFactorConstant;
  private color = "rgb(0, 0, 0";

  private canvasContext: CanvasRenderingContext2D;

  constructor(destination: Vector2, color: string, canvasWidth: number, canvasHeight: number, canvasContext: CanvasRenderingContext2D) {
    this.canvasContext = canvasContext;
    this.position = new Vector2(Math.random() * canvasWidth, Math.random() * canvasHeight);
    this.destination = destination;
    this.color = color;
  }

  public renderFrame(mousePosition: Vector2) {
    this.acceleration = this.destination.subtract(this.position).scale(this.accelerationFactor);
    this.velocity = this.velocity.add(this.acceleration);
    if (this.velocity.length > this.minimumSpeedThreshold) this.velocity = this.velocity.scale(this.frictionFactor);
    this.position = this.position.add(this.velocity);

    this.canvasContext.fillStyle = this.color;
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.position.x, this.position.y, this.radius, Math.PI * 2, 0, false);
    this.canvasContext.fill();

    let mouseDistance = this.position.subtract(mousePosition).length;
    if (mouseDistance < this.mouseDistanceThreshold) {
      this.acceleration = this.position.subtract(mousePosition).scale(this.mouseAccelerationFactor);
      this.velocity = this.velocity.add(this.acceleration);
    }
  }

  public teleport(deltaVector: Vector2) {
    this.position = this.position.add(deltaVector);
    this.destination = this.destination.add(deltaVector);
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

  public get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public add(vector: Vector2): Vector2 {
    return new Vector2(this.x + vector.x, this.y + vector.y);
  }

  public subtract(vector: Vector2): Vector2 {
    return new Vector2(this.x - vector.x, this.y - vector.y);
  }

  public scale(factor: number): Vector2 {
    return new Vector2(this.x * factor, this.y * factor);
  }

  public distanceTo(vector: Vector2): number {
    return this.subtract(vector).length;
  }
}

export default ParticleText;
