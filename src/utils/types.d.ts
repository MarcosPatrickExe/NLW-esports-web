
export interface GameTyped {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        ads: number
    }
}

export interface modalProperties {
    show?: boolean;
    toggleShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}