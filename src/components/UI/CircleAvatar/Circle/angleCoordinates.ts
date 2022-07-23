export default function angleCoordinates (size: number, angle: number): number[] {
    const radius = size / 2;
    angle = angle * (Math.PI / 180)
    let x = Math.sin(angle) * radius
    let y = Math.cos(angle) * radius

    return [x, y]
}