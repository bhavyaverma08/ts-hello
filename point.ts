export class PointModule {
  constructor(private a?: number, private b?: number) {}
  drawLine() {
    console.log("A: " + this.a + ", B: " + this.b);
  }
}
