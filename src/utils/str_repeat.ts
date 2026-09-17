export function str_repeat(a: string, b: number): string {
    let repeat = ''

    for (let i = 0; i < b; i++) {
        repeat += a
    }

    return repeat
}

