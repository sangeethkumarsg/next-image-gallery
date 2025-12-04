import * as React from "react";

export type ImageGalleryImageSet = ReadonlyArray<{
    srcSet: string;
    media: string;
}>;

export interface ImageGalleryItem {
    bulletClass?: string | undefined;
    bulletOnClick?({
        item,
        itemIndex,
        currentIndex,
    }: {
        item: ImageGalleryItem;
        itemIndex: number;
        currentIndex: number;
    }): void;
    description?: string | undefined;
    original: string;
    originalHeight?: number | undefined;
    originalWidth?: number | undefined;
    thumbnailHeight?: number | undefined;
    thumbnailWidth?: number | undefined;
    fullscreen?: string | undefined;
    originalAlt?: string | undefined;
    originalTitle?: string | undefined;
    thumbnail?: string | undefined;
    thumbnailAlt?: string | undefined;
    thumbnailLabel?: string | undefined;
    thumbnailTitle?: string | undefined;
    originalClass?: string | undefined;
    thumbnailClass?: string | undefined;
    renderItem?(item: ImageGalleryItem): React.ReactNode;
    renderThumbInner?(item: ImageGalleryItem): React.ReactNode;
    imageSet?: ImageGalleryImageSet | undefined;
    srcSet?: string | undefined;
    sizes?: string | undefined;
    loading?: "lazy" | "eager" | undefined;
    thumbnailLoading?: "lazy" | "eager" | undefined;
}

export interface ImageGalleryProps {
    flickThreshold?: number | undefined;
    items: readonly ImageGalleryItem[];
    showNav?: boolean | undefined;
    autoPlay?: boolean | undefined;
    lazyLoad?: boolean | undefined;
    infinite?: boolean | undefined;
    showIndex?: boolean | undefined;
    showBullets?: boolean | undefined;
    showThumbnails?: boolean | undefined;
    showPlayButton?: boolean | undefined;
    showFullscreenButton?: boolean | undefined;
    disableThumbnailScroll?: boolean | undefined;
    disableKeyDown?: boolean | undefined;
    disableSwipe?: boolean | undefined;
    disableThumbnailSwipe?: boolean | undefined;
    useBrowserFullscreen?: boolean | undefined;
    preventDefaultTouchmoveEvent?: boolean | undefined;
    onErrorImageURL?: string | undefined;
    indexSeparator?: string | undefined;
    thumbnailPosition?: "top" | "right" | "bottom" | "left" | undefined;
    startIndex?: number | undefined;
    slideDuration?: number | undefined;
    slideInterval?: number | undefined;
    slideOnThumbnailOver?: boolean | undefined;
    swipeThreshold?: number | undefined;
    swipingTransitionDuration?: number | undefined;
    swipingThumbnailTransitionDuration?: number | undefined;
    onSlide?: ((currentIndex: number) => void) | undefined;
    onBeforeSlide?: ((currentIndex: number) => void) | undefined;
    onScreenChange?: ((fullScreen: boolean) => void) | undefined;
    onPause?: ((currentIndex: number) => void) | undefined;
    onPlay?: ((currentIndex: number) => void) | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onImageLoad?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onImageError?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onThumbnailError?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onThumbnailClick?: ((event: React.MouseEvent<HTMLAnchorElement>, index: number) => void) | undefined;
    onBulletClick?: ((event: React.MouseEvent<HTMLElement>, index: number) => void) | undefined;
    renderCustomControls?: (() => React.ReactNode) | undefined;
    renderLeftNav?: ((onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => React.ReactNode) | undefined;
    renderRightNav?: ((onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => React.ReactNode) | undefined;
    renderTopNav?: ((onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => React.ReactNode) | undefined;
    renderBottomNav?: ((onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => React.ReactNode) | undefined;
    renderPlayPauseButton?: ((onClick: React.MouseEventHandler<HTMLElement>, isPlaying: boolean) => React.ReactNode) | undefined;
    renderFullscreenButton?: ((onClick: React.MouseEventHandler<HTMLElement>, isFullscreen: boolean) => React.ReactNode) | undefined;
    renderItem?: ((item: ImageGalleryItem) => React.ReactNode) | undefined;
    renderThumbInner?: ((item: ImageGalleryItem) => React.ReactNode) | undefined;
    stopPropagation?: boolean | undefined;
    additionalClass?: string | undefined;
    useTranslate3D?: boolean | undefined;
    isRTL?: boolean | undefined;
    useWindowKeyDown?: boolean | undefined;
    slideVertically?: boolean | undefined;
}

declare class ImageGallery extends React.Component<ImageGalleryProps> {
    play: (shouldCallOnPlay?: boolean) => void;
    pause: (shouldCallOnPause?: boolean) => void;
    fullScreen: () => void;
    exitFullScreen: () => void;
    slideToIndex: (index: number, event?: Event) => void;
    getCurrentIndex: () => number;
}

export default ImageGallery;
