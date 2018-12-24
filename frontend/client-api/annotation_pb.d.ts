export class Annotation {
  constructor ();
  getLocation(): string;
  setLocation(a: string): void;
  getDescription(): string;
  setDescription(a: string): void;
  getPageX(): number;
  setPageX(a: number): void;
  getPageY(): number;
  setPageY(a: number): void;
  toObject(): Annotation.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Annotation;
}

export namespace Annotation {
  export type AsObject = {
    Location: string;
    Description: string;
    PageX: number;
    PageY: number;
  }
}

