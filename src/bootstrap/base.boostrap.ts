export default abstract class BootstrapBase {
  abstract initialize(): Promise<boolean | Error >;
}