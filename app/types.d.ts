export type Dimension = {
    id: number
    name: string
    width: number
    height: number
}

export type AccessibleDimension = Dimension & {
    href: string
}

export type ImageResponse = {
    id: number
    objectId: string
    dimensions?: AccessibleDimension[]
}
