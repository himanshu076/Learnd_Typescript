abstract class TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
  ){}

  abstract getSepia(): void
  getReelTime(): number{
    // some complex calculation
    return 8
  }
}

// can not ceate new class with new keyword of abstract class
// const hc = new TakePhoto("test", "Test")

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ){
    super(cameraMode, filter)
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const hc = new Instagram2("test", "Test", 3)
hc.getReelTime();