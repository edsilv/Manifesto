module Manifesto {
    export interface ICanvas extends IManifestResource {
        index: number;
        ranges: IRange[];

        getCanonicalImageUri(width?: number): string;
        getHeight(): number;
        getImages(): IAnnotation[];
        getIndex(): number;
        //getThumbUri(width: number): string;
        getType(): CanvasType;
        getWidth(): number;
    }
}