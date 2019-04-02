/**
 * @file 加速度计
 */
declare namespace my {
  interface IOnAccelerometerChangeEvent {
    x: number;
    y: number;
    z: number;
  }
  /**
   * 监听加速度数据，回调间隔为500ms，接口调用后会自动开始监听，可使用my.offAccelermeterChange()停止监听。
   */
  function onAccelerometerChange(cb: (res: IOnAccelerometerChangeEvent) => void): void;

  /**
   * 停止监听加速度数据。
   */
  function offAccelerometerChange(): void;
}
